import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/modules/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				poppins: ["var(--poppins)"],
				inter: ["var(--inter)"],
				caveat: ["var(--caveat)"],
				bricolage_grotesque: ["var(--bricolage_grotesque)"],
			},
			scrollBehavior: ["responsive", "smooth"],
		},
	},
	plugins: [],
};
export default config;
