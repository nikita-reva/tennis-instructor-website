import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import Header from './components/header-components/Header'
import Footer from './components/footer-components/Footer'
import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'
import Main from './components/main-components/Main'
import EnrolmentScreen from './screens/EnrolmentScreen'
import ContactScreen from './screens/ContactScreen'
import TrainingScreen from './screens/TrainingScreen'
import CampsScreen from './screens/CampsScreen'
import AthleticTrainingScreen from './screens/AthleticTrainingScreen'
import NewsScreen from './screens/NewsScreen'
import NewsFromCourtScreen from './screens/NewsFromCourtScreen'
import GalleryScreen from './screens/GalleryScreen'

function App() {
	return (
		<Router>
			<Header />
			<Main>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/team" component={TeamScreen} exact />
				<Route path="/training" component={TrainingScreen} exact />
				<Route path="/anmeldung" component={EnrolmentScreen} exact />
				<Route path="/camps" component={CampsScreen} exact />
				<Route
					path="/athletiktraining"
					component={AthleticTrainingScreen}
					exact
				/>
				<Route path="/news" component={NewsScreen} exact />
				<Route
					path="/newsfromcourt"
					component={NewsFromCourtScreen}
					exact
				/>
				<Route path="/galerie" component={GalleryScreen} exact />

				<Route path="/kontakt" component={ContactScreen} exact />
			</Main>
			<Footer />
		</Router>
	)
}

export default App
