const bestPractices = require('./rules/best-practices').rules;
const errors = require('./rules/errors').rules;
const node = require('./rules/node').rules;
const style = require('./rules/style').rules;
const variables = require('./rules/variables').rules;
const es6 = require('./rules/es6').rules;
const strict = require('./rules/strict').rules;

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    // browser: true,  // add by vue3-recommended
    // es6: true,  // add by vue3-recommended
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  // parser: require.resolve("vue-eslint-parser"),  // add by @vue/typescript/recommended
  parserOptions: {
    ecmaVersion: 2020,
    // sourceType: "module",  // add by vu3-recommended
    // parser: require.resolve("@typescript-eslint/parser"),  // add by @vue/typescript
    // extraFileExtensions: [".vue"],  // add by @vue/typescript
    ecmaFeatures: {
    //   jsx: true,  // add by @vue/typescript
      generators: false,
      objectLiteralDuplicateProperties: false
    },
  },
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],   // add by @vue/typescript
  //     rules: {
  //       "no-unused-vars": "off",
  //     },
  //   },
  //   {
  //     files: ["shims-tsx.d.ts"],   // add by @vue/typescript/recommended
  //     rules: {
  //       "@typescript-eslint/no-empty-interface": "off",
  //       "@typescript-eslint/no-explicit-any": "off",
  //       "@typescript-eslint/no-unused-vars": "off",
  //     },
  //   },
  // ],
  rules: {
    "no-console": isProd ? "warn" : "off",
    "no-debugger": isProd ? "warn" : "off",
    "comma-dangle": ["error", 'always-multiline'],
    ...bestPractices,
    ...errors,
    ...node,
    ...style,
    ...variables,
    ...es6,
    ...strict,
    //   'no-nested-ternary': 'off',
    //   'no-shadow': ['error', { allow: ['state', 'getters'] }],
  },
};
