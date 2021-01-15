import React from 'react'
import styled from 'styled-components'

const AniketosNavContainer = styled.nav`
	width: 80%;
	display: flex;
	justify-content: space-between;
	height: 100%;
	margin: 0 auto;
`

const NavContainer = ({ children }) => {
	return <AniketosNavContainer>{children}</AniketosNavContainer>
}

export default NavContainer
