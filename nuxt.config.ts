// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head:{
			title: 'Euro-Grant',
			htmlAttrs: {
			  lang: 'pl',
			},
			meta: [
			  { charset: 'utf-8' },
			  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			  { hid: 'description', name: 'description', content: 'Nowoczesna, rozwijająca się firma z Torunia. Zajmujemy się inwestycjami w nieruchomosci, technologię oraz ludzi. Wynajem i sprzedaż budynków, pomieszczeń na działalność gospodarczą.' },
			  { name: 'format-detection', content: 'telephone=no' },
			  { name: 'keywords', content: 'inowrocław, inowroclaw, euro, grant, eurogrant, euro-grant, geodezja'}
			],
			link: [
			  { rel: 'icon', type: 'image/x-icon', href: '/img/sygnet.png' },
			  { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:display=swap' },
			  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' } 
			],
		},

		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},

	modules: [
		'@nuxtjs/tailwindcss',  	//css frameworkk
		'@unlighthouse/nuxt',		//lighthouse buided in page, port:5678
	],
	
	unlighthouse: {
		scanner: {
		  device: 'desktop', // simulate a desktop device
		}
	},

	css: [
		'@/assets/css/global.css',
	]

})
