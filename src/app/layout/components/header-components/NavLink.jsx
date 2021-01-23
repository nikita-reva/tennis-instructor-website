import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AniketosLink = styled.div`
	a {
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 0.1rem;
		padding: 5px;
		color: var(--secondary-color);

		&:hover {
			color: var(--accent-color);
		}
	}
`

const NavLink = ({ to, title, activate }) => {
	return (
		<AniketosLink>
			<Link onClick={() => activate()} to={to}>
				{title}
			</Link>
		</AniketosLink>
	)
}

export default NavLink
