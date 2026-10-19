# Anisa HQ — AI Agent Operations & Virtual Office Simulation

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-informational?style=flat-square)

Anisa HQ is a workspace simulation suite for modeling autonomous multi-agent workflows, room-based task routing, and agent collaboration dynamics.

## Project Overview

The repository combines static, zero-dependency browser simulations with a Node.js-based bot runtime and architectural design documentation.

## Key Components

- **Agent HQ Dashboard (`Офис агентов.html` & `Anisa-HQ/index.html`)**: Browser-based visualization of agent workstations and task pipelines.
- **Agent Architecture (`Офис агентов.md`)**: Operational protocols and role hierarchy definitions.
- **Orchestration Bot (`Anisa-HQ/bot/`)**: Node.js runtime for agent logic execution.
- **Prototyping Archive (`Anisa-HQ/archive/`)**: Historical record of layout experiments and UI iterations.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js
- **Automation**: Batch scripting (`.bat`) for Windows environments

## Prerequisites

- **Node.js**: `v16.0.0` or higher
- **Browser**: Chrome, Firefox, or Edge

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Initialize the bot runtime:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Simulations
Simply open `Офис агентов.html` or `Anisa-HQ/index.html` in your preferred web browser. No compilation is required.

### Agent Bot Service
From the project root:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*Windows users can alternatively execute `Anisa-HQ\bot\start.bat`.*

## Repository Structure

```text
./
├── .github/                # Workflow automation
├── Anisa-HQ/
│   ├── archive/            # Layout experiments
│   ├── bot/                # Node.js runtime
│   ├── index.html          # Dashboard
│   └── push.bat            # Deployment helper
├── Офис агентов.html       # Primary dashboard
├── Офис агентов.md         # Operational docs
└── README.md               # This document
```

## Contribution Guidelines

1. Keep UI dashboards as standalone files (no external bundlers).
2. Maintain bot logic modularity within `Anisa-HQ/bot/src/`.
3. Follow conventional commit message standards for all PRs.
<!-- David Maintenance Verified: 2026-10-20 01:16:26 (Asia/Tashkent) -->
