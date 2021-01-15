import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import HeaderUnit from './components/header-components/HeaderUnit'
import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'

function App() {
	return (
		<Router>
			<HeaderUnit />
			<main>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/team" component={TeamScreen} exact />
			</main>
		</Router>
	)
}

export default App
