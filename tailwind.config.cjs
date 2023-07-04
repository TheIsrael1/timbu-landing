/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
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
			jakarta: ['Plus Jakarta Sans Variable' ,'sans-serif'] 
		  },
		  container: {
			center: true,
			screens: {
			  lg: '1440px',
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
					2: '#D1D3FF',
					3: '#161E2D'
				},
				secondary: {
					1: '#E7E7E7',
					2: '#282828',
					3: '#52514F',
					4: 'rgba(238, 239, 239, 0.50)',
					5: '#8592A3',
					6: '#F7F7F8',
					7: '#232F3E',
					8: '#999',
					9: '#262626',
					10: '#1A1A1A',
					11: '#F3F5F7',
					12: '#90A3BF',
					13: '#C3D4E9',
					14: '#D9D9D9;',
					15: '#292D32',
					16: '#F5F5F5',
					17: '#272A2E',
					18: '#7C7C7C'
				},
				success: {
					1: '#005A44'
				},
				info: {
					1: '#FDA741'
				}
			  },
			  boxShadow: {
				1: '0px 1px 4px 2px rgba(50, 71, 92, 0.02), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 6px 2px rgba(50, 71, 92, 0.06)',
				2: '0px 0px 32px 0px rgba(0, 0, 0, 0.10)',
				3: '0px 0px 32px 0px rgba(40, 40, 40, 0.10)',
				4: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
				5: '0px 2px 6px 4px rgba(50, 71, 92, 0.02), 0px 4px 9px 1px rgba(50, 71, 92, 0.04), 0px 2px 9px 0px rgba(50, 71, 92, 0.06)'
			  },
			  backgroundImage: {
     
			  },
			  transitionProperty: {
				font: 'font-size, transform',
			  },
			  keyframes: {
				"accordion-down": {
				  from: { height: 0 },
				  to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
				  from: { height: "var(--radix-accordion-content-height)" },
				  to: { height: 0 },
				},
			  },
			  animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			  },
		},
	},
	plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate")],
}
