import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeroContainer = styled.div`
	position: relative;
	width: 100%;
	height: 1000px;

	@media screen and (max-width: 1100px) {
		height: 800px;
	}

	@media screen and (max-width: 500px) {
		height: 640px;
	}

	@media screen and (min-width: 1600px) {
		height: 1200px;
	}
`

export const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 100% 0%;

	@media screen and (max-width: 1100px) {
		object-position: 50% 0%;
	}
`

export const Slogan = styled.div`
	padding: 20px;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: ${({ sloganLeft }) =>
		sloganLeft ? 'flex-start' : 'flex-end'};
	top: 25%;
	right: ${({ sloganLeft }) => (sloganLeft ? 'unset' : '0')};
	padding-right: ${({ sloganLeft }) => (sloganLeft ? 'unset' : '6vw')};
	left: ${({ sloganLeft }) => (sloganLeft ? '0' : 'unset')};
	padding-left: ${({ sloganLeft }) => (sloganLeft ? '6vw' : 'unset')};
	color: #fff;

	@media screen and (min-width: 1101px) {
		&:hover {
			& h1:after {
				top: 0%;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		top: 100%;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		transform: translateY(-100%);
		width: 100%;
	}
`

export const SloganMedium = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	font-size: 4rem;
	user-select: none;

	@media screen and (max-width: 500px) {
		font-size: 2.2rem;
	}
`

export const SloganBig = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	font-size: 6rem;
	user-select: none;

	@media screen and (max-width: 500px) {
		font-size: 3.8rem;
	}
`

export const SubText = styled.p`
	font-family: 'Fjalla One', sans-serif;
	font-size: 1rem;
	margin-top: 18px;

	@media screen and (max-width: 500px) {
		font-size: 0.8rem;
	}
`

export const BusinessName = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	position: relative;
	font-size: 1.5rem;
	margin: 12px 0;
	letter-spacing: 1px;
	user-select: none;
	overflow: hidden;
	color: var(--secondary-color);

	@media screen and (min-width: 501px) {
		font-size: 2.5rem;
	}

	@media screen and (min-width: 1101px) {
		text-align: center;
		width: 100%;
		color: #fff;

		&:after {
			content: '';
			width: 100%;
			height: 80px;
			position: absolute;
			top: 100%;
			left: 0;
			mix-blend-mode: darken;
			background: var(--secondary-color);
			transition: top 1s linear;
		}
	}
`

export const HeroLink = styled(Link)`
	display: block;
	text-decoration: none;
	text-align: center;
	position: relative;
	color: #fff;
	background: var(--secondary-color);
	border-radius: 10px;
	padding: 12px 24px;
	margin-top: 24px;
	overflow: hidden;

	&:after {
		content: '';
		position: absolute;
		background: #f5da41;
		bottom: -50%;
		left: -50%;
		border-radius: 50%;
		box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.8),
			inset 0px 0px 4px rgba(0, 0, 0, 0.4);
		width: 25px;
		height: 25px;
		transition: all 0.5s linear;
	}

	&:before {
		content: '';
		position: absolute;
		background: #f5da41;
		bottom: -50%;
		right: -50%;
		border-radius: 50%;
		box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.8),
			inset 0px 0px 4px rgba(0, 0, 0, 0.4);
		width: 25px;
		height: 25px;
		transition: all 0.5s linear;
		transition-delay: 0.6s;
	}

	&:hover {
		&:after {
			left: 150%;
			bottom: 100%;
		}

		&:before {
			right: 150%;
			bottom: 100%;
		}
	}
`
