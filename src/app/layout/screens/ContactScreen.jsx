import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styled, { css } from 'styled-components'

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

const StyledFormWrapper = styled.div`
	display: grid;
	width: 100%;
	margin: 0 auto;
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
	grid-template-columns: 1fr;
	gap: 10px;
	grid-template-rows: auto;
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

	@media screen and (max-width: 600px) {
		min-height: 150px;
	}
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
	message: '',
}

const InputNames = {
	firstName: 'Vorname',
	lastName: 'Nachname',
	email: 'E-Mail-Adresse',
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
			'Ihre Nachricht wurde versendet! Sie erhalten in Kürze eine Antwort.'
		)

		setState(initialState)

		emailjs
			.sendForm(
				'service_do95f1d',
				'template_nxwok15',
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
								<h2>Nachricht</h2>
								<p>
									Haben Sie fragen oder Anregungen? Senden Sie
									uns eine Nachricht!
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
								</StyledInputContainer>
								<label htmlFor="Message"></label>
								<StyledTextarea
									name="message"
									value={state.message}
									onChange={handleInput}
									placeholder="Ihre Nachricht..."
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
									Nachricht absenden
									<i className="fas fa-chevron-right"></i>
								</StyledButton>
							</StyledForm>
						</StyledFormWrapper>
					</ContentSection>
				</ContentContainer>
			</ScreenContainer>
		</>
	)
}

export default EnrolmentScreen
