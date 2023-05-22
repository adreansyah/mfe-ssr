import BgHeader from "/public/static/images/backgrounds/bg_produk.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const OnBoarding = () => {
  const cardList: any = new Array(15);
  return (
    <div className="bg-white py-8 flex justify-center">
      <div
        className="py-4 px-8 pb-4 max-w-screen-xl max-h-full h-56 bg-no-repeat bg-cover rounded-lg rounded-b-xl "
        style={{ backgroundImage: `url(${BgHeader.src})` }}
      >
        <h1 className="text-black text-md font-bold">Produk Lainnya</h1>
        <Swiper
          slidesPerView={10}
          spaceBetween={30}
          freeMode={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...cardList]?.map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <CardList />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
const CardList = ({ name }: { name?: string }) => {
  return (
    <div className="py-4 cursor-pointer">
      <div className="block max-w-sm max-h-sm h-24 w-24 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"></div>
      <p className="block max-w-sm max-h-sm w-24 text-center text-md text-black font-[500]">
        {name ?? "Voila"}
      </p>
    </div>
  );
};
export default OnBoarding;
