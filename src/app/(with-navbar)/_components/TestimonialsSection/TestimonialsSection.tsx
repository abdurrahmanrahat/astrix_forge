"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    _id: "t1",
    quote:
      "Astrix Forge automated our entire lead pipeline. Every inbound lead is now qualified and followed up within minutes. Our booked calls increased by over 35% from first month.",
    author: "Michael Carter",
    photo: "/images/testimonials/client-demo3.jpg",
    role: "Founder, Growth Agency",
    rating: 5,
  },
  {
    _id: "t2",
    quote:
      "The AI support system they built handles most of our customer queries automatically. Our team now focuses only on high-value interactions instead of repetitive tasks.",
    author: "Emily Rodriguez",
    photo: "/images/testimonials/client-demo1.jpg",
    role: "COO, E-commerce Brand",
    rating: 4,
  },
  {
    _id: "t3",
    quote:
      "From architecture to deployment, everything was handled professionally. Our web platform launched faster than expected and has been stable from day one.",
    author: "Daniel Foster",
    photo: "/images/testimonials/client-demo2.jpg",
    role: "CEO, SaaS Startup",
    rating: 5,
  },
  {
    _id: "t4",
    quote:
      "They didn’t just build tools - they built systems that actually run our operations. The automation workflows alone save us dozens of hours every week.",
    author: "Sophia Bennett",
    photo: "/images/testimonials/elizabeth.jpeg",
    role: "MD, Consulting Firm",
    rating: 4,
  },
  {
    _id: "t5",
    quote:
      "The combination of AI agents and backend automation completely transformed how we handle leads and support. It feels like having an extra team working 24/7.",
    author: "James Walker",
    photo: "/images/testimonials/client-demo2.jpg",
    role: "Head of Operations, Digital Company",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const prev = () => {
    swiperRef.current?.slidePrev();
  };

  const next = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Container>
      <div className="py-14 md:py-20">
        <SectionTitle
          subTitle="Client Testimonials"
          title="What Our"
          highlight="Clients Say"
        />

        <div className="relative mt-12">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            disabled={isBeginning}
            className=" absolute left-0 top-1/2 -translate-y-1/2 z-40 p-1 md:p-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 md:w-5 h-4 md:h-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            disabled={isEnd}
            className=" absolute right-0 top-1/2 -translate-y-1/2 z-40 p-1 md:p-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
          </button>

          <div className="mx-7 md:mx-[38px] xl:mx-10">
            <Swiper
              className=" "
              // slidesOffsetBefore={10}
              // slidesOffsetAfter={10}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={4}
              speed={800} // smoother slide
              autoHeight={true} // important: prevents height collapse
              slidesPerView={1}
              grabCursor
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial._id} className="p-1">
                  {/* card */}
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
