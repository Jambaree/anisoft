"use client";
import React, { useRef } from "react";
import type { MapRef } from "react-map-gl";
import Edges from "./Edges";
import Mapbox from "./MapBox";

function Contact({ data }) {
  const { headline, tag, text, locations } = data;

  const mapRef = useRef<MapRef>();

  return (
    <div className="bg-white py-[50px] md:py-[90px] h-full ">
      <Edges size="lg">
        {tag ? <p className="text-black font-[16px] pb-[20px]">{tag}</p> : null}
        <div className="w-full h-full flex flex-col md:flex-row md:gap-0 gap-[30px]">
          <div className="w-full md:w-[40%] flex flex-col ">
            <div className="flex justify-between items-center flex-wrap pb-[30px] gap-[20px]">
              {headline ? (
                <h2 className="text-black  pr-[30px]  ">{headline}</h2>
              ) : null}
            </div>
            {text ? (
              <p className="text-black max-w-[300px] mb-[30px]">{text}</p>
            ) : null}
            <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-[30px]">
              {locations?.length > 0 &&
                locations.map((location, index) => {
                  return (
                    <div
                      className="flex flex-col gap-[15px] border-l-[2px] pl-[30px] border-[#ADADAD]"
                      key={index}
                    >
                      <h3 className="text-black">{location.title}</h3>
                      <p className="text-black">{location.address}</p>
                      {/* <a
                        aria-label="phone number"
                        className="phoneLink hover:underline"
                        href={`tel:${location.phone}`}
                      >
                        Tel: {location.phone}
                      </a> */}
                      {location.faxNumber ? (
                        <a
                          aria-label="fax number"
                          className="phoneLink hover:underline"
                          href={`fax:${location.faxNumber}`}
                        >
                          Fax: {location.faxNumber}
                        </a>
                      ) : null}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="md:w-[60%] w-full ">
            <Mapbox locations={locations} mapRef={mapRef} />
          </div>
        </div>
      </Edges>
    </div>
  );
}

export default Contact;
