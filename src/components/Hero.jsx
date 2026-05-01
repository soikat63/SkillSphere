"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "@heroui/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[500px] bg-gray-100 animate-pulse" />;

  return (
    <section className="relative h-[550px] md:h-[650px] w-full mt-6">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="h-full w-full rounded-2xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Upgrade Your <span className="text-primary">Skills</span> Today
                🚀
              </h1>
              <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300">
                Learn from Industry Experts and build your career in Web
                Development, Design, and Marketing.
              </p>
              <div className="flex gap-5 justify-center">
                <Button
                  as={Link}
                  href="/courses"
                  color="primary"
                  size="lg"
                  className="px-8 font-bold text-lg"
                >
                  Explore Courses
                </Button>
                <Button
                  as={Link}
                  href="/register"
                  variant="bordered"
                  size="lg"
                  className="px-8 text-white border-white font-bold text-lg backdrop-blur-md"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Master New <span className="text-secondary">Technologies</span>
              </h1>
              <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300">
                Explore our expert-led courses and stay ahead in the rapidly
                changing tech world.
              </p>
              <div className="flex gap-5 justify-center">
                <Button
                  as={Link}
                  href="/courses"
                  color="secondary"
                  size="lg"
                  className="px-8 font-bold text-lg"
                >
                  View Programs
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  variant="bordered"
                  size="lg"
                  className="px-8 text-white border-white font-bold text-lg backdrop-blur-md"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          width: 50px !important;
          height: 50px !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
