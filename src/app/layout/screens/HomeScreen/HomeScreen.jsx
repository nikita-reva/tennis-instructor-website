import React from 'react'
import styled from 'styled-components'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { HeroHomeScreen, ImageSliderData, EventsData, InfosData } from './Data'
import { Hero, Events, Infos, ImageSlider } from '../../components'

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<Hero {...HeroHomeScreen} />
			</ContentContainer>
			<ContentContainer>
				<ContentSection>
					<Events events={EventsData} />
				</ContentSection>
				<ContentSection>
					<Infos infos={InfosData} />
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
