# Anisa HQ

Anisa HQ is a centralized workspace for agent orchestration and environment visualization. The project integrates an interactive office-based dashboard with a Node.js backend automation service.

## Project Overview

This repository serves as the core environment for managing agent activities and workspace visualization. It consists of a frontend dashboard for real-time tracking and a Node.js backend for automation tasks.

## Features

- **Office Dashboard**: Interactive agent visualization available via `Офис агентов.html`.
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot/` for orchestration tasks.
- **Documentation**: Technical specifications for the dashboard found in `Офис агентов.md`.
- **Project Archive**: Historical layouts and UI prototypes located in `Anisa-HQ/archive/`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Compatibility**: Cross-platform (Windows, Linux, macOS).

## Project Structure

```text
.
├── .github/workflows/          # CI/CD orchestration
├── Anisa-HQ/
│   ├── archive/                # UI/UX layout iterations
│   ├── bot/                    # Node.js backend service
│   └── index.html              # Supplementary dashboard
├── Офис агентов.html           # Primary dashboard
└── Офис агентов.md             # Dashboard documentation
```

## Prerequisites

- Node.js (v16.x or higher)
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
Open `Офис агентов.html` in any modern web browser to interact with the dashboard.

### Bot Service
Navigate to the bot directory and execute the service:
```bash
# Standard approach
npm start

# Windows users can also use:
start.bat
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

Distributed under the terms of the LICENSE file.