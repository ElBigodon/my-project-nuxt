// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	env: {
		browser: true,
		es2022: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:nuxt/recommended"
	],
	overrides: [],
	parser: "vue-eslint-parser",
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		"no-undef": "off",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"block-spacing": ["error", "always"],
		"vue/multi-word-component-names": [
			"error", 
			{
				"ignores": ["index", "default"]
			}
		],
		"vue/no-undef-properties": ["error"]
	},
	ignorePatterns: ["**.d.ts", "plugins/**/*.{js,ts}"]
};
