# Anisa-HQ

Anisa-HQ is a centralized repository for coordinating AI-driven workflows, agent-based operational layouts, and spatial prototyping for office environments.

## Project Overview

This repository provides a framework for agent-based operations, featuring a visual dashboard for office flow management and a Node.js-based bot orchestration module.

## Features

- **Office Dashboards**: Visual interfaces (`Офис агентов.html`, `index.html`) providing spatial flow representations and operational state monitoring.
- **Agent Orchestration**: A modular Node.js backend located in the `Anisa-HQ/bot` directory.
- **Architectural Archives**: Historical iterations of office layouts and prototype interface designs stored under `Anisa-HQ/archive/`.
- **Role Definitions**: Documentation of agent roles and responsibilities in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend**: Node.js.
- **Utilities**: Windows batch scripts for automated process initiation and deployment workflows.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A modern web browser

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
Serve the repository root using a local static server:
```bash
npx serve .
```

### Bot Service
To start the orchestration service:
```bash
cd Anisa-HQ/bot
node src/index.js
```
*(Alternatively, execute `Anisa-HQ/bot/start.bat` on Windows systems).* 

## Project Structure

```text
├── .github/          # CI/CD maintenance workflows
├── Anisa-HQ/         # Core application components, bot backend, and legacy archives
├── assets/           # Repository imagery
├── Офис агентов.html # Main visual office interface
├── Офис агентов.md   # Agent role definitions
└── README.md         # Project documentation
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Ensure changes adhere to the existing modular structure.
4. Submit a pull request for review.

## License

This project is licensed under the MIT License.