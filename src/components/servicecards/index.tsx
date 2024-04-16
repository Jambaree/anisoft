"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import parse from "html-react-parser";
import { motion, useAnimationControls } from "framer-motion";
import { InView } from "react-intersection-observer";
import Edges from "../Edges";
import CardsNavBar from "./CardsNavBar";
import MobileCardsNavBar from "./MobileCardsNavBar";

function ServiceCards({ services }) {
  const controls = useAnimationControls();

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(services[0].image?.url);
  const handleInView = (inView, index) => {
    if (inView) {
      setActiveIndex(index);
      setCurrentImage(services[index].image?.url);
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
      <MobileCardsNavBar activeIndex={activeIndex} services={services} />

      <CardsNavBar activeIndex={activeIndex} services={services} />

      <Edges size="lg">
        <div className="flex relative ">
          <div>
            {services.map((service, index) => (
              <InView
                className="relative "
                key={index}
                onChange={(inView) => {
                  handleInView(inView, index);
                }}
                threshold={windowHeight < 960 ? 0.2 : 1}
              >
                {({ ref }) => (
                  <div
                    className="flex md:mr-[80px] relative md:my-[235px] "
                    key={index}
                  >
                    <div className={classNames("py-[50px] sm:py-[50px]  z-30")}>
                      <div className="flex flex-col justify-center " ref={ref}>
                        <h2
                          className="mb-[24px]"
                          dangerouslySetInnerHTML={{ __html: service.name }}
                        />
                        <div
                          className="block h-[45vh] -mt-[45vh] md:h-[50vh] md:-mt-[50vh] invisible"
                          id={service.name}
                        />
                        <div className="mb-[32px]">
                          {parse(service?.description)}
                        </div>

                        {service?.points.map((point, index) => (
                          <div className="flex flex-row  mb-[16px]" key={index}>
                            <div className="max-w-[16px] w-full h-[4px] bg-lightGreen mr-[16px] mt-[11px]" />
                            {parse(point?.text)}
                          </div>
                        ))}

                        {service?.image?.url ? (
                          <div className="md:hidden block relative  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] mt-[10px] md:mt-[112px]">
                            <Image
                              alt="service-image"
                              className="object-cover"
                              fill
                              ref={imageRef}
                              sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                              src={service?.image?.url}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </div>

          {currentImage ? (
            <motion.div
              animate={controls}
              className="mb-[45px] z-30 hidden md:block ml-auto sticky top-[calc(50%-14rem)] items-start  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] md:mt-[112px] "
              exit={{ opacity: 0.9 }}
              initial={{ opacity: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentImage ? (
                <div className="relative h-full">
                  <Image
                    alt="service-image"
                    className="object-cover "
                    fill
                    key={activeIndex}
                    priority
                    ref={imageRef}
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                    src={currentImage}
                  />
                </div>
              ) : null}
            </motion.div>
          ) : null}
        </div>
      </Edges>
    </div>
  );
}

export default ServiceCards;
