# Anisa-HQ

Anisa-HQ is a virtual operations and agent management platform designed for visualizing office layouts and orchestrating autonomous workflows.

## Project Overview

This repository provides a centralized platform for managing agent governance and operations. It combines lightweight, web-based visualization dashboards with a Node.js-based orchestration layer for backend automation.

## Features

- **Agent Governance**: Strategic documentation defining roles and operating procedures (`Офис агентов.md`).
- **Visualization Dashboards**: Browser-based interfaces for monitoring office dynamics and agent flow (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Orchestration**: A Node.js backend (`Anisa-HQ/bot`) designed to manage and execute automated task logic.
- **Layout Archives**: A collection of historical UI and office visualization prototypes.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend**: Node.js (v16+).
- **Documentation**: Markdown.

## Project Structure

```text
.
├── .github/             # GitHub workflow configurations
├── Anisa-HQ/
│   ├── archive/         # Historical UI/layout prototypes
│   ├── bot/             # Node.js orchestration engine
│   └── index.html       # Secondary operations dashboard
├── assets/              # Project imagery
├── Офис агентов.html    # Primary operations dashboard
└── Офис агентов.md      # Governance and role definitions
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Navigate to the bot directory and install dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any standard web browser.

### Automation Bot
Run the execution script for the bot:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*(On Windows, you may use `start.bat` located in `Anisa-HQ/bot`.)*

## Contribution Guidelines

- Maintain consistency with the existing file structure when adding modules.
- Keep documentation (README and markdown files) updated with architectural changes.
- Ensure all automation scripts are verified locally before proposing changes.

## License

Distributed under the project LICENSE.