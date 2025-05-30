module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  requirePragma: false,
  insertPragma: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};
