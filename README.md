# Anisa-HQ

Anisa-HQ is a spatial simulation and agent orchestration repository. It integrates Node.js backend logic with interactive browser-based visualization tools to manage agent environments.

## Project Structure

```text
./
├── .github/workflows/          # CI/CD and maintenance automation
├── Anisa-HQ/
│   ├── archive/                # Legacy prototypes and UI iterations
│   ├── bot/                    # Node.js backend logic
│   └── index.html              # Main simulation dashboard
├── Офис агентов.html           # Interactive office visualization
├── Офис агентов.md             # Operational documentation
└── README.md
```

## Features

- **Agent Orchestration**: Backend services managed via the `Anisa-HQ/bot/` module.
- **Spatial Simulation**: Interactive browser-based visuals (`Офис агентов.html`) for agent workflow management.
- **Prototyping**: Iterative development history preserved in the `archive/` directory.

## Technology Stack

- **Runtime**: Node.js (v18+)
- **Frontend**: Vanilla HTML5, CSS3, and JavaScript
- **Automation**: GitHub Actions and Windows Batch (.bat) utilities

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
The bot can be initiated via the provided batch script or standard npm commands:

```cmd
:: Using the provided batch script
Anisa-HQ\bot\start.bat

:: Or via CLI
cd Anisa-HQ/bot
npm start
```

### Frontend
The visual components are client-side files. Open `Офис агентов.html` or `Anisa-HQ/index.html` directly in any modern web browser.

## Contribution Guidelines

1. **Dependencies**: Update `Anisa-HQ/bot/package.json` for any added Node modules.
2. **Documentation**: Keep `Офис агентов.md` synchronized with operational changes.
3. **Archiving**: Move outdated UI prototypes to `Anisa-HQ/archive/` rather than deleting them.
4. **Verification**: Validate batch script execution locally before pushing changes to the repository.

## License

Distributed under the terms defined in the [LICENSE](LICENSE) file.
<!-- David Maintenance Verified: 2026-10-26 22:07:39 (Asia/Tashkent) -->
