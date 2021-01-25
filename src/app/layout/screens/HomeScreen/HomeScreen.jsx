import React from 'react'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { HeroHomeScreen } from './Data'
import { Hero } from '../../components'

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<Hero {...HeroHomeScreen} />
				<Hero {...HeroHomeScreen} />
				<ContentSection>
					<h1>Home Screen</h1>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
