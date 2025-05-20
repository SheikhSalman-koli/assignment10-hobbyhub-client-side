import React from 'react';
import banner1 from '../assets/hobby-banner.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Banner = () => {
    return (
        <div>
            <Splide aria-labelledby="carousel-heading">
                <SplideSlide>
                    <img src={banner1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                     <img src={banner1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                     <img src={banner1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                     <img src={banner1} alt="Image 1" />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Banner;