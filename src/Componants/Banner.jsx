import React from 'react';
import slider1 from '../assets/slider_1.jpg'
import slider2 from '../assets/slider_2.jpg'
import slider3 from '../assets/slider_4.jpg'
import slider4 from '../assets/slider-5.jpg'
import slider5 from '../assets/slider_6.jpg'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Banner = () => {
    return (
        <div className='my-10'>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={slider5} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={slider2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={slider3} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={slider1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className='w-full h-[250px] lg:h-[450px]' src={slider4} alt="Image 1" />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Banner;