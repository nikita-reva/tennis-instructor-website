import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import Video3 from '../videos/video3.mp4'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Bild1 from './images/athletik.jpg'

export const TitelAthletik = styled.div`
    font-family: 'Fjalla One', sans-serif;
    text-decoration-line: underline;
    color: white;
    font-size: 3.5rem;
    width: 100%;
    height: 100%;
    padding-bottom: 2%;
    padding-top: 5%;
`

export const ContainerAthMain = styled.div`
    /* border: 2px solid purple; */
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 2%;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`
export const ContainerAthInfo = styled.div`
    /* border: 2px solid red; */
    width: 60%;
    @media screen and (max-width: 1080px) {
        width: 100%;
        padding-bottom: 20px;
    }
`
export const AthWindowTitle = styled.div`
    border: 3px solid var(--secondary-color);
    width: 100%;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-image: linear-gradient(
        to top,
        #ff723b 0%,
        var(--secondary-color) 84%
    );
    border-radius: 10px 10px 0 0;
    padding: 10px 0;
    position: relative;
    height: auto;
    top: 8px;
    z-index: -1;
`
export const AthWindowText = styled.div`
    border: 3px solid var(--secondary-color);
    background-color: var(--accent-color);
    z-index: 10;
    border-radius: 10px;

    color: black;
    padding: 2% 5%;
`
export const AthWindowTextP = styled.p`
    margin: 12px 0;
    text-align: justify;
`
export const Faerben = styled.span`
    color: var(--text-color);
    font-weight: bold;
`
export const ContainerAthBild = styled.span`
    /* border: 2px solid cyan; */
    width: 40%;
    display: grid;
    place-items: center;
    @media screen and (max-width: 1080px) {
        width: 100%;
        padding: 0 50px;
    }
    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 0;
    }
`

const AthleticTrainingScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer>
                <ReactPlayer
                    url={Video3}
                    muted={true}
                    controls={false}
                    playing={true}
                    playsinline={true}
                    width="100%"
                    height="100%"
                />
                <ContentSection>
                    <TitelAthletik>Athletiktraining</TitelAthletik>

                    <ContainerAthMain>
                        <ContainerAthInfo>
                            <AthWindowTitle>
                                Informationen zu unserem Athletiktraining
                            </AthWindowTitle>
                            <AthWindowText>
                                <AthWindowTextP>
                                    Der Tennissport der heutigen Zeit besteht
                                    schon seit längerem nicht mehr aus
                                    tennisspezifischen Übungen und Punkte
                                    spielen. Der Sport hat sich weiterentwickelt
                                    und ist mit der Zeit immer schneller und
                                    dadurch auch athletischer geworden. Umso
                                    wichtiger ist es, den Körper darauf
                                    vorzubereiten.
                                </AthWindowTextP>
                                <AthWindowTextP>
                                    Komplexe Bewegungen, die innerhalb kürzester
                                    Zeit abgerufen werden, gehören mittlerweile
                                    zu jedem Tennisspiel dazu. Im Gegensatz zu
                                    den bekannten konditionellen Eigenschaften
                                    der Kraft und Ausdauer beschreibt die{' '}
                                    <Faerben>Athletik</Faerben> ein wesentlich
                                    komplexeres Bild der sportlichen Leistung.
                                    Neben den beiden konditionellen
                                    Grundeigenschaften gehören auch die
                                    Beweglichkeit, die Koordinationsfähigkeit
                                    und die Schnelligkeit zu den Kernfähigkeiten
                                    der Athletik.
                                </AthWindowTextP>
                                <AthWindowTextP>
                                    Bei der{' '}
                                    <Faerben>Tennis Academy Yasar</Faerben>{' '}
                                    besteht die Möglichkeit, die eigene Physis
                                    zu verbessern und damit zugleich auch neben
                                    dem Tennisplatz für ausreichend Bewegung zu
                                    sorgen. Mit dem Academy Fitness Trainer
                                    bieten wir exklusiv für die Spielerinnen und
                                    Spieler der Tennis Academy Yasar sowohl
                                    Einzel- als auch Gruppentraining auf der
                                    Anlage des TC Stockach an. Profesionelle
                                    Ausrüstung ist vorhanden und muss nicht
                                    selber mitgebracht werden!
                                </AthWindowTextP>
                                <AthWindowTextP>
                                    Die Anmeldung zum Athletiktraining erfolgt
                                    ausschließlich per E-Mail an:{' '}
                                    <a href="mailto:info@tennis-yasar.de">
                                        info@tennis-yasar.de
                                    </a>
                                </AthWindowTextP>
                            </AthWindowText>
                        </ContainerAthInfo>
                        <ContainerAthBild>
                            <img src={Bild1} alt="Athletik" width="100%" />
                        </ContainerAthBild>
                    </ContainerAthMain>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default AthleticTrainingScreen
