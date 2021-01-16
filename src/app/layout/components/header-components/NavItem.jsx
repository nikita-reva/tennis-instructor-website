import React from 'react'
import styled from 'styled-components'

const AniketosNavItem = styled.li`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	width: 100px;
	transition: background 0.1s ease-in;

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`

const NavItem = ({ children }) => {
	return <AniketosNavItem>{children}</AniketosNavItem>
}

export default NavItem