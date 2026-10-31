# Anisa HQ — AI Operations Headquarters

![Status](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20JavaScript%20%7C%20Node.js-blue?style=flat-square)

Anisa HQ is a virtual headquarters and command center interface designed for visualizing and managing autonomous AI agent workflows.

---

## Project Overview

The platform provides a visual interface for managing AI agent environments and integrates with local Node.js-based bot services. The project consists of frontend dashboard prototypes and a backend bot component.

## Features

- **Visual Workspace**: Centralized interactive interface (`Офис агентов.html`) for monitoring agent layouts.
- **Bot Integration**: Modular Node.js bot architecture for handling background tasks.
- **Historical Prototyping**: Archive of legacy office layouts and flow configurations.

## Project Structure

```text
Anisa-HQ/
├── .github/workflows/          # Automated maintenance and CI workflows
├── Anisa-HQ/                   # Core application files
│   ├── bot/                    # Bot service source code (Node.js)
│   └── archive/                # Historical UI and layout prototypes
├── Офис агентов.html           # Primary interactive dashboard
├── Офис агентов.md             # Operational documentation
└── README.md                   # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript
- **Backend**: Node.js
- **Automation**: GitHub Actions

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Install bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running & Development

### Web Interface
Open `Офис агентов.html` in any modern web browser to access the workspace.

### Bot Service
Navigate to the bot directory and execute the following:
```bash
cd Anisa-HQ/bot
npm start
```
On Windows, you may also use `Anisa-HQ\bot\start.bat`.

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/name`.
3. Commit changes: `git commit -m 'feat: description'`.
4. Push to the branch: `git push origin feature/name`.
5. Open a Pull Request.

## License

Distributed under the project LICENSE. See [LICENSE](LICENSE) for details.