/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/templates/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			mukta: ['var(--font-mukta)', ...fontFamily.sans],
			maven: ['var(--font-maven)', ...fontFamily.sans],
		},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
		},
		colors: {
			grey: ' #7D7D7D;',
			white: '#FFFFFF',
			lightBlue: '#18354B',
			darkPurple: '#0E0A30',
			lightGreen: '#00AC4D',
			lightGreyBg: '#F4F4F4',
			black: '#000000',
		},
		screens: {
			sm: '576px',
			md: '960px',
			lg: '1440px',
		},
	},
	plugins: [],
};
