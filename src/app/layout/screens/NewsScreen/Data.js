export const HeroNewsScreen = {
    img: require('../images/hero-news.jpg').default,
    sloganBig: 'News vom Court',
    subtext: 'Bleiben Sie auf dem neuesten Stand!',
    sloganLeft: false,
}

export const NewsData = [
    {
        title: 'Trainingssaison 2021',
        subtitle: 'Eröffnung der Tennis Academy Yasar',
        date: '01.05.2021',
        text:
            'Meldet euch jetzt für die kommende Tennistraining Saison im Sommer 2021 an. Der Anmeldeschluss ist der 28. März!',
        linkTo: '/anmeldung',
        linkText: 'Zur Anmeldung',
        imageSlides: [
            {
                image: require('../images/news3.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/logo-square.jpg').default,
                alt: 'tennis',
            },
        ],
    },
    {
        title: 'Professionelle Tennisausrüstung',
        subtitle: 'Unser Angebot mit den Produkten von Tecnifibre',
        date: '',
        text:
            'In der Tennis Academy Yasar bieten wir Ihnen ein breites Sortiment an professionellem Tennis Equipment. Mit unserem Parnter Tecinfibre haben wir in unserem Sortiment immer die aktuellen Modelle anzubieten. Gerne stehen wir Ihnen bei der richtigen Auswahl beratend zur Seite. Zu den Produkten gehören unter anderem: Tennisschläger, Tennistaschen, Tennissaiten, Griffbänder, Tennisbälle, Tennis-Klamotten und vieles mehr!',
        sliderBlackNav: 'true',
        autoChange: 'true',
        imageSlides: [
            {
                image: require('../images/product1.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product2.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product3.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product4.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product5.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product6.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product7.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product8.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product9.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/product10.jpg').default,
                alt: 'tennis',
            },
            {
                image: require('../images/schlaeger.jpg').default,
                alt: 'tecnifibre',
            },
        ],
    },
    {
        title: 'Ausrüstung & Bespannungsservice',
        subtitle: 'Lizenzierter Besaiter und Ansprechpartner: Ajdin Yasar',
        date: '',
        text:
            'Die Tennis Academy Yasar bietet sorgfältige Tennisschläger- und Saitenbetreuung und einen profesionellen Bespannungsservice. Wir sind Bespannungspartner von mehreren Profis. Verschiedene Tennissaiten und Griffbänder stehen bei uns zur Auswahl. Bespannungspreis ab 10,- Eur',

        linkTo: '/kontakt',
        linkText: 'Service anfragen',
        imageSlides: [
            {
                image: require('../images/strings2.jpg').default,
                alt: 'tennis',
            },
        ],
    },
]
