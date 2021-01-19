import React from 'react'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<h1>Home Screen</h1>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default HomeScreen
