import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
	width: 100%;
`

const ContentContainer = styled.div`
	width: 80%;
	top: 90px;
	position: relative;
	width: 80%;
	margin: 0 auto;
	min-height: 200vh;

	@media screen and (max-width: 991px) {
		width: 94%;
	}
`

const Main = ({ children }) => {
	return (
		<MainContainer>
			<ContentContainer>{children}</ContentContainer>
		</MainContainer>
	)
}

export default Main
