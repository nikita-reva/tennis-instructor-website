import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import Header from './components/header-components/Header'
import Footer from './components/footer-components/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import TeamScreen from './screens/TeamScreen/TeamScreen'
import Main from './components/main-components/Main'
import EnrolmentScreen from './screens/EnrolmentScreen'
import ContactScreen from './screens/ContactScreen'
import TrainingScreen from './screens/TrainingScreen'
import CampsScreen from './screens/CampsScreen'
import AthleticTrainingScreen from './screens/AthleticTrainingScreen'
import NewsScreen from './screens/NewsScreen'
import NewsFromCourtScreen from './screens/NewsFromCourtScreen'
import GalleryScreen from './screens/GalleryScreen'
import ScrollToTop from './ScrollToTop'
import PrintScreen from './screens/PrintScreen'

function App() {
	return (
		<Router basename="/tennis-academy-yasar-website">
			<ScrollToTop />
			<Header />
			<Main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/team" component={TeamScreen} />
				<Route exact path="/training" component={TrainingScreen} />
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
			</Main>
			<Footer />
		</Router>
	)
}

export default App
