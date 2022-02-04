import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { url } from "./url";
import axios from "axios";

export default function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios.get(`${url}/home/banner-web`).then((response) => {
      const listBanner = response.data.data;
      //   console.log(listBanner);
      setBanner(listBanner);
    });
  }, []);

  //   console.log(banner);
  return (
    <div>
      {/* <div className="mobile:w-full mobile:h-44 mobile:my-3 rounded bg-black"></div> */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {banner.map((items, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <div
                    className="w-full mobile:h-44 tablet:h-80 mobile:block tablet:block laptop:hidden desktop:hidden mobile:my-3 rounded bg-black bg-cover"
                    style={{ backgroundImage: `url(${items.url_mobile})` }}
                  ></div>
                  <div
                    className="w-full laptop:h-80 mobile:hidden tablet:hidden laptop:block desktop:block mobile:my-3 rounded bg-black bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${items.url})` }}
                  ></div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
