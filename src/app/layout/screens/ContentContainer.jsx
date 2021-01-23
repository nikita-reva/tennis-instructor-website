import React from 'react'
import styled from 'styled-components'

const AniketosContentContainer = styled.div`
	width: 100%;
	height: 300vh;
	background: ${({ bg }) => (bg ? bg : 'none')};
	background: ${({ bgi }) => (bgi ? bgi : 'none')};
`

const ContentContainer = ({ children, bg, bgi }) => {
	return (
		<AniketosContentContainer bg={bg} bgi={bgi}>
			{children}
		</AniketosContentContainer>
	)
}

export default ContentContainer
