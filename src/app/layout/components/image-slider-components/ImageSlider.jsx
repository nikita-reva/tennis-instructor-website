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

const ImageSlider = ({
	slides,
	incrementRate,
	aspectRatio,
	blackNav,
	textActive,
	reset,
}) => {
	const [current, setCurrent] = useState(0)
	const [width, setWidth] = useState(0)
	const length = slides.length
	const containerElement = useRef(null)
	const swipeElement = useRef(null)

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
		if (reset) {
			setCurrent(0)
		}
		/* Increment the slides count periodically */
		let interval

		if (containerElement.current) {
			setWidth(containerElement.current.offsetWidth)
		}

		if (incrementRate) {
			interval = setInterval(() => {
				setCurrent(current === length - 1 ? 0 : current + 1)
			}, incrementRate)
		}

		/* Enable touch control of the image slider on touch screens */
		let touchesInAction = {}

		function touchStartHandler(event) {
			let touches = event.changedTouches

			for (let j = 0; j < touches.length; j++) {
				/* store touch info on touchstart */
				touchesInAction['$' + touches[j].identifier] = {
					identifier: touches[j].identifier,
					pageX: touches[j].pageX,
					pageY: touches[j].pageY,
				}
			}
		}

		function touchEndHandler(event) {
			let touches = event.changedTouches
			let theTouchInfo
			for (let j = 0; j < touches.length; j++) {
				/* access stored touch info on touchend */
				theTouchInfo = touchesInAction['$' + touches[j].identifier]
				theTouchInfo.dx =
					touches[j].pageX -
					theTouchInfo.pageX /* x-distance moved since touchstart */
				theTouchInfo.dy =
					touches[j].pageY -
					theTouchInfo.pageY /* y-distance moved since touchstart */
			}

			if (theTouchInfo.dx < -40) {
				console.log(touches)
				console.log(theTouchInfo, typeof theTouchInfo)
				setCurrent(current === 0 ? length - 1 : current - 1)
			}

			if (theTouchInfo.dx > 40) {
				setCurrent(current === length - 1 ? 0 : current + 1)
			}
		}

		swipeElement.current.addEventListener(
			'touchstart',
			touchStartHandler,
			false
		)
		swipeElement.current.addEventListener(
			'touchend',
			touchEndHandler,
			false
		)

		return () => clearInterval(interval)
	}, [containerElement, current, length, reset, incrementRate])

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<SliderContainer>
			<Slider ref={containerElement} hgt={`${width / aspectRatio}px`}>
				{length > 1 && (
					<>
						<LeftArrow
							size={`${
								width > 500 ? 0.06 * width : 0.08 * width
							}px`}
							pdl={`${0.03 * width}px`}
							black={blackNav}
							onClick={prevSlide}
						/>
						<RightArrow
							size={`${
								width > 500 ? 0.06 * width : 0.08 * width
							}px`}
							pdr={`${0.03 * width}px`}
							black={blackNav}
							onClick={nextSlide}
						/>
					</>
				)}
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
										ref={swipeElement}
									/>
									{slide.text && textActive && (
										<SliderImageText>
											{slide.text}
										</SliderImageText>
									)}
								</>
							)}
						</Slide>
					)
				})}
				{length > 1 && (
					<SliderNav>
						{slides.map((slide, index) => {
							return (
								<SliderNavCircle
									className={index === current && 'active'}
									black={blackNav}
									key={index}
									onClick={() => {
										setSlide(index)
									}}
								/>
							)
						})}
					</SliderNav>
				)}
			</Slider>
		</SliderContainer>
	)
}
export default ImageSlider
