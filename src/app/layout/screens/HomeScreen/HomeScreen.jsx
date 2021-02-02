import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { ContainerColorizer } from '../ContainerColorizer'

import { HeroHomeScreen, ImageSliderData, EventsData, InfosData } from './Data'
import { Hero, Events, Infos, ImageSlider } from '../../components'

const Billboard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0;

	@media screen and (min-width: 681px) {
		flex-direction: row;
		gap: 20px;
	}
`

const BillboardEventsContainer = styled.div`
	order: 1;
	margin-bottom: 20px;

	@media screen and (min-width: 681px) {
		order: 2;
		flex-basis: 30%;
	}

	@media screen and (min-width: 1101px) {
		transform: translateY(-18%);
	}
`

const BillboardInfosContainer = styled.div`
	order: 2;

	@media screen and (min-width: 681px) {
		order: 1;
		flex-basis: 70%;
	}
`

const ImageSliderContainer = styled.div`
	position: relative;
	padding: 100px 0;
`

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<Hero {...HeroHomeScreen} />
			</ContentContainer>
			<ContentContainer>
				<ContentSection>
					<Billboard>
						<BillboardInfosContainer>
							<Infos infos={InfosData} />
						</BillboardInfosContainer>
						<BillboardEventsContainer>
							<Events events={EventsData} />
						</BillboardEventsContainer>
					</Billboard>
				</ContentSection>
			</ContentContainer>
			<ContentContainer>
				<ContentSection>
					<ImageSliderContainer>
						<ImageSlider
							slides={ImageSliderData}
							incrementRate={4000}
							aspectRatio={3 / 2}
							textActive
						/>
					</ImageSliderContainer>
				</ContentSection>
			</ContentContainer>
			<ContentContainer>
				<ContainerColorizer bgFill="#000" />
				<ReactPlayer
					url={require('../videos/video0.mp4').default}
					muted={true}
					loop={true}
					controls={false}
					playing={true}
					playsinline={true}
					width="100%"
					height="100%"
				/>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
