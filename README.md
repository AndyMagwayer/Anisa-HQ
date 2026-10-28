# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration workspace designed for managing office layouts and agent-based interactions. It utilizes a Node.js backend for orchestration and interactive HTML interfaces for visualization.

## Project Structure

```text
./
├── .github/workflows/          # GitHub Actions for automation
├── Anisa-HQ/
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend orchestration
│   │   ├── src/index.js        # Backend entry point
│   │   └── package.json        # Node.js dependency configuration
│   └── index.html              # Core simulation dashboard
├── Офис агентов.html           # Interactive office visualization
└── Офис агентов.md             # Operational documentation
```

## Features

- **Agent Orchestration**: Modular Node.js backend located in `/Anisa-HQ/bot/`.
- **Spatial Visualization**: Browser-based interactive environments for simulation monitoring.
- **Historical Prototyping**: Repository of iterative UI/UX designs kept in `/Anisa-HQ/archive/`.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: HTML5, Vanilla JavaScript
- **Automation**: GitHub Actions, Windows Batch scripts

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

## Usage

### Backend Service
- **Windows**: Execute `Anisa-HQ\bot\start.bat`.
- **CLI**: Navigate to `/Anisa-HQ/bot/` and run `npm start`.

### Frontend
Open the following files in any modern web browser to interact with the simulation:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- **Dependency Management**: Ensure all additions are recorded in `Anisa-HQ/bot/package.json`.
- **Documentation**: Keep logic updates synchronized with `Офис агентов.md`.
- **Prototypes**: New UI iterations should be moved to `Anisa-HQ/archive/` once stabilized.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.