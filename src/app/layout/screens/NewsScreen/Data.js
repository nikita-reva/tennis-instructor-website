export const HeroNewsScreen = {
	img: require('../images/hero-news.jpg').default,
	sloganBig: 'News vom Court',
	subtext: 'Bleiben Sie auf dem neuesten Stand!',
	sloganLeft: false,
}

export const NewsData = [
	{
		title: 'Tennis macht Spaß!',
		subtitle: 'Vor allem im Sommer',
		date: '26.01.2020',
		text: 'Ich spiele sehr gerne Tennis. Es macht echt viel Spaß.',
		image:
			'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		alt: 'tennis',
		linkTo: '/anmeldung',
		linkText: 'Zur Anmeldung',
		imageSlides: [
			{
				image: require('../images/news1.jpg').default,
				alt: 'tennis',
			},
			{
				image: require('../images/news2.jpg').default,
				alt: 'tennis',
			},
			{
				image: require('../images/news3.jpg').default,
				alt: 'tennis',
			},
		],
	},
	{
		title: 'Tennis macht Spaß!',
		subtitle: 'Vor allem im Sommer',
		date: '26.01.2020',
		text: 'Ich spiele sehr gerne Tennis. Es macht echt viel Spaß.',
		image:
			'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		alt: 'tennis',
		linkTo: '/anmeldung',
		linkText: 'Zur Anmeldung',
		imageSlides: [
			{
				image: require('../images/img1.JPG').default,
				alt: 'tennis',
			},
			{
				image: require('../images/img2.JPG').default,
				alt: 'tennis',
			},
			{
				image: require('../images/img3.JPG').default,
				alt: 'tennis',
			},
		],
	},
]
