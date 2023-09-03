/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				bpa: {
					primary: '#073169',

					secondary: '#a62424',

					accent: '#065f46',

					neutral: '#2b3440',

					'base-100': '#ffffff',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#f87272'
				}
			}
		]
	}
};
