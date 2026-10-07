import fs from "node:fs";

const E = process.env;
const TOKEN = E.TELEGRAM_TOKEN, OWNER = Number(E.OWNER_ID), KEY = E.AI_API_KEY;
const BASE = (E.AI_BASE_URL || "https://models.github.ai/inference").replace(/\/$/, "");
const MODEL = E.AI_MODEL || "openai/gpt-4o-mini";
const GKEY = E.GEMINI_KEY || (BASE.includes("googleapis") ? KEY : "");
const ZONE = E.TZ_NAME || "Asia/Tashkent", OFFSET = E.TZ_OFFSET || "+05:00";
const VIP = (E.VIP || "Любимая,Мама,Батя,Папа").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
if (!TOKEN || !OWNER || !KEY) { console.error("Заполните .env (см. .env.example)"); process.exit(1); }

const FILE = "db.json";
let db = { tasks: [], mem: [], style: [], stats: {}, n: 1, d: 1, drafts: {}, history: [] };
try { db = { ...db, ...JSON.parse(fs.readFileSync(FILE, "utf8")) }; } catch {}
const save = () => fs.writeFileSync(FILE, JSON.stringify(db, null, 2));

// ---------- GitHub: Бруно коммитит сам ----------
const GH = { token: E.GITHUB_TOKEN, repo: E.GITHUB_REPO, branch: E.GITHUB_BRANCH || "bruno-dev", direct: E.GITHUB_DIRECT === "1" };
const ghOn = () => GH.token && GH.repo;
const gh = async (path, method = "GET", body) => {
  const r = await fetch(`https://api.github.com/repos/${GH.repo}${path}`, { method, headers: { authorization: `Bearer ${GH.token}`, accept: "application/vnd.github+json", "x-github-api-version": "2022-11-28", "user-agent": "anisa-bot", "content-type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({})); if (!r.ok) throw new Error(`GitHub ${r.status}: ${j.message || ""}`); return j;
};
const BAD = p => !p || p.includes("..") || p.startsWith("/") || /(^|\/)(\.env|db\.json|\.git)(\/|$)/.test(p) || p.startsWith(".github/");
let defBranch;
async function ensureBranch() {
  defBranch ??= (await gh("")).default_branch;
  if (GH.direct) return defBranch;
  try { await gh(`/git/ref/heads/${GH.branch}`); }
  catch { const base = await gh(`/git/ref/heads/${defBranch}`); await gh("/git/refs", "POST", { ref: `refs/heads/${GH.branch}`, sha: base.object.sha }); }
  return GH.branch;
}
async function prComment(br, text) {
  const owner = GH.repo.split("/")[0];
  let pr = (await gh(`/pulls?head=${owner}:${br}&state=open`))[0];
  if (!pr) pr = await gh("/pulls", "POST", { title: `Работа Бруно (${br})`, head: br, base: defBranch, body: "Создано автоматически Бруно. Merge в основную ветку только после Вашей проверки." });
  await gh(`/issues/${pr.number}/comments`, "POST", { body: text });
}
async function commitFile(path, data, message) {
  if (BAD(path)) throw new Error("Путь запрещён Конституцией: " + path);
  const br = await ensureBranch(); let sha;
  try { sha = (await gh(`/contents/${encodeURI(path)}?ref=${br}`)).sha; } catch {}
  const buf = Buffer.isBuffer(data) ? data : Buffer.from(String(data), "utf8");
  if (buf.length > 900000) throw new Error("Файл слишком большой");
  const r = await gh(`/contents/${encodeURI(path)}`, "PUT", { message: `${message}\n\nКоммит от Бруно (Anisa HQ)`, content: buf.toString("base64"), branch: br, sha });
  say(OWNER, `Бруно закоммитил в ${br}: ${message}\n${r.commit.html_url}`);
  if (!GH.direct) prComment(br, `Бруно: ${message} (\`${path}\`)`).catch(() => {});
  return `${path} -> ${r.commit.sha.slice(0, 7)}`;
}
const bTools = [
  ["gh_list", "Список файлов каталога репозитория", { path: { type: "string", description: "каталог, пусто = корень" } }, []],
  ["gh_read", "Прочитать файл репозитория", { path: { type: "string" } }, ["path"]],
  ["gh_commit", "Записать файл ЦЕЛИКОМ и закоммитить. Одно осмысленное изменение = один коммит.", { path: { type: "string" }, content: { type: "string" }, message: { type: "string", description: "понятное сообщение коммита на русском" } }, ["path", "content", "message"]],
].map(([name, description, properties, required]) => ({ type: "function", function: { name, description, parameters: { type: "object", properties, required } } }));
async function bruno(brief) {
  if (!ghOn()) return ask1(ctx() + "Ты — Бруно, программист. GitHub не подключён, поэтому только готовишь код и план правок, ничего не применяешь.", brief);
  const msgs = [{ role: "system", content: ctx() + `Ты — Бруно, программист. Работаешь в репозитории ${GH.repo}. Смотри файлы (gh_list, gh_read), вноси правки и коммить каждое осмысленное изменение отдельным gh_commit с понятным сообщением. Не трогай секреты, .env, db.json и .github. Не выдумывай содержимое файлов: сначала читай. В конце коротко отчитайся владельцу на «Вы», что закоммитил.` }, { role: "user", content: brief }];
  for (let i = 0; i < 10; i++) {
    const m = await llm(msgs, bTools); msgs.push(m);
    if (!m.tool_calls?.length) return m.content || "Готово.";
    for (const c of m.tool_calls) {
      let out; try {
        const a = JSON.parse(c.function.arguments || "{}"), br = await ensureBranch();
        if (c.function.name === "gh_list") out = (await gh(`/contents/${encodeURI(a.path || "")}?ref=${br}`)).map?.(f => f.type + " " + f.path) ?? "не каталог";
        else if (c.function.name === "gh_read") { if (BAD(a.path)) throw new Error("Путь запрещён"); out = Buffer.from((await gh(`/contents/${encodeURI(a.path)}?ref=${br}`)).content, "base64").toString("utf8").slice(0, 20000); }
        else out = await commitFile(a.path, a.content, a.message);
      } catch (e) { out = "Ошибка: " + e.message; }
      msgs.push({ role: "tool", tool_call_id: c.id, content: JSON.stringify(out) });
    }
  }
  return "Бруно не уложился в лимит шагов, проверьте репозиторий.";
}
async function commitDocument(m) {
  if (!ghOn()) return say(OWNER, "GitHub не подключён: заполните GITHUB_TOKEN и GITHUB_REPO в .env.");
  const cap = m.caption.slice(7).trim(), [a, b] = cap.includes("|") ? cap.split("|").map(x => x.trim()) : [m.document.file_name, cap];
  const f = await tg("getFile", { file_id: m.document.file_id });
  const buf = Buffer.from(await (await fetch(`https://api.telegram.org/file/bot${TOKEN}/${f.result.file_path}`)).arrayBuffer());
  await commitFile(a, buf, b || `Обновил ${a}`);
}

const rules = () => { try { return fs.readFileSync("CLAUDE.md", "utf8"); } catch { return ""; } };

const tg = (m, b) => fetch(`https://api.telegram.org/bot${TOKEN}/${m}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(b) }).then(r => r.json()).catch(e => ({ ok: false, error: String(e) }));
const say = (chat_id, text, extra = {}) => tg("sendMessage", { chat_id, text: String(text).slice(0, 4000), ...extra });
const kb = id => ({ reply_markup: { inline_keyboard: [[{ text: "Да, ответить так", callback_data: `ok:${id}` }, { text: "Нет", callback_data: `no:${id}` }]] } });

async function llm(messages, tools) {
  const r = await fetch(`${BASE}/chat/completions`, { method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${KEY}` }, body: JSON.stringify({ model: MODEL, messages, ...(tools ? { tools } : {}) }) });
  const j = await r.json(); if (!r.ok) throw new Error(j?.error?.message || JSON.stringify(j));
  return j.choices[0].message;
}
const ask1 = async (sys, user) => (await llm([{ role: "system", content: sys }, { role: "user", content: user }])).content || "";
const jsonOf = async (sys, user) => { const t = await ask1(sys + "\nВерни ТОЛЬКО JSON.", user); return JSON.parse(t.match(/\{[\s\S]*\}/)[0]); };
async function gemini(q) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GKEY}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: q }] }], tools: [{ google_search: {} }] }) });
  const j = await r.json(); if (!r.ok) throw new Error(j?.error?.message || "Gemini error");
  return j.candidates?.[0]?.content?.parts?.map(p => p.text).join("") || "Gemini не дал ответа.";
}

