import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: "(var(--primary)",
				primaryVar: "(var(--primaryVar)",
				primaryAcc: "(var(--primaryAcc)",
				secondary: "(var(--secondary)",
				text: "(var(--text)",
				background: "(var(--background)",
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
