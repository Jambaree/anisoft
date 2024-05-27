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

      <div className="flex justify-center">
        <div className="flex flex-row flex-wrap max-w-max">
          {items?.map(({ title, description, icon }, index) => (
            <div
              className="w-full p-[30px] flex flex-col gap-4 max-w-[410px] mx-auto relative"
              key={index} // Assume index is okay as per your comment
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
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : null}
                {description ? (
                  <div
                    className="text-black archiveText overflow-hidden overflow-ellipsis mb-4 text-center"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Edges>
  );
}
