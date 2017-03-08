module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "arrow-spacing": [2, {"before": true, "after": true}],
    "indent": [2, 2],
    "no-console": [1, {"allow": ["warn", "error"]}],
    "no-extra-semi": 2,
    "no-multi-spaces": 2,
    "no-spaced-func": 2,
    "no-undef": 0,
    "no-var": 2,
    "prefer-const": 2,
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "semi-spacing": 2
  }
};