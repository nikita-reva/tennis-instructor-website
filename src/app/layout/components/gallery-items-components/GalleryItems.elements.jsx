import styled from 'styled-components'

export const GalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;
`

export const GalleryMainSliderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 800px;
	margin: 24px 0;
`

export const GalleryItemsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`

export const GalleryItemContainer = styled.div`
	display: flex;
	width: 264px;
	height: 396px;
	padding: 0 12px;
	padding-bottom: 12px;
	margin: 6px;
	border-radius: 15px;

	&:nth-child(odd) {
		background: var(--secondary-color);
	}

	&:nth-child(even) {
		background: var(--primary-color);
	}

	@media screen and (min-width: 992px) {
		width: 396px;
		height: 594px;
		padding: 24px;
	}
`

export const GalleryItemCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const GalleryItemSliderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-basis: 70%;
`

export const GalleryItemInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-basis: 30%;
`

export const GalleryItemTitle = styled.h3`
	color: #f0c38e;
	font-family: 'Fjalla One', sans-serif;
	font-weight: 700;
	font-size: 1rem;
	margin-bottom: 6px;
	letter-spacing: 0.8px;

	@media screen and (min-width: 992px) {
		font-size: 1.2rem;
	}
`

export const GalleryItemText = styled.p`
	color: #ddd;
	font-size: 0.8rem;

	@media screen and (min-width: 992px) {
		font-size: 1rem;
	}
`

export const GalleryItemButton = styled.button`
	color: var(--primary-color);
	border: none;
	padding: 4px 12px;
	background: #f0c38e;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	letter-spacing: 0.8px;
	border-radius: 20px;
	text-align: center;
	text-decoration: none;
	margin: 6px 0;

	&:focus {
		outline: none;
	}
`
