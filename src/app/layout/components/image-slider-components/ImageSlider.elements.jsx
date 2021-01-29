import styled, { css } from 'styled-components'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Slider = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    height: ${({ hgt }) => (hgt ? hgt : 'calc(80vw * (2 / 3))')};

    border-radius: 15px;
    overflow: hidden;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    @media screen and (max-width: 991px) {
        height: ${({ hgt }) => (hgt ? hgt : 'calc(92vw * (2 / 3))')};
    }
`

const Arrow = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ size }) => (size ? size : 'clamp(2rem, 5vw, 3rem)')};
    color: #fff;
    z-index: 10;
    transition: opacity 0.4s ease;
    opacity: 0.2;
    cursor: pointer;
    user-select: none;

    &:hover {
        opacity: 0.8;
    }
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    ${Arrow}
    left: ${({ pdl }) => (pdl ? pdl : 'clamp(1rem, 5vw, 4rem)')}; ;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
    ${Arrow}
    right: ${({ pdr }) => (pdr ? pdr : 'clamp(1rem, 5vw, 4rem)')}; ;
`

export const Slide = styled.div`
    opacity: 0;
    transition-duration: 1s ease;
    &.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`

export const SliderImage = styled.img`
    max-width: 100%;
    object-fit: cover;
`

export const SliderImageText = styled.p`
    position: absolute;
    bottom: 14%;
    user-select: none;
    left: 50%;
    font-size: 12px;
    color: #fff;
    background: var(--secondary-color);
    padding: 4px 8px;
    border-radius: 12px;
    transform: translateX(-50%);

    @media screen and (max-width: 600px) {
        font-size: 8px;
        padding: 2px 6px;
        bottom: 16%;
    }
`

export const SliderNav = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    height: 10px;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
`

export const SliderNavCircle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0 4px;
    background: #fff;
    cursor: pointer;
    opacity: 0.6;
    transform: translateX(-50%);

    &:hover {
        opacity: 1;
    }

    &.active {
        opacity: 1;
    }
`
