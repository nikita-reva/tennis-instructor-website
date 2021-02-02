import React from 'react'

import { ImageSlider } from '../'
import { GalleryItemsContainer } from './GalleryItems.elements'

const GalleryItems = ({ galleryItems }) => {
	return (
		<GalleryItemsContainer>
			<ImageSlider
				slides={galleryItems.slides}
				incrementRate={galleryItems.incrementRate}
			/>
		</GalleryItemsContainer>
	)
}

export default GalleryItems
