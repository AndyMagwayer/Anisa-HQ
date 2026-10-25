# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)

Anisa HQ is a centralized command platform for managing autonomous AI agents. It provides a visual interface for operations, task delegation, and historical archiving of agent activities.

## Project Overview

This repository acts as the bridge between web-based visual management (the "Office") and the backend Node.js bot orchestration layer. It is designed to model a distributed AI company environment.

## Features

- **Interactive Office Interface**: Visual web-based dashboards (`Офис агентов.html`, `Anisa-HQ/index.html`) for monitoring agent activities and workspaces.
- **Node.js Bot Orchestration**: Backend integration layer located in `Anisa-HQ/bot/` for automated agent processing and operations.
- **Historical Prototypes**: Preserved iterations and designs in `Anisa-HQ/archive/` for reference and UI consistency.
- **Automation Scripts**: Helper scripts (`push.bat`, `start.bat`) for streamlined repository management and service startup.

## Project Structure

```text
./
├── .github/workflows/          # CI/CD and automation pipelines
├── Anisa-HQ/                   # Core application directory
│   ├── archive/                # Historical office prototypes and designs
│   ├── bot/                    # Node.js backend logic and bot implementation
│   └── index.html              # Main frontend dashboard entry point
├── Офис агентов.html           # Interactive office interface
├── Офис агентов.md             # Operational documentation and agent protocols
└── README.md                   # This documentation
```

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Backend**: Node.js
- **Utilities**: GitHub Actions, Windows Batch scripts

## Prerequisites

- **Node.js**: v18.x or higher
- **Git**: For repository management

## Installation & Setup

### 1. Repository Setup
```bash
git clone https://github.com/AndyMagwayer/Anisa-HQ.git
cd Anisa-HQ
```

### 2. Backend Initialization
Navigate to the bot directory to configure the agent controller:
```bash
cd Anisa-HQ/bot
npm install
```

## Running the Project

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any modern web browser. For development, you may use a local server:
```bash
npx serve .
```

### Agent Bot
Run the backend service via the provided script or command:
```bash
# Windows
cd Anisa-HQ/bot
start.bat

# Cross-platform
cd Anisa-HQ/bot
npm start
```

## Contribution Guidelines

1. Ensure all changes are documented in the relevant `.md` files.
2. When updating the bot, ensure `package.json` reflects all new dependencies.
3. Verify UI updates against existing architecture in `/archive` to maintain consistency.
4. Submit a Pull Request describing the changes to the system logic or UI flow.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
