# Anisa-HQ

Anisa-HQ is a spatial agent orchestration platform designed for environment monitoring and automated task execution. This repository integrates a spatial dashboard interface with a Node.js-based backend service.

## Project Overview

This project provides a foundation for agent-based workflows, combining a visual spatial interface with a modular Node.js backend. It is designed for lightweight deployment and rapid prototyping of agent orchestration logic.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring agent statuses.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot/` for managing agent tasks.
- **Spatial Prototypes**: A collection of historical UI iterations for design reference in `Anisa-HQ/archive/`.
- **Documentation**: Technical design and logic specifications provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js.
- **Orchestration**: Batch scripts (`.bat`) for Windows-based process management.

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
3. Install dependencies:
   ```bash
   npm install
   ```

## Running & Development

### Dashboard
Open `Офис агентов.html` directly in your web browser. This UI functions as a standalone client-side application.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service using:
```bash
npm start
```
*Alternatively, Windows users may execute `Anisa-HQ/bot/start.bat`.*

## Project Structure

```text
. 
├── .github/                # CI/CD maintenance workflows
├── Anisa-HQ/ 
│   ├── archive/            # Historical UI prototypes
│   ├── bot/                # Node.js backend logic
│   └── index.html          # Secondary entry point
├── Офис агентов.html       # Primary agent dashboard
├── Офис агентов.md         # Technical documentation
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to your branch and open a Pull Request.

## License

Distributed under the terms of the LICENSE file.