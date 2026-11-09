<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa-HQ

Anisa-HQ serves as the operational interface for managing AI-driven workflows and virtual agent coordination. This repository acts as the central command hub for orchestrating autonomous tasks and tracking project architecture.

## Project Overview

Anisa-HQ provides a visual and logical framework for managing autonomous agent operations. It includes prototype interfaces for office flow and a dedicated bot module for backend task orchestration.

## Features

- **Virtual HQ Dashboard**: Real-time visualization of office operations and agent task flows.
- **Agent Orchestration**: A backend module (`/bot`) designed to manage task execution and node-based communication.
- **Historical Archives**: Access to legacy prototypes and iterative office layouts for reference.
- **Centralized Documentation**: Structured guidelines and roles for autonomous operation workflows.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend/Automation**: Node.js (`/bot` directory).
- **Task Management**: Standard Git workflow with automated deployment scripts.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) for running the bot service.
- A standard modern web browser for the visual interface.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. For the bot service, navigate to the `bot` directory and install dependencies:
   ```bash
   cd bot
   npm install
   ```

## Running the Project

### Web Interface
You can view the visual office dashboard by opening `Офис агентов.html` directly in your browser or serving the root directory using a static web server:
```bash
npx serve .
```

### Bot Service
To start the automation bot:
```bash
cd bot
node src/index.js
```
(Or use the provided `start.bat` on Windows systems).

## Project Structure

```text
├── .github/          # CI/CD and automation workflows
├── Anisa-HQ/         # Core web application assets
├── bot/              # Backend automation and agent orchestration logic
├── archive/          # Legacy project prototypes and layouts
├── Офис агентов.html # Primary dashboard interface
├── Офис агентов.md   # Operational guidelines and agent roles
└── README.md         # Project documentation
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch.
3. Ensure all changes adhere to the existing documentation and architectural patterns.
4. Submit a pull request for code review by the core maintainers.

## License

This project is released under the terms defined in the [LICENSE](LICENSE) file.