import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EventsContainer = styled.div`
	width: 100%;
	max-width: 600px;
	display: flex;
	position: relative;
	flex-direction: column;
	background: #fff;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 8px;
		background-color: var(--secondary-color);
	}
`

export const EventsHeading = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	font-weight: 700;
	letter-spacing: 0.1rem;
	font-size: 2.5rem;
	line-height: 1.4;
	padding: 12px 24px 6px 24px;
	color: var(--secondary-color);
`

export const EventsWrapper = styled.div`
	background: #ccc;
	padding: 12px 24px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--secondary-color);
	}
`

export const Event = styled.div`
	width: 100%;
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	border-top: 2px solid var(--secondary-color);
	padding-top: 18px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		clip-path: polygon(100% 100%, 0 0, 100% 0);
		top: 0;
		right: 0;
		width: 12px;
		height: 12px;
		background-color: var(--secondary-color);
	}
`

export const EventPointInTime = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 12px;
`

export const EventDate = styled.h5`
	white-space: nowrap;
	font-size: 0.8em;
	color: var(--secondary-color);
`

export const EventTime = styled.h5`
	font-size: 0.8em;
	color: #444;
`

export const EventInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const EventTitle = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	line-height: 1.8;
	font-weight: 700;
	font-size: 1.2rem;
	letter-spacing: 0.06rem;
`

export const EventDescription = styled.p`
	width: 100%;
	font-weight: 500;
	font-size: 0.8rem;
`

export const EventLink = styled(Link)`
	display: block;
	align-self: center;
	min-width: 60%;
	font-weight: 600;
	font-size: 0.8rem;
	letter-spacing: 0.04rem;
	text-decoration: none;
	text-align: center;
	color: #fff;
	background: var(--secondary-color);
	border-radius: 6px;
	padding: 6px 12px;
	margin-top: 12px;
	transition: all 0.1s ease-in;

	&:hover {
		transform: scale(0.98);
	}
`
