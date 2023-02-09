module.exports = {

    env: {
        es2022: true,
        browser: true,
        node: true,

    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'prettier'
    ],

	overrides: [
        {

            extends: [
                "plugin:@typescript-eslint/recommended",
				"plugin:eslint-comments/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:@typescript-eslint/strict",
			],

            files: ["**/*.{ts,tsx}"],
			"parserOptions": {
				"project": ["./tsconfig.json"], // Specify it only for TypeScript files
				"ecmaVersion": "latest",
				"sourceType": "module"
			},

		}
	],

    "rules": {
        "no-console": 0,
        'no-unused-vars': 0,
        'space-before-function-paren': 0,
        quotes: [
            2,
            'single',
            {
              avoidEscape: true,
              allowTemplateLiterals: true,
            },
          ],
        'prefer-const': [
            'error',
            {
              destructuring: 'all',
            },
          ],

    },

    parser: "@typescript-eslint/parser",

    plugins: ["@typescript-eslint", "typescript-sort-keys"],


}

