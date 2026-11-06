# Anisa-HQ

Anisa-HQ is a spatial agent orchestration platform focused on environment monitoring and automated task execution. This repository houses the interface logic for agent visualization and the core Node.js backend services.

## Project Overview

The project provides a hybrid environment: a browser-based spatial dashboard for monitoring agent statuses and a modular Node.js backend for automation. It is designed for lightweight deployment and rapid prototyping of agent-based workflows.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring agent activities.
- **Automation Backend**: A modular Node.js-based service located in `Anisa-HQ/bot/`.
- **Spatial Prototypes**: A collection of historical UI iterations available in `Anisa-HQ/archive/`.
- **Technical Documentation**: Design notes for the agent ecosystem located in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js.
- **Automation**: Custom batch scripts for environment setup and process orchestration.

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
Open `Офис агентов.html` directly in your web browser. No local server is required for rendering the dashboard UI.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service:
```bash
npm start
```
*Alternatively, on Windows systems, execute `Anisa-HQ/bot/start.bat`.*

## Project Structure

```text
.
├── .github/                # CI/CD maintenance workflows
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