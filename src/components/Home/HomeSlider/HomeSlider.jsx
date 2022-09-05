import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../images/sliderImg/image1.jpg';
import image3 from '../../../images/sliderImg/image3.jpg';
import image5 from '../../../images/sliderImg/image5.jpg';
import image6 from '../../../images/sliderImg/image6.jpg';
import image7 from '../../../images/sliderImg/image7.jpg';
import image8 from '../../../images/sliderImg/image8.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import './HomeSlider.css';

const imageData = [
    {
        id: 1,
        image: image1,
    },
    {
        id: 2,
        image: image7,
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image8,
    },
    {
        id: 5,
        image: image5,
    },
    {
        id: 6,
        image: image6,
    },
];

const HomeSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {imageData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            className="w-full brightness-75 slider-image-style"
                            src={item.image}
                            alt="IMG"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HomeSlider;
