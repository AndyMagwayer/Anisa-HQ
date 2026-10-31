# Anisa HQ

Anisa HQ is an operational repository housing the core infrastructure and visualization dashboard for the Anisa agent environment.

## Project Overview

This repository maintains the primary interactive office dashboard and a supporting Node.js automation service. It acts as the central hub for managing agent workflows and architectural visualizations.

## Features

- **Agent Dashboard**: Interactive web-based visualization interfaces (`Офис агентов.html` and root `index.html`) designed for layout management and real-time environment overview.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for handling task orchestration and bot operations.
- **Design Archive**: A curated collection of historical UI prototypes and office layout iterations in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS
- **Backend**: Node.js
- **Automation**: GitHub Actions (Maintenance CI)

## Project Structure

```text
.
├── .github/workflows/          # Automated maintenance CI workflows
├── Anisa-HQ/                   # Core application and bot components
│   ├── archive/                # Historical UI prototypes and layout iterations
│   ├── bot/                    # Node.js backend service and configuration
│   ├── index.html              # Secondary workspace view
│   ├── push.bat                # Windows utility script for git pushing
│   └── README.md               # Sub-module documentation
├── Офис агентов.html           # Primary interactive dashboard
├── Офис агентов.md             # Dashboard descriptive documentation
└── README.md                   # Main project documentation
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` directly in any modern web browser to access the interactive dashboard.

### Bot Service
Navigate to the bot directory to initialize the automation service:
```bash
cd Anisa-HQ/bot
npm start
```
*Windows users may alternatively execute `Anisa-HQ/bot/start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m 'feat: description'`).
4. Push to the branch (`git push origin feature/name`).
5. Open a Pull Request.

## License

Distributed under the LICENSE provided in the root directory.
<!-- David Maintenance Verified: 2026-10-31 20:56:57 (Asia/Tashkent) -->
