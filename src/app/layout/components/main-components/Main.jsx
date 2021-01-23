import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
	width: 100%;
	position: relative;
	top: 80px;
`

const Main = ({ children }) => {
	return <MainContainer>{children}</MainContainer>
}

export default Main
