import eslintPluginImport from "eslint-plugin-import";
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ["node_modules/", "dist/", "build/", ".git/", "**/*.min.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "import": eslintPluginImport
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "import/order": [
        "warn",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ]
    }
  }
];
