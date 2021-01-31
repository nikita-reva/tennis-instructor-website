import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 1000px;

    @media screen and (max-width: 1100px) {
        height: 800px;
    }

    @media screen and (max-width: 500px) {
        height: 640px;
    }

    @media screen and (min-width: 1600px) {
        height: 1200px;
    }
`

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 0%;

    @media screen and (max-width: 1100px) {
        object-position: 50% 0%;
    }
`

export const Slogan = styled.div`
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: ${({ sloganLeft }) =>
        sloganLeft ? 'flex-start' : 'flex-end'};
    top: 25%;
    right: ${({ sloganLeft }) => (sloganLeft ? 'unset' : '0')};
    padding-right: ${({ sloganLeft }) => (sloganLeft ? 'unset' : '6vw')};
    left: ${({ sloganLeft }) => (sloganLeft ? '0' : 'unset')};
    padding-left: ${({ sloganLeft }) => (sloganLeft ? '6vw' : 'unset')};
    color: #fff;

    @media screen and (max-width: 1100px) {
        top: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        transform: translateY(-100%);
        width: 100%;
    }
`
export const SloganMedium = styled.h2`
    font-family: 'Fjalla One', sans-serif;
    font-size: 4rem;

    @media screen and (max-width: 500px) {
        font-size: 2.2rem;
    }
`

export const SloganBig = styled.h2`
    font-family: 'Fjalla One', sans-serif;
    font-size: 6rem;

    @media screen and (max-width: 500px) {
        font-size: 3.8rem;
    }
`

export const SubText = styled.p`
    font-family: 'Fjalla One', sans-serif;
    font-size: 1rem;
    margin-top: 18px;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`

export const HeroLink = styled(Link)`
    display: block;
    text-decoration: none;
    text-align: center;
    color: #fff;
    background: var(--secondary-color);
    border-radius: 10px;
    padding: 12px 24px;
    margin-top: 24px;
`
