"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/swiper-bundle.css";

import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <body className="bg-[#F9FDFF]">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />
      <nav className="relative px-[20px] py-4 flex justify-between items-center md:px-[40px] xl:max-w-[1024px] xl:mx-auto ">
        <Image
          className=" w-[91.5px] h-[16px] lg:w-[193px] lg:h-[32px]"
          src="./logo.svg"
          width={91.5}
          height={16}
          alt="Пример изображения"
        ></Image>

        <div className="flex">
          <a
            className="inline-block py-[8px] px-[15px] text-[12px] my-auto h-full font-inter bg-gradient-to-bl from-[#00b9b6] to-[#00cdac] text-textSize text-white font-semibold rounded-xl transition duration-200 lg:hidden"
            href="#"
          >
            Начать беседу
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center p-3">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2189_3954)">
                  <path
                    d="M21.7914 0H2.20861C0.990797 0 0 0.67265 0 1.50051C0 2.32732 0.990797 3 2.20861 3H21.7914C23.0092 3 24 2.32732 24 1.50051C24 0.67265 23.0092 0 21.7914 0Z"
                    fill="#333333"
                  />
                  <path
                    d="M21.7914 8.5H2.20861C0.990797 8.5 0 9.17265 0 10.0005C0 10.8273 0.990797 11.5 2.20861 11.5H21.7914C23.0092 11.5 24 10.8273 24 10.0005C24 9.17265 23.0092 8.5 21.7914 8.5V8.5Z"
                    fill="#00B9B6"
                  />
                  <path
                    d="M21.7914 17H2.20861C0.990797 17 0 17.6727 0 18.5005C0 19.3273 0.990797 20 2.20861 20H21.7914C23.0092 20 24 19.3273 24 18.5005C24 17.6727 23.0092 17 21.7914 17Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2189_3954">
                    <rect width="24" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-textsize font-inter text-textColor" href="#">
              About as
            </a>
          </li>
          <li>
            <a className="text-textsize font-inter text-textColor" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-textsize font-inter text-textColor" href="#">
              Contact
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-[12px] px-[30px] font-inter bg-gradient-to-bl from-[#00b9b6] to-[#00cdac] text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Войти
        </a>
      </nav>

      <main className="relative px-[20px] py-4 items-center md:px-[40px] xl:max-w-[1024px] xl:mx-auto">
        <div className="md:flex md:my-[50px]">
          <div>
            <p className="text-center text-[#00b9b6] font-normal font-inter text-cm md:text-left">
              +300 прошедших отбор психологов
            </p>
            <p className="text-center text-[#0e0e0f] text-[28px] font-bold font-[interBold] leading-[33.60px] md:text-left">
              Сессия с психологом oнлайн
            </p>
            <p className="text-center py-[12px] px-[30px] my-10 font-inter text-[18px] bg-gradient-to-bl from-[#00b9b6] to-[#00cdac] text-white font-bold rounded-xl md:w-[194px]">
              Начать беседу
            </p>
          </div>
          <Image
            className=" w-[320px] h-[218px] mx-auto md:w-[404px] md:h-[275px] lg:w-[553px] lg:h-[378px]"
            src="./mainHuman.svg"
            width={320}
            height={218}
            alt="Пример изображения"
          ></Image>
        </div>

        <div className="my-[20px]">
          <video className="w-full rounded-xl" controls>
            <source src="https://www.youtube.com/watch?v=r2oYTiURSbw" />
          </video>
          <div className="text-center text-[#0e0e0f] text-2xl font-interBold py-[30px] leading-[28.80px]">
            Скачайте бесплатно приложение SPEAK
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="shadow-2xl rounded-[12px]">
            <Image
              className="w-[55px] h-[55px] mx-[20px] my-[20px]"
              src="./S_Speak.svg"
              width={0}
              height={0}
              alt="Пример изображения"
            ></Image>
          </div>
          <div>
            <p className="text-oneColor text-[18px] font-interBold">SPEAK</p>
            <p className="w-[230px] text-[14px] font-inter leading-5">
              онлайн сессии с психологом доступно для iOS и Android
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-[20px] m-auto my-[40px]">
          <Image
            className="w-[140px] h-[44px]"
            src="./App_store.svg"
            width={0}
            height={0}
            alt="Пример изображения"
          ></Image>

          <Image
            className="w-[140px] h-[44px]"
            src="./Google_play.svg"
            width={0}
            height={0}
            alt="Пример изображения"
          ></Image>
        </div>
        <div>
          <p className="w-[320px] text-[24px] font-interBold mx-auto my-[30px]">
            Психологи работающие с актуальными темами
          </p>
          <div className="flex flex-wrap gap-[15px] justify-center ">
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Чувства
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Одиночество
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Врeдные привычки
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Отношения
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Работа
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Смыслы
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter">
              Отношения с близкими
            </div>
            <div className="px-[30px] py-[10px] rounded-[12px] shadow-xl text-[14px] font-inter bg-gradient-to-bl from-[#00b9b6] to-[#00cdac] text-white ">
              +300 психологов
            </div>
          </div>
        </div>
        <Swiper
          className="my-10"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 4, // При ширине экрана от 600px будет 2 слайда
            },
            1024: {
              slidesPerView: 5, // При ширине экрана от 920px будет 3 слайда
            },
          }}
        >
          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[420px] mx-[20xp] md:h-[300px]">
              <div className="w-[320px] h-[396px] shadow-xl rounded-xl mx-auto md:w-[157px] md:h-[244px]">
                <Image
                  className="w-[290px] h-[290px] m-[20px] mx-auto md:w-[127px] md:h-[127px]"
                  src="./men1.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
                <p className="text-[18px] font-interBold ml-[20px]">
                  Илья Благов
                </p>
                <Image
                  className="w-[90px] h-[14px] m-[20px]"
                  src="./star.svg"
                  width={0}
                  height={0}
                  alt=""
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>

      <footer className="bg-white xl:max-w-[1024px] xl:mx-auto">
        <Image
          className="w-[152px] h-[30px] m-[20px]"
          src="./logo.svg"
          width={0}
          height={0}
          alt=""
        ></Image>

        <div className="flex flex-wrap gap-[20px] m-[20px] w-[200px] my-[40px]">
          <div className="text-[14px] font-inter">Home</div>
          <div className=" text-[14px] font-inter">Blog</div>
          <div className="text-[14px] font-inter">About us</div>
          <div className=" text-[14px] font-inter">Contact</div>
          <div className="text-[14px] font-inter">Privacy Policy</div>
          <div className="text-[14px] font-inter">Terms and Conditions</div>
        </div>

        <div className="flex m-[20px] gap-[20px]">
          <Image
            className="w-[40px] h-[40px]"
            src="./facebook.svg"
            width={0}
            height={0}
            alt=""
          ></Image>

          <Image
            className="w-[40px] h-[40px]"
            src="./insta.svg"
            width={0}
            height={0}
            alt=""
          ></Image>

          <Image
            className="w-[40px] h-[40px]"
            src="./facebook.svg"
            width={0}
            height={0}
            alt=""
          ></Image>

          <Image
            className="w-[40px] h-[40px]"
            src="./insta.svg"
            width={0}
            height={0}
            alt=""
          ></Image>
        </div>
      </footer>
    </body>
  );
}
