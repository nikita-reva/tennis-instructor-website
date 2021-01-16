import React from 'react'
import styled from 'styled-components'

const AniketosSocialMediaBar = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2vw;
`

const SocialMediaBar = ({ children }) => {
	return <AniketosSocialMediaBar>{children}</AniketosSocialMediaBar>
}

export default SocialMediaBar