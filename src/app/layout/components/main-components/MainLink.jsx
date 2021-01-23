import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled.div`
	display: grid;
	place-items: center;
	min-width: 250px;
	max-width: 800px;
	margin: 10px auto;
	background-color: ${({ bgc }) => (bgc ? bgc : 'var(--secondary-color)')};
	height: 40px;

	& > a {
		display: grid;
		place-items: center;
		z-index: 2;
		color: var(--accent-color);
		text-decoration: none;
		font-size: 0.8rem;
		width: 100%;
		height: 100%;
	}

	&:focus {
		outline: none;
	}

	@media screen and (max-width: 600px) {
		margin-top: 10px;
		width: 100%;
	}
`

const MainLink = ({ to, title, bgc }) => {
	return (
		<StyledLink bgc={bgc}>
			<Link to={to}>{title}</Link>
		</StyledLink>
	)
}

export default MainLink
