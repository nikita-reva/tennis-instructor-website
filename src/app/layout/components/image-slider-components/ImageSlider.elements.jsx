import styled, { css } from 'styled-components'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export const Slider = styled.div`
	width: 100%;
	height: calc(80vw * (2 / 3));
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`

const Arrow = css`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 3rem;
	color: #fff;
	z-index: 10;
	transition: opacity 0.4s ease;
	opacity: 0.2;
	cursor: pointer;
	user-select: none;

	&:hover {
		opacity: 0.8;
	}
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
	${Arrow}
	left: 32px;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
	${Arrow}
	right: 32px;
`

export const Slide = styled.div`
	opacity: 0;
	transition-duration: 1s ease;
	&.active {
		opacity: 1;
		transition-duration: 1s;
		transform: scale(1.08);
	}
`

export const SliderImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0;
	object-fit: cover;
`
