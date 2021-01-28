import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import Bild1 from '../images/stockach.png'
import Bild2 from '../images/sponsorRot2.png'
import './Imperessum.css'

const ImperessumScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer>
                <ContentSection>
                    <div className="Container-main">
                        <div className="Container-info">
                            <div className="Container-info-title">
                                <b> Imperessum</b>
                            </div>
                            <div className="Container-info-text">
                                <div className="Info-text-title2">
                                    <b>Betreiber und Kontakt</b>
                                    <hr />
                                </div>
                                Ajdin Yasar
                                <br />
                                Zoznegger Str. 3
                                <br />
                                78333 Stockach
                                <br />
                                <br />
                                <i className="fas fa-phone-alt"></i>
                                &nbsp;&nbsp;
                                <a href="tel://+4917655217938">
                                    +4917655217938
                                </a>
                                <br />
                                <i className="fas fa-envelope"></i>
                                &nbsp;&nbsp;
                                <a href="mailto:info@tennis-yasar.de">
                                    info@tennis-yasar.de
                                </a>
                                <br />
                                <br />
                                Steuer-Nr: 18495/01114
                                <br />
                                <br />
                                <br />
                                <div className="Info-text-title2">
                                    <b>
                                        Verantwortlicher für
                                        journalistisch-redaktionelle Inhalte
                                        gem. § 55 II RstV:
                                    </b>
                                    <hr />
                                </div>
                                Ajdin Yasar
                                <br />
                                Zoznegger Str. 3
                                <br />
                                78333 Stockach
                                <br />
                                <br />
                                <br />
                                <div className="Info-text-title2">
                                    <b>Design & Technische Realisierung</b>
                                    <hr />
                                </div>
                                Niko Reva
                                <br />
                                <i className="fas fa-envelope"></i>
                                &nbsp;&nbsp;
                                <a href="mailto:aniketosreva@gmx.de">
                                    aniketosreva@gmx.de
                                </a>
                                <br />
                                <br />
                                Ahmet Yasar
                                <br />
                                <i className="fas fa-envelope"></i>
                                &nbsp;&nbsp;
                                <a href="mailto:yasar97.42@live.de">
                                    yasar97.42@live.de
                                </a>
                            </div>
                            <div className="Partner">Unsere Partner</div>
                            <br />
                            <a href="https://www.tc-stockach.de/">
                                <img
                                    src={Bild1}
                                    alt="Stockach"
                                    width="100%"
                                    height="100%"
                                />
                            </a>
                            <a href="https://www.tecnifibre.com/">
                                <img
                                    src={Bild2}
                                    alt="Technifibre"
                                    width="100%"
                                    height="100%"
                                />
                            </a>
                        </div>

                        <div className="Container-info2">
                            <div className="Container-info-title">
                                <b> Haftungsausschluss</b>
                            </div>
                            <div className="Container-info-text">
                                <b>1. Inhalt des Onlineangebotes</b>
                                <br />
                                Der Autor übernimmt keinerlei Gewähr für die
                                Aktualität, Korrektheit, Vollständigkeit oder
                                Qualität der bereitgestellten Informationen.
                                Haftungsansprüche gegen den Autor, welche sich
                                auf Schäden materieller oder ideeller Art
                                beziehen, die durch die Nutzung oder
                                Nichtnutzung der dargebotenen Informationen bzw.
                                durch die Nutzung fehlerhafter und
                                unvollständiger Informationen verursacht wurden,
                                sind grundsätzlich ausgeschlossen, sofern
                                seitens des Autors kein nachweislich
                                vorsätzliches oder grob fahrlässiges Verschulden
                                vorliegt. Alle Angebote sind freibleibend und
                                unverbindlich. Der Autor behält es sich
                                ausdrücklich vor, Teile der Seiten oder das
                                gesamte Angebot ohne gesonderte Ankündigung zu
                                verändern, zu ergänzen, zu löschen oder die
                                Veröffentlichung zeitweise oder endgültig
                                einzustellen.
                                <br />
                                <br />
                                <b>2. Verweise und Links</b>
                                <br />
                                Bei direkten oder indirekten Verweisen auf
                                fremde Webseiten („Hyperlinks“), die außerhalb
                                des Verantwortungsbereiches des Autors liegen,
                                würde eine Haftungsverpflichtung ausschließlich
                                in dem Fall in Kraft treten, in dem der Autor
                                von den Inhalten Kenntnis hat und es ihm
                                technisch möglich und zumutbar wäre, die Nutzung
                                im Falle rechtswidriger Inhalte zu verhindern.
                                Der Autor erklärt hiermit ausdrücklich, dass zum
                                Zeitpunkt der Linksetzung keine illegalen
                                Inhalte auf den zu verlinkenden Seiten erkennbar
                                waren. Auf die aktuelle und zukünftige
                                Gestaltung, die Inhalte oder die Urheberschaft
                                der verlinkten/verknüpften Seiten hat der Autor
                                keinerlei Einfluss. Deshalb distanziert er sich
                                hiermit ausdrücklich von allen Inhalten aller
                                verlinkten /verknüpften Seiten, die nach der
                                Linksetzung verändert wurden. Diese Feststellung
                                gilt für alle innerhalb des eigenen
                                Internetangebotes gesetzten Links und Verweise
                                sowie für Fremdeinträge in vom Autor
                                eingerichteten Gästebüchern, Diskussionsforen,
                                Linkverzeichnissen, Mailinglisten und in allen
                                anderen Formen von Datenbanken, auf deren Inhalt
                                externe Schreibzugriffe möglich sind. Für
                                illegale, fehlerhafte oder unvollständige
                                Inhalte und insbesondere für Schäden, die aus
                                der Nutzung oder Nichtnutzung solcherart
                                dargebotener Informationen entstehen, haftet
                                allein der Anbieter der Seite, auf welche
                                verwiesen wurde, nicht derjenige, der über Links
                                auf die jeweilige Veröffentlichung lediglich
                                verweist.
                                <br />
                                <br />
                                <b>3. Urheber- und Kennzeichenrecht</b>
                                <br />
                                Der Autor ist bestrebt, in allen Publikationen
                                die Urheberrechte der verwendeten Bilder,
                                Grafiken, Tondokumente, Videosequenzen und Texte
                                zu beachten, von ihm selbst erstellte Bilder,
                                Grafiken, Tondokumente, Videosequenzen und Texte
                                zu nutzen oder auf lizenzfreie Grafiken,
                                Tondokumente, Videosequenzen und Texte
                                zurückzugreifen. Alle innerhalb des
                                Internetangebotes genannten und ggf. durch
                                Dritte geschützten Marken- und Warenzeichen
                                unterliegen uneingeschränkt den Bestimmungen des
                                jeweils gültigen Kennzeichenrechts und den
                                Besitzrechten der jeweiligen eingetragenen
                                Eigentümer. Allein aufgrund der bloßen Nennung
                                ist nicht der Schluss zu ziehen, dass
                                Markenzeichen nicht durch Rechte Dritter
                                geschützt sind! Das Copyright für
                                veröffentlichte, vom Autor selbst erstellte
                                Objekte bleibt allein beim Autor der Seiten.
                                Eine Vervielfältigung oder Verwendung solcher
                                Grafiken, Tondokumente, Videosequenzen und Texte
                                in anderen elektronischen oder gedruckten
                                Publikationen ist ohne ausdrückliche Zustimmung
                                des Autors nicht gestattet.
                                <br />
                                <br />
                                <b>4. Datenschutz</b>
                                <br />
                                Sofern innerhalb des Internetangebotes die
                                Möglichkeit zur Eingabe persönlicher oder
                                geschäftlicher Daten (Emailadressen, Namen,
                                Anschriften) besteht, so erfolgt die Preisgabe
                                dieser Daten seitens des Nutzers auf
                                ausdrücklich freiwilliger Basis. Die
                                Inanspruchnahme und Bezahlung aller angebotenen
                                Dienste ist – soweit technisch möglich und
                                zumutbar – auch ohne Angabe solcher Daten bzw.
                                unter Angabe anonymisierter Daten oder eines
                                Pseudonyms gestattet. Die Nutzung der im Rahmen
                                des Impressums oder vergleichbarer Angaben
                                veröffentlichten Kontaktdaten wie
                                Postanschriften, Telefon- und Faxnummern sowie
                                Emailadressen durch Dritte zur Übersendung von
                                nicht ausdrücklich angeforderten Informationen
                                ist nicht gestattet. Rechtliche Schritte gegen
                                die Versender von sogenannten Spam-Mails bei
                                Verstössen gegen dieses Verbot sind ausdrücklich
                                vorbehalten.
                                <br />
                                <br />
                                <b>
                                    5. Rechtswirksamkeit dieses
                                    Haftungsausschlusses
                                </b>
                                <br />
                                Dieser Haftungsausschluss ist als Teil des
                                Internetangebotes zu betrachten, von dem aus auf
                                diese Seite verwiesen wurde. Sofern Teile oder
                                einzelne Formulierungen dieses Textes der
                                geltenden Rechtslage nicht, nicht mehr oder
                                nicht vollständig entsprechen sollten, bleiben
                                die übrigen Teile des Dokumentes in ihrem Inhalt
                                und ihrer Gültigkeit davon unberührt.
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default ImperessumScreen
