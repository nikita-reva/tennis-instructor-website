import React from 'react'

import Header from './Header'
import NavContainer from './NavContainer'
import Navbar from './Navbar'
import NavItem from './NavItem'
import NavLink from './NavLink'
import NavLogo from './NavLogo'
import SocialMediaBar from './SocialMediaBar'
import SocialMediaBarItem from './SocialMediaBarItem'

const HeaderUnit = () => {
	return (
		<Header>
			<NavContainer>
				<Navbar>
					<NavLogo to="/" />
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
					<SocialMediaBarItem icon="instagram" />
					<SocialMediaBarItem icon="facebook-square" />
				</SocialMediaBar>
			</NavContainer>
		</Header>
	)
}

export default HeaderUnit
