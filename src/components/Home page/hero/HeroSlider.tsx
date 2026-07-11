"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroWelcome from "./slides/HeroWelcome";
import HeroDelivery from "./slides/HeroDelivery";
import HeroOrders from "./slides/HeroOrders";
import HeroBangladesh from "./slides/HeroBangladesh";

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            loop
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            className="h-[65vh] min-h-[600px] m-10 w-full"
        >
            <SwiperSlide className="h-full">
                <HeroWelcome />
            </SwiperSlide>

            <SwiperSlide className="h-full">
                <HeroDelivery />
            </SwiperSlide>

            <SwiperSlide className="h-full">
                <HeroOrders />
            </SwiperSlide>

            <SwiperSlide className="h-full">
                <HeroBangladesh />
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;