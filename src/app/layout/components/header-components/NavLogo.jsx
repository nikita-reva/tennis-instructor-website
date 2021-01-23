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
		background: var(--hover-color);
	}
`

const AniketosNavLogo = styled.img`
	height: 100%;
`

const NavLogo = ({ to, activate }) => {
	return (
		<Link to={to} onClick={() => activate()}>
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
