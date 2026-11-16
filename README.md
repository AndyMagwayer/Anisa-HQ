# Anisa-HQ

Anisa-HQ is a centralized repository for the Anisa agent orchestration system. It provides a Node.js-based backend for operational automation and a browser-based visualization suite for monitoring agent environments.

## Project Overview

This project serves as the architectural framework for managing AI agent interactions. It separates backend logic (located in `Anisa-HQ/bot`) from visual interfaces (located in the root directory and `Anisa-HQ/archive`) to provide a clear distinction between system automation and operational monitoring.

## Features

*   **Agent Dashboard**: Real-time visual monitoring accessible via `Офис агентов.html`.
*   **Automation Backend**: A robust Node.js service for operational task management.
*   **Operational Standards**: Documentation of agent workflows and protocols provided in `Офис агентов.md`.
*   **UI Archive**: Historical office interface prototypes preserved for reference.

## Technology Stack

*   **Runtime**: Node.js (v18+)
*   **Frontend**: Vanilla HTML5, CSS, and JavaScript

## Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   npm

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

*   **Backend Service**: Start the automation bot:
    ```bash
    npm start
    ```
*   **Dashboard**: Open `Офис агентов.html` in any modern web browser to monitor the environment.

## Project Structure

```text
./
├── .github/              # CI/CD and repository maintenance
├── Anisa-HQ/
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
<!-- David Maintenance Verified: 2026-11-16 17:04:29 (Asia/Tashkent) -->
