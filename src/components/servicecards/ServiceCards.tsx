"use client";
import React, { useState, useRef } from "react";
import Edges from "../Edges";

import Image from "next/image";

import CardsNavBar from "./CardsNavBar";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";
import MobileCardsNavBar from "./MobileCardsNavBar";

const services = [
  {
    name: "Strategic Planning",
    image: "/stats-background-image.png",
    description:
      "Today's organizations are inundated by an ever-changing list of products that purport to be “the solution”. But when it come to complex business environments, products don’t define the solution. The needs of the business must dictate the solution. Therefore, a truly effective solution needs to address these business requirements by merging knowledge of the business to the existing and available technology.",
    points: [
      { text: "Problem Identification & Resolution" },
      { text: "IT Strategic Planning & Enterprise Architecture Consulting" },
      { text: "Infrastructure Optimization & Virtualization" },
      { text: "System Convergence & Consolidation" },
      { text: "Business Continuity & Disaster Recovery Planning & Testing" },
    ],
  },
  {
    name: "Solution Design",
    image: "/placeHolderImage3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    points: [
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
    ],
  },
  {
    name: "Other Test",
    image: "/stats-background-image.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    points: [
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
    ],
  },
  {
    name: "Other Other Test",
    image: "/placeHolderImage3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    points: [
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " },
    ],
  },
];

const ServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInView = (inView, index) => {
    if (inView) {
      setActiveIndex(index);
    }
  };
  const imageRef = useRef(null);

  return (
    <div>
      <MobileCardsNavBar services={services} activeIndex={activeIndex} />

      <CardsNavBar services={services} activeIndex={activeIndex} />

      <Edges size="lg">
        <div className="flex">
          <div>
            {services.map((service, index) => (
              <InView
                key={index}
                threshold={1}
                className="relative"
                onChange={(inView) => {
                  handleInView(inView, index);
                }}
              >
                {({ ref, inView }) => (
                  <div key={index} className="flex relative md:mr-[80px]">
                    <div
                      className="absolute -top-[160px]"
                      id={service.name}
                    ></div>

                    <div
                      className=" py-[50px] sm:py-[50px] md:py-[221px]"
                      ref={ref}
                    >
                      <div className="flex flex-col justify-center">
                        <h1 className="mb-[24px]">{service?.name}</h1>
                        <p className="mb-[32px]">{service?.description}</p>

                        {service?.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex flex-row items-center mb-[16px]"
                          >
                            <div className="w-[18px] h-[4px] bg-lightGreen mr-[16px]" />
                            <p>{point?.text}</p>
                          </div>
                        ))}
                        <AnimatePresence>
                          {inView ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="md:hidden block relative  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] mt-[10px] md:mt-[112px] "
                            >
                              <Image
                                src={service?.image}
                                alt="service-image"
                                ref={imageRef}
                                fill
                                className="object-cover"
                              ></Image>
                            </motion.div>
                          ) : (
                            <div className="md:hidden block h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] mt-[10px] md:mt-[112px]"></div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </div>
          <AnimatePresence>
            <motion.div className="hidden md:block ml-auto sticky top-[calc(50%-20rem)] items-start  h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] mt-[112px] ">
              <Image
                src={services[activeIndex]?.image}
                alt="service-image"
                ref={imageRef}
                fill
                className="object-cover"
              ></Image>
            </motion.div>
          </AnimatePresence>
        </div>
      </Edges>
    </div>
  );
};

export default ServiceCards;
