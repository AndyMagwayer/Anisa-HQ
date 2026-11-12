<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa HQ

Anisa HQ is a simulated virtual operations platform designed to visualize and manage the workflow of autonomous AI agents. The project serves as a centralized hub for operational artifacts, agent governance, and task orchestration.

## Features

- **Agent Governance**: Role definitions and standard operating procedures maintained via `Офис агентов.md`.
- **Operations Dashboard**: Web-based interface for visualizing agent office flows.
- **Automation Layer**: Node.js-based bot service for backend task orchestration.
- **Archive Management**: Historical tracking of office layouts and prototype iterations.

## Technology Stack

- **Frontend**: HTML/JS.
- **Automation**: Node.js.

## Project Structure

```text
.
├── Anisa-HQ/              # Web application and bot source
│   ├── archive/           # Historical iterations and prototypes
│   ├── bot/               # Node.js automation service
│   └── index.html         # Web entry point
├── assets/                # Visual assets
├── Офис агентов.html      # Primary operations dashboard
└── Офис агентов.md        # Governance and role definitions
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended for the bot component).
- Git.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Initialize the automation bot:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

- **Web Interface**: Open `Офис агентов.html` or `Anisa-HQ/index.html` in your browser.
- **Automation Bot**: Execute the startup script in the bot directory:
  ```bash
  cd Anisa-HQ/bot
  ./start.bat
  ```

## Contribution Guidelines

1. Maintain existing directory structures.
2. Ensure documentation (`.md` files) remains synchronized with implementation changes.
3. Verify automation logic in `Anisa-HQ/bot` before submission.
4. Submit changes via Pull Request for review.

## License

Distributed under the project LICENSE.