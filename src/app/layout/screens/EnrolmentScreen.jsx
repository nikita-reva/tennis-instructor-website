import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import ScreenContainer from './ScreenContainer'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'

const sharedStyles = css`
	background-color: #eee;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #ddd;
	padding: 20px;
	box-sizing: border-box;
`

const StyledLink = styled.div`
	width: 100%;
	text-align: center;
	padding: 10px;
	margin: 20px 0;
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
		color: white;
		transition: color 0.2s ease-in;

		&:hover {
			color: #f2fc6b;
		}
	}
`

const StyledFormWrapper = styled.div`
	display: grid;
	width: 100%;
	margin: 0 auto;
	margin-top: 10px;
	max-width: 800px;
	grid-template-areas:
		'heading'
		'main';
`

const StyledHeader = styled.div`
	grid-area: heading;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	position: relative;
	top: 10px;
	z-index: -1;
	height: 85px;
	background-image: linear-gradient(
		to top,
		#ff723b 0%,
		var(--secondary-color) 84%
	);
	color: var(--accent-color);
	border-radius: 10px 10px 0 0;
	& > h2 {
		text-align: center;
		width: 100%;
		line-height: 1.4em;
	}
	& > p {
		text-align: center;
		width: 80%;
		line-height: 1em;
		font-size: clamp(0.75rem, 2vw, 1rem);
	}
`

const StyledForm = styled.form`
	grid-area: main;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 40px;
	background-color: var(--accent-color);
	border-radius: 10px;
	box-sizing: border-box;

	@media screen and (max-width: 600px) {
		padding: 20px;
	}
`

const StyledInputContainer = styled.div`
	display: grid;
	width: 100%;
	place-items: center;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	grid-template-rows: auto;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`

const StyledInput = styled.input`
	display: block;
	width: 100%;
	${sharedStyles}
`

const StyledTextarea = styled.textarea`
	background-color: #eee;
	width: 100%;
	margin-top: 10px;
	min-height: 100px;
	resize: none;
	${sharedStyles}
`

const StyledButton = styled.button`
	display: block;
	text-align: center;
	margin: 30px 0 auto;
	background-color: var(--secondary-color);
	color: var(--accent-color);
	font-size: 0.9rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
	padding: 0 20px;
	cursor: pointer;
	box-sizing: border-box;
	transition: all 0.5s ease;
	& > i {
		opacity: 0;
		transition: all 0.2s ease-in;
	}

	&:hover {
		& > i {
			display: inline-block;
			padding-left: 15px;
			opacity: 1;
		}
	}

	&:focus {
		outline: none;
	}

	@media screen and (max-width: 600px) {
		margin-top: 10px;
		width: 100%;
	}
`

const StyledFieldset = styled.fieldset`
	border: 1px solid #ddd;
	display: flex;
	flex-direction: ${({ fd }) => (fd ? fd : 'row')};
	flex-wrap: wrap;
	width: 100%;
	border-radius: 5px;
	padding: 10px;

	& {
		margin-top: 10px;
	}

	legend {
		padding: 0 10px;
	}

	label {
		padding-right: 20px;

		@media screen and (max-width: 600px) {
			&:not(:last-child) {
				padding: ${({ fd }) =>
					fd ? '0 20px 10px 0' : '0px 20px 0px 0px'};

				border-bottom: ${({ fd }) =>
					fd ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
			}
		}
	}

	input {
		margin-right: 10px;
	}
`

const StyledError = styled.div`
	border: 1px solid var(--secondary-color);
	font-size: 0.8em;
	border-radius: 5px;
	padding: 5px 10px;
	width: 100%;
	color: var(--secondary-color);
	background: #f0b7ab;
	font-weight: 600;
	margin-top: 10px;
`

const StyledSuccess = styled.div`
	border: 1px solid #168131;
	font-size: 0.8em;
	border-radius: 5px;
	padding: 5px 10px;
	width: 100%;
	color: #168131;
	background: #89d19b;
	font-weight: 600;
	margin-top: 10px;
`

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	birthDate: '',
	address: '',
	city: '',
	phone: '',
	mobile: '',
	training: '',
	group: '',
	duration: '',
	message: '',
}

const InputNames = {
	firstName: 'Vorname',
	lastName: 'Nachname',
	email: 'E-Mail-Adresse',
	birthDate: 'Geburtsdatum',
	address: 'Adresse',
	city: 'PLZ/Wohnort',
	phone: 'Festnetznummer',
	mobile: 'Mobiltelfonnummer',
	training: 'Training',
	group: 'Gruppe',
	duration: 'Dauer',
	message: 'Nachricht',
}

