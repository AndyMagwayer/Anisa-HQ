# Anisa HQ

Anisa HQ is an operational repository housing the core infrastructure and visualization dashboard for the Anisa agent environment.

## Project Overview

This repository maintains the primary interactive office dashboard and a supporting Node.js automation service. It acts as the central hub for managing agent workflows and architectural visualizations.

## Features

- **Agent Dashboard**: A visual interface (`Офис агентов.html`) designed for layout management and real-time environment overview.
- **Automation Backend**: A modular Node.js-based service located in `Anisa-HQ/bot` for handling task orchestration.
- **Design Archive**: A curated collection of historical UI prototypes and office layout iterations.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Backend**: Node.js
- **Automation**: GitHub Actions (Maintenance CI)

## Project Structure

```text
.
├── .github/workflows/      # Automated maintenance CI
├── Anisa-HQ/               # Core application and bot components
│   ├── archive/            # Historical UI prototypes
│   └── bot/                # Node.js backend service
├── Офис агентов.html       # Primary interactive dashboard
└── README.md               # Project documentation
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` in any modern web browser to access the dashboard.

### Bot Service
Navigate to the bot directory to initialize the service:
```bash
cd Anisa-HQ/bot
npm start
```
*Windows users may alternatively execute `Anisa-HQ/bot/start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m 'feat: description'`).
4. Push to the branch (`git push origin feature/name`).
5. Open a Pull Request.

## License

Distributed under the LICENSE provided in the root directory.