# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration framework designed for managing interactive browser-based environments and backend Node.js bot logic.

## Project Overview

The repository serves as a workspace for simulating office environments where agents interact via spatial visualization tools. It consists of a backend Node.js orchestration service and client-side browser visualizers.

## Project Structure

```text
./
├── .github/workflows/          # Maintenance automation
├── Anisa-HQ/
│   ├── archive/                # Historical UI prototypes
│   ├── bot/                    # Node.js backend orchestration
│   └── index.html              # Core simulation dashboard
├── Офис агентов.html           # Interactive office visualization
├── Офис агентов.md             # Operational documentation (Russian)
└── README.md
```

## Features

- **Agent Orchestration**: Backend logic located in `Anisa-HQ/bot/` for managing agent behavior.
- **Spatial Simulation**: Real-time browser-based monitoring through `Офис агентов.html`.
- **Rapid Prototyping**: Legacy UI iterations preserved in `Anisa-HQ/archive/`.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Task Automation**: GitHub Actions and Windows Batch (.bat) scripts

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

Open the following files directly in any modern web browser to view the spatial simulations:
- `Офис агентов.html`
- `Anisa-HQ/index.html`

## Contribution Guidelines

- **Dependencies**: Any new Node modules must be added to `Anisa-HQ/bot/package.json`.
- **Documentation**: Maintain `Офис агентов.md` for any changes impacting the operational simulation environment.
- **Archiving**: Please relocate deprecated HTML prototypes to `Anisa-HQ/archive/` instead of deleting them to preserve development history.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.