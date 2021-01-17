import React from 'react'
import styled from 'styled-components'

const AniketosNavDropdownItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 200px;
	height: 40px;
	background: #4d73a5;
	transition: background 0.1s ease-in;

	&:hover {
		background: #03a9f4;
	}
`

const NavDropdownItem = ({ children }) => {
	return <AniketosNavDropdownItem>{children}</AniketosNavDropdownItem>
}

export default NavDropdownItem
