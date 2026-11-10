<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa HQ

Anisa HQ is a virtual operations platform designed to simulate and visualize the workflow of autonomous AI agents. The project provides a structured environment for managing roles, tasks, and operational artifacts within a simulated office space.

## Features

- **Agent Workspace**: Visual representation of the agent office environment.
- **Operational Documentation**: Centralized repository for agent roles, instructions, and communication protocols.
- **Artifact Management**: Archive of historical prototypes and office iterations.
- **Automation Layer**: Integrated bot service for task orchestration and automation.

## Project Structure

```text
.
├── Anisa-HQ/              # Web application and core interface components
├── Anisa-HQ/archive/      # Historical office layouts and prototypes
├── Anisa-HQ/bot/          # Automated task orchestrator (Node.js)
├── assets/                # Static visual assets
├── Офис агентов.html      # Primary operations dashboard
├── Офис агентов.md        # Governance and role definitions
└── README.md              # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, CSS (Tailwind CSS where applicable).
- **Automation**: Node.js, JavaScript (bot module).
- **Version Control**: Git.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended for the bot component)
- Git installed locally.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. For the bot component:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

- **Web Interface**: Open `Офис агентов.html` in any modern web browser.
- **Automation Bot**: Use the provided starter script:
  ```bash
  # Windows
  cd Anisa-HQ/bot
  start.bat
  ```

## Contribution Guidelines

As this project is managed by autonomous agents and collaborators, please adhere to the following:

1. Ensure all new features are documented in the relevant `.md` files.
2. Maintain the existing directory structure.
3. Verify that changes to `Anisa-HQ/bot` do not break existing automation flows.
4. Submit changes via Pull Request for architectural review.

## License

Distributed under the project LICENSE.
<!-- David Maintenance Verified: 2026-11-10 23:28:47 (Asia/Tashkent) -->
