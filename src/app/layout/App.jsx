import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactGA from 'react-ga'

import ScrollToTop from './ScrollToTop'
import './styles.css'
import Main from './components/main-components/Main'
import Header from './components/header-components/Header'
import Footer from './components/footer-components/Footer'

import HomeScreen from './screens/HomeScreen/HomeScreen'
import TeamScreen from './screens/TeamScreen/TeamScreen'
import EnrolmentScreen from './screens/EnrolmentScreen/EnrolmentScreen'
import CampsEnrolmentScreen from './screens/CampsEnrolmentScreen/CampsEnrolmentScreen'
import ContactScreen from './screens/ContactScreen/ContactScreen'
import CampsScreen from './screens/CampsScreen/CampsScreen'
import AthleticTrainingScreen from './screens/AthleticTrainingScreen/AthleticTrainingScreen'
import NewsScreen from './screens/NewsScreen/NewsScreen'
import GalleryScreen from './screens/GalleryScreen/GalleryScreen'
import PrintScreen from './screens/PrintScreen/PrintScreen'
import DatenschutzScreen from './screens/DatenschutzScreen/DatenschutzScreen'
import ImperessumScreen from './screens/ImperessumScreen/ImperessumScreen'
import PricingScreen from './screens/PricingScreen/PricingScreen'

function App() {
	useEffect(() => {
		ReactGA.initialize('G-8TLZQJDCL7')
		ReactGA.pageview('/')
	})

	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/team" component={TeamScreen} />

				<Route exact path="/angebote" component={PricingScreen} />
				<Route exact path="/anmeldung" component={EnrolmentScreen} />
				<Route
					exact
					path="/anmeldung/anmeldungsformular/:service"
					component={PrintScreen}
				/>
				<Route
					exact
					path="/anmeldungcamps"
					component={CampsEnrolmentScreen}
				/>
				<Route exact path="/camps" component={CampsScreen} />
				<Route
					exact
					path="/athletiktraining"
					component={AthleticTrainingScreen}
				/>
				<Route path="/news" component={NewsScreen} exact />
				<Route exact path="/galerie" component={GalleryScreen} />

				<Route exact path="/kontakt" component={ContactScreen} />
				<Route
					exact
					path="/datenschutz"
					component={DatenschutzScreen}
				/>
				<Route exact path="/impressum" component={ImperessumScreen} />
			</Main>
			<Footer />
		</Router>
	)
}

export default App
