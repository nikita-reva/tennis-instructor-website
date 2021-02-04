import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import './Teamscreen.css'
import Video from '../videos/video1.mp4'
import Bild1 from '../images/Steckbrief foto 2.JPG'
import Bild2 from '../images/Steinmann.jpg'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export const Faerben = styled.span`
	color: var(--text-color);
	font-weight: bold;
`

const TeamScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ReactPlayer
					url={Video}
					muted={true}
					controls={false}
					playing={true}
					playsinline={true}
					width="100%"
					height="100%"
				/>

				<ContentSection>
					<div className="team-container-title">
						Unser Trainerteam
					</div>

					<div className="Container-team-info">
						<div className="Container-info-title">
							Cheftrainer und Leiter <br />
							<b>Ajdin Yasar</b>
						</div>
						<div className="Container-info-text">
							<div className="Container-main">
								<div className="Container-Bild">
									<img
										src={Bild1}
										alt="Ajdin Yasar"
										width="100%"
									/>
								</div>
								<div className="container-personal-info">
									<div className="Info-text-title">
										<b>Persönliche Informationen</b>
										<i className="fas fa-user"></i>
										<hr />
									</div>
									<p>
										Geboren am 17.07.1996 in Miami, Florida
										(USA)
									</p>
									<ul>
										<li>PTR Professional Lizenz</li>
										<li>DTB B-Trainer Leistungssport</li>
										<li>
											Ehemaliger Tennis Profi und DTB top
											Ranglisten Spieler, Württembergische
											und Oberliga Spieler.
										</li>
									</ul>
									<p>
										Der Cheftrainer und Gründer Ajdin Yasar
										der Tennis Academy Yasar, bringt nach
										einer hoch beeindruckenden
										Tenniskarriere die besten Erfahrungen
										mit auf den Platz. Mit dabei gehört
										selbstverständlich eine professionelle
										Tennisausbildung dazu.
									</p>
								</div>
							</div>
							<div className="Info-text-title">
								<b>Erfolge</b>
								<i className="fas fa-medal"></i>
								<hr />
							</div>
							<p>
								Als Trainer im Leistungsbereich war Ajdin in den
								USA, Kanada, Deutschland und vielen anderen
								Ländern unterwegs. Tennis Profis wie,{' '}
								<Faerben>Bernard Tomic</Faerben> und{' '}
								<Faerben>Feliciano Lopez</Faerben> hat Ajdin im
								Training unterstützt und auch bei den Turnieren
								mitgewirkt. In Kanada wurden mehrere{' '}
								<Faerben>Top 5-Jugendspieler</Faerben> ebenfalls
								von ihm betreut.
							</p>
							<p>
								2013 ging Ajdin erneut in die Staaten und fing
								mit seinem Studium und seiner Leidenschaft zum
								Tennis wieder von vorne an. Er studierte auf der
								Barry-University in Florida und absolvierte hier
								auch seinen Abschluss im Bereich Marketing und
								Finanzwesen.
							</p>
							<p>
								Drei Jahre lang hat Ajdin für die Barry
								Univeristy in Miami Florida gespielt und bereits
								im Jahr 2015, sich mit seiner Mannschaft den
								größten Titel der USA geholt. Damit waren sie
								die in den USA die{' '}
								<Faerben>Champions der Saison</Faerben> mit
								einem Endstand von 29-0!
							</p>
							<p>
								Ajdin freut sich auf eine neue Reise und auf
								eine gleichzeitige Herausforderung in Stockach!
							</p>
						</div>
					</div>
					<div className="Container-team-info">
						<div className="Container-info-title">
							<b>Moritz Till Steinmann</b>
						</div>
						<div className="Container-info-text">
							<div className="Container-main">
								<div className="Container-Bild">
									<img
										src={Bild2}
										alt="Ajdin Yasar"
										width="100%"
									/>
								</div>
								<div className="container-personal-info">
									<div className="Info-text-title">
										<b>Persönliche Informationen</b>
										<i className="fas fa-user"></i>
										<hr />
									</div>
									<p>
										Geboren am 29.10.1996 in Überlingen, BW
										(DE)
									</p>
									<ul>
										<li>
											Student der Sportwissenschaft
											(B.Sc., Uni Konstanz)
										</li>
										<li>
											Spielt Tennis seit dem 4. Lebensjahr
										</li>
										<li>
											Trainerstunden seit dem 15.
											Lebensjahr
										</li>
									</ul>
								</div>
							</div>
							<div className="Info-text-title">
								<b>Erfolge</b>
								<i className="fas fa-medal"></i>
								<hr />
							</div>
							<ul>
								<li>Aktuell LK1 - Platz 439 DTB</li>
								<li>
									Oberliga für den TC Stockach und als #1 für
									den TC Überlingen
								</li>
								<li>Jugendbezirksmeister Einzel und Doppel</li>
								<li>Nachwuchsbezirksmeister Einzel</li>
							</ul>
						</div>
					</div>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default TeamScreen
