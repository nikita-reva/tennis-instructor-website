import React from 'react'
import Sponsor from './images/sponsorRot2.png'
import TennisClub from './images/stockach.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterMainContainer0 = styled.div`
	width: 100%;
	background: black;
	color: var(--secondary-color);
`
const FooterMainContainer1 = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	background: black;

	@media screen and (max-width: 754px) {
		flex-direction: column;
	}
`
const FooterMainContainer2 = styled.div`
	width: 100%;
	border-top: 1px solid #eeebeb;
	background: black;
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 0.7rem;

	@media screen and (max-width: 699px) {
		flex-direction: column;
		text-align: center;
	}
	@media screen and (max-width: 754px) {
		border-top: 1px solid black;
	}
`
const ContainerKontakt = styled.div`
	color: var(--secondary-color);
	padding: 12px 25px;
`
const FooterText = styled.p`
	font-size: 0.7rem;
	font-style: 'Poppins', sans-serif;
	color: var(--secondary-color);
	margin-top: 2px;
	a {
		color: var(--secondary-color);
	}

	@media screen and (max-width: 810px) {
		font-size: 0.6rem;
	}
`
const FooterText2 = styled.p`
	font-size: 0.6rem;
	font-style: 'Poppins', sans-serif;
	color: var(--secondary-color);
	margin-top: 2px;

	a {
		font-weight: 700;
		padding: 12px;
		color: var(--secondary-color);
	}

	@media screen and (max-width: 810px) {
		font-size: 0.51rem;
	}
	@media screen and (max-width: 699px) {
		font-size: 0.6rem;
	}
	@media screen and (max-width: 384px) {
		font-size: 0.5rem;
	}
	@media screen and (max-width: 331px) {
		font-size: 0.45rem;
	}
`

const FooterTitle = styled.div`
	font-family: 'Fjalla One', sans-serif;
	font-size: 1rem;

	@media screen and (max-width: 810px) {
		font-size: 0.9rem;
	}
`

const ContainerAnschrift = styled.div`
	color: var(--secondary-color);
	padding: 12px 25px;

	@media screen and (max-width: 754px) {
		border-top: 1px solid var(--secondary-color);
	}
`
const ContainerBild = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 24px;

	@media screen and (max-width: 754px) {
		justify-content: left;
		border-top: 1px solid var(--secondary-color);
	}
	@media screen and (max-width: 501px) {
		justify-content: center;
	}
`
const ContainerCopyright = styled.div`
	color: var(--secondary-color);

	padding: 0 25px;
`
const ContainerDesignedby = styled.div`
	color: var(--secondary-color);

	padding: 0 25px;
`
const ContainerDatenschutzImperessum = styled.div`
	color: var(--secondary-color);
	padding: 0 25px;
`

const Footer = () => {
	return (
		<FooterMainContainer0>
			<FooterMainContainer1>
				<ContainerKontakt>
					<FooterTitle>Kontakt</FooterTitle>
					<FooterText>
						<i className="fas fa-envelope"></i>
						<a href="mailto:info@tennis-yasar.de">
							info@tennis-yasar.de
						</a>
					</FooterText>
					<FooterText>
						<i className="fas fa-phone-alt"></i>
						<a href="tel://+4917655217938">+4917655217938</a>
					</FooterText>
					<FooterText>
						<i className="fas fa-map-marker-alt"></i>
						Zoznegger Str.3 - 78333 Stockach
					</FooterText>
				</ContainerKontakt>
				<ContainerAnschrift>
					<FooterTitle>Anschrift</FooterTitle>
					<FooterText>Tennis Academy Yasar</FooterText>
					<FooterText>Am Osterholz 4</FooterText>
					<FooterText>78333 Stockach</FooterText>
				</ContainerAnschrift>
				<ContainerBild>
					<a href="https://www.tecnifibre.com/">
						<img src={Sponsor} alt="Technifibre" width="200" />
					</a>
					<a href="https://www.tc-stockach.de/">
						<img src={TennisClub} alt="TC-Stockach" width="120" />
					</a>
				</ContainerBild>
			</FooterMainContainer1>
			<FooterMainContainer2>
				<ContainerCopyright>
					<FooterText2>
						Copyright &copy; {new Date().getFullYear()} Tennis
						Academy Yasar - Alle Rechte vorbehalten
					</FooterText2>
				</ContainerCopyright>

				<ContainerDesignedby>
					<FooterText2>
						Website By Niko Reva & Ahmet Yasar
					</FooterText2>
				</ContainerDesignedby>

				<ContainerDatenschutzImperessum>
					<FooterText2>
						<Link to="/datenschutz">Datenschutz</Link>
						<Link to="/imperessum">Imperessum</Link>
					</FooterText2>
				</ContainerDatenschutzImperessum>
			</FooterMainContainer2>
		</FooterMainContainer0>
	)
}

export default Footer
