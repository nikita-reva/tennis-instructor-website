import React from 'react'
import './Footer.css'
import Sponsor from './images/sponsorRot2.png'
import TennisClub from './images/stockach.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledFooter = styled.footer`
    width: 100%;
`

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container-main">
                <div className="container-1">
                    <ul className="box-1">
                        <b>
                            <li>Kontakt</li>
                        </b>

                        <li>
                            <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                            <a href="mailto:info@tennis-yasar.de">
                                info@tennis-yasar.de
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;
                            <a href="tel://+4917655217938">+4917655217938</a>
                        </li>

                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            &nbsp;&nbsp; Zoznegger Str.3 | 78333 Stockach
                        </li>
                    </ul>
                    <ul className="box-2">
                        <b>
                            <li>Anschrift</li>
                        </b>
                        <li>Tennis Academy Yasar</li>
                        <li>Am Osterholz 4</li>
                        <li>78333 Stockach</li>
                    </ul>
                </div>

                <div className="container-3">
                    <div className="box-4">
                        <a href="https://www.tecnifibre.com/">
                            <img src={Sponsor} alt="Technifibre" width="180" />
                        </a>
                        <a href="https://www.tc-stockach.de/">
                            <img
                                src={TennisClub}
                                alt="TC-Stockach"
                                width="150"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-2">
                <ul className="box-3">
                    <li>
                        Copyright &copy; {new Date().getFullYear()} Tennis
                        Academy Yasar - Alle Rechte vorbehalten
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Website By Niko Reva & Ahmet Yasar
                        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/datenschutz">
                            <b>Datenschutz</b>{' '}
                        </Link>
                        &nbsp;-&nbsp;
                        <Link to="/imperessum">
                            <b>Imperessum</b>
                        </Link>
                    </li>
                </ul>
            </div>
        </StyledFooter>
    )
}

export default Footer
