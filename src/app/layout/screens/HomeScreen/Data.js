export const HeroHomeScreen = {
    img: require('../images/hero.jpg').default,
    sloganMedium: 'Training Sucks?',
    sloganBig: 'Try Losing!',
    subtext: 'Melden Sie sich jetzt für die Sommersaison 2021 an!',
    btnText: 'Zur Anmeldung',
    linkTo: '/anmeldung',
    businessName: 'Tennis Academy Yasar',
    sloganLeft: false,
}

export const ImageSliderData = [
    {
        image: require('../images/img1.JPG').default,
        alt: 'Feliciano López',
        text: 'Ajdin & Feliciano López',
    },
    {
        image: require('../images/img2.JPG').default,
        alt: 'Jo-Wilfried Tsonga',
        text: 'Ajdin & Jo-Wilfried Tsonga',
    },
    {
        image: require('../images/img3.JPG').default,
        alt: 'Nick Kyrgios',
        text: 'Ajdin & Nick Kyrgios',
    },
    {
        image: require('../images/img4.jpeg').default,
        alt: 'Bernard Tomic',
        text: 'Ajdin & Bernard Tomic',
    },
    {
        image: require('../images/img5.jpg').default,
        alt: 'Ajdin Yasar',
        text: 'Ajdin Yasar',
    },
]

export const EventsData = [
    {
        date: '26.04.2021 - 26.09.2021',
        time: '',
        title: 'Beginn des Sommertrainings 2021',
        description: 'Anmeldeschluss ist der 28. März!',
        linkTo: '/anmeldung',
        linkText: 'Zur Anmeldung',
    },
    {
        date: '01.05.2021',
        time: '',
        title: 'Saisoneröffnung 2021',
        description: 'Eröffnungsfeier der Tennis Academy Yasar',
        linkTo: '',
        linkText: '',
    },
    {
        date: '24.05.2021 - 28.05.2021',
        time: '',
        title: 'Tenniscamp Pfingsten - Camp 1',
        description: 'Meldet euch für das Camp 1 im Pfingsten an!',
        linkTo: '',
        linkText: '',
    },
    {
        date: '02.08.2021 - 06.08.2021',
        time: '',
        title: 'Tenniscamp Sommer - Camp 2',
        description: 'Meldet euch für das Camp 2 im Sommer an!',
        linkTo: '',
        linkText: '',
    },
    {
        date: '06.09.2021 - 10.09.2021',
        time: '',
        title: 'Tenniscamp Sommer - Camp 3',
        description: 'Meldet euch für das Camp 3 im Sommer an!',
        linkTo: '',
        linkText: '',
    },
    {
        date: '',
        time: '',
        title: 'Tenniscamp Anmeldung',
        description: 'Hier könnt ihr euch für die Tenniscamps anmelden.',
        linkTo: '/anmeldungcamps',
        linkText: 'Zur Anmeldung',
    },
]

export const InfosData = [
    {
        title: 'Eröffnung der Tennis Academy Yasar',
        text:
            'Meldet euch jetzt für die kommende Tennistraining Saison im Sommer 2021 an. Der Anmeldeschluss ist der 28. März!',
        image: require('../images/logo-web.jpg').default,
        alt: 'tennis',
        linkTo: '/anmeldung',
        linkText: 'Zur Anmeldung',
        link2To: require('../images/tay-anmeldungsformular.pdf').default,
        link2Text: 'Anmeldungsformular',
    },
    {
        title: 'Professionelle Tennisausrüstung ',
        text:
            'In der Tennis Academy Yasar bieten wir Ihnen ein breites Sortiment an professionellem Tennis Equipment. Mit unserem Partner Tecnifibre haben wir in unserem Sortiment immer die aktuellen Modelle anzubieten. Gerne stehen wir Ihnen bei der richtigen Auswahl beratend zur Seite. Zu den Produkten gehören unter anderem: Tennisschläger, Tennistaschen, Tennissaiten, Griffbänder, Tennisbälle, Tennis-Klamotten und vieles mehr!',
        sliderAspectRatio: 1,
        sliderBlackNav: 'true',
        imageSlides: [
            {
                image: require('../images/product1.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product2.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product3.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product4.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product5.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product6.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product7.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product8.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product9.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/product10.jpg').default,
                alt: 'tecnifibre',
            },
            {
                image: require('../images/schlaeger.jpg').default,
                alt: 'tecnifibre',
            },
        ],
        linkTo: '',
        linkText: '',
    },
    {
        title: 'Ausrüstung & Bespannungsservice',
        text:
            'Die Tennis Academy Yasar bietet sorgfältige Tennisschläger- und Saitenbetreuung und einen profesionellen Bespannungsservice. Wir sind Bespannungspartner von mehreren Profis. Verschiedene Tennissaiten und Griffbänder stehen bei uns zur Auswahl. Bespannungspreis ab 10,- Eur.',
        image: require('../images/strings.jpeg').default,
        alt: '',
        linkTo: '/kontakt',
        linkText: 'Service anfragen',
    },
]
