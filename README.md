# Anisa-HQ

Anisa-HQ is a spatial agent orchestration platform designed for node-based automation and environment monitoring.

## Project Overview

This repository contains the core logic and interface components for the Anisa agent ecosystem. It includes a Node.js-based automation backend and a browser-based spatial dashboard for environment visualization.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring agent statuses.
- **Automation Backend**: A modular Node.js-based bot located in `/Anisa-HQ/bot` for task execution.
- **Design Archive**: Historical UI iterations and spatial prototypes located in `/Anisa-HQ/archive/`.
- **Documentation**: Technical specifications for the agent office flow provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js.
- **Utilities**: Batch scripts for process execution.

## Prerequisites

- Node.js (v16.x or higher)
- npm
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd Anisa-HQ/bot
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

## Running & Development

### Dashboard
Open `Офис агентов.html` directly in your web browser. This interface does not require a local development server.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service:
```bash
npm start
```
*Note: On Windows systems, you may execute `Anisa-HQ/bot/start.bat` to initiate the bot service.*

## Project Structure

```text
.
├── .github/                # CI/CD workflows
├── Anisa-HQ/
│   ├── archive/            # Historical UI prototypes
│   ├── bot/                # Node.js backend logic
│   └── index.html          # Secondary entry point
├── Офис агентов.html       # Primary agent dashboard
├── Офис агентов.md         # Technical dashboard documentation
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to the branch and open a Pull Request.

## License

Distributed under the terms of the LICENSE file.