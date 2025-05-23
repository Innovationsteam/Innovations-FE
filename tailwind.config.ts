import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
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
				customGreen: "#00c063",
				black: "#141414",
				highlight: "hsl(var(--highlight))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				checkboxBorder: "hsl(var(--checkbox-border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				basic: "hsl(var(--basic))",
			},
			textColor: {
				DEFAULT: "hsl(var(--text))",
				subtitle: "hsl(var(--subtitle))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
			scrollbar: {
				hide: "scrollbar-width: none; -ms-overflow-style: none;",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					"scrollbar-width": "none",
					"-ms-overflow-style": "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			});
		},
	],
} satisfies Config;

export default config;
