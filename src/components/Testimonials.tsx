"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dot from "../../public/dot.svg";
import ChevronRight from "../../public/chevron-right.svg";
import ChevronLeft from "../../public/chevron-left.svg";
import Edges from "../components/Edges";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

const testimonials = [
  {
    image:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Judith Black",
    title: "CEO, Workcation",
  },
  {
    image:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Bobby boy",
    title: "CEO, Workcation",
  },
  {
    image:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Cats and Dogs",
    title: "CEO, Workcation",
  },
  {
    image:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Best worker",
    title: "CEO, Workcation",
  },
  {
    image:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name: "Yippie boy",
    title: "CEO, Workcation",
  },
];

export default function Testimonials() {
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
  return (
    <section className="py-12 md:py-20 lg:py-24 primaryRadialBg flex justify-center">
      <Edges size="md" className="relative w-full">
        <div className="flex flex-row justify-between">
          <ChevronLeft
            className="fill-lightGreen min-w-[12px] w-[12px] h-[20px] relative my-auto cursor-pointer "
            onClick={() => handleSlideChange(activeSlide - 1, "left")}
          />
          <AnimatePresence initial={false} mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                activeSlide === index && (
                  <motion.div
                    drag={"x"}
                    dragControls={controls}
                    dragConstraints={{ left: 0, right: 0 }}
                    initial={{
                      x: animateDirection === "right" ? -300 : 300,
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{
                      x: animateDirection === "right" ? 300 : -300,
                      opacity: 0,
                    }}
                    onDragStart={(event, info) =>
                      setDragDirection(info.point.x)
                    }
                    onDragEnd={(event, info) => {
                      if (info.point.x < dragDirection) {
                        handleSlideChange(activeSlide - 1, "left");
                      } else if (info.point.x > dragDirection) {
                        handleSlideChange(activeSlide + 1, "right");
                      }
                    }}
                    key={index}
                    className=" mx-auto max-w-7xl px-6 lg:px-8 text-white overflow-y-auto"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="h-[61px] w-[91px] mx-auto mb-[40px]">
                        <Image
                          className="object-cover "
                          src="/placeholderLogo2.png"
                          height="61"
                          width="91"
                          alt="Workcation"
                        />
                      </div>
                      <div>
                        <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 ">
                          <p>&ldquo;{testimonial.description}&rdquo;</p>
                        </div>
                        <div className="mt-8 mb-[51px]">
                          <div className="md:flex md:items-center md:justify-center">
                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                              <div className="text-base font-medium ">
                                {testimonial.name}
                              </div>

                              <svg
                                className="mx-1 hidden h-5 w-5 text-indigo-600 md:block fill-lightGreen"
                                viewBox="0 0 20 20"
                              >
                                <path d="M11 0h3L9 20H6l5-20z" />
                              </svg>

                              <div className="text-base font-medium text-gray-500">
                                {testimonial.title}
                              </div>
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
            onClick={() => handleSlideChange(activeSlide + 1, "right")}
            className="fill-lightGreen min-w-[12px] w-[12px] h-[20px] relative my-auto cursor-pointer"
          />
        </div>

        <div className="flex flex-row text-[50px] justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              onClick={() => handleSlideChange(index, "right")}
              key={index}
              className="h-fit w-fit mx-[4.5px]"
            >
              <Dot
                width="8"
                height="8"
                className={
                  activeSlide === index
                    ? "fill-lightGreen cursor-pointer"
                    : "fill-white cursor-pointer"
                }
              />
            </div>
          ))}
        </div>
      </Edges>
    </section>
  );
}
