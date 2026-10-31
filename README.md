# Anisa HQ — AI Operations Headquarters

![Anisa HQ](https://img.shields.io/badge/Status-Active-emerald?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20JavaScript%20%7C%20Node.js-blue?style=flat-square)

Anisa HQ is a virtual headquarters and command center designed to monitor, coordinate, and interact with autonomous AI agents and operational workflows.

---

## Project Overview

The platform serves as an interactive interface and operational hub featuring:
- **Agent Workspaces**: Visual representation of office rooms and agent interaction flows (`Офис агентов.html`).
- **Bot Integration**: Node.js-based bot services located within `Anisa-HQ/bot`.
- **Interactive Dashboards**: HTML-based dashboards and historical prototypes for managing agent tasks and office layouts.

---

## Project Structure

```text
Anisa-HQ/
├── .github/workflows/          # CI/CD and automation workflows
├── Anisa-HQ/                   # Core web application components & archives
│   ├── bot/                    # Bot service source code and configuration
│   └── archive/                # Historical UI prototypes and room layouts
├── Офис агентов.html           # Main interactive workspace interface
├── Офис агентов.md             # Operational guidelines and agent descriptions
└── README.md                   # Project documentation
```

---

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Interactive UI layouts and prototypes)
- **Backend / Bot**: Node.js (`Anisa-HQ/bot`)
- **Automation**: GitHub Actions (`.github/workflows`)

---

## Prerequisites

- **Node.js** (v16+ recommended for running the bot components)
- Modern web browser (Chrome, Firefox, Edge, Safari)

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AndyMagwayer/Anisa-HQ.git
   cd Anisa-HQ
   ```

2. Navigate to the bot directory and install dependencies if setting up bot features:
   ```bash
   cd Anisa-HQ/bot
   npm install
   ```

---

## Running & Development

### Running the Web Interface
Open `Офис агентов.html` directly in your browser, or spin up a local static server from the root directory:
```bash
npx serve .
```

### Running the Bot
Navigate to the bot directory and start the service:
```bash
cd Anisa-HQ/bot
npm start
```
Alternatively on Windows, use the provided batch script:
```cmd
Anisa-HQ\bot\start.bat
```

---

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## License

Distributed under the project LICENSE. See [LICENSE](LICENSE) for details.
