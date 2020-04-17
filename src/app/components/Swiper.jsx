import React from 'react';
import Swiper from 'react-id-swiper';


const LoopModeInfinityLoop = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<div class="inner-dot"></div>' + '</span>';
              }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }


    return (
        <Swiper {...params}>

            <div><div className="swiper-content">
                <span className="swiperHead">
                    Mileage Made Simple
                </span>
                <p className="swiperParagraph">
                    Motivation And Your Personal Vision An Unbeatable Force
                </p>
                <button className="swiperButton">
                    <p className="swiperButtonText">Start Free Trial</p>
                </button>
                
            </div></div>
            <div><div className="swiper-content"> <span className="swiperHead">
                Mileage Made Simple
                </span>
                <p className="swiperParagraph">
                    Motivation And Your Personal Vision An Unbeatable Force
                </p>
                <button className="swiperButton">
                    <p className="swiperButtonText">Start Free Trial</p>
                </button></div></div>
            <div><div className="swiper-content"> <span className="swiperHead">
                Mileage Made Simple
                </span>
                <p className="swiperParagraph">
                    Motivation And Your Personal Vision An Unbeatable Force
                </p>
                <button className="swiperButton">
                    <p className="swiperButtonText">Start Free Trial</p>
                </button></div></div>
                    
                

        </Swiper>
    )
};
export default LoopModeInfinityLoop;