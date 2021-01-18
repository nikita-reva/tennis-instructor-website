import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<div className="main">
			<div className="container">
				<div className="col">
					<h2>Anschrift</h2>
					<ul className="list">
						<li>Tennis Academy Yasar</li>
						<li>Am Osterholz 4</li>
						<li>78333 Stockach</li>
					</ul>
				</div>
				<div className="col">
					<h2>Kontakt</h2>
					<ul className="list">
						<li>blabla@gmail.com</li>
						<li>123456789</li>
					</ul>
				</div>
				<div className="col">
					<h2>Folgt uns auf Instagram</h2>
				</div>
			</div>
			<hr />
			<div className="row">
				<p>
					Copyright &copy; {new Date().getFullYear()} Tennis Academy
					Yasar | Alle Rechte vorbehalten | Imperessum | Datenschutz
				</p>
			</div>
		</div>
	)
}

export default Footer
