import React from 'react'
import styled from 'styled-components'

import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'

import Hero from './images/hero3.png'

const StyledHeroContainer = styled.div`
	position: relative;
	width: 100%;
	height: 1000px;
`

const StyledHeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const StyledOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`
const StyledOverlay1 = styled(StyledOverlay)`
	clip-path: polygon(100% 0, 0% 100%, 100% 100%);
	backdrop-filter: grayscale(100%);
`
const StyledOverlay2 = styled(StyledOverlay)`
	clip-path: polygon(100% 0, 0 43%, 0 0);
	background-color: black;
`

const StyledSlogan = styled.div`
	padding: 20px;
	position: absolute;
	top: 20%;
	right: 5%;
	transform: translateY(-50%);
	color: #fff;

	& > h2 {
		font-family: 'Fjalla One', sans-serif;
		font-size: 4rem;
	}

	& > h1 {
		font-family: 'Fjalla One', sans-serif;
		font-size: 6rem;
	}
`

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<StyledHeroContainer>
					<StyledHeroImage src={Hero} />
					<StyledOverlay1 />
					<StyledSlogan>
						<h2>Training Sucks?</h2>
						<h1>Try Losing!</h1>
					</StyledSlogan>
				</StyledHeroContainer>
				<ContentSection>
					<h1>Home Screen</h1>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
