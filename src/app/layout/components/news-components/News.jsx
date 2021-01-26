import React from 'react'

import {
	NewsContainer,
	NewsHeading,
	NewsWrapper,
	NewsArticle,
	NewsArticleContent,
	NewsArticleTitle,
	NewsArticleSubTitle,
	NewsArticleDate,
	NewsArticleText,
	NewsArticleImageContainer,
	NewsArticleImage,
	NewsArticleLink,
	NewsArticleImageSliderContainer,
} from './News.elements'

import { ImageSlider } from '../index'

const news = ({ news }) => {
	return (
		<NewsContainer>
			<NewsHeading>News</NewsHeading>
			<NewsWrapper>
				{news.map((article, index) => (
					<NewsArticle key={index}>
						<NewsArticleContent>
							<NewsArticleTitle>{article.title}</NewsArticleTitle>
							<NewsArticleSubTitle>
								{article.subtitle}
							</NewsArticleSubTitle>
							<NewsArticleDate>{article.date}</NewsArticleDate>
							<NewsArticleText>{article.text}</NewsArticleText>
						</NewsArticleContent>
						<NewsArticleImageContainer>
							<NewsArticleImage
								src={article.image}
								alt={article.alt}
							/>
						</NewsArticleImageContainer>
						<NewsArticleLink to={article.linkTo}>
							{article.linkText}
						</NewsArticleLink>
						<NewsArticleImageSliderContainer>
							<ImageSlider slides={article.imageSlides} />
						</NewsArticleImageSliderContainer>
					</NewsArticle>
				))}
			</NewsWrapper>
		</NewsContainer>
	)
}

export default news
