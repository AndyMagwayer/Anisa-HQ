# Anisa HQ

Anisa HQ is a centralized workspace for agent orchestration and environment visualization. The project integrates an interactive office-based dashboard with a Node.js backend automation service.

## Project Overview

This repository provides the core environment for managing agent activities. It serves as a dashboard and orchestration layer, featuring:
- **Office Dashboard**: An interactive visual representation of agent workspaces.
- **Automation Backend**: A Node.js-based service for backend automation tasks.

## Features

- **Office Visualization**: Interactive layouts and agent tracking via `Офис агентов.html`.
- **Technical Documentation**: Detailed specifications provided in `Офис агентов.md`.
- **Automation Engine**: A modular Node.js bot service located in `Anisa-HQ/bot`.
- **UI/UX Archive**: Historical dashboard prototypes and layout experiments located in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Environment**: Cross-platform (Windows/Linux/macOS).

## Project Structure

```text
.
├── .github/workflows/          # CI/CD orchestration
├── Anisa-HQ/
│   ├── archive/                # UI/UX layout iterations
│   ├── bot/                    # Node.js backend service
│   └── index.html              # Supplementary dashboard
├── Офис агентов.html           # Primary dashboard
└── Офис агентов.md             # Dashboard documentation
```

## Prerequisites

- Node.js (v16.x or higher)
- Git

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

## Running & Development

### Web Interface
Open `Офис агентов.html` in any modern web browser to interact with the dashboard.

### Bot Service
From the `Anisa-HQ/bot` directory, run the service using:
```bash
npm start
```
*Note: Windows users may alternatively execute `start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

Distributed under the terms of the LICENSE file.