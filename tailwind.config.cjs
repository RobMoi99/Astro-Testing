

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'gradGreenFrom': '#8ffca0',
				'gradGreenTo': '#1ed94f',
				'darkGreen': '#273024',
				'secondaryDarkGreen':'#408450',
			},
			screens: {
				'utxl': {'max':'1423px'},
				'utlg': {'max':'1023px'},
				'utmd': {'max':'767px'},
				'utsm': {'max':'639px'},
				'utxs': {'max':'479px'},
				'xs': {'min':'480px'},
			  }
		},
		
	},
	plugins: [],
}
