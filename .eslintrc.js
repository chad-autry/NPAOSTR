module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true
    },
    "extends": [
      "eslint:recommended",
      "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};
