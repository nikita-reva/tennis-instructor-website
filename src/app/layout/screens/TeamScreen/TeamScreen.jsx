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
                            Leiter der Akademie & Cheftrainer <br />
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
                                        <b>Profil</b>
                                        <i className="fas fa-user"></i>
                                        <hr />
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Geboren:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                17.07.1996 in USA (Miami,
                                                Florida)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Tennisprofi:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                <Faerben>2010-2014</Faerben>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Studium:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                Marketing & Finanzwesen
                                                (Barry-University, Florida)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Collage-Spieler:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                <Faerben>2014-2017</Faerben>{' '}
                                                (2015: NCAA National Champions)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Trainererfolge:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                Betreuung der
                                                Weltranglistenspieler: Bernard
                                                Tomic, Feliciano López; Top 5
                                                Spieler aus Kanada
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Stützpunkte:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>USA, Kanada, Deutschland</p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Trainerlizenz:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                PTR Professional Lizenz, DTB-B
                                                Leistungssport
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>DTB-Spieler:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                <Faerben>2008-2014</Faerben>{' '}
                                                (Württembergische- + Oberliga)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTextBottom">
                                            <Faerben>
                                                Ich freue mich auf die neue
                                                Herausforderung im Tennis-Club
                                                Stockach!
                                            </Faerben>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        alt="Moritz Till Steinmann"
                                        width="100%"
                                    />
                                </div>
                                <div className="container-personal-info">
                                    <div className="Info-text-title">
                                        <b>Profil</b>
                                        <i className="fas fa-user"></i>
                                        <hr />
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Geboren:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>29.10.1995 in Überlingen</p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Studium:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                Sportwissenschaften (B. Sc. Uni
                                                Konstanz)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Tennissport:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>seit dem Jahr 2000</p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Lizenz:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>DTB C-Lizenz Leistungssport</p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Titel / Erfolge:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                Jugendbezirksmeister{' '}
                                                <Faerben>2014</Faerben> (Einzel
                                                & Doppel)
                                            </p>
                                            <p>
                                                Nachwuchsbezirksmeister{' '}
                                                <Faerben>2015</Faerben>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Akt. Position:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>LK 1 / DTB-Rangliste 439</p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTitle">
                                            <ul>
                                                <li>Mannschaft:</li>
                                            </ul>
                                        </div>
                                        <div className="ListProfilText">
                                            <p>
                                                TC Überlingen / Oberliga / Pos.
                                                1
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ListContainer">
                                        <div className="ListProfilTextBottom">
                                            <Faerben>
                                                Moritz: Hochgradig motiviert -
                                                als Trainer und Spieler
                                            </Faerben>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default TeamScreen
