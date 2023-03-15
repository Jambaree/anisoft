"use client";
import React, { useState, useRef, useEffect } from "react";
import Edges from "../Edges";

import Image from "next/image";
import classNames from "classnames";
import parse from "html-react-parser";

import CardsNavBar from "./CardsNavBar";
import { motion, useAnimationControls } from "framer-motion";
import { InView } from "react-intersection-observer";
import MobileCardsNavBar from "./MobileCardsNavBar";

const ServiceCards = ({ services }) => {
  const controls = useAnimationControls();

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    services[0].image?.sourceUrl
  );
  const handleInView = (inView, index) => {
    if (inView) {
      setActiveIndex(index);
      setCurrentImage(services[index].image?.sourceUrl);
    }
  };

  const windowHeight = typeof window !== "undefined" && window.innerHeight;
  const imageRef = useRef(null);

  useEffect(() => {
    controls.set({ opacity: 0.9 });

    controls.start({ opacity: 1 });
  }, [currentImage]);

  return (
    <div>
      <MobileCardsNavBar services={services} activeIndex={activeIndex} />

      <CardsNavBar services={services} activeIndex={activeIndex} />

      <Edges size="lg">
        <div className="flex relative ">
          <div>
            {services.map((service, index) => (
              <InView
                key={index}
                threshold={windowHeight < 960 ? 0.2 : 1}
                className="relative "
                onChange={(inView) => {
                  handleInView(inView, index);
                }}
              >
                {({ ref, inView }) => (
                  <div
                    key={index}
                    className="flex md:mr-[80px] relative md:my-[235px] "
                  >
                    <div
                      className={classNames(
                        // index % 2 !== 0 ? "bg-[#F4F4F4]" : "bg-white",
                        "py-[50px] sm:py-[50px]  z-30"
                      )}
                    >
                      <div className="flex flex-col justify-center " ref={ref}>
                        <h1 className="mb-[24px]">{service?.name}</h1>
                        <div
                          className="block h-[45vh] -mt-[45vh] md:h-[50vh] md:-mt-[50vh] invisible"
                          id={service.name}
                        ></div>
                        <div className="mb-[32px]">
                          {parse(service?.description)}
                        </div>

                        {service?.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex flex-row items-start mb-[16px]"
                          >
                            <div className="w-[18px] h-[4px] bg-lightGreen mr-[16px] mt-[10px]" />
                            <p>{point?.text}</p>
                          </div>
                        ))}

                        <div className="md:hidden block relative  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] mt-[10px] md:mt-[112px]">
                          <Image
                            src={service?.image?.sourceUrl}
                            alt="service-image"
                            ref={imageRef}
                            fill
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            className="object-cover"
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </div>

          {currentImage && (
            <motion.div
              initial={{ opacity: 0.9 }}
              animate={controls}
              exit={{ opacity: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-[45px] z-30 hidden md:block ml-auto sticky top-[calc(50%-14rem)] items-start  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] md:mt-[112px] "
            >
              <div className="relative h-full">
                <Image
                  key={activeIndex}
                  src={currentImage}
                  alt="service-image"
                  ref={imageRef}
                  fill
                  priority
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                ></Image>
              </div>
            </motion.div>
          )}
        </div>
      </Edges>
    </div>
  );
};

export default ServiceCards;
