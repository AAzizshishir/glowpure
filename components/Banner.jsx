"use client";
import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import slider1 from "@/public/hero/sliderSkin1.jpg";
import slider2 from "@/public/hero/skinSlider2.jpg";
import slider3 from "@/public/hero/skinSlider3.jpg";
import Link from "next/link";
import { motion } from "motion/react";

export default function Banner() {
  return (
    <section className="h-[550px] ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false,
        }}
      >
        {/* Slider 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center pl-4 lg:pl-10 mt-4 lg:mt-0"
            >
              <span className="uppercase tracking-[5px]">Essenstial Items</span>
              <h2 className="text-4xl md:text-6xl my-2 lg:my-4 font-medium leading-12 md:leading-[70px]">
                Beauty Inspired by <br /> Real Life
              </h2>
              <p className="text-slate-500 tracking-wider mb-4">
                Made using clean, non-toxic ingredients. Our products are
                designed for everyone
              </p>
              <Link href={""}>
                <Button className="w-[100px] cursor-pointer">Shop Now</Button>
              </Link>
            </motion.div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-6/12"
            >
              <Image
                src={slider1}
                alt="Skin Care Image"
                className="h-[550px] object-cover"
              />
            </motion.div>
          </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center pl-4 lg:pl-10 mt-4 lg:mt-0"
            >
              <span className="uppercase tracking-[5px]">new collection</span>
              <h2 className="text-4xl md:text-6xl my-2 lg:my-4 font-medium leading-12 md:leading-[70px] capitalize">
                Get the parfectly <br /> Hydrated skin
              </h2>
              <p className="text-slate-500 tracking-wider mb-4">
                Made using clean, non-toxic ingredients. Our products are
                designed for everyone
              </p>
              <Link href={""}>
                <Button className="w-[100px] cursor-pointer">Shop Now</Button>
              </Link>
            </motion.div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-6/12"
            >
              <Image
                src={slider2}
                alt="Skin Care Image"
                className="h-[550px] object-cover"
              />
            </motion.div>
          </div>
        </SwiperSlide>
        {/* Slider 3 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center pl-4 lg:pl-10 mt-4 lg:mt-0"
            >
              <span className="uppercase tracking-[5px]">get the glow</span>
              <h2 className="text-4xl md:text-6xl my-2 lg:my-4 font-medium leading-12 md:leading-[70px] capitalize">
                be your kind of <br /> beauty
              </h2>
              <p className="text-slate-500 tracking-wider mb-4">
                Made using clean, non-toxic ingredients. Our products are
                designed for everyone
              </p>
              <Link href={""}>
                <Button className="w-[100px] cursor-pointer">Shop Now</Button>
              </Link>
            </motion.div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-6/12"
            >
              <Image
                src={slider3}
                alt="Skin Care Image"
                className="h-[550px] object-cover"
              />
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
