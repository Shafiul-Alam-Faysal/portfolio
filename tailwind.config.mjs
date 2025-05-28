/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["var(--font-outfit)", "sans-serif"],
				ovo: ["var(--font-ovo)", "serif"],
				playfair: ["var(--font-playfair)", "serif"],
			},

			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				lightHover: "#fcf4ff",
				darkHover: "#2a004a",
				darkTheme: "#11001F",
			},
			boxShadow: {
				black: "4px 4px 0 #000",
				white: "4px 4px 0 #fff",
			},
		},
	},
	darkMode: "selector",
	plugins: [],
};

export default config;
