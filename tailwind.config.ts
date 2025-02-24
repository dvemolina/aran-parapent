import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--primary) / <alpha-value>)",
				primaryVar: "rgb(var(--primaryVar) / <alpha-value>)",
				primaryAcc: "rgb(var(--primaryAcc) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				text: "rgb(var(--text) / <alpha-value>)",
				background: "rgb(var(--background) / <alpha-value>)",
			},
			fontFamily: {
				sifon: ['Sifonn-Pro', 'Arial', 'Helvetica', 'sans-serif'],
			},
			screens: {
				"2xl": "1795px"
			}
		}
	},
	plugins: [forms]
} satisfies Config;
