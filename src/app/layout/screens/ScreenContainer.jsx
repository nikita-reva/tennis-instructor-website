import React from 'react'
import styled from 'styled-components'

const AniketosScreenContainer = styled.div`
	width: 100%;
	position: relative;
	top: 80px;
	min-height: 200vh;
`

const ScreenContainer = ({ children }) => {
	return <AniketosScreenContainer>{children}</AniketosScreenContainer>
}

export default ScreenContainer
