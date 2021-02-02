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
	max-width: 600px;
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
	height: 380px;
	padding: 0 12px;
	margin: 6px;
	border-radius: 15px;

	&:nth-child(odd) {
		background: var(--secondary-color);
	}

	&:nth-child(even) {
		background: var(--primary-color);
	}
`

export const GalleryItemCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const GalleryItemSliderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const GalleryItemInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const GalleryItemTitle = styled.h3`
	color: #f0c38e;
	font-family: 'Fjalla One', sans-serif;
	font-weight: 700;
	font-size: 1rem;
	margin-bottom: 6x;
	letter-spacing: 0.8px;
`

export const GalleryItemText = styled.p`
	color: #ddd;
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
