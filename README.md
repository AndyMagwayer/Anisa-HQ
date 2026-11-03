# Anisa HQ

Anisa HQ is a centralized repository for agent orchestration and visual office management. It provides a frontend interface for spatial monitoring and a Node.js backend for task management.

## Project Overview

This repository serves as the core hub for the Anisa agent ecosystem, containing both the interactive browser-based dashboard for spatial environment visualization and the Node.js service responsible for backend operations.

## Features

- **Agent Dashboard**: A spatial office visualization interface (`Офис агентов.html`) for real-time monitoring.
- **Automation Backend**: A modular Node.js engine located in `Anisa-HQ/bot/` for task orchestration.
- **Design Archive**: Historical UI layout iterations and office design drafts stored in `Anisa-HQ/archive/`.
- **Technical Documentation**: Guidelines for dashboard architecture and design logic found in `Офис агентов.md`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Version Control**: Git.

## Prerequisites

- Node.js (v16.x or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```
2. Install backend dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Dashboard
Open `Офис агентов.html` directly in any modern web browser to access the spatial dashboard.

### Bot Service
Navigate to the bot directory to execute the orchestration service:
```bash
cd Anisa-HQ/bot
npm start
```
*Note: Windows users may execute `start.bat` located in the `Anisa-HQ/bot/` directory.*

## Project Structure

```text
.
├── .github/                # Automation workflows
├── Anisa-HQ/
│   ├── archive/            # UI/UX design iterations
│   ├── bot/                # Node.js backend logic
│   └── index.html          # Secondary dashboard UI
├── Офис агентов.html       # Primary agent dashboard
├── Офис агентов.md         # Dashboard documentation
└── README.md
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes with clear, descriptive messages.
4. Push to your branch and open a Pull Request.

## License

Distributed under the terms of the LICENSE file.