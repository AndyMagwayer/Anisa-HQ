# Anisa HQ

Anisa HQ is the central repository for the Anisa agent ecosystem, facilitating agent orchestration through a Node.js backend and providing a visual spatial dashboard for monitoring.

## Project Overview

This repository integrates a browser-based agent dashboard with a Node.js backend service. It serves as the primary hub for managing agent interactions and visualizing office-like spatial environments.

## Features

- **Agent Dashboard**: A spatial visualization interface (`Офис агентов.html`) used to monitor agent states and environments.
- **Automation Backend**: A modular Node.js service (`Anisa-HQ/bot/`) designed to handle background task processing and agent orchestration.
- **Design Archive**: A collection of historical UI iterations and spatial design experiments located in `Anisa-HQ/archive/`.
- **Documentation**: Technical specifications for the dashboard and interaction flow provided in `Офис агентов.md`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.
- **Version Control**: Git.

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
Open `Офис агентов.html` in your web browser. No compilation is required for the frontend.

### Bot Service
From the `Anisa-HQ/bot` directory, start the service:
```bash
npm start
```
*Note: Windows users can use `start.bat` located in the `Anisa-HQ/bot/` directory.*

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
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes.
4. Push to your branch and open a Pull Request.

## License

Distributed under the terms of the LICENSE file.