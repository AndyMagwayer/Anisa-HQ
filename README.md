# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration workspace designed for managing office layouts and agent-based interactions. The project combines a Node.js-based backend for orchestration with browser-based interactive visualizations.

## Project Structure

```text
./
├── .github/workflows/          # CI/CD automation
├── Anisa-HQ/                   # Core simulation workspace
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend orchestration
│   └── index.html              # Simulation dashboard
├── Офис агентов.html           # Interactive office visualization
├── Офис агентов.md             # Operational documentation
└── README.md                   # This documentation
```

## Features

- **Agent Orchestration**: Node.js backend located in `/Anisa-HQ/bot/` for task management.
- **Spatial Visualization**: Web-based interactive environments for simulation monitoring and office layout visualization.
- **Archive Support**: Repository of iterative UI/UX designs kept in `/Anisa-HQ/archive/`.

## Technology Stack

- **Runtime**: Node.js
- **Frontend**: HTML5, Vanilla JavaScript
- **Automation**: GitHub Actions, Windows Batch scripts

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
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

## Running & Development

### Backend
- **Windows**: Execute `Anisa-HQ\bot\start.bat`.
- **CLI**: Navigate to `/Anisa-HQ/bot/` and run `npm start`.

### Frontend
Open the following files in any modern web browser to interact with the simulation:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- **Dependency Management**: Ensure all additions are recorded in `Anisa-HQ/bot/package.json`.
- **Documentation**: Keep logic updates synchronized with `Офис агентов.md`.
- **Prototyping**: Move stabilized UI iterations to `Anisa-HQ/archive/`.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
<!-- David Maintenance Verified: 2026-10-30 00:55:16 (Asia/Tashkent) -->
