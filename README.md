<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa-HQ

Anisa-HQ is the central operational repository for managing AI-driven workflows and virtual agent coordination. It serves as a visual and logical hub for orchestrating autonomous tasks and mapping project architecture.

## Project Overview

This project provides a structural framework for agent-based operations. It combines a front-end visual dashboard for tracking office flows with a dedicated Node.js backend module for task orchestration.

## Features

- **Office Dashboard**: Real-time visualization of agent spatial flow and operational status.
- **Agent Orchestration**: A specialized `/bot` module built on Node.js for backend automation.
- **Architectural Archives**: Version-controlled prototypes of office layouts and interface iterations.
- **Documentation**: Integrated operational guidelines and agent role definitions.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS.
- **Backend**: Node.js.
- **Tooling**: Standard shell-based deployment scripts for Windows environment compatibility.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended).
- A modern web browser.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Navigate to the bot directory and install dependencies:
   ```bash
   cd bot
   npm install
   ```

## Running the Project

### Web Interface
Open `Офис агентов.html` in your browser or serve the root directory:
```bash
npx serve .
```

### Bot Service
To start the orchestration service:
```bash
cd bot
node src/index.js
```
*(Or execute `start.bat` on Windows systems).* 

## Project Structure

```text
├── .github/          # CI/CD workflows
├── Anisa-HQ/         # Core application components and archive assets
├── bot/              # Node.js backend logic and dependencies
├── assets/           # Repository imagery
├── Офис агентов.html # Main dashboard interface
├── Офис агентов.md   # Agent role definitions and guidelines
└── README.md         # Project documentation
```

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch.
3. Ensure changes align with the modular structure of the `/bot` and root interface files.
4. Submit a pull request for review.

## License

This project is released under the terms defined in the [LICENSE](LICENSE) file.