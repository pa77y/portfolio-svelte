/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class', // 'media' or 'class', currently reference this via "dark:someCssClass"
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: '#fffaaa',
			},
		},
	},
};

module.exports = config;
