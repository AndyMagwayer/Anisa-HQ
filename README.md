# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![Environment](https://img.shields.io/badge/Environment-Node.js%20%7C%20HTML5%20%7C%20JavaScript-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

Anisa HQ is a virtual headquarters and management workspace designed for orchestrating autonomous AI agent operations. It provides interactive web-based room dashboards, operational protocols, workflow prototypes, and an automation bot service.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
  - [1. Web Interface & Dashboards](#1-web-interface--dashboards)
  - [2. Automation Bot Service](#2-automation-bot-service)
- [Agent Roles & Protocols](#agent-roles--protocols)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Project Overview

The repository houses the interfaces and backend automation for coordinating autonomous agent workflows across distinct operational zones. It provides visual representations of team interaction, archival iterations of office layout prototypes, and automated task execution services.

---

## Key Features

- **Interactive Headquarters Dashboards**: Standalone HTML dashboards (`Офис агентов.html`, `Anisa-HQ/index.html`) visualizing active agent roles, operations rooms, and task states.
- **Interface Prototypes & Iterations**: Archival development prototypes exploring top-down layouts, chat interfaces, and theme skins (`Anisa-HQ/archive/`).
- **Autonomous Bot Integration**: Dedicated Node.js daemon (`Anisa-HQ/bot`) for processing events and automated communications.
- **Operational Specifications**: Standardized interaction guidelines and role responsibilities documented in `Офис агентов.md`.

---

## Repository Structure

```text
Anisa-HQ/
├── .github/
│   └── workflows/
│       └── daily-maintenance.yml   # Scheduled CI verification workflow
├── Anisa-HQ/
│   ├── archive/                    # Office interface iterations & prototypes
│   │   ├── chat-prototype.html
│   │   ├── office-v3-rooms-and-flow.html
│   │   ├── office-v5-topdown.html
│   │   └── office-v6-skins.html
│   ├── bot/                        # Automation bot service
│   │   ├── src/
│   │   │   └── index.js            # Bot entry point
│   │   ├── package.json            # Node.js dependencies and scripts
│   │   ├── CLAUDE.md               # Context documentation for LLM tooling
│   │   └── start.bat               # Windows launcher script
│   ├── index.html                  # Secondary web workspace view
│   └── push.bat                    # Automation helper script
├── Офис агентов.html               # Primary agent office web dashboard
├── Офис агентов.md                 # Agent roles, regulations, and protocol rules
├── LICENSE                         # Repository license
└── README.md                       # Project documentation
```

---

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (no external build step required)
- **Backend / Bot**: Node.js (CommonJS)
- **Automation & CI**: GitHub Actions

---

## Prerequisites

- A modern web browser (Google Chrome, Firefox, Safari, or Edge)
- [Node.js](https://nodejs.org/) (version 18.x or later) for the bot component
- [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Install dependencies for the bot service**:
   ```bash
   cd Anisa-HQ/bot
   npm install
   cd ../..
   ```

---

## Running the Project

### 1. Web Interface & Dashboards

The dashboard interfaces do not require compilation and can be launched directly or served locally:

- **Direct browser opening**:
  Open `Офис агентов.html` or `Anisa-HQ/index.html` directly in your browser.

- **Using a local development server**:
  ```bash
  npx serve .
  ```
  Navigate to `http://localhost:3000/Офис агентов.html`.

### 2. Automation Bot Service

To run the bot worker locally:

```bash
cd Anisa-HQ/bot
npm start
```

Alternatively, on Windows systems, execute `start.bat` located inside `Anisa-HQ/bot/`.

---

## Agent Roles & Protocols

Operational behavior, communication etiquette, and task distribution hierarchies are detailed in [`Офис агентов.md`](./Офис%20агентов.md):

- **Chief Coordinator / ANISA**: High-level strategic task orchestration and goal alignment.
- **Engineering & Operations**: Service maintenance, automated verification, and repository integrity.
- **QA & Governance**: Specification validation and operational auditing.

---

## Contribution Guidelines

1. Fork the repository and create a feature branch (`git checkout -b feature/improvement`).
2. Maintain consistent code style without unnecessary external build dependencies for the web dashboards.
3. Ensure any scripts added to `Anisa-HQ/bot` are reflected in `package.json`.
4. Commit changes following conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`).
5. Open a Pull Request with a clear summary of changes.

---

## License

Distributed under the terms of the project's [LICENSE](./LICENSE).