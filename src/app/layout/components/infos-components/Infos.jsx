import React from 'react'

import {
	InfosContainer,
	InfosHeading,
	InfosWrapper,
	Info,
	InfoContent,
	InfoTitle,
	InfoText,
	InfoImageContainer,
	InfoImage,
	InfoLink,
} from './Infos.elements'

const Infos = ({ infos }) => {
	return (
		<InfosContainer>
			<InfosHeading>Infos</InfosHeading>
			<InfosWrapper>
				{infos.map((info, index) => (
					<Info key={index}>
						<InfoContent>
							<InfoTitle>{info.title}</InfoTitle>
							<InfoText>{info.text}</InfoText>
						</InfoContent>
						<InfoImageContainer>
							<InfoImage src={info.image} alt={info.alt} />
						</InfoImageContainer>
						<InfoLink to={info.linkTo}>{info.linkText}</InfoLink>
					</Info>
				))}
			</InfosWrapper>
		</InfosContainer>
	)
}

export default Infos
