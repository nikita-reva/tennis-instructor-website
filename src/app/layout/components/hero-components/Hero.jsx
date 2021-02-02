import React from 'react'

import {
	HeroContainer,
	HeroImage,
	Slogan,
	SloganMedium,
	SloganBig,
	HeroLink,
	SubText,
	BusinessName,
} from './Hero.elements'

const Hero = ({
	img,
	sloganLeft,
	sloganMedium,
	sloganBig,
	subtext,
	btnText,
	linkTo,
	businessName,
}) => {
	return (
		<HeroContainer>
			<HeroImage src={img} />
			<Slogan sloganLeft={sloganLeft}>
				<SloganMedium>{sloganMedium}</SloganMedium>
				<SloganBig>{sloganBig}</SloganBig>
				{businessName && <BusinessName>{businessName}</BusinessName>}
				<SubText>{subtext}</SubText>
				{linkTo && <HeroLink to={linkTo}>{btnText}</HeroLink>}
			</Slogan>
		</HeroContainer>
	)
}

export default Hero
