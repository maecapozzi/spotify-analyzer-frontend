module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
  "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": [
    "error",
    "unix"
    ],
    "quotes": [
    "error",
    "single"
    ],
    "semi": [
    "error",
    "never"
    ]
  }
};