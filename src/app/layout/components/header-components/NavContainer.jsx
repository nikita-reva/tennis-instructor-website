import React, { useState } from 'react'
import styled from 'styled-components'

const AniketosNavContainer = styled.nav`
	width: 80%;
	display: flex;
	justify-content: space-between;
	height: 100%;
	margin: 0 auto;

	@media screen and (max-width: 800px) {
		width: 94%;
	}
`

const NavContainer = ({ children, mode }) => {
	return <AniketosNavContainer>{children}</AniketosNavContainer>
}

export default NavContainer
