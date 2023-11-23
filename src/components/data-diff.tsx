"use client";
import { useEffect, useRef } from "react";

export function DataDiff({ data1, data2 }) {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);

  const syncScroll = (e, otherDiv) => {
    if (otherDiv.current) {
      otherDiv.current.scrollTop = e.target.scrollTop;
    }
  };

  useEffect(() => {
    const div1 = divRef1.current;
    const div2 = divRef2.current;

    if (div1 && div2) {
      div1.addEventListener("scroll", (e) => {
        syncScroll(e, divRef2);
      });
      div2.addEventListener("scroll", (e) => {
        syncScroll(e, divRef1);
      });
    }

    return () => {
      if (div1 && div2) {
        div1.removeEventListener("scroll", (e) => {
          syncScroll(e, divRef2);
        });
        div2.removeEventListener("scroll", (e) => {
          syncScroll(e, divRef1);
        });
      }
    };
  }, []);

  return (
    <div className="flex">
      <div
        className="w-1/2 overflow-scroll h-[100svh] m-1 px-2 border border-red-500"
        ref={divRef1}
      >
        <h2>Data1:</h2>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>
      <div
        className="w-1/2 overflow-scroll h-[100svh] m-1 px-2 border border-red-500"
        ref={divRef2}
      >
        <h2>Data2:</h2>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>
    </div>
  );
}
