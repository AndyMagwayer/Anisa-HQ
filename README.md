# Anisa-HQ

Anisa-HQ is the central repository for AI agent orchestration and spatial simulation environments. It provides a structured workspace for managing agent logic via a Node.js backend and visual interactive interfaces.

## Project Structure

```text
./
├── .github/workflows/          # Automated maintenance workflows
├── Anisa-HQ/
│   ├── archive/                # Legacy prototypes and architectural iterations
│   ├── bot/                    # Node.js orchestration backend
│   └── index.html              # Frontend dashboard
├── Офис агентов.html           # Primary interactive office visualization
├── Офис агентов.md             # Operational documentation
└── README.md
```

## Features

- **Agent Orchestration**: Backend logic managed and run via `Anisa-HQ/bot/`.
- **Visualization**: Interactive HTML/JS interfaces for office simulations (`Офис агентов.html`, `Anisa-HQ/index.html`).
- **Prototype Archive**: Versioned architectural iterations and past UI concepts stored in `Anisa-HQ/archive/`.

## Technology Stack

- **Backend**: Node.js (`Anisa-HQ/bot/`) — Express or lightweight HTTP server architecture.
- **Frontend**: HTML5, CSS3, Vanilla JavaScript.
- **Automation**: GitHub Actions, Windows Batch (`.bat`) utility scripts.

## Prerequisites

- Node.js (v18 or higher)
- Git

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
Navigate to the bot directory and execute the start script or run via npm:
```bash
cd Anisa-HQ/bot
npm start
```
Alternatively on Windows, use the provided start script:
```cmd
Anisa-HQ\bot\start.bat
```

### Frontend
Open `Офис агентов.html` or `Anisa-HQ/index.html` directly in any modern web browser to interact with the simulation and dashboard.

## Contribution Guidelines

1. Ensure all new dependencies are properly documented in `Anisa-HQ/bot/package.json`.
2. Maintain consistent naming conventions within `Anisa-HQ/archive/` when adding new UI iterations.
3. Validate local scripts using provided `.bat` files before pushing changes.
4. Submit changes via Pull Requests with clear, concise descriptions of modified logic.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
