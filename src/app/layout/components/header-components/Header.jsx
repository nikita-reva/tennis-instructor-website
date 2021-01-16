import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import NavContainer from './NavContainer'
import Navbar from './Navbar'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import SocialMediaBar from './SocialMediaBar'
import SocialMediaBarItem from './SocialMediaBarItem'
import NavBurger from './NavBurger'

const AniketosHeader = styled.header`
	position: fixed;
	width: 100%;
	height: 80px;
	z-index: 1000;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
	display: flex;
	align-items: center;
	justify-content: center;
`

const Header = () => {
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
		<AniketosHeader>
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
		</AniketosHeader>
	)
}

export default Header
