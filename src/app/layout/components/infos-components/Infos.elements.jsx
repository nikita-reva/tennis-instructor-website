import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const InfosContainer = styled.div`
	width: 100%;
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

export const InfosHeading = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	font-weight: 700;
	letter-spacing: 0.1rem;
	font-size: 2.5rem;
	line-height: 1.4;
	padding: 12px 24px 6px 24px;
	color: var(--secondary-color);
`

export const InfosWrapper = styled.div`
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

export const Info = styled.div`
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

export const InfoMediaContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 992px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

export const InfoContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6px 9px;

	@media screen and (min-width: 992px) {
		flex-basis: 50%;
		padding: 12px 18px;
	}
`

export const InfoTitle = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	line-height: 1.8;
	font-weight: 700;
	font-size: 1.6rem;
	letter-spacing: 0.06rem;
`

export const InfoText = styled.p`
	width: 100%;
	font-weight: 500;
`

export const InfoImageContainer = styled.div`
	display: grid;
	width: 100%;
	place-items: center;
	align-self: center;
	border-radius: 10px;
	overflow: hidden;
	margin: 6px 9px;

	@media screen and (min-width: 992px) {
		flex-basis: 50%;
		margin: 12px 18px;
	}
`

export const InfoImage = styled.img`
	width: 100%;
	object-fit: cover;
`

export const InfoLink1 = styled.div`
	display: block;
	align-self: flex-start;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.04rem;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	background: var(--secondary-color);
	border-radius: 6px;
	padding: 6px 12px;
	margin-top: 12px;
	transition: all 0.2s ease-in;

	a {
		text-decoration: none;
		color: #fff;
	}

	@media screen and (min-width: 501px) {
		width: 60%;
		max-width: 250px;
		margin-left: 9px;
	}

	@media screen and (min-width: 992px) {
		margin-left: 18px;
	}

	&:hover {
		background: #0886c0;
	}
`

export const InfoLink2 = styled(Link)`
	display: block;
	align-self: flex-start;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.04rem;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	color: #fff;
	background: #079ce0;
	border-radius: 6px;
	padding: 6px 12px;
	margin-top: 12px;
	transition: all 0.2s ease-in;

	@media screen and (min-width: 501px) {
		width: 60%;
		max-width: 250px;
		margin-left: 9px;
	}

	@media screen and (min-width: 992px) {
		margin-left: 18px;
	}

	&:hover {
		background: #b93434;
	}
`

export const InfoLink3 = styled.div`
	display: block;
	align-self: flex-start;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.04rem;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	background: #4db34d;
	border-radius: 6px;
	padding: 6px 12px;
	margin-top: 12px;
	transition: all 0.2s ease-in;

	a {
		text-decoration: none;
		color: #fff;
	}

	@media screen and (min-width: 501px) {
		width: 60%;
		max-width: 250px;
		margin-left: 9px;
	}

	@media screen and (min-width: 992px) {
		margin-left: 18px;
	}

	&:hover {
		background: #459745;
	}
`
