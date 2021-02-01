import React from 'react'

import { ImageSlider } from '../'
import { GalleryItemsContainer } from './GalleryItems.elements'

const GalleryItems = ({ slides, incrementRate }) => {
	return (
		<GalleryItemsContainer>
			<ImageSlider slides={slides} incrementRate={incrementRate} />
		</GalleryItemsContainer>
	)
}

export default GalleryItems