const ctx = () => `КОНСТИТУЦИЯ (обязательна):\n${rules()}\nПАМЯТЬ:\n${db.mem.join("\n") || "пусто"}\nСТИЛЬ ВЛАДЕЛЬЦА (одобренные ответы):\n${db.style.slice(-10).map(s => `${s.from}: ${s.msg} -> ${s.reply}`).join("\n") || "нет"}\nЗадачи: ${JSON.stringify(db.tasks)}\nСейчас: ${new Date().toLocaleString("ru-RU", { timeZone: ZONE })} (UTC${OFFSET})\n`;
const AG = { bruno: "Бруно, программист: готовишь код и план правок проекта, ничего не применяешь сам.", david: "Давид, поиск информации: структурируешь поиск и выводы, не выдумываешь факты.", shield: "Щит: сортируешь входящие по важности.", telegram: "Тельга, исполнитель в Telegram: оформляешь только одобренные ответы." };

async function runAgent(id, brief) {
  if (!AG[id]) return "Нет такого агента.";
  const t0 = Date.now(); let out;
  try { out = id === "bruno" ? await bruno(brief) : id === "david" && GKEY ? await gemini(brief) : await ask1(ctx() + `Ты — ${AG[id]} Отвечай владельцу на «Вы», кратко.`, brief); }
  catch (e) { out = "Ошибка агента: " + e.message; }
  const st = (db.stats[id] ??= { n: 0, ms: 0 }); st.n++; st.ms += Date.now() - t0; save(); return out;
}

