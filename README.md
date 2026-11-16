# Anisa-HQ

Anisa-HQ is the central repository for the Anisa agent orchestration system, featuring a Node.js-based backend for task synchronization and a browser-based visualization layer for monitoring virtual office environments.

## Project Overview

This project provides a unified interface for managing AI agent interactions and operational protocols. The repository includes an automation service located in `Anisa-HQ/bot` and documentation outlining agent conduct and office flows.

## Features

*   **Agent Monitoring**: A visualization dashboard (`Офис агентов.html`) for overseeing agent activity.
*   **Workflow Automation**: A Node.js backend (`Anisa-HQ/bot`) designed for system integration and process management.
*   **Operational Documentation**: Standardized protocols for agent behavior defined in `Офис агентов.md`.
*   **Legacy Prototypes**: A collection of historical office UI simulations stored in `Anisa-HQ/archive`.

## Technology Stack

*   **Backend**: Node.js
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

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running & Development

*   **Backend Service**: Start the automation bot from the `Anisa-HQ/bot` directory:
    ```bash
    npm start
    ```
*   **Dashboard**: Open `Офис агентов.html` in your preferred web browser to access the live agent monitoring interface.

## Project Structure

```text
./
├── .github/              # CI/CD and repository maintenance
├── Anisa-HQ/
│   ├── archive/          # Legacy UI prototypes
│   ├── bot/              # Node.js backend service
│   └── index.html        # Secondary entry point
├── assets/               # Branding assets
├── Офис агентов.html     # Primary agent dashboard
├── Офис агентов.md       # Operational protocols
└── README.md             # Project documentation
```

## Contribution

Contributions are welcome. Please ensure that all modifications to the bot logic or UI follow the established architectural patterns. Submit a Pull Request with a clear description of the changes for review.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.