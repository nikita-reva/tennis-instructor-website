import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NewsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const NewsHeading = styled.h1``

export const NewsWrapper = styled.div``

export const NewsArticle = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const NewsArticleContent = styled.div``

export const NewsArticleTitle = styled.h2``
export const NewsArticleSubTitle = styled.h3``
export const NewsArticleDate = styled.h4``

export const NewsArticleText = styled.p``

export const NewsArticleImageContainer = styled.div``

export const NewsArticleImage = styled.img`
	width: 200px;
`

export const NewsArticleLink = styled(Link)``

export const NewsArticleImageSliderContainer = styled.div`
	max-width: 360px;
`
