"use client";
import React, { useRef, useEffect, useState } from "react";
import { animate } from "framer-motion";
import Image from "next/image";
import Edges from "../Edges";

export default function StatsModule({ headline, description, stats, image }) {
  function Counter({ from, to }) {
    const ref = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const [start, setStart] = useState(from);
    const [end, setEnd] = useState(to);
    const [shouldStart, setShouldStart] = useState(false); // add this line

    useEffect(() => {
      if (ref.current && !observerRef.current) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setShouldStart(true);
          }
        });

        observerRef.current.observe(ref.current);
      }

      return () => {
        if (ref.current && observerRef.current) {
          observerRef.current.unobserve(ref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (from && to && shouldStart) {
        setStart(from);
        setEnd(to);
      }

      const controls = animate(start, end, {
        duration: 5,
        onUpdate(value) {
          if (ref.current) ref.current.textContent = value.toFixed() || 0;
        },
      });

      return () => {
        controls.stop();
      };
    }, [end, start, shouldStart]); // add shouldStart here

    return <div ref={ref}>0</div>;
  }

  return (
    <div className="relative primaryRadialBg pb-[115px] md:pb-0">
      <div className="absolute bottom-0 h-80 w-full md:inset-0 md:h-full">
        <div className="h-full w-full md:grid md:grid-cols-2">
          <div className="h-full md:relative md:col-start-2">
            <Image
              alt="People working on laptops"
              className="h-full w-full object-cover md:absolute md:inset-0 md:pl-[15%]"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              src={image?.url}
            />
            {/* <p className="absolute bottom-[10%] md:top-[10%] left-[10%] md:left-[25%] text-[#FF0000]">
              FPO
            </p> */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 md:inset-y-0 md:left-0 md:h-full md:w-32 md:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <Edges size="lg">
        <div className="mx-auto  md:grid md:grid-flow-col-dense md:grid-cols-2 md:gap-x-8">
          <div className="relative pt-[96px] pb-64 sm:pt-24 sm:pb-64 md:col-start-1 md:pb-[108px]">
            <h2 className="text-white">{headline}</h2>
            <p className="mt-5 text-lg text-white">{description}</p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {stats?.map((item, index) => {
                const num = item?.stat?.match(/\d+/g);
                const letr = item?.stat?.match(/[a-zA-Z!@#\$%\^\&*]+/g);

                return (
                  <div key={index}>
                    <h2 className=" text-white flex flex-row">
                      {num ? <Counter from={0} to={parseInt(num[0])} /> : null}
                      {letr?.includes("Years") ? <span>+&nbsp;</span> : null}
                      {letr} {item.label === "Customers Served" && " +"}
                    </h2>

                    <p className="mt-1 block  text-white">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Edges>
    </div>
  );
}
