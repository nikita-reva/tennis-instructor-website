import React from 'react'
import styled from 'styled-components'

const AniketosNavBurger = styled.button`
	display: none;

	@media screen and (max-width: 991px) {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin: auto 20px;
		cursor: pointer;
		width: 2.5rem;
		height: 2.5rem;
		font-size: 20px;
		border: none;
		background: transparent;

		&:hover > div {
			background: var(--accent-color);
		}

		&:focus {
			outline: none;
		}
	}
`

const AniketosBurgerLayer = styled.div`
	position: absolute;
	width: 24px;
	height: 4px;
	background: var(--secondary-color);
	transition: transform 0.3s ease, background 0.2s ease;
`

const AniketosBurgerLayer1 = styled(AniketosBurgerLayer)`
	transform: translateY(-8px);

	&.active {
		transform: translateY(0) rotate(135deg);
	}
`

const AniketosBurgerLayer2 = styled(AniketosBurgerLayer)`
	transform: translateY(0px);
	&.active {
		transform: translateY(0) rotate(-225deg);
	}
`

const AniketosBurgerLayer3 = styled(AniketosBurgerLayer)`
	transform: translateY(8px);

	&.active {
		transform: translateY(0) rotate(225deg);
	}
`

const NavBurger = ({ activate, active }) => {
	return (
		<AniketosNavBurger onClick={() => activate()}>
			<AniketosBurgerLayer1 className={active ? 'active' : ''} />
			<AniketosBurgerLayer2 className={active ? 'active' : ''} />
			<AniketosBurgerLayer3 className={active ? 'active' : ''} />
		</AniketosNavBurger>
	)
}

export default NavBurger
