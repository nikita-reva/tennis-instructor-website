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
	const [mode, setMode] = useState()
	const [windowWidth, setWindowWidth] = useState()
	const [active, setActive] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})

		windowWidth <= 991 ? setMode('small') : setMode('large')

		if (mode === 'large') {
			setActive(false)
		}
	}, [windowWidth, mode, active])

	return (
		<AniketosHeader>
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
					<NavDropdown
						to="/news"
						heading="News"
						activate={() => {
							setActive(false)
						}}
					>
						<NavDropdownItem>
							<NavLink
								to="/newsfromcourt"
								title="News vom Court"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
						<NavDropdownItem>
							<NavLink
								to="/galerie"
								title="Fotogalerie"
								activate={() => {
									setActive(false)
								}}
							></NavLink>
						</NavDropdownItem>
					</NavDropdown>
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