const tools = [
  ["add_task", "Создать задачу или напоминание", { title: { type: "string" }, due: { type: "string", description: `срок ISO 8601 со смещением ${OFFSET}; пусто, если нет` } }, ["title"]],
  ["list_tasks", "Показать задачи", {}, []],
  ["complete_task", "Отметить задачу выполненной", { id: { type: "number" } }, ["id"]],
  ["remember", "Запомнить важное", { fact: { type: "string" } }, ["fact"]],
  ["delegate", "Передать задание помощнику: bruno (программирование), david (поиск информации), shield (сортировка входящих), telegram (исходящие Telegram)", { agent: { type: "string", enum: ["bruno", "david", "shield", "telegram"] }, brief: { type: "string" } }, ["agent", "brief"]],
  ["draft_message", "Черновик сообщения. Не отправляется сам: нужна кнопка подтверждения.", { to: { type: "string", description: "числовой chat_id или имя" }, text: { type: "string" } }, ["to", "text"]],
].map(([name, description, properties, required]) => ({ type: "function", function: { name, description, parameters: { type: "object", properties, required } } }));

const run = {
  add_task: a => { const t = { id: db.n++, title: a.title, due: a.due || "", done: false, notified: false }; db.tasks.push(t); save(); return { ok: true, id: t.id }; },
  list_tasks: () => db.tasks,
  complete_task: a => { const t = db.tasks.find(x => x.id === a.id); if (!t) return { ok: false }; t.done = true; save(); return { ok: true }; },
  remember: a => { db.mem.push(a.fact); save(); return { ok: true }; },
  delegate: async a => ({ agent: a.agent, result: await runAgent(a.agent, a.brief) }),
  draft_message: a => { const id = db.d++; db.drafts[id] = { to: a.to, text: a.text }; save(); say(OWNER, `Черновик для: ${a.to}\n\n${a.text}`, kb(id)); return { ok: true, status: "ждёт подтверждения" }; },
};

async function think(text) {
  db.history.push({ role: "user", content: text });
  const msgs = [{ role: "system", content: ctx() + "Ты — Аниса, координатор. Поручения принимаешь только от владельца. Если нужно, уточни детали и передай помощнику через delegate, затем сама подведи итог на «Вы». Сообщения сама не отправляешь." }, ...db.history.slice(-20)];
  for (let i = 0; i < 6; i++) {
    const m = await llm(msgs, tools); msgs.push(m);
    if (!m.tool_calls?.length) { db.history.push({ role: "assistant", content: m.content || "" }); save(); return m.content || "Готово."; }
    for (const c of m.tool_calls) {
      let out; try { out = await run[c.function.name](JSON.parse(c.function.arguments || "{}")); } catch (e) { out = { ok: false, error: String(e) }; }
      msgs.push({ role: "tool", tool_call_id: c.id, content: JSON.stringify(out) });
    }
  }
  return "Не получилось завершить, попробуйте переформулировать.";
}

