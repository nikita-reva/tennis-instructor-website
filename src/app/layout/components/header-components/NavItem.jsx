import React from 'react'
import styled from 'styled-components'

const AniketosNavItem = styled.li`
	margin: 0 6vw 0 0;
`

const NavItem = ({ children }) => {
	return <AniketosNavItem>{children}</AniketosNavItem>
}

export default NavItem
