// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		container: {
		},
		extend: {
			colors: {
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))"
			}
		}
	},
	plugins: [],
};

export default config;