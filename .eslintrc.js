module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": 0,
    "no-var": 2,
    "prefer-const": 2,
    "object-shorthand": 2,
    "no-multi-spaces": 2,
    "spaced-comment": 2,
    "camelcase": 2,
    "comma-spacing": 2,
    "jsx-quotes": 2,
    "key-spacing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-equals-spacing": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-no-duplicate-props": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-unknown-property": 2,
    "react/jsx-boolean-value": 2,
    "camelcase": 0
  }
};