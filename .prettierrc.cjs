// TODO: change file to .prettierrc and remove "pluginSearchDirs" after
// upgrading to 'prettier-plugin-svelte' version 3

module.exports = {
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	semi: true,
	trailingComma: 'all',
	printWidth: 80,
	pluginSearchDirs: false, // you can omit this when using Prettier version 3
	plugins: [require('prettier-plugin-svelte')],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
