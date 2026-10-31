# Anisa HQ

Anisa HQ is a specialized project directory serving as the operations headquarters for AI-driven office visualization and agent workflow management.

## Project Overview

This repository centralizes a visual management dashboard (`Офис агентов.html`) and a Node.js-based automation backend. It functions as an interface for monitoring agent environments, utilizing a combination of legacy architectural prototypes and active bot services.

## Features

- **Agent Dashboard**: A visual interface for real-time monitoring and layout management.
- **Automation Backend**: A modular Node.js service for task orchestration.
- **Prototyping Archive**: Historical records of office design iterations and UI flows for reference.

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
├── Офис агентов.md         # Operational documentation
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
Open `Офис агентов.html` directly in any modern web browser.

### Bot Service
Navigate to the bot directory to initialize the service:
```bash
cd Anisa-HQ/bot
npm start
```
*Alternatively, Windows users may execute `start.bat` located in the `Anisa-HQ/bot/` directory.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m 'feat: description'`).
4. Push to the branch (`git push origin feature/name`).
5. Open a Pull Request.

## License

Distributed under the LICENSE provided in the root directory.