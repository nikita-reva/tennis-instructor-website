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
	}

	&:nth-child(even) {
		background: var(--primary-color);
		flex-direction: row-reverse;
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

	@media screen and (min-width: 992px) {
		flex: 1;
	}
`

export const NewsArticleTitle = styled.h2`
	color: #fff;
`
export const NewsArticleSubTitle = styled.h3`
	color: #fff;
`
export const NewsArticleDate = styled.h4`
	color: #fff;
`

export const NewsArticleText = styled.p`
	color: #fff;
`

export const NewsArticleImageContainer = styled.div``

export const NewsArticleImage = styled.img`
	width: 200px;
`

export const NewsArticleLink = styled(Link)``

export const NewsArticleImageSliderContainer = styled.div`
	overflow: hidden;

	@media screen and (min-width: 992px) {
		flex: 1;
	}
`
