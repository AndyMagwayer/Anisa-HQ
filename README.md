# Anisa HQ

Anisa HQ is the central repository for the Anisa agent ecosystem, facilitating agent orchestration via a Node.js backend and a visual spatial dashboard.

## Project Overview

This repository provides an integrated platform for managing agent interactions. It consists of a spatial visualization dashboard for monitoring agent environments and a Node.js-based backend service for core automation tasks.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring agent states.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot/` for task processing.
- **Design Archive**: Historical UI iterations and spatial prototypes located in `Anisa-HQ/archive/`.
- **Documentation**: Technical workflow specifications provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Automation**: Git-based version control workflows.

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
Open `Офис агентов.html` directly in your web browser. The frontend requires no build steps.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service:
```bash
npm start
```
*Note: Windows users may alternatively execute `start.bat` found in the `Anisa-HQ/bot/` directory.*

## Project Structure

```text
.
├── .github/                # Automation workflows
├── Anisa-HQ/
│   ├── archive/            # UI/UX design prototypes
│   ├── bot/                # Node.js backend source and config
│   └── index.html          # Secondary interface
├── Офис агентов.html       # Primary agent dashboard
├── Офис агентов.md         # Dashboard technical documentation
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes.
4. Push to the branch and open a Pull Request for review.

## License

Distributed under the terms of the LICENSE file.