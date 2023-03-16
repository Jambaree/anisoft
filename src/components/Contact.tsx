"use client";
import React, { useState, useRef, useCallback } from "react";
import Edges from "./Edges";
import Mapbox from "./MapBox";
import { MapRef } from "react-map-gl";
import classNames from "classnames";

const Contact = ({ data }) => {
  const { headline, tag, text, locations } = data;

  const mapRef = useRef<MapRef>();
  const [selectedCity, setSelectedCity] = useState(-1);
  const onSelectCity = useCallback(
    (longitude, latitude, zoom: number, index) => {
      setSelectedCity(index);
      mapRef?.current?.flyTo({
        center: [longitude, latitude],
        zoom: zoom,
        duration: 4000,
      });
    },
    []
  );

  return (
    <div className="bg-white py-[50px] md:py-[90px] h-full ">
      <Edges size="lg">
        {tag && <p className="text-black font-[16px] pb-[20px]">{tag}</p>}
        <div className="w-full h-full flex flex-col md:flex-row md:gap-0 gap-[30px]">
          <div className="w-full md:w-[40%] flex flex-col ">
            <div className="flex justify-between items-center flex-wrap pb-[30px] gap-[20px]">
              {headline && (
                <h2 className="text-black  pr-[30px]  ">{headline}</h2>
              )}
              {selectedCity >= 0 && (
                <p
                  role="button"
                  className="md:ml-auto my-auto pr-[30px]  hover:underline"
                  onClick={() => {
                    onSelectCity(
                      -106.11014797030543,
                      49.741015932602835,
                      2,
                      -1
                    );
                  }}
                >
                  View All Locations
                </p>
              )}
            </div>
            {text && (
              <p className="text-black max-w-[300px] mb-[30px]">{text}</p>
            )}
            <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-[30px]">
              {locations.length > 0 &&
                locations.map((location, index) => {
                  return (
                    <div
                      onClick={() => {
                        onSelectCity(
                          location.longitude,
                          location.latitude,
                          11,
                          index
                        );
                      }}
                      key={index}
                      className={classNames(
                        "cursor-pointer flex flex-col gap-[15px] border-l-[2px] pl-[30px]",
                        selectedCity === index
                          ? "border-lightGreen"
                          : "border-[#ADADAD]"
                      )}
                    >
                      <h3 className="text-black">{location.title}</h3>
                      <p className="text-black">{location.address}</p>
                      <a
                        aria-label="phone number"
                        className="phoneLink hover:underline"
                        href={`tel:${location.phone}`}
                      >
                        Tel: {location.phone}
                      </a>
                      {location.faxNumber && (
                        <a
                          aria-label="fax number"
                          className="phoneLink hover:underline"
                          href={`fax:${location.faxNumber}`}
                        >
                          Fax: {location.faxNumber}
                        </a>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="md:w-[60%] w-full ">
            <Mapbox
              onSelectCity={onSelectCity}
              mapRef={mapRef}
              locations={locations}
            />
          </div>
        </div>
      </Edges>
    </div>
  );
};

export default Contact;
