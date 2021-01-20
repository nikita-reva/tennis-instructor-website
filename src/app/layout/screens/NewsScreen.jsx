import React from 'react'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'

const NewsScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<h1>News Screen</h1>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default NewsScreen
