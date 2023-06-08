import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Now"}>
      </SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-10">
          <img src={slide1} alt="" />
          <h2 className="text-4xl uppercase text-white text-center -mt-11">
            salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-4xl uppercase text-white text-center -mt-10">
            soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-4xl uppercase text-white text-center -mt-10">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-4xl uppercase text-white text-center -mt-10">
            Dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-4xl uppercase text-white text-center -mt-10">
            salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
