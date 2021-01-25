import React from 'react'

import {
	HeroContainer,
	HeroImage,
	Slogan,
	SloganMedium,
	SloganBig,
	HeroLink,
	SubText,
} from './Hero.elements'

const Hero = ({
	img,
	sloganLeft,
	sloganMedium,
	sloganBig,
	subtext,
	btnText,
	linkTo,
}) => {
	return (
		<HeroContainer>
			<HeroImage src={img} />
			<Slogan sloganLeft={sloganLeft}>
				<SloganMedium>{sloganMedium}</SloganMedium>
				<SloganBig>{sloganBig}</SloganBig>
				<SubText>{subtext}</SubText>
				<HeroLink to={linkTo}>{btnText}</HeroLink>
			</Slogan>
		</HeroContainer>
	)
}

export default Hero
