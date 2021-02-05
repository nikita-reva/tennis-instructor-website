import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import { FaFileDownload } from 'react-icons/fa'

export const ServicesContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-top: 24px;
	max-width: 1000px;
	display: flex;
	position: relative;
	flex-direction: column;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 8px;
		background-color: var(--secondary-color);
	}
`

export const ServicesHeading = styled.h1`
	font-family: 'Fjalla One', sans-serif;
	background: #fff;
	font-weight: 700;
	text-align: center;
	letter-spacing: 0.1rem;
	font-size: 2.4rem;
	line-height: 1.4;
	padding: 12px 24px 6px 24px;
	color: var(--secondary-color);
	border: 2px solid red;
`

export const ServicesWrapper = styled.div`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--secondary-color);
	}
`

export const ServiceType = styled.h2`
	width: 100%;
	font-family: 'Fjalla One', sans-serif;
	background: #fff;
	color: var(--secondary-color);
	text-align: center;
	letter-spacing: 0.06rem;
	padding: 8px 24px;
	font-weight: 700;
	font-size: 1.6rem;
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	border-top: 4px solid var(--secondary-color);
	border-bottom: 4px solid var(--secondary-color);
	position: relative;
`

export const Service = styled.div`
	width: 100%;
	background: #ccc;
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	border-top: 4px solid var(--secondary-color);
	border-bottom: 4px solid var(--secondary-color);
	position: relative;

	&::after {
		content: '';
		position: absolute;
		clip-path: polygon(100% 100%, 0 0, 100% 0);
		top: 0;
		right: 0;
		width: 22px;
		height: 18px;
		background-color: var(--secondary-color);
	}
`

export const ServiceTargetGroup = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	background: #aaa;
	text-align: right;
	width: 100%;
	line-height: 1.2;
	font-weight: 700;
	font-size: 0.8rem;
	letter-spacing: 0.04rem;
	padding-top: 12px;
	padding-right: 24px;
	padding-bottom: 6px;
	padding-left: 24px;
`

export const ServiceContent = styled.div`
	display: flex;
	flex-direction: column;
`

export const ServiceTitle = styled.h2`
	position: relative;
	font-family: 'Fjalla One', sans-serif;
	border-top: 2px solid var(--secondary-color);
	width: 100%;
	line-height: 1.2;
	font-weight: 700;
	font-size: 1.4rem;
	letter-spacing: 0.04rem;
	padding-top: 18px;
	padding-right: 24px;
	padding-bottom: 12px;
	padding-left: 42px;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 24px;
		transform: translateY(-50%);
		width: 8px;
		height: 30px;
		background: var(--secondary-color);
	}
`

export const ServiceSubtitle = styled.h2`
	font-family: 'Fjalla One', sans-serif;
	width: 100%;
	color: #333;
	line-height: 1.25;
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.04rem;
	padding-top: 12px;
	padding-right: 24px;
	padding-bottom: 12px;
	padding-left: 24px;
`

export const ServiceText = styled.p`
	width: 100%;
	font-weight: 500;
	padding-top: 12px;
	padding-right: 24px;
	padding-bottom: 12px;
	padding-left: 24px;
`

export const ServiceTableContainer = styled.div`
	overflow-x: scroll;
	margin: 0px 24px;
	padding: 6px 0px;
	display: grid;
	place-items: center;

	&::-webkit-scrollbar {
		height: 16px;
	}
	&::-webkit-scrollbar-thumb {
		background: #000;
		border-radius: 12px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #222;
	}

	@media screen and (min-width: 501px) {
		overflow-x: hidden;
	}
`

export const ServiceTable = styled.table`
	padding: 12px 0;
	color: #fff;
	border-collapse: collapse;
	table,
	td,
	th {
		border: 1px solid #fff;
		background: var(--secondary-color);
	}

	th {
		font-size: 0.8rem;
		padding: 8px 12px;
		text-align: left;
	}

	td {
		padding: 8px 12px;
		font-size: 0.8rem;
		text-align: left;
	}

	td:nth-child(1) {
		min-width: 100px;
	}
	td:nth-child(2),
	td:nth-child(2) {
		min-width: 100px;
	}
`

