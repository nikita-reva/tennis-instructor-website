import React from 'react'
import styled from 'styled-components'
import { IoConstruct } from 'react-icons/io5'

const Background = styled.section`
	background: var(--primary-color);
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const Text = styled.h2`
	color: var(--secondary-color);
	width: 100%;
	text-align: center;
`

const Icon = styled(IoConstruct)`
	font-size: 2.5rem;
	color: var(--secondary-color);
`

const UnderConstructionScreen = () => {
	return (
		<Background>
			<Icon />
			<Text>Website Under Construction</Text>
		</Background>
	)
}

export default UnderConstructionScreen
