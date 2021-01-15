import React from 'react'
import styled from 'styled-components'

const AniketosSocialMediaBarItem = styled.a`
	text-decoration: none;
	font-size: 24px;
	color: #fff;
	cursor: pointer;

	transition: transform 0.1s ease-in;

	&:hover {
		transform: translateY(-15%);
	}
`

const SocialMediaBarItem = ({ icon }) => {
	return (
		<AniketosSocialMediaBarItem>
			<i className={'fab fa-' + icon}></i>
		</AniketosSocialMediaBarItem>
	)
}

export default SocialMediaBarItem
