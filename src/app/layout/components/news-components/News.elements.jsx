import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NewsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const NewsWrapper = styled.div`
	width: 100%;
`

export const NewsArticle = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;

	&:nth-child(odd) {
		background: var(--secondary-color);
		flex-direction: row;

		a {
			background: var(--primary-color);
		}
	}

	&:nth-child(even) {
		background: var(--primary-color);
		flex-direction: row-reverse;

		a {
			background: var(--secondary-color);
		}
	}
`

export const NewsArticleWrapper = styled.div`
	width: 92%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 992px) {
		width: 80%;

		flex-direction: inherit;
	}
`

export const NewsArticleContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	justify-content: space-between;

	@media screen and (min-width: 992px) {
		flex: 1;
		margin: 48px 0;
		margin-right: 24px;
		padding: 32px 24px;
	}
`

export const NewsArticleContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const NewsArticleTitle = styled.h2`
	color: #f0c38e;
	font-family: 'Fjalla One', sans-serif;
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 12px;
	letter-spacing: 0.8px;

	@media screen and (min-width: 992px) {
		font-size: 3rem;
	}
`
export const NewsArticleSubTitle = styled.h3`
	color: #ddd;
	font-family: 'Fjalla One', sans-serif;
	font-size: 1.5rem;
	margin-bottom: 24px;
	letter-spacing: 0.8px;

	@media screen and (min-width: 992px) {
		font-size: 2rem;
	}
`
export const NewsArticleDate = styled.h4`
	color: #3f3f3f;
	margin-bottom: 12px;
`

export const NewsArticleText = styled.p`
	color: #ddd;
`

export const NewsArticleLink = styled(Link)`
	color: #ddd;
	padding: 8px 24px;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.8px;
	border-radius: 20px;
	text-align: center;
	text-decoration: none;
	margin: 24px 0;

	@media screen and (min-width: 992px) {
		max-width: 400px;
		align-self: center;
	}
`

export const NewsArticleImageSliderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	margin-bottom: 24px;

	@media screen and (min-width: 992px) {
		flex: 1;
		margin: 48px 0;
		margin-left: 24px;
		padding: 24px;
	}
`
