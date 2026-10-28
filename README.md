# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration workspace containing browser-based visualization tools and a backend Node.js bot architecture.

## Project Overview

This repository provides a modular environment for simulating office layouts, agent interactions, and tracking state through interactive HTML interfaces backed by Node.js coordination logic.

## Project Structure

```text
./
├── .github/workflows/          # GitHub Actions maintenance workflows
├── Anisa-HQ/
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend orchestration
│   │   ├── CLAUDE.md           # Instructions for AI assistants
│   │   ├── package.json        # Node dependencies
│   │   └── src/index.js        # Backend entry point
│   ├── index.html              # Core simulation dashboard
│   └── push.bat                # Windows helper script for Git push
├── Офис агентов.html           # Interactive office visualization
└── Офис агентов.md             # Operational documentation (Russian)
```

## Features

- **Agent Orchestration**: Backend Node.js service located in `Anisa-HQ/bot/`.
- **Spatial Simulation**: Interactive HTML5 visualization dashboards (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Prototyping Archive**: Preserved historical layouts and interface iterations under `Anisa-HQ/archive/`.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: HTML5, Vanilla JavaScript
- **Automation**: GitHub Actions and Windows Batch (`.bat`) scripts

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Install backend dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Backend Service

- **Using Windows Batch**: Execute `Anisa-HQ\bot\start.bat`.
- **Via CLI**: Run `npm start` from within the `Anisa-HQ/bot/` directory.

### Frontend Visualizer

Open the visualization files directly in any modern web browser:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- Ensure all new dependencies are properly documented in `Anisa-HQ/bot/package.json`.
- Keep operational changes updated in `Офис агентов.md`.
- Move deprecated UI prototypes to `Anisa-HQ/archive/`.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
