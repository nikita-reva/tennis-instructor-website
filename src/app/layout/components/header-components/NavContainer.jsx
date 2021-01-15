import React from 'react'
import styled from 'styled-components'

const AniketosNavContainer = styled.nav`
	width: 80%;
	height: 100%;
	margin: 0 auto;
`

const NavContainer = ({ children }) => {
	return <AniketosNavContainer>{children}</AniketosNavContainer>
}

export default NavContainer
