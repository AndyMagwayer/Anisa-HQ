# Anisa HQ

Anisa HQ serves as the centralized repository for the Anisa agent environment, providing an interactive office visualization dashboard and supporting Node.js automation utilities.

## Project Overview

The repository facilitates the orchestration of the Anisa agent environment. It is divided into a frontend office dashboard for visual management and a Node.js-based backend for handling modular automation tasks.

## Features

- **Agent Dashboard**: A primary, interactive office layout visualization (`Офис агентов.html`) with associated documentation (`Офис агентов.md`).
- **Automation Backend**: A modular Node.js service located in `Anisa-HQ/bot` for executing background automation.
- **Design Archive**: A collection of historical UI prototypes and room-flow iterations found in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Automation**: GitHub Actions maintenance workflows.

## Project Structure

```text
. 
├── .github/workflows/          # Maintenance and CI/CD scripts
├── Anisa-HQ/                   # Core application components
│   ├── archive/                # Historical UI/UX prototypes
│   ├── bot/                    # Node.js backend automation service
│   └── index.html              # Secondary dashboard workspace
├── Офис агентов.html           # Main office visualization dashboard
└── Офис агентов.md             # Dashboard technical documentation
```

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install the backend dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Simply open `Офис агентов.html` in any modern web browser to access the dashboard.

### Bot Service
Navigate to the bot directory to execute the service:
```bash
cd Anisa-HQ/bot
npm start
```
*Alternatively, Windows users may execute `Anisa-HQ/bot/start.bat`.*

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request for review.

## License

Distributed under the terms of the LICENSE file in the root directory.