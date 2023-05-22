import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import response from "../lib/data.json";
const Slider = () => {
  const pagination = {
    el: ".swipper-pagination-custom",
    clickable: true,
    renderBullet: function (index: any, className: string) {
      return `<span class="${className} bg-white border border-blue-500 w-[10px] h-[10px] mx-[2px]"></span>`;
    },
  };
  return (
    <div className="bg-white pt-28 flex justify-center">
      <div className="max-w-screen-xl">
        <Swiper
          style={{ paddingLeft: "9rem", paddingRight: "9rem" }}
          className="relative max-h-full mx-auto pb-4 max-w-screen-xl"
          spaceBetween={10}
          height={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          loop={true}
        >
          {response?.data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="hover:bg-contain" data-carousel-item>
                  <img
                    src={item?.imageDesktop}
                    className="w-full rounded-lg max-h-full h-80"
                    alt="slider-pix"
                  />
                </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
        <div className="relative bottom-10 z-10 ">
          <div className="swipper-pagination-custom text-center m-auto rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
