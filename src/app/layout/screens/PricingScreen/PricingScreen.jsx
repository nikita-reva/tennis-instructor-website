import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

export const ServicesContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 8px;
		background-color: var(--secondary-color);
	}
`

export const ServicesHeading = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	background: #fff;
	font-weight: 700;
	letter-spacing: 0.1rem;
	font-size: 2.5rem;
	line-height: 1.4;
	padding: 12px 24px 6px 24px;
	color: var(--secondary-color);
`

export const ServicesWrapper = styled.div`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--secondary-color);
	}
`

export const Service = styled.div`
	width: 100%;
	background: #ccc;
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	border-top: 4px solid var(--secondary-color);
	position: relative;

	&::after {
		content: '';
		position: absolute;
		clip-path: polygon(100% 100%, 0 0, 100% 0);
		top: 0;
		right: 0;
		width: 22px;
		height: 18px;
		background-color: var(--secondary-color);
	}
`

export const ServiceTargetGroup = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	background: #aaa;
	width: 100%;
	line-height: 1.2;
	font-weight: 700;
	font-size: 1.2rem;
	letter-spacing: 0.04rem;
	padding-top: 12px;
	padding-left: 24px;
	padding-bottom: 6px;
`

export const ServiceContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6px 9px;

	@media screen and (min-width: 992px) {
		flex-basis: 60%;
		padding: 12px 18px;
	}
`

export const InfoText = styled.p`
	width: 100%;
	font-weight: 500;
`

export const InfoImageContainer = styled.div`
	display: grid;
	place-items: center;
	align-self: center;
	border-radius: 10px;
	overflow: hidden;
	margin: 6px 9px;

	@media screen and (min-width: 992px) {
		flex-basis: 40%;
		margin: 12px 18px;
	}
`

export const InfoImage = styled.img`
	width: 100%;
	object-fit: cover;
`

export const ServicesLink = styled(Link)`
	display: block;
	align-self: flex-start;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.04rem;
	text-decoration: none;
	text-align: center;
	color: #fff;
	background: var(--secondary-color);
	border-radius: 6px;
	padding: 6px 12px;
	margin-top: 12px;
	transition: all 0.1s ease-in;

	@media screen and (min-width: 501px) {
		width: 60%;
		max-width: 250px;
		margin-left: 9px;
	}

	@media screen and (min-width: 992px) {
		margin-left: 18px;
	}

	&:hover {
		transform: scale(0.98);
	}
`

const PricingScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<ServicesContainer>
						<ServicesHeading>Unsere Angebote</ServicesHeading>
						<ServicesWrapper>
							<Service>
								<ServiceTargetGroup>
									Anfänger
								</ServiceTargetGroup>
							</Service>
						</ServicesWrapper>
					</ServicesContainer>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default PricingScreen
