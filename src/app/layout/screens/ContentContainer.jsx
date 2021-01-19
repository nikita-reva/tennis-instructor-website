import React from 'react'
import styled from 'styled-components'

const AniketosContentContainer = styled.div`
	width: 100%;
	height: 100%;
`

const ContentContainer = ({ children }) => {
	return <AniketosContentContainer>{children}</AniketosContentContainer>
}

export default ContentContainer
