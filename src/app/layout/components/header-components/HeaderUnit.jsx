import React from 'react'

import Header from './Header'
import NavContainer from './NavContainer'
import Navbar from './Navbar'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavLogo from './NavLogo'

const HeaderUnit = () => {
	return (
		<Header>
			<NavContainer>
				<Navbar>
					<NavItem>
						<NavLogo
							to="/"
							src={require('./logo-web-transparent.png')}
						/>
					</NavItem>
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
			</NavContainer>
		</Header>
	)
}

export default HeaderUnit
