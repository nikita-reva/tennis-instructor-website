import React, { useState } from 'react'

import {
	Slider,
	LeftArrow,
	RightArrow,
	Slide,
	SliderImage,
} from './ImageSlider.elements.jsx'

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const prevSlide = () => {
		console.log('Go To Previous Slide')
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	const nextSlide = () => {
		console.log('Go To Next Slide')
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	console.log(current)

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<Slider>
			<LeftArrow onClick={prevSlide} />
			<RightArrow onClick={nextSlide} />
			{slides.map((slide, index) => {
				return (
					<Slide
						className={index === current && 'active'}
						key={index}
					>
						{index === current && (
							<SliderImage
								src={slide.image}
								alt={slide.alt}
							></SliderImage>
						)}
					</Slide>
				)
			})}
		</Slider>
	)
}

export default ImageSlider
