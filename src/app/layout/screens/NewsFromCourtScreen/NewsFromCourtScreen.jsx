import React from 'react'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'

import { News } from '../../components'

import { NewsData } from './Data'

const NewsFromCourtScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<h1>News From Court Screen</h1>
					<News news={NewsData} />
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default NewsFromCourtScreen
