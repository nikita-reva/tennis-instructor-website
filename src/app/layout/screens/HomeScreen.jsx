import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'

import Hero from './images/hero6.png'

const StyledHeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1000px;
`

const StyledHeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 0%;
    @media screen and (max-width: 1100px) {
        object-position: 50% 0%;
    }
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
    background-color: rgba(146, 226, 72, 0.25);
`
const StyledOverlay2 = styled(StyledOverlay)`
    clip-path: polygon(0 29%, 68% 100%, 0 100%);
    backdrop-filter: grayscale(100%);
    background-color: rgba(241, 53, 81, 0.25);
`

const StyledOverlay3 = styled(StyledOverlay)`
    clip-path: polygon(48% 0, 0 0, 0 46%);
    backdrop-filter: grayscale(100%);
    background-color: rgba(53, 166, 241, 0.25);
`

const StyledSlogan = styled.div`
	padding: 20px;
	position: absolute;
	top: 25%;
	right: 5%;
	color: #fff;

	& > h2 {
		font-family: 'Fjalla One', sans-serif;
		font-size: 4rem;
		overflow
	}

	& > h1 {
		font-family: 'Fjalla One', sans-serif;
		font-size: 6rem;
	}

	& > a {
		display: block;
		text-decoration: none;
		text-align: center;
		color: #fff;
		background: var(--secondary-color);
		border-radius: 10px;
		padding: 15px 10px;
		margin: 0px auto;
		margin-top: 20px;
	}
`

const HomeScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer>
                <StyledHeroContainer>
                    <StyledHeroImage src={Hero} />
                    <StyledSlogan>
                        <h2>Training Sucks?</h2>
                        <h1>Try Losing!</h1>
                        <Link to="/anmeldung">
                            Melden Sie sich jetzt für ein Training an!
                        </Link>
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
