import React from 'react'

import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import { GalleryItems } from '../../components'
import { GalleryData } from './Data'

const GalleryScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<GalleryItems galleryItems={GalleryData} />
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default GalleryScreen
