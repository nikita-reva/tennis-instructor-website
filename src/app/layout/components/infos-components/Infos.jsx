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
	InfoDownloadLink,
	InfoRouterLink,
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
						{info.links &&
							info.links.map((link, index) =>
								link.linkType === 'download' ? (
									<InfoDownloadLink
										linkcolor={link.linkColor}
										key={index}
									>
										<a
											href={link.linkTo}
											target="_blank"
											rel="noreferrer"
										>
											{link.linkText}
										</a>
									</InfoDownloadLink>
								) : link.linkType === 'router' ? (
									<InfoRouterLink
										linkcolor={link.linkColor}
										to={link.linkTo}
										key={index}
									>
										{link.linkText}
									</InfoRouterLink>
								) : null
							)}
					</Info>
				))}
			</InfosWrapper>
		</InfosContainer>
	)
}

export default Infos
