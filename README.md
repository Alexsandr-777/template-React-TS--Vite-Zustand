<p align="center">
  <img src="https://vitejs.dev/logo.svg" width="100" alt="Vite logo">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="100" alt="React logo">
</p>

<h1 align="center">⚡ React + Vite + TypeScript Starter Template</h1>

<p align="center">
  <strong>Шаблон фронтенд-проекта с чистой архитектурой, строгими линтерами и готовыми хуками для быстрого старта.</strong>
</p>

<p align="center">
  <a href="https://github.com/<твой_ник>/<имя_репозитория>/generate">
    <img src="https://img.shields.io/badge/Use_this_template-181717?style=for-the-badge&logo=github" alt="Use this template"/>
  </a>
  <a href="https://codesandbox.io/s/github/<твой_ник>/<имя_репозитория>">
    <img src="https://img.shields.io/badge/Open_in_CodeSandbox-000000?style=for-the-badge&logo=codesandbox" alt="Run in CodeSandbox"/>
  </a>
</p>

---

## 🚀 Как использовать шаблон

> Можно **клонировать напрямую** или **создать проект из шаблона на GitHub**.

### 🧭 Вариант 1 — Клонировать напрямую

```bash
git clone https://github.com/<твой_ник>/<имя_репозитория>.git my-app
cd my-app
npm install
npm run dev
---

🧩 Вариант 2 — Создать новый проект на основе шаблона

На странице репозитория нажми “Use this template” → “Create a new repository”

Укажи имя своего проекта и создай новый репозиторий

Склонируй его к себе:

git clone https://github.com/<твой_ник>/<новый_репозиторий>.git
cd <новый_репозиторий>
npm install
npm run dev

  ---

⚙️ Требования:

  🟢 Node.js ≥ 18

  🧩 npm ≥ 9

  🔧 Git установлен и инициализирован

  ---

💡 Быстрый старт:
    npm install      # установить зависимости
    npm run dev      # запустить dev-сервер

  ---

🧰 Стек:

  ⚛️ React 18 + TypeScript + Vite (SWC)

  🧹 ESLint (Flat config, v9+) + Prettier

  🧩 Vitest + React Testing Library

  🐶 Husky + lint-staged — автоматические проверки перед коммитом

  🪶 Zustand — лёгкий state-manager

  🎨 SVGR + tsconfig-paths + EditorConfig

  ---

🏗️ Команды:
    -Задача:	          -Команда:
    Запуск dev-сервера  npm run dev
    Сборка проекта	    npm run build
    Просмотр сборки	    npm run preview
    Тесты	              npm run test
    Тесты с UI	        npm run test:ui
    Проверка кода	      npm run lint
    Автофикс ESLint	    npm run lint:fix
    Форматирование	    npm run format
    Проверка типов	    npm run typecheck

  ##При каждом коммите Husky автоматически запускает ESLint и Prettier для изменённых файлов.

  ---

  📁 Структура проекта:

       src/
      ├── assets/         # изображения, иконки, звуки
      ├── components/     # UI-компоненты
      ├── stores/         # Zustand сторы
      ├── lib/            # API, utils, вспомогательные функции
      ├── test/           # setup Vitest
      ├── App.tsx
      └── main.tsx

  ---

  ⚡ Пример использования Zustand:

  import { useAppStore } from "@/stores/app.store";

  function Counter() {
    const count = useAppStore((s) => s.count);
    return <div>Count: {count}</div>;
  }

  ---

  🧠 Полезные советы:

Используй npm run format перед коммитом — чтобы не было диффов в стиле кода

Храни access token в памяти через Zustand, а не в localStorage

Добавь .env для API-переменных окружения

Структурируй сторы по доменам: auth.store, workout.store, nutrition.store — удобно для фитнес-экосистемы

---

MIT © Sokol
```
