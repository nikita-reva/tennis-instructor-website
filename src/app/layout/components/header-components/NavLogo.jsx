import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'

const AniketosLogoContainer = styled.div`
	display: flex;
	height: 100%;
	width: 140px;
	justify-content: center;
	align-content: center;
	transition: all 0.2s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.05);
	}
`

const AniketosNavLogo = styled.img`
	height: 100%;
`

const NavLogo = ({ to }) => {
	return (
		<Link to={to}>
			<AniketosLogoContainer>
				<AniketosNavLogo
					src={Logo}
					alt="tennis academy yasar logo"
				></AniketosNavLogo>
			</AniketosLogoContainer>
		</Link>
	)
}

export default NavLogo
