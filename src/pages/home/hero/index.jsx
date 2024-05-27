import { memo } from "react"
import "./Hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import heroImg from "../../../assets/hero/"

import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <>
            <section className="container hero">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h1 className="hero__title">Fresh VegetablesBig discount</h1>
                        <p>Save up to 50% off on your first order</p>
                        <div className="hero__card">
                            <input type="text" placeholder="Your emaill address" />
                            <button className="hero__btn">Subscribe</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="hero__title">Fresh VegetablesBig discount</h1>
                        <p>Save up to 50% off on your first order</p>
                        <div className="hero__card">
                            <input type="text" placeholder="Your emaill address" />
                            <button className="hero__btn">Subscribe</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="hero__title">Fresh VegetablesBig discount</h1>
                        <p>Save up to 50% off on your first order</p>
                        <div className="hero__card">
                            <input type="text" placeholder="Your emaill address" />
                            <button className="hero__btn">Subscribe</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default memo(Hero)