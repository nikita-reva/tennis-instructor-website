import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
	width: 100%;
`

const Main = ({ children }) => {
	return <MainContainer>{children}</MainContainer>
}

export default Main
