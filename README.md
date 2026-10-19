# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)

Anisa HQ serves as the operational headquarters for AI-driven workflows. The repository provides a visual interface for managing autonomous agent interactions, task synchronization, and office space modeling.

## Project Overview

This repository acts as the central command post for Anisa and the Chief Coordinator. It maintains the logic and interface required to visualize agent roles, archive operational artifacts, and monitor office task flows.

## Project Structure

```text
.
├── .github/workflows/    # CI/CD and maintenance automation
├── Anisa-HQ/             # Core web application and assets
│   ├── archive/          # Historical prototypes and layout versions
│   ├── bot/              # Backend automation and agent logic
│   └── index.html        # Main dashboard entry point
├── Офис агентов.html     # Interactive agent workspace dashboard
├── Офис агентов.md       # Operational protocols and agent documentation
└── README.md             # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS (via local imports).
- **Backend/Bot**: Node.js, JavaScript (see `Anisa-HQ/bot/` for implementation details).
- **Automation**: GitHub Actions for maintenance and repository health.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Install bot dependencies (if working on backend agents):
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Development & Running

### Web Dashboard
Open `Офис агентов.html` in any modern web browser or serve the root directory using a local static server:
```bash
npx serve .
```

### Agent Bot
To run the local bot service:
```bash
cd Anisa-HQ/bot
node src/index.js
```

## Contribution Guidelines

- Maintain current documentation standards.
- All PRs must pass the existing GitHub Actions workflows.
- Keep repository architecture consistent with the documented structure.

## License

Distributed under the project's LICENSE.