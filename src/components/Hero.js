import React, { useEffect,useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import {Button} from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowForward, IoArrowBack  } from 'react-icons/io5';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1400px;
    position: relative;
    overflow: hidden;
    margin-top: -100px;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:: before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%
            rgba(0, 0, 0, 0.2) 50%
            rgba(0, 0, 0, 0.6) 100%
        )
    }


`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    margin-top: 100px;
`;

const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current +1))
        }

        timeout.current = setTimeout(nextSlide, 10000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    },
    [current, length]
    );

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)

        // console.log(current);
    };

    const prevSLide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

        // console.log(current);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage to={slide.path} src={slide.img} alt={slide.alt}/>
                                <Arrow/>
                            </HeroSlider>

                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow  onClick={prevSLide}/>
                    <NextArrow  onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
       
    );
};

export default Hero;