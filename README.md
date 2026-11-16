# Anisa-HQ

Anisa-HQ is the repository for the Anisa agent orchestration system, containing a Node.js-based backend for system tasks and browser-based visualization interfaces for monitoring agent environments.

## Project Overview

This project provides the architectural framework for managing AI agent interactions. It includes a backend automation service (`Anisa-HQ/bot`) and operational documentation defining agent behavior protocols.

## Features

*   **Agent Dashboard**: Real-time visual monitoring via `Офис агентов.html`.
*   **Automation Backend**: A Node.js service located in `Anisa-HQ/bot` for operational task management.
*   **Operational Standards**: Defined agent workflows and protocols documented in `Офис агентов.md`.
*   **Archive**: Historical office UI prototypes preserved in `Anisa-HQ/archive`.

## Technology Stack

*   **Runtime**: Node.js (v18+)
*   **Frontend**: Vanilla HTML5, CSS, and JavaScript

## Prerequisites

*   Node.js (v18 or higher)
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
*   **Dashboard**: Open `Офис агентов.html` in a web browser to monitor the agent environment.

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

Contributions are welcome. Please ensure that modifications follow existing architectural patterns. Submit a Pull Request with a clear description of the changes.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.
<!-- David Maintenance Verified: 2026-11-16 13:02:49 (Asia/Tashkent) -->
