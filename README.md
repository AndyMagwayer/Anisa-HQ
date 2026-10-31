# Anisa HQ — AI Operations Headquarters

Anisa HQ is a virtual headquarters interface designed for visualizing and managing AI agent workflows and office layouts.

## Project Overview

The platform provides a visual interface for managing agent environments, supported by a modular Node.js-based bot service for backend task orchestration. The repository includes current dashboard implementations, legacy prototyping archives, and bot automation scripts.

## Features

- **Interactive Dashboard**: Primary management interface (`Офис агентов.html`) for monitoring agent layouts.
- **Bot Service**: A Node.js backend component for operational automation.
- **Prototype Archive**: A historical collection of previous office UI iterations and flow configurations (`/archive`).

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Backend**: Node.js
- **Environment**: GitHub Actions for repository automation

## Project Structure

```text
.
├── .github/workflows/      # Automated maintenance CI
├── Anisa-HQ/               # Core application and bot components
│   ├── archive/            # Historical UI iterations
│   └── bot/                # Node.js backend service
├── Офис агентов.html       # Primary interactive dashboard
├── Офис агентов.md         # Operational documentation
└── README.md               # Project documentation
```

## Prerequisites

- Node.js (v16+)
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
Open `Офис агентов.html` in any modern web browser to access the core workspace.

### Bot Service
Navigate to the bot directory to execute the service:
```bash
cd Anisa-HQ/bot
npm start
```
*On Windows, you may alternatively execute `start.bat` within the `bot/` directory.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'feat: description'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

Distributed under the LICENSE provided in the root directory.
<!-- David Maintenance Verified: 2026-10-31 19:13:35 (Asia/Tashkent) -->
