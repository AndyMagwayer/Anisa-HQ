# Anisa HQ

Anisa HQ is the central repository for the Anisa agent ecosystem, facilitating spatial agent orchestration and node-based automation.

## Project Overview

This repository provides a framework for managing agent interactions. It features a visual spatial dashboard (`Офис агентов.html`) for monitoring agent environments and a Node.js-based backend service located in `Anisa-HQ/bot/` for core automation tasks.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring environment states.
- **Automation Backend**: A modular Node.js service for task processing.
- **Design Archive**: Historical UI iterations and spatial prototypes located in `Anisa-HQ/archive/`.
- **Documentation**: Technical workflow specifications provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, CSS, Vanilla JavaScript.
- **Backend**: Node.js.
- **Version Control**: Git.

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
Open `Офис агентов.html` directly in your web browser. No build process is required for the frontend.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service:
```bash
npm start
```
*Note: Windows users can execute `Anisa-HQ/bot/start.bat` for quick access.*

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