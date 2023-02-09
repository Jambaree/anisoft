import React from "react";
import Edges from "../Edges";

import Image from "next/image";

import CardsNavBar from "./CardsNavBar";

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
    image: "/stats-background-image.png",
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
  return (
    <div className="relative">
      <CardsNavBar services={services} />
      <Edges size="lg">
        <div className="flex flex-col relative">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-[160px]" id={service.name}></div>
              <div className="flex flex-row py-[112px]  flex-wrap md:flex-nowrap">
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
                </div>
                <div className="relative h-[300px] w-full md:min-w-[616px] md:w-[616px] md:h-[630px] md:ml-[80px]">
                  <Image
                    src={service?.image}
                    alt="service-image"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Edges>
    </div>
  );
};

export default ServiceCards;
