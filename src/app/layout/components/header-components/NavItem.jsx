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
		background: rgba(255, 255, 255, 0.05);
	}

	@media screen and (max-width: 991px) {
		width: 60%;
		background: var(--primary-color);
		height: 40px;
		padding: 5px;
	}
`

const NavItem = ({ children }) => {
	return <AniketosNavItem>{children}</AniketosNavItem>
}

export default NavItem
