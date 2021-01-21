import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styled, { css } from 'styled-components'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import ScreenContainer from './ScreenContainer'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'

const sharedStyles = css`
	background-color: #eee;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
	display: grid;
	grid-template-areas:
		'heading'
		'main';

	& > h2 {
		text-align: center;
		background: var(--secondary-color);
		border-radius: 10px 10px 0 0;
		width: 100%;
		padding: 10px 0;
		position: relative;
		top: 10px;
		z-index: -1;
		height: 65px;
		grid-area: heading;
	}
`

const StyledForm = styled.form`
	grid-area: main;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;
	width: 100%;
	padding: 40px;
	background-color: #fff;
	border-radius: 10px;
	box-sizing: border-box;
`

const StyledInput = styled.input`
	display: block;
	width: 100%;
	${sharedStyles}
`

const StyledTextarea = styled.textarea`
	background-color: #eee;
	width: 100%;
	min-height: 100px;
	resize: none;
	${sharedStyles}
`

const StyledButton = styled.button`
	display: block;
	text-align: center;
	margin: 0 auto;
	background-color: #f7797d;
	color: #fff;
	font-size: 0.9rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
	padding: 0 20px;
	cursor: pointer;
	box-sizing: border-box;
`

const StyledFieldset = styled.fieldset`
	border: 1px solid #ddd;
	display: flex;
	flex-wrap: wrap;
	border-radius: 5px;
	padding: 10px;
	margin: 20px 0;

	legend {
		padding: 0 10px;
	}

	label {
		padding-right: 20px;
	}

	input {
		margin-right: 10px;
	}
`
const StyledSelect = styled.select`
	border: 1px solid #ddd;
	display: flex;
	flex-wrap: wrap;
	border-radius: 5px;
	padding: 10px;
	margin: 20px 0;
`

const StyledOption = styled.option`
	margin-right: 10px;
`

const StyledError = styled.div`
	color: red;
	font-weight: 800;
	margin: 0 0 40px 0;
`

const StyledSuccess = styled.div`
	color: green;
	font-weight: 800;
	margin: 0 0 40px 0;
`

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	birthDate: '',
	address: '',
	gender: '',
	city: '',
	phone: '',
	mobile: '',
	training: '',
	group: '',
	duration: '',
	message: '',
	aggreement: '',
}

const animatedComponents = makeAnimated()

const EnrolmentScreen = ({ history }) => {
	const [state, setState] = useState(initialState)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	function sendEmail(e) {
		e.preventDefault()
		console.log(state)

		for (let key in state) {
			if (state[key] === '') {
				setError(`You must provide the ${key}`)
				return
			}
		}
		setError('')
		const regex = /^\w+([-+.']\w+)*@\w+([-.']\w+)*\.\w+([-.']\w+)*$/
		const test = regex.test(state.email)
		console.log(test)
		setSuccess('Email sent!')

		setState(initialState)

		// window.setTimeout(() => {
		// 	history.push('/')
		// }, 1500)

		// emailjs
		// 	.sendForm(
		// 		'service_do95f1d',
		// 		'template_v4jvoe3',
		// 		e.target,
		// 		'user_JsusNz0E8HNccYZdyYeKy'
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text)
		// 		},
		// 		(error) => {
		// 			console.log(error.text)
		// 		}
		// 	)
	}

	const handleInput = (e) => {
		const inputName = e.currentTarget.name
		const inputValue = e.currentTarget.value

		setState((prev) => ({ ...prev, [inputName]: inputValue }))
	}

	const offerOptions = [
		{ value: 'angebot1', label: 'angebot1' },
		{ value: 'angebot2', label: 'angebot2' },
		{ value: 'angebot3', label: 'angebot3' },
	]

	// function onChangeInput(value) {
	// 	setState({ ...state, offer: value })
	// 	console.log(state.offer)
	// 	console.log(value)
	// }

	return (
		<>
			<ScreenContainer>
				<ContentContainer>
					<ContentSection>
						<StyledFormWrapper>
							<h2>Anmeldung</h2>
							<StyledForm onSubmit={sendEmail}>
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
									placeholder="E-Mail-Addresse..."
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
								<StyledFieldset>
									<legend>Training</legend>
									<label>
										<input
											type="radio"
											value="Einzeltraining"
											name="training"
											checked={
												state.training ===
												'Einzeltraining'
											}
											onChange={handleInput}
										/>
										Einzeltraining
									</label>
									<label>
										<input
											type="radio"
											value="Gruppentraining"
											name="training"
											checked={
												state.training ===
												'Gruppentraining'
											}
											onChange={handleInput}
										/>
										Gruppentraining
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
												state.group === '2er Gruppe'
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
											value="60 Minuten"
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
								{/* 
								<label>
									Angebot
									<StyledSelect
										value={state.offer}
										onChange={handleInput}
										name="offer"
									>
										<StyledOption value="angebot1">
											Angebot 1
										</StyledOption>
										<StyledOption value="angebot2">
											Angebot 2
										</StyledOption>
									</StyledSelect>
								</label> */}
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
