import React from 'react'
import styled from 'styled-components'

const AniketosNavDropdownItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 200px;
	height: 40px;
	background: #191919;
	transition: background 0.1s ease-in;

	&:hover {
		background: #292929;
	}

	@media screen and (max-width: 991px) {
		width: 100%;
		justify-content: center;

		&:hover {
			background: transparent;
		}
	}
`

const NavDropdownItem = ({ children }) => {
	return <AniketosNavDropdownItem>{children}</AniketosNavDropdownItem>
}

export default NavDropdownItem
