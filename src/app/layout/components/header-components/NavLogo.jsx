import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
const AniketosNavLogo = styled.img`
	height: 8vh;
	padding: 1vh;
`

const NavLogo = ({ to }) => {
	return (
		<Link to={to}>
			<AniketosNavLogo
				src={Logo}
				alt="tennis academy yasar logo"
			></AniketosNavLogo>
		</Link>
	)
}

export default NavLogo
