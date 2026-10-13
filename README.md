<div align="center">

# ◈ ANISA agents office

### AI OPERATIONS HEADQUARTERS

**A digital headquarters where AI agents think, collaborate, execute, and operate as a structured organization.**

<br>

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![HTML5](https://img.shields.io/badge/HTML5-Interactive_Office-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

</div>

---

## 🌐 Overview

**ANISA HQ** explores a multi-agent digital operations environment where specialized artificial intelligence roles interact within a coordinated structure. Rather than acting as a singular unstructured conversational model, the project defines specialized operational personas (Atlas, Nova, Iris, Orion, Vega) led by a Chief Coordinator.

This repository houses the conceptual specifications, spatial browser-based visualization prototypes for virtual office environments, and the companion Node.js orchestration bot service.

```text
                         ┌───────────────────┐
                         │       USER        │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      ANISA        │
                         │   AI Assistant    │
                         └─────────┬─────────┘
                                   │
                                   ▼
                    ┌──────────────────────────┐
                    │    CHIEF COORDINATOR     │
                    │   Planning & Delegation  │
                    └────────────┬─────────────┘
                                 │
               ┌─────────────────┼─────────────────┐
               ▼                 ▼                 ▼
        ┌────────────┐    ┌────────────┐    ┌────────────┐
        │ Engineering│    │  Research  │    │ Operations │
        │   Agents   │    │   Agents   │    │   Agents   │
        └──────┬─────┘    └──────┬─────┘    └──────┬─────┘
               │                 │                 │
               └─────────────────┼─────────────────┘
                                 ▼
                       ┌───────────────────┐
                       │       TOOLS       │
                       │ External APIs /   │
                       │ Automation / Web  │
                       └───────────────────┘
```

---

## 🤖 AI Organization Roles

- **Chief Coordinator (`ai-operations-manager-chief-coordinator`)**: Decomposes user goals, prepares execution plans, delegates to specialized agents, monitors progress, and handles reviews.
- **⚡ Atlas (Engineering)**: Backend logic, architecture design, API integrations, and code reliability.
- **🎨 Nova (Product & Interface)**: UI/UX implementation, user-facing views, and design system alignment.
- **🔎 Iris (Research & Intelligence)**: Information retrieval, competitive analysis, and source verification.
- **⚙️ Orion (Operations & Execution)**: Workflow tracking, operational triggers, and automated execution.
- **📚 Vega (Knowledge & Documentation)**: Technical specifications, organizational logs, and knowledge management.

---

## 📂 Repository Structure

```text
.github/
└── workflows/             # CI and repository workflows
Anisa-HQ/
├── bot/                   # Node.js orchestration bot service
│   ├── src/
│   │   └── index.js       # Bot application entrypoint
│   ├── package.json       # Node.js dependencies and scripts
│   ├── start.bat          # Windows batch runner for bot
│   ├── CLAUDE.md          # Bot developer guidelines
│   └── README.md          # Bot service documentation
├── archive/               # Historical office visualization prototypes
│   ├── chat-prototype.html
│   ├── office-v3-rooms-and-flow.html
│   ├── office-v5-topdown.html
│   └── office-v6-skins.html
├── index.html             # Primary interactive office visualization
├── push.bat               # Repository management script
└── README.md              # HQ submodule documentation
Офис агентов.html          # Russian localized office visualization prototype
Офис агентов.md            # Detailed Russian agent office specification
LICENSE                    # Repository license
README.md                  # Main repository documentation
```

---

## 🛠️ Technology Stack

- **Bot Engine**: Node.js (v18+ recommended), JavaScript (CommonJS/ES6+)
- **Interactive Office Interfaces**: HTML5, CSS3, Vanilla JavaScript (Canvas / DOM manipulation, top-down spatial layouts)
- **Specification & Design**: Markdown documentation and interactive prototypes

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Node.js](https://nodejs.org/) (version 18.x or later) and `npm` (for the bot service)

### 1. Running the Interactive Office Interfaces

The office visualizers are standalone web interfaces and require no build step.

- **Option A (Direct Browser Open):** Double-click `Anisa-HQ/index.html` or `Офис агентов.html` in your file explorer.
- **Option B (Local Static Server):**
  ```bash
  # Using Python built-in HTTP server
  python -m http.server 8000

  # Or using Node.js npx serve
  npx serve .
  ```
  Open `http://localhost:8000/Anisa-HQ/` in your browser.

### 2. Running the Bot Service

The bot service is located in `Anisa-HQ/bot`.

```bash
# Navigate to the bot directory
cd Anisa-HQ/bot

# Install dependencies
npm install

# Run the bot
npm start
# or directly with Node:
node src/index.js
```

On Windows systems, you can also launch the bot using `Anisa-HQ/bot/start.bat`.

---

## 🗺️ Architectural Concept

### Spatial Office Representation

The prototypes in `Anisa-HQ/index.html` and `Anisa-HQ/archive/` explore spatial UI representations where agents occupy visual "rooms" corresponding to operational departments:

- **Command Center / CEO Office**: Coordination and overall status.
- **Engineering**: Development, review, and integration queues.
- **Research**: Data gathering and document parsing.
- **Operations**: Workflow automation and execution monitoring.
- **Knowledge Room**: Project memory and documentation indexing.

### Task Lifecycle

Tasks within the ANISA model flow through controlled stages:

```text
CREATED ──► PLANNED ──► ASSIGNED ──► IN PROGRESS ──► REVIEW ──► COMPLETED
                                                            └──► FAILED / BLOCKED
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/improvement`).
3. Commit your changes with clear, descriptive commit messages.
4. Push to the branch (`git push origin feature/improvement`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.