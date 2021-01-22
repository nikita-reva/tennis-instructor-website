import React from 'react'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'
import './Teamscreen.css'
import Video from './videos/video1.mp4'
import Bild1 from './images/Steckbrief foto 2.JPG'

const TeamScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer>
                <video className="videoTag" autoPlay muted>
                    <source src={Video} type="video/mp4" />
                </video>

                <ContentSection>
                    <div className="Container-title">Unser Trainerteam</div>
                    <div className="Container-main">
                        <div className="Container-info">
                            <div className="Container-info-title">
                                Cheftrainer und Leiter <br />
                                <b>Ajdin Yasar</b>
                            </div>
                            <div className="Container-info-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem optio eveniet
                                voluptatem, ducimus quos incidunt quo, esse
                                labore eos adipisci quae! Tempore natus ea
                                debitis impedit reprehenderit quo perspiciatis
                                facilis?
                            </div>
                        </div>
                        <div className="Container-Bild-Ajdin">
                            <img src={Bild1} alt="Ajdin Yasar" width="600px" />
                        </div>
                    </div>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default TeamScreen
