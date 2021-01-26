import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import './Datenschutz.css'
import { Link } from 'react-router-dom'

const DatenschutzScreen = () => {
    return (
        <ScreenContainer>
            <ContentContainer>
                <ContentSection>
                    <div className="title">Datenschutzerklärung</div>
                    <div className="datenschutzText">
                        Diese Datenschutzerklärung soll sie als Nutzer dieser
                        Website über die Art, den Umfang und den Zweck der
                        Erhebung und Verwendung personenbezogener Daten durch
                        den Websitebetreiber informieren. Webseitenbetreiber
                        bzw. verantwortliche Stelle für die Datenverarbeitung
                        auf dieser Webseite ist: <b>Ajdin Yasar</b>. Mehr dazu
                        entnehmen Sie dem{' '}
                        <Link to="/imperessum">
                            <b>Imperessum</b>
                        </Link>
                        . Wir nehmen Ihren Datenschutz sehr ernst und behandelt
                        Ihre personenbezogenen Daten vertraulich und
                        entsprechend der gesetzlichen Vorschriften. Da durch
                        neue Technologien und die ständige Weiterentwicklung
                        dieser Webseite Änderungen an dieser
                        Datenschutzerklärung vorgenommen werden können,
                        empfehlen wir Ihnen sich die Datenschutzerklärung in
                        regelmäßigen Abständen wieder durchzulesen. Definitionen
                        der verwendeten Begriffe (z.B. “personenbezogene Daten”
                        oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.
                        <br />
                    </div>

                    <div className="unterTitle">
                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                    </div>
                    <div className="datenschutzText">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                        reicht eine formlose Mitteilung per E-Mail an uns. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.
                    </div>
                    <div className="unterTitle">
                        Recht auf Einschränkung der Verarbeitung
                    </div>
                    <div className="datenschutzText">
                        Sie haben das Recht, die Einschränkung der Verarbeitung
                        Ihrer personenbezogenen Daten zu verlangen. Hierzu
                        können Sie sich jederzeit unter der im Impressum
                        angegebenen Adresse an uns wenden. Das Recht auf
                        Einschränkung der Verarbeitung besteht in folgenden
                        Fällen: Wenn Sie die Richtigkeit Ihrer bei uns
                        gespeicherten personenbezogenen Daten bestreiten,
                        benötigen wir in der Regel Zeit, um dies zu überprüfen.
                        Für die Dauer der Prüfung haben Sie das Recht, die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten zu verlangen.Wenn die Verarbeitung Ihrer
                        personenbezogenen Daten unrechtmäßig geschah /
                        geschieht, können Sie statt der Löschung die
                        Einschränkung der Datenverarbeitung verlangen.Wenn wir
                        Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                        sie jedoch zur Ausübung, Verteidigung oder
                        Geltendmachung von Rechtsansprüchen benötigen, haben Sie
                        das Recht, statt der Löschung die Einschränkung der
                        Verarbeitung Ihrer personenbezogenen Daten zu
                        verlangen.Wenn Sie einen Widerspruch nach Art. 21 Abs. 1
                        DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren
                        und unseren Interessen vorgenommen werden. Solange noch
                        nicht feststeht, wessen Interessen überwiegen, haben Sie
                        das Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Wenn Sie die
                        Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
                        haben, dürfen diese Daten / von ihrer Speicherung
                        abgesehen / nur mit Ihrer Einwilligung oder zur
                        Geltendmachung, Ausübung oder Verteidigung von
                        Rechtsansprüchen oder zum Schutz der Rechte einer
                        anderen natürlichen oder juristischen Person oder aus
                        Gründen eines wichtigen öffentlichen Interesses der
                        Europäischen Union oder eines Mitgliedstaats verarbeitet
                        werden.
                    </div>
                    <div className="unterTitle">
                        Kontaktformular und Umgang mit Kontaktdaten
                    </div>
                    <div className="datenschutzText">
                        Nehmen Sie mit uns als Websitebetreiber durch die
                        angebotenen Kontaktmöglichkeiten (Kontaktformular,
                        E-Mail Adresse) Verbindung auf, werden Ihre Angaben
                        gespeichert, damit auf diese zur Bearbeitung und
                        Beantwortung Ihrer Anfrage zurückgegriffen werden kann.
                        Ohne Ihre Einwilligung werden diese Daten nicht an
                        Dritte weitergegeben. Die Verarbeitung der in das
                        Kontaktformular oder der E-Mail eingegebenen Daten
                        erfolgt somit ausschließlich auf Grundlage Ihrer
                        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können
                        diese Einwilligung jederzeit widerrufen. Dazu reicht
                        eine formlose Mitteilung per E-Mail an uns. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitungsvorgänge bleibt vom Widerruf
                        unberührt. Die von Ihnen im Kontaktformular oder der
                        E-Mail eingegebenen Daten verbleiben bei uns, bis Sie
                        uns zur Löschung auffordern, Ihre Einwilligung zur
                        Speicherung widerrufen oder der Zweck für die
                        Datenspeicherung entfällt (z.B. nach abgeschlossener
                        Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
                        Bestimmungen – insbesondere Aufbewahrungsfristen –
                        bleiben unberührt.
                    </div>
                    <div className="unterTitle">
                        Einbettung und Interaktion mit Social Media Plattformen
                    </div>
                    <div className="datenschutzText">
                        Sie haben auch die Möglichkeit, sich über unsere Social
                        Media Plattformen (bspw. Facebook, YouTube Instagram
                        etc.) mit uns in Verbindung zu setzen. Wenn Sie uns auf
                        diese Weise eine Nachricht senden oder etwas auf unseren
                        Social Media Seiten platzieren, können wir diese Inhalte
                        verwenden, um ihnen bei einer Fragestellung zu helfen
                        oder mit Ihnen zu kommunizieren. Dies geschieht in der
                        Regel über die Social Media Plattform, die Sie für Ihr
                        Anliegen benutzt haben. Für eine bessere Unterstützung
                        können wir Sie bitten, uns über eine direkte oder
                        private Nachricht weitere Informationen sowie Details zu
                        ihrem Anliegen mitzuteilen. Die insoweit von ihn zur
                        Verfügung gestellten Informationen werden nicht zu
                        Marketingzwecken verwendet. Bitte beachten Sie, dass
                        ihre Beiträge (Posts) und Nachrichten keine sensiblen
                        Daten enthalten (z.B. Informationen über ethnische
                        Herkunft, politische Meinungen, religiöse oder
                        philosophische Ansichten oder Gesundheitsthemen.) Seien
                        Sie sich bewusst, dass alles, was Sie auf einem
                        öffentlichen Kanal auf Social Media Plattformen
                        veröffentlichen, von jedem gelesen werden kann. Beiträge
                        auf dieser Webseite können auch eingebettete Inhalte zur
                        Verfügung stellen, z.B. Videos, Bilder, Beiträge etc.
                        Eingebettete Inhalte von anderen Webseiten verhalten
                        sich exakt so, als ob der Besucher die andere Webseite
                        besucht hätte. Auch diese Webseiten können also Daten
                        sammeln, Cookies nutzen, zusätzliche Trackingdienste von
                        Dritten anbieten und die Interaktion mit diesen
                        eingebetteten Inhalten aufzeichnen, inklusive der
                        Interaktion mit dem eingebetteten Inhalt, falls auf der
                        Social Media Plattform ein Konto des Nutzers existiert
                        oder dieser auf dieser Webseite angemeldet ist. Wenn Sie
                        sich genauer über Zwecke und Umfang der
                        Datenverarbeitung und über die weitere Verwendung Ihrer
                        personenbezogenen Daten durch den Betreiber solcher
                        Social Media Plattformen sowie ihre Rechte und mögliche
                        Einstellungen zum Schutz Ihrer Privatsphäre informieren
                        möchten, wenden Sie sich bitte an den jeweiligen
                        Service-Provider der jeweiligen Social Media Plattform.
                    </div>
                    <div className="unterTitle">
                        SSL-Verschlüsselung (HTTPS-Protokoll)
                    </div>
                    <div className="datenschutzText">
                        Um Ihre übermittelten Daten bestmöglich zu schützen
                        nutzen die Websitebetreiber eine SSL-Verschlüsselung.
                        Sie erkennen derart verschlüsselte Verbindungen an dem
                        Präfix “https://“ im Seitenlink in der Adresszeile Ihres
                        Browsers. Unverschlüsselte Seite sind durch „http://“
                        gekennzeichnet. Sämtliche Daten, welche Sie an diese
                        Website übermitteln – etwa bei Anfragen oder Logins –
                        können dank SSL-Verschlüsselung nicht von Dritten
                        gelesen werden.
                    </div>
                    <div className="Space"></div>
                </ContentSection>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default DatenschutzScreen
