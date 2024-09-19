import type { Config } from "tailwindcss";

const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		breakpoints: {
			xs: "var(--xs)",
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto Slab", "serif"],
				manrope: ["Manrope", "sans-serif"],
				playwrite: ["Playwrite PT", "cursive"],
				raleway: ["Raleway", "sans-serif"],
			},
			colors: {
				black: "#141414",
				highlight: "var(--highlight)",
			},
			textColor: {
				DEFAULT: "var(--text)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
