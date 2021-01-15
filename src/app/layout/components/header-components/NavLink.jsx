import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AniketosLink = styled.div`
	a {
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 0.1rem;
		color: var(--primary-color);
	}
`

const NavLink = ({ to, title }) => {
	return (
		<AniketosLink>
			<Link to={to}>{title}</Link>
		</AniketosLink>
	)
}

export default NavLink
