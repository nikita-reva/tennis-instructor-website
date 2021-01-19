import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'

import ScreenContainer from './ScreenContainer'
import ContentContainer from './ContentContainer'
import ContentSection from './ContentSection'

const AniketosForm = styled.form``

const EnrolmentScreen = () => {
	function sendEmail(e) {
		e.preventDefault()

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

	return (
		<ScreenContainer>
			<ContentContainer>
				<ContentSection>
					<form className="contact-form" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<label>Name</label>
						<input type="text" name="user_name" />
						<label>Email</label>
						<input type="email" name="user_email" />
						<label>Message</label>
						<textarea name="message" />
						<input type="submit" value="Send" />
					</form>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default EnrolmentScreen
