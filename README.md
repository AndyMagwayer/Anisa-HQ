# Anisa HQ

Anisa HQ is a virtual operations platform designed to visualize and manage agent workflows and office layouts. This repository acts as the central hub for autonomous agent governance and operational prototypes.

## Project Overview

This project provides a sandbox for visualizing agent office dynamics and managing autonomous workflows via a Node.js-based orchestration layer.

## Features

- **Governance**: Comprehensive role definitions and standard operating procedures defined in `Офис агентов.md`.
- **Visualization Dashboards**: Multi-layered HTML dashboards including `Офис агентов.html` for operations and `Anisa-HQ/index.html` for secondary monitoring.
- **Orchestration**: A Node.js backend (`Anisa-HQ/bot`) designed for automated agent task management.
- **Prototyping**: A historical archive of UI and layout iterations available in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend**: Node.js (v16+).
- **Documentation**: Markdown.

## Project Structure

```text
.
├── .github/             # GitHub workflow configurations
├── Anisa-HQ/
│   ├── archive/         # Historical office prototypes
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
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any modern web browser.

### Automation Bot
Run the execution script for the bot:
```bash
cd Anisa-HQ/bot
node src/index.js
```
(Or use the provided `start.bat` on Windows environments.)

## Contribution Guidelines

1. **Integrity**: Maintain the existing file structure when adding new prototypes.
2. **Documentation**: Ensure all architectural changes are reflected in this README and relevant `.md` files.
3. **Verification**: Verify functionality of local scripts in `/bot` prior to submitting changes.

## License

Distributed under the project LICENSE.