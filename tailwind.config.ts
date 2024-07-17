import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			...colors,
			white: "#ffffff",
			black: "#242424",
			highlight: "#CBFFB299",
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto Slab", "serif"],
				manrope: ["Manrope", "sans-serif"],
				playwrite: ["Playwrite PT", "cursive"],
			},
			screens: {
				xs: "475px",
				...defaultTheme.screens,
			},
		},
	},
	plugins: [],
} satisfies Config;
