module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		"plugin:nuxt/recommended",
		"plugin:vue/vue3-recommended"
	],
	plugins: [
	],
	rules: {
		"block-spacing": "error",
		"newline-after-var": ["error", "always"],
		"no-tabs": 0,
		indent: ["error", "tab"],
		"comma-dangle": ["error", "never"],
		"object-curly-spacing": ["error", "always", { arraysInObjects: false, objectsInObjects: false }],
		"spaced-comment": ["error", "always"],
		"no-trailing-spaces": ["error", { skipBlankLines: true }],
		"keyword-spacing": ["error", { before: true }],
		"comma-spacing": ["error", { before: false, after: true }],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"vue/valid-v-slot": "off",
		"vue/html-indent": ["error", "tab", {
			alignAttributesVertically: true,
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			ignores: []
		}],
		"vue/max-attributes-per-line": ["error", {
			multiline: 1,
			singleline: 5
		}]
	}
};
