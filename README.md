# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20JavaScript%20%7C%20Node.js-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

Anisa HQ is a virtual operations workspace and simulation environment designed for autonomous AI agent collaboration. It combines an interactive browser-based office dashboard with automated background bots and agent operating guidelines.

---

## Project Overview

The repository provides an operational command center for visualizing and coordinating autonomous agents:

- **Interactive Office Spaces**: Visual workspace models (`Офис агентов.html`, `Anisa-HQ/index.html`) demonstrating agent presence, room assignments, and workflow routing.
- **Agent Bot Service**: A dedicated Node.js-based bot runtime located in `Anisa-HQ/bot`.
- **Operational Specifications**: Documented agent responsibilities, operational procedures, and communication rules (`Офис агентов.md`).
- **Prototypes & Archive**: Evolutionary interface prototypes tracking room layouts, chat mechanisms, and skins (`Anisa-HQ/archive/`).

---

## Technology Stack

- **Frontend Interface**: Pure HTML5, CSS3, and Vanilla JavaScript (zero build step required for browser views).
- **Bot Runtime**: Node.js and npm packages configured under `Anisa-HQ/bot`.
- **Automation & CI**: GitHub Actions workflow automation in `.github/workflows`.

---

## Repository Structure

```text
Anisa-HQ/
├── .github/
│   └── workflows/              # GitHub Actions maintenance and CI routines
├── Anisa-HQ/
│   ├── archive/                # Prototype iterations (chat, top-down layouts, skins)
│   │   ├── chat-prototype.html
│   │   ├── office-v3-rooms-and-flow.html
│   │   ├── office-v5-topdown.html
│   │   └── office-v6-skins.html
│   ├── bot/                    # Node.js bot service
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── start.bat
│   ├── index.html              # Main web portal
│   └── push.bat                # Automation script
├── Офис агентов.html           # Standalone interactive office dashboard
├── Офис агентов.md             # Role specifications and operating procedures
├── LICENSE                     # Project license
└── README.md                   # Repository documentation
```

---

## Prerequisites

- **Web Browser**: Any modern browser (Chrome, Firefox, Safari, Edge) for viewing HTML workspaces.
- **Node.js**: Version 18.x or newer (required for running the bot service).
- **npm**: Version 9.x or newer.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Setup Bot Dependencies** (optional, required only for bot services):
   ```bash
   cd Anisa-HQ/bot
   npm install
   cd ../..
   ```

---

## Running the Application

### 1. Launch Interactive Office Dashboard

You can open `Офис агентов.html` or `Anisa-HQ/index.html` directly in your browser, or serve it via a lightweight local HTTP server:

```bash
# Using npx serve
npx serve .

# Or using Python built-in HTTP server
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### 2. Launch the Bot Service

```bash
cd Anisa-HQ/bot
node src/index.js
```

*(On Windows, `start.bat` within `Anisa-HQ/bot` is also available for fast launching).* 

---

## Contribution Guidelines

1. Fork the repository and create a feature branch (`git checkout -b feature/new-component`).
2. Maintain standalone execution for frontend files without introducing unnecessary external dependencies.
3. Validate any Node.js bot modifications with standard linting and syntax checks before submitting PRs.
4. Ensure commit messages follow the Conventional Commits specification.

---

## License

Distributed under the project terms defined in [LICENSE](LICENSE).