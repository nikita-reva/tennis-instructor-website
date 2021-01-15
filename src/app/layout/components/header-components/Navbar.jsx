import React from 'react'
import styled from 'styled-components'

const AniketosNavbar = styled.ul`
	display: flex;
	height: 100%;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	gap: 2vw;
`

const Navbar = ({ children }) => {
	return <AniketosNavbar>{children}</AniketosNavbar>
}

export default Navbar
