module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['import'],
  rules: {
    'no-var': 'error',
    'react/jsx-max-depth': ['error', { max: 4 }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
}
