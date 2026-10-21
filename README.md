# Anisa HQ — AI Agent Operations & Virtual Office Simulation

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-informational?style=flat-square)

Anisa HQ is a workspace simulation suite for modeling autonomous multi-agent workflows, room-based task routing, and agent collaboration dynamics.

## Project Overview

The repository combines zero-dependency browser-based visual simulations with a Node.js bot runtime and comprehensive architectural documentation.

## Key Features

- **Agent HQ Dashboard (`Офис агентов.html` & `Anisa-HQ/index.html`)**: Interactive browser-based visualization of agent workstations, rooms, and task pipelines.
- **Agent Architecture & Protocols (`Офис агентов.md` & `Anisa-HQ/bot/CLAUDE.md`)**: Operational guidelines, role hierarchy definitions, and bot instructions.
- **Orchestration Bot (`Anisa-HQ/bot/`)**: Node.js service for agent logic execution and automation.
- **Prototyping Archive (`Anisa-HQ/archive/`)**: Historical record of layout experiments, room flows, top-down views, and skin iterations.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js
- **Automation**: Batch scripting (`.bat`) for Windows environments

## Prerequisites

- **Node.js**: `v16.0.0` or higher (for the bot service)
- **Browser**: Any modern web browser (Chrome, Firefox, Safari, Edge) for dashboard simulations

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Install bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Simulations
Open either `Офис агентов.html` or `Anisa-HQ/index.html` directly in your web browser. No compilation or server setup is required for the frontend dashboards.

### Agent Bot Service
Run the Node.js bot runtime from the command line:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*Alternatively, Windows users can execute `Anisa-HQ\bot\start.bat`.*

## Repository Structure

```text
./
├── .github/                # GitHub workflows and maintenance automation
├── Anisa-HQ/
│   ├── archive/            # Historical layout and UI experiments
│   ├── bot/                # Node.js bot runtime & configuration
│   ├── index.html          # Secondary dashboard UI
│   └── push.bat            # Helper script for repository updates
├── Офис агентов.html       # Primary agent office dashboard
├── Офис агентов.md         # Operational documentation and role specs
└── README.md               # Project documentation
```

## Contribution Guidelines

1. Keep frontend dashboards as standalone files without external bundlers.
2. Maintain modularity within the bot runtime (`Anisa-HQ/bot/src/`).
3. Follow conventional commit message standards for all pull requests.
