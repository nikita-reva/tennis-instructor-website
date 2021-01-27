import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import './styles.css'
import Header from './components/header-components/Header'
import Footer from './components/footer-components/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import TeamScreen from './screens/TeamScreen/TeamScreen'
import Main from './components/main-components/Main'
import EnrolmentScreen from './screens/EnrolmentScreen/EnrolmentScreen'
import ContactScreen from './screens/ContactScreen/ContactScreen'
import TrainingScreen from './screens/TrainingScreen/TrainingScreen'
import CampsScreen from './screens/CampsScreen/CampsScreen'
import AthleticTrainingScreen from './screens/AthleticTrainingScreen/AthleticTrainingScreen'
import NewsScreen from './screens/NewsScreen/NewsScreen'
import NewsFromCourtScreen from './screens/NewsFromCourtScreen/NewsFromCourtScreen'
import GalleryScreen from './screens/GalleryScreen/GalleryScreen'
import PrintScreen from './screens/PrintScreen/PrintScreen'
import DatenschutzScreen from './screens/DatenschutzScreen/DatenschutzScreen'
import ImperessumScreen from './screens/ImperessumScreen/ImperessumScreen'
import PricingScreen from './screens/PricingScreen/PricingScreen'

function App() {
	return (
		<Router basename="/tennis-academy-yasar-website">
			<ScrollToTop />
			<Header />
			<Main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/team" component={TeamScreen} />
				<Route exact path="/training" component={TrainingScreen} />
				<Route exact path="/angebote" component={PricingScreen} />
				<Route exact path="/anmeldung" component={EnrolmentScreen} />
				<Route
					exact
					path="/anmeldung/anmeldungsformular"
					component={PrintScreen}
				/>
				<Route exact path="/camps" component={CampsScreen} />
				<Route
					exact
					path="/athletiktraining"
					component={AthleticTrainingScreen}
				/>
				<Route path="/news" component={NewsScreen} exact />
				<Route
					exact
					path="/newsfromcourt"
					component={NewsFromCourtScreen}
				/>
				<Route exact path="/galerie" component={GalleryScreen} />

				<Route exact path="/kontakt" component={ContactScreen} />
				<Route
					exact
					path="/datenschutz"
					component={DatenschutzScreen}
				/>
				<Route exact path="/imperessum" component={ImperessumScreen} />
			</Main>
			<Footer />
		</Router>
	)
}

export default App
