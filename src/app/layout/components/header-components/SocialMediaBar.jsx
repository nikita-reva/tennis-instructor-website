import React from 'react'
import styled from 'styled-components'

const AniketosSocialMediaBar = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2vw;

	@media screen and (max-width: 991px) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const SocialMediaBar = ({ children }) => {
	return <AniketosSocialMediaBar>{children}</AniketosSocialMediaBar>
}

export default SocialMediaBar
