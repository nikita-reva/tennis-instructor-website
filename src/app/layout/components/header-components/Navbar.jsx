import React from 'react'
import styled from 'styled-components'

const AniketosNavbar = styled.ul`
	display: flex;
	flex-grow: 2;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	list-style: none;

	@media screen and (max-width: 991px) {
		display: none;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		background: rgba(20, 0, 0, 0.4);
		backdrop-filter: blur(6px);
		height: unset;
		width: 100%;
		left: -100%;
		transition: all 0.5s ease;

		&:before {
			content: '';
			position: relative;
			top: 0;
			left: 0;
			height: 2px;
			width: 100%;
			background: var(--secondary-color);
		}

		&.active {
			left: 0;
		}
	}
`

const Navbar = ({ children, smallActive }) => {
	return (
		<AniketosNavbar className={smallActive ? 'active' : ''}>
			{children}
		</AniketosNavbar>
	)
}

export default Navbar
