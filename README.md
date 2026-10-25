# Anisa HQ — AI Operations Headquarters

Anisa HQ is a centralized command and visualization platform for managing autonomous AI agent environments. It integrates visual office prototypes with a Node.js-based orchestration backend.

## Project Overview

This repository provides the infrastructure for an agent-based office simulation. It includes interactive frontend dashboards and the necessary backend logic to manage agent tasks, state, and historical design iterations.

## Features

- **Visual Dashboards**: Interactive office interfaces for monitoring agent environments (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Agent Orchestration**: A Node.js backend located in `/Anisa-HQ/bot/` for task execution and system control.
- **Design History**: A curated archive of architectural prototypes and UI iterations (`/Anisa-HQ/archive/`).
- **Utility Automation**: Repository management scripts (`push.bat`, `start.bat`) to streamline local development.

## Project Structure

```text
./
├── .github/workflows/          # CI/CD and automation pipelines
├── Anisa-HQ/                   # Core application directory
│   ├── archive/                # Historical office prototypes
│   ├── bot/                    # Node.js backend logic
│   └── index.html              # Main frontend dashboard
├── Офис агентов.html           # Primary interactive office interface
├── Офис агентов.md             # Operational protocols
└── README.md                   # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Backend**: Node.js
- **Utilities**: GitHub Actions, Windows Batch scripts

## Prerequisites

- **Node.js**: v18.x or higher
- **Git**: For repository management

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any modern web browser.

### Agent Bot
Run the backend service via the following command:
```bash
cd Anisa-HQ/bot
npm start
```

## Contribution Guidelines

1. Document all significant changes in relevant `.md` files.
2. Ensure `package.json` is updated when adding new dependencies.
3. Maintain architectural consistency by referencing `/archive` before modifying UI components.
4. Submit a Pull Request with a clear description of the system logic or UI flow improvements.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.