export const ServiceSubText = styled.div`
	width: 100%;
	color: var(--secondary-color);
	font-size: 0.9rem;
	font-weight: 500;
	padding-top: 12px;
	padding-right: 24px;
	padding-bottom: 12px;
	padding-left: 24px;

	& > ul {
		padding-left: 24px;
	}
`

export const InfoImageContainer = styled.div`
	display: grid;
	place-items: center;
	align-self: center;
	border-radius: 10px;
	overflow: hidden;
	margin: 6px 9px;

	@media screen and (min-width: 992px) {
		flex-basis: 40%;
		margin: 12px 18px;
	}
`

export const InfoImage = styled.img`
	width: 100%;
	object-fit: cover;
`

export const LinksContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 24px 0;
`

export const ServicesLink = styled(Link)`
	display: block;
	min-width: 220px;
	font-weight: 600;
	letter-spacing: 0.04rem;
	text-decoration: none;
	text-align: center;
	color: #fff;
	background: var(--secondary-color);
	border-radius: 6px;
	padding: 6px 12px;
	transition: background 0.2s ease-in;
	margin: 6px 12px;

	&:hover {
		background: #c74747;
	}
`

export const DownloadLink = styled.div`
	a {
		display: block;
		font-weight: 600;
		padding: 6px 12px;
		min-width: 220px;
		letter-spacing: 0.04rem;
		text-decoration: none;
		text-align: center;
		color: #fff;
		border-radius: 6px;
		transition: background 0.2s ease-in;
		background: #079ce0;
		margin: 6px 12px;

		&:hover {
			background: #c74747;
		}
	}
`

export const HeaderPDFContainer = styled.div`
	display: flex;
	width: 100%;
	background: #fff;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 24px 0;
	border-top: 4px solid var(--secondary-color);
	border-bottom: 4px solid var(--secondary-color);
`

export const TrainingHeading = styled.h2`
	width: 100%;
	font-family: 'Fjalla One', sans-serif;
	background: #fff;
	color: var(--secondary-color);
	text-align: center;
	letter-spacing: 0.06rem;
	padding-top: 12px;
	font-weight: 700;
	font-size: 1.6rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

export const PDFLink = styled.div`
	a {
		display: block;
		font-weight: 600;
		padding: 6px 24px;
		letter-spacing: 0.04rem;
		text-decoration: none;
		text-align: center;
		color: #fff;
		border-radius: 6px;
		transition: background 0.2s ease-in;
		background: var(--secondary-color);
		margin: 12px;

		&:hover {
			background: #c74747;
			& > svg {
				margin-left: 12px;
			}
		}

		& > svg {
			margin-left: 4px;
			transition: all 0.2s ease;
		}
	}
`

const PricingScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<ServicesContainer>
						<ServicesHeading>Unsere Angebote</ServicesHeading>
						<ServicesWrapper>
							<HeaderPDFContainer>
								<TrainingHeading>
									Tennistraining
								</TrainingHeading>
								<PDFLink>
									<a
										href={
											require('../images/tay-angebote.pdf')
												.default
										}
										target="_blank"
										rel="noreferrer"
									>
										Angebote PDF <FaFileDownload />
									</a>
								</PDFLink>
							</HeaderPDFContainer>
							<Service>
								<ServiceTargetGroup>
									Zielgruppe: Anfänger
								</ServiceTargetGroup>
								<ServiceContent>
									<ServiceTitle>
										Schnuppertraining
									</ServiceTitle>
									<ServiceSubtitle>
										30 Minuten Schnuppern für nur 10€!
									</ServiceSubtitle>
									<ServiceText>
										Entdecken Sie, wie viel Spaß Tennis
										spielen machen kann! Sie möchten mal
										reinschnuppern? Bitte kontaktieren Sie
										unseren Chef Trainer Ajdin Yasar.
										Besuchen Sie uns auf unserer
										wunderschönen Tennisanlage.
									</ServiceText>
									<ServiceSubText>
										Tennischläger und Tennisbälle werden
										kostenlos für das Schnuppertraining
										gestellt
									</ServiceSubText>
									<LinksContainer>
										<ServicesLink to="/kontakt">
											Anfragen
										</ServicesLink>
									</LinksContainer>
								</ServiceContent>
							</Service>
							<Service>
								<ServiceTargetGroup>
									Zielgruppe: Anfänger, Fortgeschrittene,
									Leistungssportler
								</ServiceTargetGroup>
								<ServiceContent>
									<ServiceTitle>Trainerstunden</ServiceTitle>
									<ServiceSubtitle>
										Einzeltraining
									</ServiceSubtitle>
									<ServiceSubtitle>
										Gruppentraining (2-4 Personen)
									</ServiceSubtitle>
									<ServiceSubtitle>
										Mannschaftstraining (5-8 Personen)
									</ServiceSubtitle>
									<ServiceText>
										Sie sind auf der Suche nach einem
										Trainer für die neue Saison? Buchen Sie
										Ihre Trainingsstunden zu folgenden
										Bedingungen:
									</ServiceText>
									<ServiceTableContainer>
										<ServiceTable>
											<thead>
												<tr>
													<th>Trainer</th>
													<th>
														Einzel- und
														Gruppentraining
													</th>
													<th>Mannschaftstraining</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Ajdin Yasar</td>
													<td>45,- EUR/Stunde</td>
													<td>55,- EUR/Stunde</td>
												</tr>
												<tr>
													<td>
														Trainer der Akademie
													</td>
													<td>33,- EUR/Stunde</td>
													<td>33,- EUR/Stunde</td>
												</tr>
											</tbody>
										</ServiceTable>
									</ServiceTableContainer>
									<ServiceSubText>
										<ul>
											<li>
												Bei Gruppen- oder
												Mannschaftstraining sind die
												Kosten entsprechend der
												Personenanzahl zu dividieren.
											</li>
											<li>
												Das Training findet nicht in den
												Baden-Württembergischen
												Schulferien sowie an Feiertagen
												statt!
											</li>
											<li>
												Die genannten Kosten umfassen
												nur das Trainerhonorar. In der
												Wintersaison fallen zusätzliche
												Kosten für Halle inkl. Licht an.
											</li>
										</ul>
									</ServiceSubText>
									<LinksContainer>
										<ServicesLink to="/anmeldung">
											Anmelden
										</ServicesLink>
										<DownloadLink>
											<a
												href={
													require('../images/tay-angebote.pdf')
														.default
												}
												target="_blank"
												rel="noreferrer"
											>
												PDF öffnen
											</a>
										</DownloadLink>
									</LinksContainer>
								</ServiceContent>
							</Service>

							<ServiceType>Tennis Camps</ServiceType>
							<Service>
								<ServiceContent>
									<ServiceTargetGroup>
										Zielgruppe: Anfänger, Fortgeschrittene,
										Leistungssportler
									</ServiceTargetGroup>
									<ServiceTitle>Tennis Camps</ServiceTitle>
									<ServiceText>
										Damit Sie intensiver, vollumfänglich und
										regelmäßig trainieren können, bietet die
										Academy in den Baden-Württembergischen
										Schulferien diverse Tenniscamps an:
									</ServiceText>
									<ServiceSubtitle>
										Oster-Camp
									</ServiceSubtitle>
									<ServiceSubtitle>
										Pfingst-Camp
									</ServiceSubtitle>
									<ServiceSubtitle>
										Sommer-Camp I (erste Ferienwoche)
									</ServiceSubtitle>
									<ServiceSubtitle>
										Sommer-Camp II (letzte Ferienwoche)
									</ServiceSubtitle>
									<ServiceSubtitle>
										Herbst-Camp
									</ServiceSubtitle>
									<LinksContainer>
										<ServicesLink to="/camps">
											Mehr Erfahren
										</ServicesLink>
										<ServicesLink to="/anmeldungcamps">
											Anmelden
										</ServicesLink>
									</LinksContainer>
								</ServiceContent>
							</Service>

							<ServiceType>
								Schlägerbespannung und mehr
							</ServiceType>
							<Service>
								<ServiceContent>
									<ServiceTitle>
										Ausrüstung & Bespannungsservice
									</ServiceTitle>
									<ServiceText>
										Die Tennis Academy Yasar bietet
										sorgfältige Tennisschläger- und
										Saitenbetreuung und einen profesionellen
										Bespannungsservice. Wir sind
										Bespannungspartner von mehreren Profis.
										Verschiedene Tennissaiten und
										Griffbänder stehen bei uns zur Auswahl.
									</ServiceText>
									<ServiceSubtitle>
										Bespannungspreis ab 10,- Eur
									</ServiceSubtitle>
									<ServiceSubtitle>
										Lizenzierter Besaiter und
										Ansprechpartner: Ajdin Yasar
									</ServiceSubtitle>
									<ServiceSubtitle>
										Tennisausrüstung wird zum Verkauf
										angeboten
									</ServiceSubtitle>
								</ServiceContent>
							</Service>

							<ServiceType>Fitness</ServiceType>
							<Service>
								<ServiceContent>
									<ServiceTargetGroup>
										Zielgruppe: Anfänger, Fortgeschrittene,
										Leistungssportler
									</ServiceTargetGroup>
									<ServiceTitle>
										Athletiktraining
									</ServiceTitle>
									<ServiceText>
										Bei der Tennis Academy Yasar besteht die
										Möglichkeit, die eigene Physis zu
										verbessern und damit zugleich auch neben
										dem Tennisplatz für ausreichend Bewegung
										zu sorgen. Mit dem Academy Fitness
										Trainer bietet wir exklusiv für die
										Spielerinnen und Spieler der Tennis
										Academy Yasar sowohl Einzel- als auch
										Gruppentraining auf der Anlage des TC
										Stockach an. Profesionelle Ausrüstung
										ist vorhanden.
									</ServiceText>
									<LinksContainer>
										<ServicesLink to="/athletiktraining">
											Mehr Erfahren
										</ServicesLink>
									</LinksContainer>
								</ServiceContent>
							</Service>

							<ServiceType>
								Angebote für Kindergärten, Schulen und Vereine
							</ServiceType>
							<Service>
								<ServiceContent>
									<ServiceTitle>
										Kindergärten und Schulen
									</ServiceTitle>
									<ServiceText>
										Eine Kooperation mit Kindergärten und
										Schulen wird in Absprache mit der Tennis
										Academy Yasar und ihren erfahrenen
										Trainern vorbereitet und praktisch
										Umgesetzt. Unser Ziel ist es, den
										Kindern und Jugendlichen mit viel Spaß
										und dem erforderlichen Know-how
										möglichst schnell die Fähigkeit zum
										eigenständigen Spiel zu vermitteln. Wir
										suchen gerne neue Kontakte zu
										Kindergärten und Schulen!
									</ServiceText>
									<ServiceSubtitle>
										Für Fragen stehen die Academy und TC
										Stockach gerne zur Verfügung
									</ServiceSubtitle>
									<LinksContainer>
										<ServicesLink to="/kontakt">
											Kontaktieren Sie uns!
										</ServicesLink>
									</LinksContainer>
								</ServiceContent>
							</Service>
						</ServicesWrapper>
					</ServicesContainer>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default PricingScreen
