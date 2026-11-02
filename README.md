# Anisa HQ

Anisa HQ is the centralized repository for the Anisa agent environment, serving as a dashboard and orchestration workspace for agent interactions and office visualization.

## Project Overview

This repository provides the core environment for visualizing agent activities and managing backend automation tasks. It includes both a browser-based visualization dashboard (`Офис агентов.html`) and a Node.js-based control service (`Anisa-HQ/bot`).

## Features

- **Office Dashboard**: An interactive office layout visualization located at `Офис агентов.html` along with its technical specification in `Офис агентов.md`.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for executing background automation.
- **Design Archive**: A historical collection of UI/UX layout iterations and prototypes located in `Anisa-HQ/archive` (including chat prototypes and office top-down views).

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Environment**: Cross-platform support (Windows/Linux/macOS).

## Project Structure

```text
.
├── .github/workflows/          # GitHub Actions CI/CD workflows
├── Anisa-HQ/                   # Core application components
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js automation backend
│   └── index.html              # Supplementary dashboard
├── Офис агентов.html           # Primary office visualization dashboard
└── Офис агентов.md             # Dashboard technical documentation
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install dependencies for the backend:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` in any modern web browser to interact with the dashboard.

### Bot Service
Navigate to the bot directory and start the service:
```bash
cd Anisa-HQ/bot
npm start
```
*Note: Windows users can execute `Anisa-HQ/bot/start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request for review.

## License

Distributed under the terms of the LICENSE file.
<!-- David Maintenance Verified: 2026-11-03 01:37:45 (Asia/Tashkent) -->
