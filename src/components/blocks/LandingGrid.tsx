import type { WpImage } from "@nextwp/core";
import Image from "next/image";
import Edges from "../Edges";

interface GridProps {
  headline?: string;
  subline?: string;
  items?: {
    title?: string;
    description?: string;
    icon?: WpImage;
  }[];
}

export function LandingGrid({ headline, subline, items }: GridProps) {
  return (
    <Edges className="my-12">
      {headline ? (
        <h2 className=" text-[2rem]  sm:text-[2.5rem] mb-5">{headline}</h2>
      ) : null}

      {subline ? <p className="mb-5">{subline}</p> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
        {items?.map(({ title, description, icon }, index) => {
          return (
            <div
              className="w-full  p-[30px] flex flex-col gap-4 items-center justify-center"
              // eslint-disable-next-line react/no-array-index-key -- we don't have a unique ID
              key={index}
            >
              {icon?.url ? (
                <div className="relative w-fit mx-auto">
                  <Image
                    alt={icon.alt || ""}
                    height={58}
                    src={icon.url}
                    width={58}
                  />
                </div>
              ) : null}
              <div className="">
                {title ? (
                  <h4
                    className="text-black w-auto sm:w-fit text-[1.45rem] mb-4 text-center font-bold"
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                  />
                ) : null}

                {description ? (
                  <div
                    className="text-black archiveText overflow-hidden overflow-ellipsis mb-4 text-center"
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Edges>
  );
}
