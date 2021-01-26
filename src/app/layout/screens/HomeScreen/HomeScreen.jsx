import React from 'react'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { HeroHomeScreen, ImageSliderData } from './Data'
import { Hero, Events, ImageSlider } from '../../components'

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<Hero {...HeroHomeScreen} />
			</ContentContainer>
			<ContentContainer>
				<ContentSection>
					<ImageSlider slides={ImageSliderData} />
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
