import React from 'react'
import styled from 'styled-components'

const StyledControlBar = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	gap: 10px;
	width: 100%;
`

const MainControlBar = ({ children }) => {
	return <StyledControlBar>{children}</StyledControlBar>
}

export default MainControlBar