const EnrolmentScreen = () => {
	const [state, setState] = useState(initialState)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const missingFields = []

	function sendEmail(e) {
		e.preventDefault()
		let missing = ''

		for (let key in state) {
			if (state[key] === '') {
				missingFields.push(key)
				missing = missing
					? missing + ', ' + InputNames[key]
					: InputNames[key]
			}
		}

		if (missingFields.length !== 0) {
			setError(
				`Folgende Felder müssen noch ausgefüllt werden: ${missing}`
			)
			setSuccess('')
			return
		}

		setError('')
		const regex = /^\w+([-+.']\w+)*@\w+([-.']\w+)*\.\w+([-.']\w+)*$/
		const test = regex.test(state.email)
		console.log(test)
		setSuccess(
			'Ihre Anfrage wurde versendet! Sie erhalten in Kürze eine Antwort.'
		)

		setState(initialState)

		emailjs
			.sendForm(
				'service_do95f1d',
				'template_v4jvoe3',
				e.target,
				'user_JsusNz0E8HNccYZdyYeKy'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	const handleInput = (e) => {
		const inputName = e.currentTarget.name
		const inputValue = e.currentTarget.value

		setState((prev) => ({ ...prev, [inputName]: inputValue }))
	}

	return (
		<>
			<ScreenContainer>
				<ContentContainer>
					<ContentSection>
						<StyledFormWrapper>
							<StyledHeader>
								<h2>Anmeldung</h2>
								<p>
									Melden Sie sich uverbindlich für
									Trainingsstunden an
								</p>
							</StyledHeader>
							<StyledForm onSubmit={sendEmail}>
								<StyledInputContainer>
									<StyledInput
										type="text"
										name="firstName"
										value={state.firstName}
										onChange={handleInput}
										placeholder="Vorname..."
									/>
									<StyledInput
										type="text"
										name="lastName"
										value={state.lastName}
										onChange={handleInput}
										placeholder="Nachname..."
									/>
									<StyledInput
										type="email"
										name="email"
										value={state.email}
										onChange={handleInput}
										placeholder="E-Mail-Adresse..."
									/>
									<StyledInput
										type="text"
										name="birthDate"
										value={state.birthDate}
										onChange={handleInput}
										placeholder="Geburtsdatum..."
									/>
									<StyledInput
										type="text"
										name="address"
										value={state.address}
										onChange={handleInput}
										placeholder="Straße/Hausnummer..."
									/>
									<StyledInput
										type="text"
										name="city"
										value={state.city}
										onChange={handleInput}
										placeholder="PLZ/Wohnort..."
									/>
									<StyledInput
										type="text"
										name="phone"
										value={state.phone}
										onChange={handleInput}
										placeholder="Festnetz..."
									/>
									<StyledInput
										type="text"
										name="mobile"
										value={state.mobile}
										onChange={handleInput}
										placeholder="Mobil..."
									/>
								</StyledInputContainer>
								<StyledFieldset fd="column">
									<legend>Training</legend>
									<label>
										<input
											type="radio"
											value="Kinder / Jugendliche - Einzeltraining"
											name="training"
											checked={
												state.training ===
												'Kinder / Jugendliche - Einzeltraining'
											}
											onChange={handleInput}
										/>
										Kinder / Jugendliche - Einzeltraining
									</label>
									<label>
										<input
											type="radio"
											value="Kinder / Jugendliche - Mannschaftstraining"
											name="training"
											checked={
												state.training ===
												'Kinder / Jugendliche - Mannschaftstraining'
											}
											onChange={handleInput}
										/>
										Kinder / Jugendliche -
										Mannschaftstraining
									</label>
									<label>
										<input
											type="radio"
											value="Erwachsene - Einzeltraining"
											name="training"
											checked={
												state.training ===
												'Erwachsene - Einzeltraining'
											}
											onChange={handleInput}
										/>
										Erwachsene - Einzeltraining
									</label>
									<label>
										<input
											type="radio"
											value="Erwachsene - Gruppentraining"
											name="training"
											checked={
												state.training ===
												'Erwachsene - Gruppentraining'
											}
											onChange={handleInput}
										/>
										Erwachsene - Gruppentraining
									</label>
									<label>
										<input
											type="radio"
											value="Erwachsene - Mannschaftstraining Aktive"
											name="training"
											checked={
												state.training ===
												'Erwachsene - Mannschaftstraining Aktive'
											}
											onChange={handleInput}
										/>
										Erwachsene - Mannschaftstraining Aktive
									</label>
								</StyledFieldset>
								<StyledFieldset>
									<legend>Gruppe</legend>
									<label>
										<input
											type="radio"
											value="2er-Gruppe"
											name="group"
											checked={
												state.group === '2er-Gruppe'
											}
											onChange={handleInput}
										/>
										2er Gruppe
									</label>
									<label>
										<input
											type="radio"
											value="3er-Gruppe"
											name="group"
											checked={
												state.group === '3er-Gruppe'
											}
											onChange={handleInput}
										/>
										3er-Gruppe
									</label>
									<label>
										<input
											type="radio"
											value="4er-Gruppe"
											name="group"
											checked={
												state.group === '4er-Gruppe'
											}
											onChange={handleInput}
										/>
										4er-Gruppe
									</label>
								</StyledFieldset>
								<StyledFieldset>
									<legend>Dauer</legend>
									<label>
										<input
											type="radio"
											value="60 Minuten"
											name="duration"
											checked={
												state.duration === '60 Minuten'
											}
											onChange={handleInput}
										/>
										60 Minuten
									</label>
									<label>
										<input
											type="radio"
											value="90 Minuten"
											name="duration"
											checked={
												state.duration === '90 Minuten'
											}
											onChange={handleInput}
										/>
										90 Minuten
									</label>
									<label>
										<input
											type="radio"
											value="120 Minuten"
											name="duration"
											checked={
												state.duration === '120 Minuten'
											}
											onChange={handleInput}
										/>
										120 Minuten
									</label>
								</StyledFieldset>
								<label htmlFor="Message"></label>
								<StyledTextarea
									name="message"
									value={state.message}
									onChange={handleInput}
									placeholder="Nachricht/Terminwünsche"
								/>

								{error && (
									<StyledError>
										<p>{error}</p>
									</StyledError>
								)}
								{success && (
									<StyledSuccess>
										<p>{success}</p>
									</StyledSuccess>
								)}
								<StyledButton type="submit">
									Anmeldung absenden
									<i className="fas fa-chevron-right"></i>
								</StyledButton>
							</StyledForm>
							<StyledLink>
								<Link to="anmeldung/anmeldungsformular">
									Anmeldungsformular als PDF herunterladen /
									ausdrucken
								</Link>
							</StyledLink>
						</StyledFormWrapper>
					</ContentSection>
				</ContentContainer>
			</ScreenContainer>
		</>
	)
}

export default EnrolmentScreen
