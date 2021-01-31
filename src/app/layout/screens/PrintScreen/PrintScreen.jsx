import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

import { EnrolmentPDF } from './EnrolmentPDF'
import ScreenContainer from '../ScreenContainer'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import { Link } from 'react-router-dom'
import { EnrolmentCampPDF } from './EnrolmentCampPDF'

const StyledButton = styled.button`
	display: block;
	text-align: center;
	margin: 20px auto;
	width: 100%;
	max-width: 800px;
	background-color: var(--secondary-color);
	color: #fff;

	font-size: 1rem;
	border: 0;
	border-radius: 5px;
	height: 50px;
	padding: 0px 20px;
	cursor: pointer;
	box-sizing: border-box;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
	}

	&:hover {
		font-size: 1.05rem;
	}
`

const StyledLink = styled.div`
	display: block;
	max-width: 800px;
	margin: 20px auto;
	text-align: center;
	padding: 10px;
	background-image: linear-gradient(
		to top,
		#ff723b 0%,
		var(--secondary-color) 84%
	);

	& > a {
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		z-index: 2;
		text-decoration: none;
		color: #fff;
		transition: color 0.2s ease-in;

		&:hover {
			color: #f2fc6b;
		}
	}
`

const PrintScreen = ({ match }) => {
	const componentRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	})

	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<StyledLink>
						<Link
							to={`/${
								match.params.service === 'training'
									? 'anmeldung'
									: match.params.service === 'camps'
									? 'anmeldungcamps'
									: ''
							}`}
						>
							Zurück zur Anmeldung
						</Link>
					</StyledLink>
					{match.params.service === 'training' ? (
						<EnrolmentPDF ref={componentRef} />
					) : match.params.service === 'camps' ? (
						<EnrolmentCampPDF ref={componentRef} />
					) : null}
					<StyledButton onClick={handlePrint}>
						Formular drucken / speichern
					</StyledButton>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default PrintScreen
