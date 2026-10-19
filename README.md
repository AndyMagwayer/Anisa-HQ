# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)

Anisa HQ serves as the operational headquarters and visual interface for managing autonomous agent workflows, task coordination, and virtual office layout simulations.

## Project Overview

Anisa HQ provides interactive dashboards and operational artifacts for visualizing autonomous agent roles and monitoring office task flows. The project combines standalone HTML5/JavaScript simulation dashboards with a Node.js backend agent runner and historical layout iterations.

## Features

- **Interactive Agent Workspace**: Dashboards (`Офис агентов.html`, `Anisa-HQ/index.html`) representing agent rooms and workspace operations.
- **Agent Operational Protocols**: Detailed specifications and hierarchy documentation in `Офис агентов.md`.
- **Agent Bot Automation**: A Node.js-based runtime located in `Anisa-HQ/bot/` for task orchestration.
- **UI Evolution Archive**: A repository of historical prototypes, including room flows, top-down layouts, and experimental skin customizations.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Backend**: Node.js
- **Automation**: Batch scripts for local environment task execution

## Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- A modern web browser

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Install bot dependencies**:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in your browser. Alternatively, serve the files locally:
```bash
npx serve .
```

### Agent Bot
To start the agent service:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*Note: On Windows, you may use `Anisa-HQ\bot\start.bat`.*

## Project Structure

```text
.
├── .github/workflows/        # CI/CD maintenance
├── Anisa-HQ/
│   ├── archive/              # Historical UI prototypes
│   ├── bot/                  # Node.js bot logic
│   ├── index.html            # Workspace dashboard
│   └── push.bat              # Git synchronization script
├── Офис агентов.html         # Main agent HQ UI
├── Офис агентов.md           # Operational documentation
└── README.md
```

## Contribution Guidelines

1. Maintain compatibility with standalone static HTML execution.
2. Keep bot dependencies minimized.
3. Ensure all changes follow standard Git commit conventions.