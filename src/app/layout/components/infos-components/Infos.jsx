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
	InfoLink1,
	InfoLink2,
	InfoLink3,
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
						{info.link1To && (
							<InfoLink1>
								<a
									href={info.link1To}
									target="_blank"
									rel="noreferrer"
								>
									{info.link1Text}
								</a>
							</InfoLink1>
						)}
						{info.link2To && (
							<InfoLink2 to={info.link2To}>
								{info.link2Text}
							</InfoLink2>
						)}
						{info.link3To && (
							<InfoLink3>
								<a
									href={info.link3To}
									target="_blank"
									rel="noreferrer"
								>
									{info.link3Text}
								</a>
							</InfoLink3>
						)}
					</Info>
				))}
			</InfosWrapper>
		</InfosContainer>
	)
}

export default Infos
