import React, { useState, useEffect } from 'react'

import { ImageSlider } from '../'
import {
	GalleryContainer,
	GalleryMainSliderContainer,
	GalleryItemsContainer,
	GalleryItemContainer,
	GalleryItemCard,
	GalleryItemSliderContainer,
	GalleryItemInfoContainer,
	GalleryItemTitle,
	GalleryItemText,
	GalleryItemButton,
} from './GalleryItems.elements'

const GalleryItems = ({ galleryItems }) => {
	const [currentSlides, setCurrentSlides] = useState(0)
	const [sliderReset, setSliderReset] = useState(false)

	useEffect(() => {
		if (sliderReset) {
			setSliderReset(false)
		}
	}, [sliderReset])

	const changeSlidesDataHandler = (index) => {
		setSliderReset(true)
		setTimeout(() => setCurrentSlides(index), 10)
		window.scrollTo(0, 0)
	}

	return (
		<GalleryContainer>
			<GalleryMainSliderContainer>
				<ImageSlider
					slides={galleryItems[currentSlides].imageSlides}
					incrementRate={
						galleryItems[currentSlides].sliderIncrementRate
					}
					aspectRatio={galleryItems[currentSlides].sliderAspectRatio}
					blackNav={galleryItems[currentSlides].sliderBlackNav}
					textActive
					reset={sliderReset}
				/>
			</GalleryMainSliderContainer>
			<GalleryItemsContainer>
				{galleryItems.map((galleryItem, index) => (
					<GalleryItemContainer key={index}>
						<GalleryItemCard>
							<GalleryItemSliderContainer>
								<ImageSlider
									slides={galleryItem.imageSlides}
									incrementRate={
										galleryItem.sliderIncrementRate
									}
									aspectRatio={galleryItem.sliderAspectRatio}
									blackNav={galleryItem.sliderBlackNav}
								/>
							</GalleryItemSliderContainer>
							<GalleryItemInfoContainer>
								<GalleryItemTitle>
									{galleryItem.title}
								</GalleryItemTitle>
								<GalleryItemText>
									{galleryItem.text}
								</GalleryItemText>

								<GalleryItemButton
									onClick={() =>
										changeSlidesDataHandler(index)
									}
								>
									Anzeigen
								</GalleryItemButton>
							</GalleryItemInfoContainer>
						</GalleryItemCard>
					</GalleryItemContainer>
				))}
			</GalleryItemsContainer>
		</GalleryContainer>
	)
}

export default GalleryItems
