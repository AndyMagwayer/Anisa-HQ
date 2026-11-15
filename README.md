<!-- DAVID-SHOWCASE-START -->
<div align="center">
  <a href="https://github.com/AndyMagwayer/Anisa-HQ">
    <img src="./assets/anisa-hq.png" alt="Anisa-HQ Control Room" width="100%" />
  </a>
</div>
<!-- DAVID-SHOWCASE-END -->

# Anisa HQ

Anisa HQ is a virtual operations platform designed to visualize and manage agent workflows and office layouts. This repository serves as the central hub for autonomous agent governance documentation and operational prototypes.

## Features

- **Governance Documentation**: Role definitions and standard operating procedures maintained in `Офис агентов.md`.
- **Visualization Dashboards**: HTML-based dashboards (`Офис агентов.html`, `Anisa-HQ/index.html`) for monitoring office flows.
- **Automation Layer**: Node.js-based orchestration located in `Anisa-HQ/bot`.
- **Iteration Archive**: Historical tracking of UI and office layout prototypes in `Anisa-HQ/archive`.

## Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript.
- **Backend**: Node.js (v16+).
- **Documentation**: Markdown.

## Project Structure

```text
. 
├── .github/             # GitHub workflow configurations
├── Anisa-HQ/
│   ├── archive/         # Historical office prototypes
│   ├── bot/             # Node.js orchestration engine
│   └── index.html       # Secondary web entry point
├── assets/              # Project imagery
├── Офис агентов.html    # Primary operations dashboard
└── Офис агентов.md      # Governance and role definitions
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- Git

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   ```

2. Install automation bot dependencies:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

## Running the Project

### Web Interface
Open `Офис агентов.html` or `Anisa-HQ/index.html` in any modern web browser.

### Automation Bot
Run the provided Windows batch script:
```bash
cd Anisa-HQ/bot
start.bat
```

## Contribution Guidelines

1. **Directory Integrity**: Maintain existing file structures when adding new prototypes.
2. **Documentation**: Ensure architectural changes are documented in `README.md` and relevant `.md` files.
3. **Verification**: Verify functionality of scripts in `/bot` prior to submitting changes.

## License

Distributed under the project LICENSE.