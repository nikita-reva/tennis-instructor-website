import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AniketosNavDropdown = styled.div`
	position: relative;
	height: 100%;
	font-weight: 600;
	letter-spacing: 0.1rem;
	color: var(--secondary-color);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;

	& > span > a {
		text-decoration: none;
		padding: 5px;
		color: var(--scondary-color);
	}

	@media screen and (min-width: 992px) {
		&:hover {
			transition: color 0.1s ease-in-out;
			color: var(--accent-color);
			background: rgba(255, 255, 255, 0.05);

			& > ul {
				display: flex;
				position: absolute;
				top: 100%;
				left: 0;
				flex-direction: column;
				width: 120px;
				transition: background 0.1s ease-in;

				&:before {
					content: '';
					position: relative;
					top: 0;
					left: 0;
					height: 4px;
					width: 200px;
					background: var(--secondary-color);
				}
			}
		}
	}

	@media screen and (max-width: 991px) {
		width: 60%;
		background: var(--primary-color);
		flex-direction: column;

		& > span {
			display: flex;
			align-items: center;
			height: 40px;
		}

		&:hover {
			background: rgba(255, 255, 255, 0.05);

			& > span > a,
			& > span > i {
				transition: color 0.1s ease-in-out;
				color: var(--accent-color);
			}
		}

		& > ul {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}
`

const AniketosNavDropdownList = styled.ul`
	display: none;
`

const NavDropdown = ({ children, heading, to }) => {
	return (
		<AniketosNavDropdown>
			<span>
				<Link to={to}>{heading}</Link>
				<i className="fas fa-chevron-down"></i>
			</span>
			<AniketosNavDropdownList>{children}</AniketosNavDropdownList>
		</AniketosNavDropdown>
	)
}

export default NavDropdown
