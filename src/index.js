import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/layout/App'
import reportWebVitals from './reportWebVitals'

import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

const history = createBrowserHistory()
ReactGA.initialize('UA-189134177-2')
history.listen((location) => {
	ReactGA.set({ page: location.pathname }) // Update the user's current page
	ReactGA.pageview(location.pathname) // Record a pageview for the given page
})

const rootElement = document.getElementById('root')

function render() {
	ReactDOM.render(<App />, rootElement)
}

if (module.hot) {
	module.hot.accept('./app/layout/App', function () {
		setTimeout(render)
	})
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
