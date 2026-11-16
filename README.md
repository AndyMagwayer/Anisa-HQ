# Anisa-HQ

Anisa-HQ is a centralized repository for orchestrating AI agent workflows and managing virtual office operational protocols. This project serves as a workspace for monitoring agent interactions and simulated office environments.

## Project Overview

The repository contains a core Node.js bot for automation and a collection of HTML-based interfaces for monitoring agent states and office layouts.

## Features

- **Agent Dashboard**: Main interface for monitoring agent status (`Офис агентов.html`).
- **Backend Automation**: Node.js-based bot system for managing task synchronization (`Anisa-HQ/bot`).
- **Operational Protocols**: Documentation for agent conduct and office operational standards (`Офис агентов.md`).
- **UI Prototypes**: Historical office environment simulations available in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- Git

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Setup the Bot**:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

- **Frontend**: Open `Офис агентов.html` in your preferred web browser.
- **Backend**: Navigate to `Anisa-HQ/bot` and run `npm start`.

## Project Structure

```text
./
├── .github/workflows/    # Maintenance automation
├── Anisa-HQ/
│   ├── archive/          # Legacy UI prototypes
│   └── bot/              # Node.js backend integration
├── assets/               # Branding assets
├── Офис агентов.html     # Primary dashboard
├── Офис агентов.md       # Operational protocols
└── README.md             # Project documentation
```

## Contribution

Contributions are welcome. Please ensure your changes adhere to existing project protocols and submit a Pull Request for review.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.