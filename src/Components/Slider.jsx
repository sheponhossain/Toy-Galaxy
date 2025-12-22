import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import WelcomeBanner from '../assets/Welcome-Banner.png';
import EducationalBanner from '../assets/Educational-Toys-Banner.png';
import BigSaleBanner from '../assets/Big-Sale-Banner.png';

const Slider = () => {
  return (
    <div className="w-full mx-auto h-[40vh] md:h-[60vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden object-fill">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full mx-auto h-full relative">
            <img
              src={WelcomeBanner}
              alt="Welcome to Toy Galaxy"
              className="w-full h-full object-cover lg:object-fill"
            />

            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={EducationalBanner}
              alt="Educational Toys"
              className="w-full h-full object-cover lg:object-fill"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={BigSaleBanner}
              alt="Big Sale Offer"
              className="w-full h-full object-cover lg:object-fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffc107 !important; /* আপনার ব্র্যান্ডের গোল্ডেন/ইয়েলো কালার */
          transform: scale(0.7);
        }
        .swiper-pagination-bullet-active {
          background: #e91e63 !important; /* আপনার ব্র্যান্ডের পিঙ্ক কালার */
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
