import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import Header from './components/header-components/Header'
import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/team" component={TeamScreen} exact />
			</main>
		</Router>
	)
}

export default App
