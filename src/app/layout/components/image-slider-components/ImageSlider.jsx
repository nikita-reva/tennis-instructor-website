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
	SliderImageText,
} from './ImageSlider.elements.jsx'

const ImageSlider = ({ slides, incrementRate }) => {
	const [current, setCurrent] = useState(0)
	const [width, setWidth] = useState(0)
	const length = slides.length
	const containerElement = useRef(null)

	window.addEventListener('resize', () => {
		if (containerElement.current) {
			setWidth(containerElement.current.offsetWidth)
		}
	})

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const setSlide = (index) => {
		setCurrent(index)
	}

	useEffect(() => {
		let interval

		if (containerElement.current) {
			setWidth(containerElement.current.offsetWidth)
		}
		if (incrementRate) {
			interval = setInterval(() => {
				setCurrent(current === length - 1 ? 0 : current + 1)
			}, incrementRate)
		}
		return () => clearInterval(interval)
	}, [containerElement, current, length, incrementRate])

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<SliderContainer>
			<Slider ref={containerElement} hgt={`${(width * 2) / 3}px`}>
				<LeftArrow
					size={`${width > 500 ? 0.06 * width : 0.08 * width}px`}
					pdl={`${0.03 * width}px`}
					onClick={prevSlide}
				/>
				<RightArrow
					size={`${width > 500 ? 0.06 * width : 0.08 * width}px`}
					pdr={`${0.03 * width}px`}
					onClick={nextSlide}
				/>
				{slides.map((slide, index) => {
					return (
						<Slide
							className={index === current && 'active'}
							key={index}
						>
							{index === current && (
								<>
									<SliderImage
										src={slide.image}
										alt={slide.alt}
									/>
									{slide.text && (
										<SliderImageText>
											{slide.text}
										</SliderImageText>
									)}
								</>
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
