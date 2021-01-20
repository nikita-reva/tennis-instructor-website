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
		background: var(--hover-color);
	}

	@media screen and (max-width: 991px) {
		width: 100%;
		justify-content: center;
	}
`

const NavDropdownItem = ({ children }) => {
	return <AniketosNavDropdownItem>{children}</AniketosNavDropdownItem>
}

export default NavDropdownItem
