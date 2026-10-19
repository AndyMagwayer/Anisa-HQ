# Anisa HQ — AI Agent Operations & Virtual Office Simulation

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-informational?style=flat-square)

Anisa HQ is an operational workspace and visual simulation suite for modeling autonomous multi-agent workflows, room-based task routing, and agent collaboration dynamics.

---

## Project Overview

The repository combines static, zero-dependency browser simulations with a Node.js-based bot runtime and architectural design documents. It provides both visual representations of agent activities (such as room-to-room handoffs and top-down floor layouts) and backend orchestration logic.

## Key Components & Features

- **Agent HQ Dashboard (`Офис агентов.html` & `Anisa-HQ/index.html`)**:
  Interactive single-file dashboards rendering agent workstations, role assignments, and active task pipelines directly in modern browsers without build dependencies.
- **Agent Architecture Specifications (`Офис агентов.md`)**:
  Detailed operational protocols, role hierarchies, and workflow guidelines defining agent interactions.
- **Orchestration Bot Service (`Anisa-HQ/bot/`)**:
  Node.js runtime (`src/index.js`) providing automated agent logic, integration hooks, and Windows launch helpers (`start.bat`).
- **Prototyping & Layout Archive (`Anisa-HQ/archive/`)**:
  Evolutionary record of experimental office layouts, including room-flow diagrams (`office-v3-rooms-and-flow.html`), top-down views (`office-v5-topdown.html`), UI skin configurations (`office-v6-skins.html`), and early chat interfaces (`chat-prototype.html`).

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend / Agent Runtime**: Node.js (CommonJS / npm)
- **Scripting & Tooling**: Batch scripts (`start.bat`, `push.bat`) for Windows-based quick launch and deployment workflows

## Prerequisites

- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge
- **Node.js**: `v16.0.0` or higher (required for `Anisa-HQ/bot`)
- **npm**: `v7.0.0` or higher

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Set up the bot runtime**:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### 1. Visual Office Simulations (Frontend)
The web interfaces require no compilation step and can be launched directly:

- **Direct browser launch**: Double-click `Офис агентов.html` or `Anisa-HQ/index.html` in your file explorer.
- **Local HTTP server** (optional):
  ```bash
  npx serve .
  ```
  Open the displayed localhost URL and navigate to either `Офис агентов.html` or `Anisa-HQ/`.

### 2. Agent Bot Service
From the project root:

```bash
cd Anisa-HQ/bot
node src/index.js
```

On Windows systems, you can also launch the service using the provided batch script:
```cmd
Anisa-HQ\bot\start.bat
```

## Repository Structure

```text
Anisa-HQ/
├── .github/
│   └── workflows/                # GitHub Actions maintenance workflows
├── Anisa-HQ/
│   ├── archive/                  # Historical UI prototypes and layout experiments
│   │   ├── chat-prototype.html
│   │   ├── office-v3-rooms-and-flow.html
│   │   ├── office-v5-topdown.html
│   │   └── office-v6-skins.html
│   ├── bot/                      # Node.js agent execution runtime
│   │   ├── src/
│   │   │   └── index.js          # Bot entrypoint
│   │   ├── package.json          # Bot dependencies and configuration
│   │   ├── README.md             # Bot-specific documentation
│   │   └── start.bat             # Windows runner script
│   ├── index.html                # Workspace dashboard
│   ├── push.bat                  # Git push helper script
│   └── README.md
├── Офис агентов.html             # Standalone Agent HQ dashboard interface
├── Офис агентов.md               # Operational specifications and role descriptions
├── LICENSE                       # Project license
└── README.md                     # Root project documentation
```

## Development Guidelines

- **Static Isolation**: Keep UI simulation dashboards standalone without requiring external bundlers, preserving instant browser preview capabilities.
- **Modular Bot Architecture**: Keep runtime logic in `Anisa-HQ/bot/src/` organized and decoupled from simulation presentation.
- **Conventional Commits**: Write clear, structured commit messages describing functional changes.