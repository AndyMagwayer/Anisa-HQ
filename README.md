# ◈ ANISA Agents Office (HQ)

> Digital headquarters concept and interactive visualization prototypes for a structured multi-agent AI organization.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![HTML5](https://img.shields.io/badge/HTML5-Interactive_Office-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 🌐 Project Overview

**ANISA HQ** explores a spatial, multi-agent operations model where artificial intelligence roles interact within a coordinated virtual office structure. Rather than relying on a single monolithic conversational prompt, the system breaks work down across specialized operational personas coordinated by a Chief Coordinator.

This repository contains:
- **Interactive Visualizers**: Standalone HTML5/Canvas/DOM spatial prototypes modeling agent workstations, department rooms, and task flows.
- **Orchestration Bot**: A Node.js companion service (`Anisa-HQ/bot/`) that serves as the execution runtime for agent messaging and task delegation.
- **Architecture & Specifications**: Detailed operational specifications and role definitions documented in English and Russian (`Офис агентов.md`).

```text
                        ┌────────────────────┐
                        │       USER         │
                        └─────────┬──────────┘
                                  │
                                  ▼
                        ┌────────────────────┐
                        │       ANISA        │
                        │    AI Assistant    │
                        └─────────┬──────────┘
                                  │
                                  ▼
                   ┌──────────────────────────────┐
                   │      CHIEF COORDINATOR       │
                   │ Task Decomposition & Routing │
                   └──────────────┬───────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              ▼                   ▼                   ▼
       ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
       │ Engineering │     │  Research   │     │ Operations  │
       │   (Atlas)   │     │   (Iris)    │     │   (Orion)   │
       └──────┬──────┘     └──────┬──────┘     └──────┬──────┘
              │                   │                   │
              └───────────────────┼───────────────────┘
                                  ▼
                        ┌────────────────────┐
                        │  EXECUTION / TOOLS │
                        │ APIs, Git, Docs    │
                        └────────────────────┘
```

---

## 🤖 Defined Agent Roles

The organizational paradigm decomposes workloads into distinct functional roles:

| Agent / Role | Focus Area | Responsibilities |
|---|---|---|
| **Chief Coordinator** | Management & Oversight | Goal decomposition, assignment distribution, progress monitoring, and output review. |
| **⚡ Atlas** | Engineering & Systems | Backend logic, code architecture, integrations, and build reliability. |
| **🎨 Nova** | UI & Product Experience | Visual layouts, user-facing interfaces, styling systems, and UX flows. |
| **🔎 Iris** | Research & Intelligence | Information retrieval, contextual analysis, and source verification. |
| **⚙️ Orion** | Operations & Automation | Task tracking, execution triggers, pipelines, and state transitions. |
| **📚 Vega** | Knowledge Management | Technical specifications, team memory, and project documentation. |

---

## ✨ Features

- **Spatial Virtual Office Visualizer**: Top-down interactive interface (`Anisa-HQ/index.html` and `Офис агентов.html`) representing agents within dedicated room workspaces.
- **Iterative Prototype Archive**: Historical prototypes showing evolution across chat interfaces, room flow concepts, top-down layouts, and skin themes (`Anisa-HQ/archive/`).
- **Node.js Bot Runtime**: Companion bot runtime with entry point at `Anisa-HQ/bot/src/index.js` and automated start scripts (`Anisa-HQ/bot/start.bat`).
- **Bilingual Documentation**: Architectural breakdown available in both English and Russian (`Офис агентов.md`).
- **Zero External Dependencies for UI**: All frontend office visualizations run directly in any standard browser without bundling or build pipelines.

---

## 🛠️ Technology Stack

- **Frontend / Prototyping**: HTML5, CSS3, Vanilla JavaScript (DOM & Canvas manipulation)
- **Bot Runtime**: Node.js (v18+), CommonJS / ES6 modules
- **Workflows & Automation**: Windows Batch scripts (`start.bat`, `push.bat`), GitHub Actions (`.github/workflows/`)

---

## 📂 Repository Structure

```text
.github/
└── workflows/                       # Automation workflows
    └── daily-maintenance.yml
Anisa-HQ/
├── bot/                             # Node.js orchestration bot
│   ├── src/
│   │   └── index.js                 # Bot entry point
│   ├── package.json                 # Bot package manifest
│   ├── start.bat                    # Windows startup script
│   ├── CLAUDE.md                    # Bot guidelines
│   └── README.md                    # Bot documentation
├── archive/                         # Visualizer iteration prototypes
│   ├── chat-prototype.html          # Chat-focused agent interface
│   ├── office-v3-rooms-and-flow.html# Multi-room workflow mockup
│   ├── office-v5-topdown.html       # 2D top-down office visualizer
│   └── office-v6-skins.html         # Themed office layout variants
├── index.html                       # Primary interactive office visualization
├── push.bat                         # Quick sync script
└── README.md                        # Submodule overview
Офис агентов.html                    # Localized Russian office interface
Офис агентов.md                      # Detailed operational specification (RU)
LICENSE                              # MIT License
README.md                            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge).
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher) and `npm` for the companion bot service.

### 1. Running the Interactive Visualizers

Because the visualization interfaces are vanilla HTML, CSS, and JavaScript, no build process is required:

#### Direct Open
Open `Anisa-HQ/index.html` or `Офис агентов.html` directly in your web browser.

#### Local Development Server
To run with a local HTTP server:

```bash
# Using Python 3 built-in HTTP server
python -m http.server 8000

# Or using Node.js npx
npx serve .
```

Navigate to `http://localhost:8000/Anisa-HQ/index.html` or `http://localhost:8000/Офис агентов.html`.

### 2. Running the Companion Bot Service

To install and start the bot service located under `Anisa-HQ/bot`:

```bash
# 1. Navigate to the bot directory
cd Anisa-HQ/bot

# 2. Install dependencies
npm install

# 3. Start the bot service
npm start
```

On Windows systems, you can also execute `start.bat` directly from the `Anisa-HQ/bot/` directory.

---

## 🔄 Task Lifecycle Protocol

Tasks delegated by the Chief Coordinator follow a deterministic lifecycle:

```text
[ CREATED ] ──► [ PLANNED ] ──► [ ASSIGNED ] ──► [ IN PROGRESS ] ──► [ REVIEW ] ──► [ COMPLETED ]
                                                                          │
                                                                          └──► [ BLOCKED / REVISE ]
```

1. **Created**: High-level goal received from the user.
2. **Planned**: Work decomposed into actionable sub-tasks with defined dependencies.
3. **Assigned**: Routed to the appropriate agent (Atlas, Nova, Iris, Orion, or Vega).
4. **In Progress**: Active execution using designated tools or reasoning steps.
5. **Review**: Validation against specification criteria by the Chief Coordinator.
6. **Completed**: Final integration and delivery to user.

---

## 🤝 Contributing

Contributions, improvements, and architectural suggestions are welcome:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/agent-enhancement`).
3. Commit your changes with clear, descriptive commit messages.
4. Push to the branch (`git push origin feature/agent-enhancement`).
5. Open a Pull Request with a clear description of the modifications.

---

## 📄 License

This project is distributed under the terms of the [MIT License](LICENSE).