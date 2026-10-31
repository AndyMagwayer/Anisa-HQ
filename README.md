# Anisa HQ

Anisa HQ is the operational repository for the Anisa agent environment, providing infrastructure for agent workflows and interactive office visualization.

## Project Overview

This repository centralizes the management of the Anisa interactive dashboard and its supporting Node.js automation services. It acts as a primary workspace for visualizing agent layouts and orchestrating background tasks.

## Features

- **Agent Dashboard**: Interactive web-based visualizations (`Офис агентов.html` and `Anisa-HQ/index.html`) for environment layout management.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for handling task orchestration.
- **Design Archive**: A historical reference of UI prototypes and layout iterations in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS
- **Backend**: Node.js
- **Maintenance**: GitHub Actions

## Project Structure

```text
. 
├── .github/workflows/          # CI/CD maintenance workflows
├── Anisa-HQ/                   # Core application components
│   ├── archive/                # Historical UI prototypes
│   ├── bot/                    # Node.js backend service
│   └── index.html              # Secondary workspace view
├── Офис агентов.html           # Primary interactive dashboard
└── Офис агентов.md             # Dashboard documentation
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
Open `Офис агентов.html` in a web browser to access the primary interactive dashboard.

### Bot Service
Navigate to the bot directory to start the automation service:
```bash
cd Anisa-HQ/bot
npm start
```
*On Windows, you may also execute `Anisa-HQ/bot/start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request for review.

## License

Distributed under the LICENSE provided in the root directory.
<!-- David Maintenance Verified: 2026-11-01 02:22:48 (Asia/Tashkent) -->
