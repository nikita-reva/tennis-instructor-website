import React from 'react'

import {
	EventsContainer,
	Event,
	EventsHeading,
	EventsWrapper,
	EventPointInTime,
	EventDate,
	EventTime,
	EventInfo,
	EventTitle,
	EventDescription,
	EventLink,
} from './Events.elements.jsx'

const Events = ({ events }) => {
	if (!Array.isArray(events) || events.length <= 0) {
		return null
	}

	return (
		<EventsContainer>
			<EventsHeading>Events</EventsHeading>
			<EventsWrapper>
				{events.map((event, index) => (
					<Event key={index}>
						<EventPointInTime>
							<EventDate>{event.date}</EventDate>
							<EventTime>{event.time}</EventTime>
						</EventPointInTime>
						<EventInfo>
							<EventTitle>{event.title}</EventTitle>
							<EventDescription>
								{event.description}
							</EventDescription>
						</EventInfo>
						<EventLink to={event.linkTo}>
							{event.linkText}
						</EventLink>
					</Event>
				))}
			</EventsWrapper>
		</EventsContainer>
	)
}

export default Events
