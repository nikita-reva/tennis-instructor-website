import React from 'react'
import styled from 'styled-components'

const AniketosContentSection = styled.section`
	width: 80%;
	position: relative;
	height: 100%;
	padding: 20px 0;
	margin: 0 auto;

	@media screen and (max-width: 991px) {
		width: 94%;
	}
`

const ContentSection = ({ children }) => {
	return <AniketosContentSection>{children}</AniketosContentSection>
}

export default ContentSection
