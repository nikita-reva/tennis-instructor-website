import React from 'react'
import styled from 'styled-components'

const AniketosContentSection = styled.section`
	width: 80%;
	height: 100%;
	margin: 0 auto;
`

const ContentSection = ({ children }) => {
	return <AniketosContentSection>{children}</AniketosContentSection>
}

export default ContentSection
