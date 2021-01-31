import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

const sharedStyles = css`
	background-color: #ccc;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #aaa;
	padding: 10px;
	box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
	display: grid;
	width: 100%;

	place-items: center;
	margin: 10px auto;
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
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	height: 85px;
	background-image: linear-gradient(
		to top,
		#ff723b 0%,
		var(--secondary-color) 84%
	);
	color: #fff;
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
	width: 100%;
	padding: 30px;
	background-color: var(--accent-color);
	box-sizing: border-box;

	label {
		margin-top: 10px;
		font-size: 0.9rem;
	}

	@media screen and (max-width: 600px) {
		padding: 20px;
	}
`

const StyledInputContainer = styled.div`
	display: grid;
	width: 100%;
	align-items: center;
	grid-template-columns: 1fr 3fr 1fr 3fr;
	gap: 10px;
	grid-template-rows: auto;

	label {
		font-size: 0.9rem;
	}

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

const StyledInput = styled.input`
	display: block;
	width: 100%;
	${sharedStyles}
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
		font-size: 0.9rem;

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

const StyledTextarea = styled.textarea`
	background-color: #eee;
	width: 100%;
	margin-top: 10px;
	min-height: 120px;
	resize: none;
	${sharedStyles}
`

const DateAndSubscription = styled.div`
	width: 100%;
	padding: 24px 30px;
	background: #ccc;
	font-weight: 600;
	display: flex;
`

const Date = styled.span`
	flex: 1;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		left: 120px;
		bottom: 0;
		height: 1px;
		width: 200px;
		background: #222;
	}
`

const Subscription = styled.span`
	flex: 1;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		left: 120px;
		bottom: 0;
		height: 1px;
		width: 200px;
		background: #222;
	}
`

export class EnrolmentPDF extends PureComponent {
	render() {
		return (
			<StyledFormWrapper>
				<StyledHeader>
					<h2>Anmeldungsformular</h2>
					<p>
						Füllen Sie das Formular aus und/oder drucken Sie einfach
						aus.
					</p>
				</StyledHeader>
				<StyledForm>
					<StyledInputContainer>
						<label htmlFor="firstName">Vorname:</label>
						<StyledInput type="text" name="firstName" />
						<label htmlFor="lastName">Nachname:</label>
						<StyledInput type="text" name="lastName" />
						<label htmlFor="email">E-Mail-Adresse:</label>
						<StyledInput type="email" name="email" />
						<label htmlFor="birthDate">Geburtsdatum:</label>
						<StyledInput type="text" name="birthDate" />
						<label htmlFor="address">Straße/Hausnummer:</label>
						<StyledInput type="text" name="address" />
						<label htmlFor="city">PLZ/Wohnort:</label>
						<StyledInput type="text" name="city" />
						<label htmlFor="phone">Festnetz:</label>
						<StyledInput type="text" name="phone" />
						<label htmlFor="mobile">Mobil:</label>
						<StyledInput type="text" name="mobile" />
					</StyledInputContainer>
					<StyledFieldset fd="column">
						<legend>Training</legend>
						<label>
							<input
								type="radio"
								value="Kinder / Jugendliche - Einzeltraining"
								name="training"
							/>
							Kinder / Jugendliche - Einzeltraining
						</label>
						<label>
							<input
								type="radio"
								value="Kinder / Jugendliche - Mannschaftstraining"
								name="training"
							/>
							Kinder / Jugendliche - Mannschaftstraining
						</label>
						<label>
							<input
								type="radio"
								value="Erwachsene - Einzeltraining"
								name="training"
							/>
							Erwachsene - Einzeltraining
						</label>
						<label>
							<input
								type="radio"
								value="Erwachsene - Gruppentraining"
								name="training"
							/>
							Erwachsene - Gruppentraining
						</label>
						<label>
							<input
								type="radio"
								value="Erwachsene - Mannschaftstraining Aktive"
								name="training"
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
							/>
							2er Gruppe
						</label>
						<label>
							<input
								type="radio"
								value="3er-Gruppe"
								name="group"
							/>
							3er-Gruppe
						</label>
						<label>
							<input
								type="radio"
								value="4er-Gruppe"
								name="group"
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
							/>
							60 Minuten
						</label>
						<label>
							<input
								type="radio"
								value="90 Minuten"
								name="duration"
							/>
							90 Minuten
						</label>
						<label>
							<input
								type="radio"
								value="120 Minuten"
								name="duration"
							/>
							120 Minuten
						</label>
					</StyledFieldset>
					<label htmlFor="Message">Nachricht / Terminwünsche:</label>
					<StyledTextarea name="message" />
				</StyledForm>
				<DateAndSubscription>
					<Date>Ort, Datum:</Date>
					<Subscription>Unterschrift:</Subscription>
				</DateAndSubscription>
			</StyledFormWrapper>
		)
	}
}
