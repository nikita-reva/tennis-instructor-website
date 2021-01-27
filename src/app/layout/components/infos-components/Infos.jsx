import React from 'react'

import {
	InfosContainer,
	InfosHeading,
	InfosWrapper,
	Info,
	InfoMediaContainer,
	InfoContent,
	InfoTitle,
	InfoText,
	InfoImageContainer,
	InfoImage,
	InfoLink,
} from './Infos.elements'

const Infos = ({ infos }) => {
	if (!Array.isArray(infos) || infos.length <= 0) {
		return null
	}

	return (
		<InfosContainer>
			<InfosHeading>Infos</InfosHeading>
			<InfosWrapper>
				{infos.map((info, index) => (
					<Info key={index}>
						<InfoMediaContainer>
							<InfoContent>
								<InfoTitle>{info.title}</InfoTitle>
								<InfoText>{info.text}</InfoText>
							</InfoContent>
							<InfoImageContainer>
								<InfoImage src={info.image} alt={info.alt} />
							</InfoImageContainer>
						</InfoMediaContainer>
						<InfoLink to={info.linkTo}>{info.linkText}</InfoLink>
					</Info>
				))}
			</InfosWrapper>
		</InfosContainer>
	)
}

export default Infos
