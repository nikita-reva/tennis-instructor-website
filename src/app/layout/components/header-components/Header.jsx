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
import NavDropdown from './NavDropdown'
import NavDropdownItem from './NavDropdownItem'

const AniketosHeader = styled.header`
	position: fixed;
	width: 100%;
	height: 90px;
	z-index: 1000;
	background: var(--primary-color);
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

		windowWidth <= 991 ? setMode('small') : setMode('large')
	}, [windowWidth, mode, active])

	return (
		<AniketosHeader>
			<NavContainer>
				<NavLogo to="/" />
				<Navbar smallActive={active}>
					<NavItem>
						<NavLink to="/" title="Home"></NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/team" title="Team"></NavLink>
					</NavItem>
					<NavDropdown to="/training" heading="Training">
						<NavDropdownItem>
							<NavLink
								to="/anmeldung"
								title="Anmeldung"
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink to="/camps" title="Camps"></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/athletiktraining"
								title="Athletiktraining"
							></NavLink>
						</NavDropdownItem>
					</NavDropdown>
					<NavDropdown to="/news" heading="News">
						<NavDropdownItem>
							<NavLink
								to="/news"
								title="News vom Court"
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/galerie"
								title="Fotogalerie"
							></NavLink>
						</NavDropdownItem>
					</NavDropdown>
					<NavItem>
						<NavLink to="/kontakt" title="Kontakt"></NavLink>
					</NavItem>
				</Navbar>
				<SocialMediaBar>
					<SocialMediaBarItem
						icon="instagram"
						to="https://instagram.com/tennis.academy.yasar?igshid=1szgb889vhno0"
					/>
				</SocialMediaBar>
				<NavBurger
					active={active}
					activate={() => {
						setActive(!active)
					}}
				/>
			</NavContainer>
		</AniketosHeader>
	)
}

export default Header
