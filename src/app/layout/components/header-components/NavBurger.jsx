import React from 'react'
import styled from 'styled-components'

const AniketosNavBurger = styled.button`
	display: none;

	@media screen and (max-width: 991px) {
		display: block;
		margin: auto 20px;
		min-width: 2.5rem;
		cursor: pointer;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 3px;
		font-size: 20px;
		background: var(--primary-color);
		color: var(--secondary-color);
		border: none;

		.fa-times {
			font-size: 24px;
			transform: translate(2%, 10%);
		}

		&:hover {
			background: #db6d4c;
		}

		&:focus {
			outline: none;
		}
	}
`

const NavBurger = ({ activate, active }) => {
	return (
		<AniketosNavBurger onClick={() => activate('Hello')}>
			<i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
		</AniketosNavBurger>
	)
}

export default NavBurger
