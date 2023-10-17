module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "next/core-web-vitals",
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'error'
  }
}
