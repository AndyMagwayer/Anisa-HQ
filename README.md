# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration framework designed for managing interactive browser-based environments and backend Node.js bot logic.

## Project Overview

This repository acts as a workspace for simulating office environments where agents interact via spatial visualization tools. It provides a modular backend for agent coordination and multiple frontend interfaces for monitoring environment state.

## Project Structure

```text
./
├── .github/workflows/          # CI/CD maintenance
├── Anisa-HQ/
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend orchestration
│   │   ├── CLAUDE.md           # Bot-specific instructions
│   │   ├── package.json        # Node dependencies
│   │   └── src/index.js        # Main entry point
│   ├── index.html              # Core simulation dashboard
│   └── push.bat                # Windows utility script
├── Офис агентов.html           # Interactive office visualization
└── Офис агентов.md             # Operational documentation (Russian)
```

## Features

- **Agent Orchestration**: Backend logic located in `Anisa-HQ/bot/` for coordination tasks.
- **Spatial Simulation**: Real-time browser-based monitoring using HTML/JS dashboards.
- **Rapid Prototyping**: Structured environment for iterative development of spatial office layouts and flows.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Automation**: GitHub Actions and Windows Batch (.bat) scripts

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Navigate to the bot directory and install dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Backend Service

- **Using Windows Batch**: Execute `Anisa-HQ\bot\start.bat`.
- **Via CLI**: Run `npm start` from within the `Anisa-HQ/bot/` directory.

### Frontend Visualizer

Open the following files directly in a modern web browser:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- **Dependency Management**: Ensure new packages are added to `Anisa-HQ/bot/package.json`.
- **Documentation**: Update `Офис агентов.md` for logic or spatial schema changes.
- **Archiving**: Relocate deprecated UI prototypes to `Anisa-HQ/archive/` to maintain repository clarity.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.

<!-- David Maintenance Verified: 2026-10-28 19:47:43 (Asia/Tashkent) -->
