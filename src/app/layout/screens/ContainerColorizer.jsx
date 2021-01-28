import styled from 'styled-components'

export const ContainerColorizer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: ${({ bgFill }) => (bgFill ? bgFill : 'none')};
	background-repeat: no-repeat;
	background-size: cover;
	clip-path: circle(50% at 50% 50%);
`
