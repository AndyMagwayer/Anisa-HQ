# Anisa-HQ

Anisa-HQ is a spatial agent orchestration platform focused on environment monitoring and automated task execution. This repository provides an integrated environment for managing agent statuses through a spatial dashboard and a Node.js-based automation backend.

## Project Overview

This project serves as a foundation for agent-based workflows, combining a visual dashboard for spatial awareness with a modular Node.js backend. It is optimized for lightweight deployment and rapid prototyping.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) for monitoring agent activities in real-time.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot/` for task orchestration.
- **Spatial Prototypes**: A collection of historical UI iterations available in `Anisa-HQ/archive/`.
- **Technical Documentation**: Design and logic specifications provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js.
- **Tooling**: Batch scripts for local Windows process orchestration.

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
Open `Офис агентов.html` directly in your web browser. This UI is client-side rendered and does not require a local server.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service using the following command:
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
<!-- David Maintenance Verified: 2026-11-08 19:42:33 (Asia/Tashkent) -->
