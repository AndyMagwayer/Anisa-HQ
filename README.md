# Anisa HQ

Anisa HQ serves as the central repository for the Anisa agent environment, housing both the interactive dashboard interfaces and the supporting Node.js automation backend.

## Project Overview

This repository manages the orchestration of the Anisa agent office environment. It provides a visual interface for layout management and a Node.js-based service for background automation tasks.

## Features

- **Agent Dashboard**: Primary interactive office layout visualization located in `Офис агентов.html`.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for handling background tasks and agent workflows.
- **Design Archive**: Historical references for UI prototypes, including top-down and room-flow iterations found in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS
- **Backend**: Node.js
- **Automation**: GitHub Actions (CI/CD)

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

2. Navigate to the bot directory and install dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` directly in your preferred web browser to access the dashboard.

### Bot Service
Navigate to the bot directory to start the automation service:
```bash
cd Anisa-HQ/bot
npm start
```
*On Windows systems, you may alternatively execute the provided `start.bat` script.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request for review.

## License

Distributed under the terms of the LICENSE provided in the root directory.