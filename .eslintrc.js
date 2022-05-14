module.exports = {
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2,
        "quotes": [
            "error",
            "single"
        ],
        "indent": [
            "error",
            "tab"
        ]
    },
    "env": {
        "node": true
    },

    "parser": "@typescript-eslint/parser",
    // "tsconfigRootDir": "C:\\Users\\Kevin\\Desktop\\Nerd Stuff\\Typescrippppptttt"
    "tsconfigRootDir": __dirname,
};