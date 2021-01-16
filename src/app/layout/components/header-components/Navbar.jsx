import React from 'react'
import styled from 'styled-components'

const AniketosNavbar = styled.ul`
	display: flex;
	height: 100%;
	justify-content: flex-start;
	align-items: center;
	list-style: none;

	@media screen and (max-width: 991px) {
		display: none;
	}
`

const Navbar = ({ children }) => {
	return <AniketosNavbar>{children}</AniketosNavbar>
}

export default Navbar
