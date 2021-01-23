import React from 'react'
import styled from 'styled-components'

const AniketosScreenContainer = styled.div`
	width: 100%;
`

const ScreenContainer = ({ children }) => {
	return <AniketosScreenContainer>{children}</AniketosScreenContainer>
}

export default ScreenContainer
