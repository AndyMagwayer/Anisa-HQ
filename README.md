# Anisa-HQ

Anisa-HQ is the central repository for the Anisa agent orchestration system, designed to manage the integration between a Node.js automation backend and a browser-based visualization suite for agent monitoring.

## Project Overview

This project provides a structural framework for AI agent workflows. The repository is divided into a Node.js backend for core system automation and a root-level frontend interface for visual environment monitoring.

## Features

* **Agent Dashboard**: A browser-based monitoring interface provided by `Офис агентов.html`.
* **Automation Backend**: A Node.js service for task execution and orchestration, located in `Anisa-HQ/bot`.
* **Operational Protocols**: Centralized documentation of agent workflows in `Офис агентов.md`.
* **Interface Archive**: Historical UI prototypes preserved for architectural reference in `Anisa-HQ/archive`.

## Technology Stack

* **Runtime**: Node.js (v18+)
* **Frontend**: Vanilla HTML5, CSS, and JavaScript

## Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* npm

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Navigate to the bot directory:
   ```bash
   cd Anisa-HQ/bot
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running & Development

* **Backend Service**: Start the automation bot via the bot directory:
  ```bash
  npm start
  ```
* **Dashboard**: Open `Офис агентов.html` in any modern web browser to view the agent status visualization.

## Project Structure

```text
./
├── .github/              # CI/CD and repository maintenance
├── Anisa-HQ/             # Core application modules
│   ├── archive/          # Legacy UI prototypes
│   ├── bot/              # Node.js backend service
│   └── index.html        # Secondary entry point
├── assets/               # Project images and assets
├── Офис агентов.html     # Primary agent dashboard
├── Офис агентов.md       # Operational protocols
└── README.md             # Project documentation
```

## Contribution

Contributions are welcome. Please ensure that modifications follow existing architectural patterns. Submit a Pull Request with a clear description of the proposed changes.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.
<!-- David Maintenance Verified: 2026-11-17 14:17:03 (Asia/Tashkent) -->
