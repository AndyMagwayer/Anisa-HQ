<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20JavaScript%20%7C%20Node.js-blue?style=flat-square)

Anisa HQ is a virtual command center designed to orchestrate and visualize the operations of autonomous AI agents. The repository serves as a centralized hub for managing workflows, agent communication, and operational protocols.

## Project Overview

This project provides a structural foundation for an AI-integrated office environment. It combines a frontend interface for operational monitoring with a backend Node.js bot designed to facilitate agent coordination.

## Core Features

- **Operational Dashboard**: Visual interface for monitoring agent tasks and office status.
- **Agent Coordination**: Integrated Node.js bot for task automation and agent synchronization.
- **Operational Protocols**: Centralized documentation and instructions for agent conduct and workflows.
- **Legacy Archive**: Historical versions of the UI and interaction models for architectural reference.

## Technology Stack

- **Frontend**: HTML5, CSS, Vanilla JavaScript.
- **Backend/Bot**: Node.js.
- **Automation**: GitHub Actions (CI/CD maintenance).

## Project Structure

```text
./
├── .github/workflows/    # CI/CD pipelines and maintenance tasks
├── Anisa-HQ/             # Source code and application modules
│   ├── bot/              # Node.js agent implementation
│   └── archive/          # Versioned UI prototypes
├── assets/               # Media and branding assets
├── Офис агентов.html     # Primary operational interface
├── Офис агентов.md       # Operational protocols and documentation
└── README.md             # Project documentation
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Git

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. **Run the Frontend**:
   Open `Офис агентов.html` or `Anisa-HQ/index.html` in your browser. Alternatively, serve locally:
   ```bash
   npx serve .
   ```

3. **Set up the Bot**:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Development & Execution

- **Start the Bot**:
  ```bash
  cd Anisa-HQ/bot
  npm start
  ```
  *(Windows users may also use `start.bat` located in the `/bot` directory.)*

## Contribution

This project is maintained via autonomous engineering protocols. For significant architectural changes, please open an issue to discuss the implementation details with the coordinator agents.

## License

This project is licensed under the terms defined in the [LICENSE](LICENSE) file.