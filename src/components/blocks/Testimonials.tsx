"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import Dot from "../../../public/dot.svg";
import ChevronRight from "../../../public/chevron-right.svg";
import ChevronLeft from "../../../public/chevron-left.svg";
import Edges from "../Edges";

export default function Testimonials({ testimonials }) {
  const [animateDirection, setAnimateDirection] = useState("right");
  const handleSlideChange = (activeSlide, direction) => {
    setAnimateDirection(direction);
    if (activeSlide >= testimonials.length) {
      setActiveSlide(0);
    } else if (activeSlide < 0) {
      setActiveSlide(testimonials.length - 1);
    } else {
      setActiveSlide(activeSlide);
    }
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);
  const controls = useDragControls();

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(activeSlide + 1, "right");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <section className="py-12 md:py-20 lg:py-24 primaryRadialBg flex justify-center">
      <Edges className="relative w-full" size="md">
        <div className="flex flex-row justify-between">
          <ChevronLeft
            className="fill-lightGreen min-w-[12px] w-[12px] h-[20px] relative my-auto cursor-pointer ml-[25px]"
            onClick={() => {
              handleSlideChange(activeSlide - 1, "left");
            }}
          />
          <AnimatePresence initial={false} mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                activeSlide === index && (
                  <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    className=" mx-auto max-w-7xl px-6 lg:px-8 text-white overflow-y-auto"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragControls={controls}
                    exit={{
                      x: animateDirection === "right" ? 300 : -300,
                      opacity: 0,
                    }}
                    initial={{
                      x: animateDirection === "right" ? -300 : 300,
                      opacity: 0,
                    }}
                    key={index}
                    onDragEnd={(event, info) => {
                      if (info.point.x < dragDirection) {
                        handleSlideChange(activeSlide - 1, "left");
                      } else if (info.point.x > dragDirection) {
                        handleSlideChange(activeSlide + 1, "right");
                      }
                    }}
                    onDragStart={(event, info) => {
                      setDragDirection(info.point.x);
                    }}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="h-[61px] w-[91px] mx-auto mb-[40px]">
                        <Image
                          alt="Workcation"
                          className="object-cover "
                          height="61"
                          src={testimonial?.image?.url}
                          width="91"
                        />
                      </div>
                      <div>
                        <div className="mx-auto max-w-3xl text-center text-2xl  leading-9 ">
                          <h4 className="font-maven">
                            &ldquo;{testimonial?.description}&rdquo;
                          </h4>
                        </div>
                        <div className="mt-8 mb-[51px]">
                          <div className="md:flex md:items-center md:justify-center">
                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                              <p className="font-mukta  ">
                                {testimonial?.name}
                              </p>

                              <svg
                                className="mx-1 hidden h-5 w-5 text-indigo-600 md:block fill-lightGreen"
                                viewBox="0 0 20 20"
                              >
                                <path d="M11 0h3L9 20H6l5-20z" />
                              </svg>

                              <p className="  font-mukta">
                                {testimonial?.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
          <ChevronRight
            className="fill-lightGreen min-w-[12px] w-[12px] h-[20px] relative my-auto cursor-pointer mr-[25px]"
            onClick={() => {
              handleSlideChange(activeSlide + 1, "right");
            }}
          />
        </div>

        <div className="flex flex-row text-[3.125rem] justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              className="h-fit w-fit mx-[4.5px]"
              key={index}
              onClick={() => {
                handleSlideChange(index, "right");
              }}
            >
              <Dot
                className={
                  activeSlide === index
                    ? "fill-lightGreen cursor-pointer"
                    : "fill-white cursor-pointer"
                }
                height="8"
                width="8"
              />
            </div>
          ))}
        </div>
      </Edges>
    </section>
  );
}
