# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration workspace. It provides a modular environment for simulating office layouts, agent interactions, and tracking state through interactive HTML interfaces supported by a Node.js backend.

## Project Structure

```text
./
├── .github/workflows/          # GitHub Actions maintenance workflows
├── Anisa-HQ/
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend orchestration
│   │   ├── src/index.js        # Backend entry point
│   │   └── package.json        # Dependencies
│   └── index.html              # Core simulation dashboard
├── Офис агентов.html           # Interactive office visualization
└── Офис агентов.md             # Operational documentation (Russian)
```

## Features

- **Agent Orchestration**: Backend service located in `Anisa-HQ/bot/` for managing agent logic.
- **Spatial Simulation**: Browser-based interactive visualizations (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Prototyping Archive**: Preservation of historical office layouts and UI iterations.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: HTML5, Vanilla JavaScript
- **Automation**: GitHub Actions, Windows Batch (.bat)

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

Open these files directly in any modern web browser:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- **Dependencies**: Ensure all new dependencies are documented in `Anisa-HQ/bot/package.json`.
- **Documentation**: Keep operational changes synchronized in `Офис агентов.md`.
- **Maintenance**: Move deprecated UI prototypes to `Anisa-HQ/archive/`.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
<!-- David Maintenance Verified: 2026-10-28 21:59:18 (Asia/Tashkent) -->
