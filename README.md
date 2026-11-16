# Anisa-HQ

Anisa-HQ serves as the centralized repository for orchestrating AI agent workflows and managing virtual office operational protocols. This project provides a workspace for monitoring agent interactions and simulated office environments through both automated backend processes and browser-based interfaces.

## Project Overview

The repository contains a Node.js-based automation service (`/Anisa-HQ/bot`) and a set of HTML/JS visualization tools designed to monitor agent states and office layouts.

## Features

- **Agent Dashboard**: Centralized monitoring interface available via `Офис агентов.html`.
- **Backend Automation**: Node.js-based bot system for managing task synchronization and agent workflows.
- **Operational Protocols**: Guidelines and standards for agent conduct defined in `Офис агентов.md`.
- **Environment Prototypes**: Historical and experimental office UI simulations located in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS, and JavaScript.
- **Backend**: Node.js.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Navigate to the bot directory and install dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

- **Frontend**: Open `Офис агентов.html` in any modern web browser.
- **Backend**: Start the bot service from the `Anisa-HQ/bot` directory:
  ```bash
  npm start
  ```

## Project Structure

```text
./
├── .github/workflows/    # CI/CD maintenance automation
├── Anisa-HQ/
│   ├── archive/          # Legacy UI prototypes
│   ├── bot/              # Node.js backend integration
│   └── index.html        # Secondary entry point
├── assets/               # Branding assets
├── Офис агентов.html     # Primary agent dashboard
├── Офис агентов.md       # Operational protocol documentation
└── README.md             # Project documentation
```

## Contribution

Contributions are welcome. Please ensure that any changes to bot logic or UI protocols are consistent with the existing codebase architecture and submit a Pull Request for review.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.