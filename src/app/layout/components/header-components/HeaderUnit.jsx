import React, { useState, useEffect } from 'react'

import Header from './Header'
import NavContainer from './NavContainer'
import Navbar from './Navbar'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import SocialMediaBar from './SocialMediaBar'
import SocialMediaBarItem from './SocialMediaBarItem'
import NavBurger from './NavBurger'

const HeaderUnit = () => {
	const [mode, setMode] = useState()
	const [windowWidth, setWindowWidth] = useState()
	const [active, setActive] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})

		windowWidth >= 991 ? setMode('large') : setMode('small')
	}, [windowWidth, mode])

	return (
		<Header>
			<NavContainer mode={mode}>
				<NavLogo to="/" />
				<Navbar>
					<NavItem>
						<NavLink to="/" title="Home"></NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/team" title="Team"></NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" title="Training"></NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" title="News"></NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" title="Kontakt"></NavLink>
					</NavItem>
				</Navbar>
				<SocialMediaBar>
					<SocialMediaBarItem
						icon="instagram-square"
						to="https://www.instagram.com/"
					/>
				</SocialMediaBar>
				<NavBurger
					activate={(active) => {
						setActive(active)
						console.log(active)
					}}
				/>
			</NavContainer>
		</Header>
	)
}

export default HeaderUnit
