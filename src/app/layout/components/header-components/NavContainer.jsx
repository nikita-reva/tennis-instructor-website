import React from 'react'
import styled from 'styled-components'

const AniketosNavContainer = styled.nav`
	display: flex;
	width: 80%;
	justify-content: space-between;
	gap: 4vw;
	height: 100%;
	margin: 0 auto;

	@media screen and (max-width: 991px) {
		width: 94%;
	}
`

const NavContainer = ({ children }) => {
	return <AniketosNavContainer>{children}</AniketosNavContainer>
}

export default NavContainer
