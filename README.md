# Anisa HQ

Anisa HQ is a centralized workspace environment designed for agent orchestration and visual office management. The project provides a frontend interface for spatial monitoring and a Node.js backend for automated bot task management.

## Project Overview

This repository acts as the primary hub for the Anisa agent ecosystem. It maintains a bifurcated structure: an interactive browser-based dashboard for environment visualization and a Node.js service for backend operations.

## Features

- **Agent Dashboard**: A spatial office visualization interface (`Офис агентов.html`) for real-time monitoring.
- **Automation Backend**: A modular Node.js engine located in `Anisa-HQ/bot/` for task orchestration.
- **UI Prototyping**: Historical layout iterations and office design archives stored in `Anisa-HQ/archive/`.
- **Documentation**: Technical guidelines for the dashboard architecture provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Version Control**: Git.

## Prerequisites

- Node.js (v16.x or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```
2. Install dependencies for the backend bot:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Dashboard
Open `Офис агентов.html` directly in any modern web browser to access the dashboard.

### Bot Service
Navigate to the bot directory to execute the orchestration service:
```bash
# From the project root
cd Anisa-HQ/bot
npm start
```
*Note: Windows users may utilize the included `start.bat` script inside the `Anisa-HQ/bot/` directory.*

## Project Structure

```text
.
├── .github/                # CI/CD and automation workflows
├── Anisa-HQ/
│   ├── archive/            # UI/UX design iterations
│   ├── bot/                # Node.js backend source
│   └── index.html          # Supplementary UI dashboard
├── Офис агентов.html       # Primary agent dashboard
├── Офис агентов.md         # Dashboard technical documentation
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes with clear, descriptive messages.
4. Push to your branch.
5. Open a Pull Request for review.

## License

Distributed under the terms of the LICENSE file.