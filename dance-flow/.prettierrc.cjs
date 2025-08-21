module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  requirePragma: false,
  insertPragma: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ]
};
