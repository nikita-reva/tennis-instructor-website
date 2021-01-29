import React from 'react'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { Hero, News } from '../../components'

import { HeroNewsScreen, NewsData } from './Data'

const NewsScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<Hero {...HeroNewsScreen} />
			</ContentContainer>
			<ContentContainer>
				<News news={NewsData} />
			</ContentContainer>
		</ScreenContainer>
	)
}

export default NewsScreen
