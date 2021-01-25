import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'

const AniketosLink = styled(Link)`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;

	&:hover {
		background: var(--hover-color);
	}
`

const AniketosLogoContainer = styled.div`
	height: 100%;
	width: 140px;
	transition: all 0.2s ease;

	@media screen and (max-width: 500px) {
		height: 80%;
		width: 110px;
	}
`

const AniketosNavLogo = styled.img`
	height: 100%;
`

const NavLogo = ({ to, activate }) => {
	return (
		<AniketosLink to={to} onClick={() => activate()}>
			<AniketosLogoContainer>
				<AniketosNavLogo
					src={Logo}
					alt="tennis academy yasar logo"
				></AniketosNavLogo>
			</AniketosLogoContainer>
		</AniketosLink>
	)
}

export default NavLogo
