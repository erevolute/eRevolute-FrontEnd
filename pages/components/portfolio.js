

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Autoplay,FreeMode, EffectCoverflow } from "swiper";

const Portfolios = () => {
    return (
       <div className="port bg-dark">
        <h1 className="fw-bold text-center mt-5 pt-5">Portfolio</h1>
        <div className="portfolio">
        
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          rewind={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            autoplay: true 
          }}
          autoplay={true}
          
          modules={[EffectCoverflow , FreeMode , Autoplay]}
          className="mySwiper1"
          
        >
          <SwiperSlide>
            <img  src="https://swiperjs.com/demos/images/nature-1.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg"alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg"alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=''/>
          </SwiperSlide>
        </Swiper>
        <div className="image-port">
          <img src="https://xmartech.in/images/screenshots/phone2.png" alt="" />
        </div>
          </div>
          </div>
    );
};

export default Portfolios;