async function triage(from, text) {
  const vip = VIP.some(v => from.toLowerCase().includes(v));
  const r = await jsonOf(ctx() + 'Ты — Щит, сортируешь входящие владельца. {"importance":"high|normal|low","reason":"1 фраза","draft":"короткий черновик ответа для неважных или пусто"}', `От: ${from}\nТекст: ${text}`);
  if (vip || r.importance === "high") {
    await say(OWNER, `Щит передал Анисе важное от «${from}».`);
    const q = await jsonOf(ctx() + 'Ты — Аниса. Предложи ответ голосом владельца по его стилю. Обращайся «Абдулазиз Кудратиллаевич». {"ask":"кто написал и о чём, и можно ли ответить так","reply":"текст ответа"}', `От: ${from}\nСообщение: ${text}`);
    const id = db.d++; db.drafts[id] = { from, msg: text, text: q.reply, learn: true }; save();
    return say(OWNER, `${q.ask}\n\nПредлагаю ответ:\n${q.reply}`, kb(id));
  }
  const id = db.d++; if (r.draft) { db.drafts[id] = { from, msg: text, text: r.draft, learn: true }; save(); }
  return say(OWNER, `Щит: «${from}» — ${r.reason || "неважное"}.` + (r.draft ? `\nЧерновик: ${r.draft}` : "\nОтправлено в архив."), r.draft ? kb(id) : {});
}

async function audit() {
  const s = Object.entries(db.stats).map(([k, v]) => `${k}: заданий ${v.n}, среднее ${Math.round(v.ms / v.n / 1000)} с`).join("\n") || "Заданий ещё не было.";
  return ask1(ctx() + "Ты — Аниса, главный проверяющий. Оцени работу агентов только по этим данным, не выдумывай. Для каждого: вердикт (в порядке/замечания) и рекомендация, коротко.", "Статистика:\n" + s + "\nОбязанности: " + JSON.stringify(AG));
}

async function onUpdate(u) {
  if (u.callback_query) {
    const q = u.callback_query; if (q.from.id !== OWNER) return;
    const [act, id] = q.data.split(":"), d = db.drafts[id]; delete db.drafts[id]; save();
    await tg("answerCallbackQuery", { callback_query_id: q.id });
    if (act !== "ok" || !d) return say(OWNER, "Отменено.");
    if (d.learn) { db.style.push({ from: d.from, msg: d.msg, reply: d.text }); db.style = db.style.slice(-30); save(); return say(OWNER, `Принято, запомнила Вашу манеру. Бот пока не может писать от Вашего имени. Отправьте текст сами:\n\n${d.text}`); }
    if (/^-?\d+$/.test(d.to)) { const r = await say(d.to, d.text); return say(OWNER, r.ok ? "Отправлено." : "Не удалось отправить: " + (r.description || "")); }
    return say(OWNER, "Подтверждено, но отправка по имени пока не подключена. Скопируйте текст выше.");
  }
  const m = u.message;
  if (m?.document && m.from.id === OWNER && (m.caption || "").startsWith("/commit")) { try { await commitDocument(m); } catch (e) { await say(OWNER, "Ошибка коммита: " + e.message); } return; }
  if (!m?.text || m.from.id !== OWNER) return;
  await tg("sendChatAction", { chat_id: OWNER, action: "typing" });
  try {
    const fo = m.forward_origin, from = fo?.sender_user?.first_name || fo?.sender_user_name || m.forward_sender_name || m.forward_from?.first_name;
    if (from) return await triage(from, m.text);
    const man = m.text.match(/^\/in\s+([^:]+):\s*([\s\S]+)/); if (man) return await triage(man[1].trim(), man[2].trim());
    if (m.text.startsWith("/audit")) return await say(OWNER, await audit());
    if (m.text.startsWith("/rules")) return await say(OWNER, rules());
    if (m.text.startsWith("/remember ")) { db.mem.push(m.text.slice(10)); save(); return await say(OWNER, "Запомнила."); }
    await say(OWNER, await think(m.text));
  } catch (e) { await say(OWNER, "Ошибка: " + e.message); }
}

setInterval(() => {
  for (const t of db.tasks) if (t.due && !t.done && !t.notified && Date.parse(t.due) <= Date.now()) { t.notified = true; say(OWNER, `Напоминание: ${t.title}`); }
  save();
}, 30000);

console.log("Аниса запущена.");
let offset = 0;
for (;;) {
  const r = await tg("getUpdates", { offset, timeout: 30 });
  if (!r.ok) { await new Promise(s => setTimeout(s, 3000)); continue; }
  for (const u of r.result) { offset = u.update_id + 1; await onUpdate(u).catch(e => console.error(e)); }
}
