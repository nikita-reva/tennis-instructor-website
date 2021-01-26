import React, { useState, useRef, useEffect } from 'react'

import {
	SliderContainer,
	Slider,
	LeftArrow,
	RightArrow,
	Slide,
	SliderImage,
	SliderNav,
	SliderNavCircle,
} from './ImageSlider.elements.jsx'

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const [width, setWidth] = useState(0)
	const length = slides.length
	const containerElement = useRef(null)

	window.addEventListener('resize', () => {
		if (containerElement.current) {
			setWidth(containerElement.current.offsetWidth)
		}
	})

	useEffect(() => {
		if (containerElement.current) {
			setWidth(containerElement.current.offsetWidth)
		}
	}, [containerElement])

	console.log(width)

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const setSlide = (index) => {
		setCurrent(index)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<SliderContainer>
			<Slider ref={containerElement} hgt={`${(width * 2) / 3}px`}>
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
				<SliderNav>
					{slides.map((slide, index) => {
						return (
							<SliderNavCircle
								className={index === current && 'active'}
								key={slide.image}
								onClick={() => {
									setSlide(index)
								}}
							/>
						)
					})}
				</SliderNav>
			</Slider>
		</SliderContainer>
	)
}

export default ImageSlider
