/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    require.resolve('prettier-plugin-prisma'),
    require.resolve('prettier-plugin-tailwindcss')
  ],
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'none',
  tabWidth: 2,
  bracketSpacing: true,
  semi: false
}
