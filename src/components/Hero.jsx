import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5 flex items-start justify-between flex-col xl:flex-row xl:space-x-8">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            navigationDisabledClass: "false",
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper slide rounded-xl w-full h-auto mb-10 xl:w-auto xl:mb-0">
          <SwiperSlide className="sm:overflow-hidden">
            <Link to="/balkonlar/Issiq oynalash">
              <div className="bg-devushka w-full bg-no-repeat bg-cover h-72 md:min-h-[500px]">
                <div className="bg-rgba w-full min-h-[550px] absolute"></div>
                <div
                  className="w-[60%] relative pl-12 pt-[20%] md:pt-[20%] xl:pt-[25%] sm:pl-24 space-y-3 select-none">
                  <h2 className="text-white text-22 sm:text-28 md:text-4xl lg:text-44 font-extrabold">
                    Balkonlarni oynalash 30% chegirma bilan
                  </h2>
                  <p className="text-white font-montserrat text-sm sm:text-base md:text-lg font-medium">
                    Murakkab kalit xizmatiga buyurtma berishda
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="overflow-hidden">
            <Link to="xizmat ko'rsatish/Oyna o'rnatish">
              <div className="bg-mishka w-full bg-no-repeat bg-cover h-72 md:min-h-[500px]">
                <div className="bg-rgba w-full min-h-[550px] absolute"></div>
                <div
                  className="w-[60%] relative pl-12 pt-[20%] md:pt-[20%] xl:pt-[25%] sm:pl-24 space-y-3 select-none">
                  <h2 className="text-white text-22 sm:text-28 md:text-4xl lg:text-44 font-extrabold">
                    Balkonlarni oynalash 30% chegirma bilan
                  </h2>
                  <p className="text-white font-montserrat text-sm sm:text-base md:text-lg font-medium">
                    Murakkab kalit xizmatiga buyurtma berishda
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <div className="prev hidden lg:block opacity-0" />
          <div className="next hidden lg:block opacity-0" />
          <div className="swiper-pagination"></div>
        </Swiper>

        <form
          onSubmit={() => {
            checked && alert("Xat ketti"),
              !checked && alert("Iltimos bizning siyosatimiz qabul qiling!");
          }}
          className="w-full h-auto xl:w-[750px] xl:min-h-[500px] p-9 rounded-xl bg-lightGreen space-y-3 xl:space-y-8">
          <div>
            <h3 className="text-white font-extrabold text-2xl md:text-3xl xl:text-26">
              O&apos;lchov uchun ro&apos;yxatdan o&apos;tishni xohlaysizmi?
            </h3>
            <p className="text-grey font-montserrat text-sm md:text-base">
              So&apos;rov qoldiring va biz sizga 10 daqiqa ichida
              qo&apos;ng&apos;iroq qilamiz
            </p>
          </div>

          <div className="flex flex-col">
            <input
              className="py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none text-white focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white"
              placeholder="Ismingiz"
              type="text"
              required
            />
            <input
              className="py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none text-white focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white"
              placeholder="Telefon ragamingiz"
              pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
              type="tel"
              required
            />
          </div>

          <div className="flex justify-between flex-col md:flex-row space-y-3 xl:flex-col xl:space-y-4">
            <div className="flex items-center text-white">
              <div className="relative flex items-center p-3 pl-0 rounded-full cursor-pointer mr-1">
                <input
                  onChange={() => setChecked(true)}
                  id="ripple-on"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 outline-none cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-white checked:bg-white checked:before:bg-lightGreen hover:before:opacity-10"
                  required
                />

                <span className="absolute text-lightGreen transition-opacity opacity-0 pointer-events-none top-2/4 left-1/3 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </div>

              <label
                className="font-normal text-sm font-montserrat md:w-80 lg:w-full"
                htmlFor="ripple-on">
                Men shaxsiy ma&apos;lumotlarni qayta ishlash va{" "}
                <a className="underline" target="_blank" href="#">
                  maxfiylik siyosatiga roziman.
                </a>
              </label>
            </div>

            <div className="block mt-auto">
              <button
                type="submit"
                onSubmit={() => alert("Xat ketti")}
                className="inline-block py-6 px-8 bg-white text-mainBlack border-2 border-lightGreen font-bold font-raleway rounded-md hover:bg-lightGreen hover:text-white hover:border-white transition-all duration-500">
                Arizangizni yuboring
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
