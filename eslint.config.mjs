import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: {globals: globals.node}},
  {
    // Note: there should be no other properties in this object
    ignores: ["Tasks/todo/**"]
  },
  pluginJs.configs.recommended,
];