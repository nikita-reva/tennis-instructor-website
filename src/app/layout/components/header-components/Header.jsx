import React, { useState, useEffect, useRef } from 'react'
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
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	z-index: 1000;
	background: var(--primary-color);
	display: flex;
	align-items: center;
	justify-content: center;
`

const Header = () => {
	const [windowWidth, setWindowWidth] = useState()
	const [active, setActive] = useState(false)
	const navbarRef = useRef()

	window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth)
	})

	useEffect(() => {
		setWindowWidth(window.innerWidth)

		// Hide mobile navmenu when the screen is large
		if (windowWidth > 991) {
			setActive(false)
		}

		// Hide mobile navmenu when the user clicks outside the nav element
		const outsideClickHandler = (e) => {
			if (!navbarRef.current.contains(e.target)) {
				setActive(false)
			}
		}

		document.addEventListener('mousedown', outsideClickHandler)

		return () => {
			document.removeEventListener('mousedown', outsideClickHandler)
		}
	}, [windowWidth])

	return (
		<AniketosHeader ref={navbarRef}>
			<NavContainer>
				<NavLogo
					to="/"
					activate={() => {
						setActive(false)
					}}
				/>
				<Navbar smallActive={active}>
					<NavItem>
						<NavLink
							to="/"
							title="Home"
							activate={() => {
								setActive(false)
							}}
						></NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="/team"
							title="Team"
							activate={() => {
								setActive(false)
							}}
						></NavLink>
					</NavItem>
					<NavDropdown
						to="/training"
						heading="Training"
						activate={() => {
							setActive(false)
						}}
					>
						<NavDropdownItem>
							<NavLink
								to="/angebote"
								title="Angebote"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/anmeldung"
								title="Anmeldung"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/camps"
								title="Camps"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/athletiktraining"
								title="Athletiktraining"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
					</NavDropdown>
					<NavItem>
						<NavLink
							to="/news"
							title="News"
							activate={() => {
								setActive(false)
							}}
						></NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="/galerie"
							title="Galerie"
							activate={() => {
								setActive(false)
							}}
						></NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							activate={() => {
								setActive(false)
							}}
							to="/kontakt"
							title="Kontakt"
						></NavLink>
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
