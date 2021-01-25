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

const Hero = ({ img, sloganMedium, sloganBig, subtext, btnText }) => {
	return (
		<HeroContainer>
			<HeroImage src={img} />
			<Slogan>
				<SloganMedium>{sloganMedium}</SloganMedium>
				<SloganBig>{sloganBig}</SloganBig>
				<SubText>{subtext}</SubText>
				<HeroLink to="/anmeldung">{btnText}</HeroLink>
			</Slogan>
		</HeroContainer>
	)
}

export default Hero
