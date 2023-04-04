import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography, Paper } from "@mui/material";
import Slides from "./Slides";
type Props = {};

function SwiperComp({}: Props) {
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4.6,
            spaceBetween: 30,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
        style={{ height: "content", padding: "0.7rem" }}
      >
        {[
          "Total Invested",
          "Total Portfolio value",
          "Current ROI",
          "Current ROI",
        ].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Slides item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperComp;
