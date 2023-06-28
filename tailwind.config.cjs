/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '475px',
			sm: '640px',
			md: '768px',
			xm: '900px',
			lg: '1024px',
			xl: '1280px',
		  },
		  fontFamily: {
			lato: [ 'Lato', 'sans-serif'],
		  },
		  container: {
			center: true,
			screens: {
			  xl: '1366px', //1920
			}
		  },
		extend: {
			padding: {
				'container-lg': '5rem',
				'container-base': '1.5rem'
			  },
			  margin: {
				'container-lg': '5rem',
				'container-base': '1.5rem'
			  },
			  colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				primary: {
					1: '#5433EB',
					2: '#D1D3FF'
				},
				secondary: {
					1: '#E7E7E7',
					2: '#282828'
				}
			  },
			  boxShadow: {

			  },
			  backgroundImage: {
     
			  },
			  transitionProperty: {
				font: 'font-size, transform',
			  },

		},
	},
	plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate")],
}
