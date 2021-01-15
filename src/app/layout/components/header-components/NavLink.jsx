import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AniketosLink = styled.div`
	a {
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 0.1rem;
		color: var(--primary-color);

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
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
