# Anisa HQ — AI Agent Operations & Virtual Office Simulation

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-informational?style=flat-square)

Anisa HQ is a workspace simulation suite designed to model autonomous multi-agent workflows, room-based task routing, and agent collaboration dynamics.

## Project Overview

The repository provides a hybrid environment consisting of zero-dependency browser-based visual simulations and a Node.js-based bot runtime for managing agent logic.

## Key Features

- **Agent HQ Dashboards**: Browser-based visualization of agent workstations and task pipelines (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Operational Framework**: Role hierarchy definitions and logic specifications (`Офис агентов.md`, `Anisa-HQ/bot/CLAUDE.md`).
- **Orchestration Engine**: Node.js backend for agent logic execution located in `Anisa-HQ/bot/`.
- **Simulation Archive**: Historical data of layout experiments and UI iterations.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Backend**: Node.js.
- **Utilities**: Batch scripting for Windows automation.

## Prerequisites

- **Node.js**: `v16.0.0` or higher.
- **Browser**: Any modern web browser.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Install dependencies for the bot service:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Dashboards
Open `Офис агентов.html` or `Anisa-HQ/index.html` directly in your browser. These files are standalone and require no local server.

### Agent Bot Service
Run the Node.js runtime using the following command:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*Alternatively, Windows users can execute `Anisa-HQ\bot\start.bat`.*

## Repository Structure

```text
./
├── .github/                # GitHub workflows and maintenance
├── Anisa-HQ/
│   ├── archive/            # Historical layout experiments
│   ├── bot/                # Node.js bot runtime
│   ├── index.html          # Secondary dashboard UI
│   └── push.bat            # Repository update helper
├── Офис агентов.html       # Primary agent office dashboard
├── Офис агентов.md         # Operational documentation
└── README.md               # Project documentation
```

## Contribution Guidelines

1. Maintain frontend files as standalone modules.
2. Keep bot logic modular within `Anisa-HQ/bot/src/`.
3. Ensure all pull requests follow conventional commit message standards.