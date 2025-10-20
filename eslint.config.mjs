// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";
import path from "node:path";
import url from "node:url";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineConfig([
  // Игнор
  { ignores: ["dist", "build", "coverage", ".husky", ".vercel", ".netlify"] },

  // Базовые правила JS
  js.configs.recommended,

  // TypeScript (type-checked)
  ...tseslint.configs.recommendedTypeChecked.map((cfg) => ({
    ...cfg,
    languageOptions: {
      ...cfg.languageOptions,
      parserOptions: {
        ...cfg.languageOptions?.parserOptions,
        projectService: true, // понимает tsconfig references и пути
        tsconfigRootDir: __dirname, // корень проекта
      },
    },
  })),

  // Наши плагины/правила
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": pluginJsxA11y,
      import: pluginImport,
    },
    rules: {
      // React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // В dev-режиме предотвращает невалидный refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // A11y
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // Импорт-правила и порядок
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
      "import/newline-after-import": "warn",
      // Пути берёт на себя TS + Vite (aliases)
      "import/no-unresolved": "off",
    },
  },

  // Совместимость с Prettier: отключает конфликтующие формат-правила ESLint
  {
    rules: {
      // Ничего специально не включаем — «чистим» только конфликтующие с Prettier
      ...js.configs.recommended.rules,
    },
  },
]);
