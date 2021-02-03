import React from 'react'
import ImageSlider from '../image-slider-components/ImageSlider'

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
	InfoLink2,
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
							{info.image && (
								<InfoImageContainer>
									<InfoImage
										src={info.image}
										alt={info.alt}
									/>
								</InfoImageContainer>
							)}
							{info.imageSlides && (
								<InfoImageContainer>
									<ImageSlider
										slides={info.imageSlides}
										incrementRate={10000}
										aspectRatio={
											info.sliderAspectRatio
												? info.sliderAspectRatio
												: 3 / 2
										}
										blackNav={info.sliderBlackNav}
									/>
								</InfoImageContainer>
							)}
						</InfoMediaContainer>
						{info.linkTo && (
							<InfoLink to={info.linkTo}>
								{info.linkText}
							</InfoLink>
						)}
						{info.link2To && (
							<InfoLink2>
								<a
									href={info.link2To}
									target="_blank"
									rel="noreferrer"
								>
									{info.link2Text}
								</a>
							</InfoLink2>
						)}
					</Info>
				))}
			</InfosWrapper>
		</InfosContainer>
	)
}

export default Infos
