const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'

	theme: {
		colors: {
			primary: {
				lightest: colors.blue[300],
				light: colors.blue[400],
				normal: colors.blue[500],
				dark: colors.blue[600],
			},
			secondary: {
				finest: colors.gray[100],
				fine: colors.gray[200],
				lightest: colors.gray[300],
				light: colors.gray[400],
				normal: colors.gray[500],
				dark: colors.gray[600],
				darkest: colors.gray[800],
			},
			danger: {
				lightest: colors.red[300],
				light: colors.red[400],
				normal: colors.red[500],
				dark: colors.red[600],
			},
			success: {
				lightest: colors.green[300],
				light: colors.green[400],
				normal: colors.green[500],
				dark: colors.green[600],
			},
			warning: {
				lightest: colors.yellow[300],
				light: colors.yellow[400],
				normal: colors.yellow[500],
				dark: colors.yellow[600],
			},
			white: colors.white,
			black: colors.black,
			transparent: "#1C00ff00",
		},

		fill: {
			primary: {
				200: colors.blue[200],
				400: colors.blue[400],
			},
		},

		extend: {
			boxShadow: {
				primary: "0 10px 8px -6px rgba(33, 132, 243, 0.5)",
				success: "0 10px 8px -6px rgba(0, 250, 154, 0.5)",
				danger: "0 10px 8px -6px rgba(250,128,114, 0.5)",
				warning: "0 10px 8px -6px rgba(255,228,181, 0.5)",
				secondary: "0 10px 8px -6px rgba(105,105,105, 0.5)",
			},

			width: {
				68: "17rem",
			},

			margin: {
				"1/5": "20%",
				"1/10": "10%",
			},

			transitionProperty: {
				height: "height",
				width: "width",
			},

			inset: {
				"2/5": "40%",
			},

			height: {
				4.5: "1.125rem",
			},

			margin: {
				0.25: "0.0625rem",
			},

			animation: {
				moveX: "moveX 3s linear infinite",
			},
			keyframes: {
				moveX: {
					"0%": {
						transform: "translateX(0%)",
					},
					"25%": {
						transform: "translateX(70%)",
					},
					"50%": {
						transform: "translateX(140%)",
					},
					"75%": {
						transform: "translateX(70%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
