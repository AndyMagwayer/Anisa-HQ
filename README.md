# Anisa HQ

Anisa HQ is the central repository for the Anisa agent environment, managing the interactive office visualization and the supporting automation backend.

## Project Overview

This repository maintains the orchestration of the Anisa agent environment. It combines a client-side visualization dashboard for office layout management with a Node.js-based service for agent-related automation tasks.

## Features

- **Agent Dashboard**: Primary interactive office layout visualization located in `Офис агентов.html`.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for handling background tasks.
- **Design Archive**: Historical UI prototypes and room-flow iterations found in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS
- **Backend**: Node.js
- **Automation**: GitHub Actions

## Project Structure

```text
. 
├── .github/workflows/          # CI/CD maintenance scripts
├── Anisa-HQ/                   # Core application components
│   ├── archive/                # Historical UI prototypes
│   ├── bot/                    # Node.js backend service
│   └── index.html              # Secondary workspace view
├── Офис агентов.html           # Primary interactive dashboard
└── Офис агентов.md             # Dashboard-specific documentation
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install dependencies for the bot service:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` directly in any modern web browser to view the interactive dashboard.

### Bot Service
Navigate to the bot directory and start the service:
```bash
cd Anisa-HQ/bot
npm start
```
*On Windows, you may execute `Anisa-HQ/bot/start.bat`.* 

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request for review.

## License

Distributed under the terms of the LICENSE file in the root directory.