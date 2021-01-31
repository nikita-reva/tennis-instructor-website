import React from 'react'

import {
	NewsContainer,
	NewsWrapper,
	NewsArticle,
	NewsArticleContent,
	NewsArticleTitle,
	NewsArticleSubTitle,
	NewsArticleDate,
	NewsArticleText,
	NewsArticleLink,
	NewsArticleImageSliderContainer,
	NewsArticleWrapper,
	NewsArticleContentWrapper,
} from './News.elements'

import { ImageSlider } from '../index'

const news = ({ news }) => {
	return (
		<NewsContainer>
			<NewsWrapper>
				{news.map((article, index) => (
					<NewsArticle key={index}>
						<NewsArticleWrapper>
							<NewsArticleContent>
								<NewsArticleContentWrapper>
									<NewsArticleTitle>
										{article.title}
									</NewsArticleTitle>
									<NewsArticleSubTitle>
										{article.subtitle}
									</NewsArticleSubTitle>
									<NewsArticleDate>
										{article.date}
									</NewsArticleDate>
									<NewsArticleText>
										{article.text}
									</NewsArticleText>
								</NewsArticleContentWrapper>
								{article.linkTo && (
									<NewsArticleLink to={article.linkTo}>
										{article.linkText}
									</NewsArticleLink>
								)}
							</NewsArticleContent>

							<NewsArticleImageSliderContainer>
								<ImageSlider
									slides={article.imageSlides}
									aspectRatio={1}
									incrementRate={article.autoChange && 5000}
									blackNav={article.sliderBlackNav}
								/>
							</NewsArticleImageSliderContainer>
						</NewsArticleWrapper>
					</NewsArticle>
				))}
			</NewsWrapper>
		</NewsContainer>
	)
}

export default news
