import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { HeroHomeScreen, ImageSliderData, EventsData, InfosData } from './Data'
import { Hero, Events, Infos, ImageSlider } from '../../components'

const Billboard = styled.div`
	display: flex;
	padding: 20px 0;
	gap: 20px;
`

const BillboardEventsContainer = styled.div`
	flex-basis: 30%;
`

const BillboardInfosContainer = styled.div`
	flex-basis: 70%;
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
						<BillboardEventsContainer>
							<Events events={EventsData} />
						</BillboardEventsContainer>
						<BillboardInfosContainer>
							<Infos infos={InfosData} />
						</BillboardInfosContainer>
					</Billboard>
				</ContentSection>
			</ContentContainer>
			<ContentContainer>
				<ContentSection>
					<ImageSlider
						slides={ImageSliderData}
						incrementRate={3000}
					/>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
