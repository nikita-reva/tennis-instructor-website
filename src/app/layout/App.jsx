import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import Header from './components/header-components/Header'
import Footer from './components/footer-components/Footer'
import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'
import Main from './components/main-components/Main'

function App() {
	return (
		<Router>
			<Header />
			<Main>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/team" component={TeamScreen} exact />
			</Main>
			<Footer />
		</Router>
	)
}

export default App
