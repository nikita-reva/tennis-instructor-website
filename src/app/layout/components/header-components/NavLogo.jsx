import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
const AniketosNavLogo = styled.img`
	height: 80%;
	width: 140px;
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
