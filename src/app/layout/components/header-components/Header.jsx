import React from 'react'
import styled from 'styled-components'

const AniketosHeader = styled.header`
	position: fixed;
	width: 100%;
	height: 12vh;
	z-index: 1000;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
	display: flex;
	align-items: center;
	justify-content: center;
`

const Header = ({ children }) => {
	return <AniketosHeader>{children}</AniketosHeader>
}

export default Header
