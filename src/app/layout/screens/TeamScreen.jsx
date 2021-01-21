import React from 'react'
import './Teamscreen.css'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'
import ScreenContainer from './ScreenContainer'
import Video from './videos/video1.mp4'

const TeamScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer bgi="var(--black-gradient2)">
                <video className="videoTag" autoPlay muted>
                    <source src={Video} type="video/mp4" />
                </video>

                <ContentSection>
                    <div className="Container-title">Unser Trainerteam</div>
                    <div className="Container-main">
                        <div className="Container-info">
                            <div className="Container-info-title">
                                Ajdin Yasar
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
                    </div>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default TeamScreen
