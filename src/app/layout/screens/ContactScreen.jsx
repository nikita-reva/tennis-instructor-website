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
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 40px;
	background-color: #fff;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

	& > h2 {
		text-align: center;
		margin-bottom: 20px;
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
	message: '',
}

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
							<StyledForm onSubmit={sendEmail}>
								<h2>Nachricht</h2>
								<label>
									Vorname
									<StyledInput
										type="text"
										name="firstName"
										value={state.firstName}
										onChange={handleInput}
									/>
								</label>
								<label>
									Nachname
									<StyledInput
										type="text"
										name="lastName"
										value={state.lastName}
										onChange={handleInput}
									/>
								</label>
								<label>
									E-Mail
									<StyledInput
										type="email"
										name="email"
										value={state.email}
										onChange={handleInput}
									/>
								</label>
								<label htmlFor="Message"></label>
								<StyledTextarea
									name="message"
									value={state.message}
									onChange={handleInput}
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
