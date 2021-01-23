import React from 'react'
import styled from 'styled-components'

const AniketosContentSection = styled.section`
	width: 80%;
	margin: 0 auto;
	padding-top: ${({ pdt }) => (pdt ? pdt : '0')};
	padding-right: ${({ pdr }) => (pdr ? pdr : '0')};
	padding-bottom: ${({ pdb }) => (pdb ? pdb : '0')};
	padding-left: ${({ pdl }) => (pdl ? pdl : '0')};

	@media screen and (max-width: 991px) {
		width: 94%;
	}
`

const ContentSection = ({ children, pdt, pdr, pdb, pdl }) => {
	return (
		<AniketosContentSection pdt={pdt} pdr={pdr} pdb={pdb} pdl={pdl}>
			{children}
		</AniketosContentSection>
	)
}

export default ContentSection
