# ANISA HQ

> AI Operations Headquarters — виртуальная штаб-квартира автономных AI-агентов, управляемая через ANISA и Chief Coordinator.

## Overview

**ANISA HQ** — это мультиагентная AI-платформа, предназначенная для организации, координации и управления специализированными AI-агентами.

Система объединяет:

* персонального AI-ассистента **ANISA**;
* центрального координатора **Chief Coordinator**;
* специализированных AI-агентов;
* систему задач;
* межагентное взаимодействие;
* память;
* инструменты и внешние сервисы;
* права и разрешения;
* мониторинг активности;
* виртуальный 3D-офис.

Основная идея проекта:

```text
                         USER
                           │
                           ▼
                         ANISA
                  Personal AI Assistant
                           │
                           ▼
                  CHIEF COORDINATOR
                 AI Operations Manager
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     DEVELOPMENT        RESEARCH         MARKETING
        AGENTS            AGENTS           AGENTS
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                    AGENT RUNTIME
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       MEMORY            TOOLS           TASKS
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                    EXTERNAL SERVICES
                           │
                           ▼
                    ANISA HQ / GATHER
```

## Core Philosophy

ANISA HQ строится вокруг нескольких принципов.

### 1. Agents are workers

Каждый AI-агент имеет конкретную роль, набор возможностей, инструменты и область ответственности.

Агент не должен быть просто UI-карточкой или чат-ботом.

### 2. Coordinator controls operations

Chief Coordinator отвечает за распределение задач между агентами и контроль выполнения.

### 3. ANISA is the user-facing intelligence layer

ANISA является главным интерфейсом взаимодействия пользователя с системой.

Пользователь не обязан напрямую управлять каждым агентом.

### 4. Gather is the visual layer

Gather используется как виртуальный 3D-офис.

Он не является основным AI runtime.

Основная логика системы находится во внешнем backend.

### 5. Human remains in control

Автоматизация не должна лишать пользователя контроля.

Система должна поддерживать:

* approval;
* permissions;
* manual intervention;
* task cancellation;
* agent disabling;
* execution logs.

---

# System Components

## ANISA

ANISA — персональный AI-ассистент пользователя.

Основные функции:

* принимать запросы пользователя;
* понимать контекст;
* взаимодействовать с Chief Coordinator;
* показывать состояние системы;
* предоставлять результаты;
* работать с памятью;
* управлять уведомлениями;
* запрашивать подтверждение для критических действий.

---

## Chief Coordinator

Chief Coordinator — центральный операционный AI-агент.

Его задача:

1. получить задачу;
2. понять требования;
3. разбить задачу на подзадачи;
4. определить необходимых агентов;
5. распределить работу;
6. контролировать выполнение;
7. обрабатывать ошибки;
8. объединить результаты;
9. передать результат ANISA.

---

# AI Agents

Система рассчитана на подключение специализированных агентов.

Примеры:

| Agent               | Responsibility                |
| ------------------- | ----------------------------- |
| Frontend Agent      | UI и frontend development     |
| Backend Agent       | API и server-side development |
| QA Agent            | Testing и quality assurance   |
| DevOps Agent        | Infrastructure и deployment   |
| Research Agent      | Исследование и анализ         |
| Documentation Agent | Техническая документация      |
| Marketing Agent     | Marketing и content           |
| Data Agent          | Работа с данными              |
| Code Reviewer       | Анализ и review кода          |

Количество агентов не является фиксированным.

Архитектура должна позволять добавлять новых агентов без изменения ядра системы.

---

# Task System

Каждая работа в ANISA HQ представляется как Task.

Пример:

```text
Task
 ├── ID
 ├── Title
 ├── Description
 ├── Priority
 ├── Status
 ├── Created By
 ├── Assigned Agent
 ├── Subtasks
 ├── Dependencies
 ├── Tools
 ├── Result
 └── Execution Logs
```

Типовые состояния:

```text
PENDING
   ↓
PLANNING
   ↓
ASSIGNED
   ↓
IN_PROGRESS
   ↓
REVIEW
   ↓
COMPLETED
```

При ошибке:

```text
IN_PROGRESS
      ↓
     ERROR
      ↓
  RETRY / REASSIGN / CANCEL
```

---

# Memory

ANISA HQ использует несколько уровней памяти.

### Short-Term Memory

Контекст текущей задачи или разговора.

### Long-Term Memory

Долгосрочные знания, предпочтения и важные события.

### Shared Memory

Информация, доступная нескольким агентам.

### Agent Memory

Специализированный контекст конкретного агента.

---

# Agent Communication

Агенты должны иметь возможность обмениваться структурированными сообщениями.

Пример:

```text
Frontend Agent
      │
      │ request
      ▼
Backend Agent
      │
      │ API specification
      ▼
Frontend Agent
```

Коммуникация должна проходить через контролируемый communication layer.

Агенты не должны хаотично обращаться друг к другу напрямую без контроля системы.

---

# Tools

Агенты могут получать доступ к инструментам.

Примеры:

* GitHub;
* filesystem;
* web search;
* databases;
* APIs;
* terminal;
* deployment services;
* documentation systems;
* analytics;
* Gather;
* Figma.

Каждый tool должен иметь определённые permissions.

---

# ANISA HQ

ANISA HQ — визуальное представление AI-команды.

В виртуальном офисе могут отображаться:

* агенты;
* комнаты;
* статусы;
* текущие задачи;
* activity feed;
* meetings;
* system alerts;
* task boards.

Например:

```text
┌─────────────────────────────────────┐
│              ANISA HQ               │
├───────────────┬─────────────────────┤
│ DEVELOPMENT   │ RESEARCH            │
│               │                     │
│ 🟢 Frontend   │ 🟢 Research         │
│ 🟡 Backend    │ 🔵 Data             │
│ 🔵 QA         │                     │
├───────────────┼─────────────────────┤
│ OPERATIONS    │ MARKETING           │
│               │                     │
│ 🟢 Coordinator│ 🟢 Content          │
│               │ 🟡 Growth           │
└───────────────┴─────────────────────┘
```

---

# Architecture

Высокоуровневая архитектура:

```text
User
 │
 ▼
ANISA
 │
 ▼
Chief Coordinator
 │
 ├── Task Manager
 ├── Agent Manager
 ├── Memory Manager
 ├── Tool Manager
 ├── Permission Manager
 └── Communication Bus
          │
          ▼
      AI Agents
          │
          ▼
      External Tools
          │
          ▼
       Database
```

Подробнее:

See [`ARCHITECTURE.md`](./ARCHITECTURE.md)

---

# Agent Documentation

Описание агентов:

See [`AGENTS.md`](./AGENTS.md)

---

# Project Goals

## Short-Term

* создать Agent Runtime;
* реализовать Chief Coordinator;
* реализовать базовый Task Manager;
* создать Agent Registry;
* реализовать memory layer;
* реализовать tool permissions;
* создать базовый web dashboard.

## Mid-Term

* agent-to-agent communication;
* persistent memory;
* GitHub integration;
* autonomous task execution;
* monitoring;
* logs;
* Figma integration;
* Gather integration.

## Long-Term

* полностью масштабируемая AI workforce;
* автономные workflows;
* dynamic agent creation;
* intelligent resource allocation;
* advanced memory;
* multi-project management;
* self-improving operational workflows.

---

# Status

> 🚧 Active Development

ANISA HQ находится на стадии проектирования и разработки.

Архитектура может изменяться по мере реализации системы.

---

# License

License will be defined before the first public release.
