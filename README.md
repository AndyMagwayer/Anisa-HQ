# Anisa HQ

Anisa HQ is a virtual operations platform designed to visualize and manage agent workflows and office layouts. This repository serves as the central hub for agent governance, office visualization, and operational prototypes.

## Project Overview

This project provides a sandbox for visualizing office dynamics and managing autonomous workflows via a Node.js-based orchestration layer. It integrates frontend visualization dashboards with backend automation capabilities.

## Features

- **Governance**: Strategic documentation for agent roles and standard operating procedures (see `Офис агентов.md`).
- **Visualization Dashboards**: Multi-layered web-based dashboards for monitoring operations (`Офис агентов.html` and `Anisa-HQ/index.html`).
- **Orchestration**: A Node.js backend (`Anisa-HQ/bot`) for handling automated agent task logic.
- **Prototyping**: A historical archive of UI and layout iterations to track project evolution.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend**: Node.js (v16+).
- **Documentation**: Markdown.

## Project Structure

```text
.
├── .github/             # GitHub workflow configurations
├── Anisa-HQ/
│   ├── archive/         # Historical office layout prototypes
│   ├── bot/             # Node.js orchestration engine
│   └── index.html       # Secondary web entry point
├── assets/              # Project imagery
├── Офис агентов.html    # Primary operations dashboard
└── Офис агентов.md      # Governance and role definitions
```

## Prerequisites

- Node.js (v16+)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install automation bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any modern web browser to view the operational dashboards.

### Automation Bot
Run the execution script for the bot:
```bash
cd Anisa-HQ/bot
node src/index.js
```
(Alternatively, use `start.bat` on Windows systems.)

## Contribution Guidelines

1. **Integrity**: Maintain the existing file structure when adding new prototypes or modules.
2. **Documentation**: Ensure all architectural changes are updated in the README and relevant documentation files.
3. **Verification**: Validate the functionality of local scripts within `/bot` prior to submitting changes.

## License

Distributed under the project LICENSE.