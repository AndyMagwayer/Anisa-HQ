# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)

Anisa HQ serves as the operational headquarters and visual interface for managing autonomous agent workflows, task coordination, and virtual office layout simulations.

## Project Overview

Anisa HQ provides interactive dashboards and operational artifacts for visualizing autonomous agent roles and monitoring office task flows. The project combines standalone HTML5/JavaScript simulation dashboards with a Node.js backend agent runner and historical layout iterations.

## Features Grounded in Repository Contents

- **Interactive Agent Workspace (`Офис агентов.html` & `Anisa-HQ/index.html`)**: Interactive web interfaces representing agent rooms, status flows, and workspace operations.
- **Agent Operational Protocols (`Офис агентов.md`)**: Detailed operational specifications, roles, and agent hierarchy documentation.
- **Agent Bot Automation (`Anisa-HQ/bot/`)**: Node.js-based backend bot runtime (`src/index.js`) for background agent processing and task orchestration.
- **UI Evolution Archive (`Anisa-HQ/archive/`)**: Historical prototypes including top-down office views (`office-v5-topdown.html`), room flows (`office-v3-rooms-and-flow.html`), skin customization (`office-v6-skins.html`), and early chat interfaces (`chat-prototype.html`).
- **Convenience Scripts**: Windows batch scripts (`push.bat`, `start.bat`) for quick agent execution and git updates.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Backend / Bot**: Node.js (`Anisa-HQ/bot/src/index.js`)
- **Package Management**: npm (`Anisa-HQ/bot/package.json`)
- **CI/CD**: GitHub Actions (`.github/workflows/david-maintenance.yml`)

## Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- A modern web browser supporting modern HTML5 standards

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
   cd ../..
   ```

## Running & Development

### Running the Workspace Dashboard

Open `Офис агентов.html` or `Anisa-HQ/index.html` directly in your browser, or serve the repository locally using any static web server:

```bash
# Using npx serve
npx serve .

# Or using Python
python -m http.server 8000
```

Navigate to `http://localhost:8000/Офис агентов.html` or `http://localhost:8000/Anisa-HQ/index.html`.

### Running the Agent Bot Service

To run the background bot service:

```bash
cd Anisa-HQ/bot
node src/index.js
```

On Windows systems, you can also execute:

```cmd
Anisa-HQ\bot\start.bat
```

## Project Structure

```text
.
├── .github/
│   └── workflows/            # Repository workflows and maintenance automation
├── Anisa-HQ/                 # Web application assets and bot service
│   ├── archive/              # Prototypes (chat, room flows, top-down layouts, skins)
│   ├── bot/                  # Node.js bot implementation (package.json, src/index.js)
│   ├── index.html            # Main web workspace interface
│   └── push.bat              # Automation script for synchronization
├── Офис агентов.html         # Interactive agent headquarters workspace UI
├── Офис агентов.md           # Agent operational guidelines and specifications
├── LICENSE                   # License terms
└── README.md                 # Project documentation
```

## Contribution Guidelines

1. Ensure changes do not break standalone static HTML execution.
2. Keep bot dependencies lean and declared inside `Anisa-HQ/bot/package.json`.
3. Verify workflows pass on push and follow standard Git commit conventions.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file located in the root directory.