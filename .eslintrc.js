module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "react/jsx-filename-extension": ["warn", { extensions: ["js", "jsx"] }],
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error",
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: "es5",
        jsxBracketSameLine: true
      }
    ],
  }
};