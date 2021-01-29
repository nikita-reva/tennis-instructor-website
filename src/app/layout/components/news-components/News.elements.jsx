import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NewsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const NewsWrapper = styled.div``

export const NewsArticle = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;

	&:nth-child(odd) {
		background: var(--secondary-color);
	}

	&:nth-child(even) {
		background: var(--primary-color);
	}

	@media screen and (min-width: 992px) {
		flex-direction: row;
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
	@media screen and (min-width: 992px) {
		flex: 1;
	}
`
