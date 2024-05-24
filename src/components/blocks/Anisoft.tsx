import type { WpLink } from "@nextwp/core";
import Image from "next/image";
import parse from "html-react-parser";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";

export function Anisoft({
  headline,
  tag,
  button,
  text,
}: {
  headline?: string;
  tag?: string;
  button?: WpLink;
  text?: string;
}) {
  return (
    <div className="relative primaryRadialBg pb-[100px] pl-[50px] md:pl-[100px]">
      <div className="absolute left-[10px] md:left-[15px] top-0 w-[40px] md:w-[100px] h-auto flex">
        <Image
          alt="anisoft"
          className="max-h-[472px]"
          height="100"
          src="/anisoft-module.svg"
          width="200"
        />
      </div>
      <div className="bg-white pb-[50px] md:pb-[80px] min-h-[472px] overflow-hidden">
        <Edges size="lg">
          <div className="flex w-full h-auto flex-wrap text-darkPurple items-start justify-evenly">
            <div className="max-w-[500px] pt-[50px] md:pt-[70px]">
              {tag ? <p className="max-w-[575px] pt-[40px]">{tag}</p> : null}

              {headline ? (
                <FadeInUp className="delay-200">
                  <h2 className=" max-w-[985px] text-[2rem]  sm:text-[2rem]">
                    {headline}
                  </h2>
                </FadeInUp>
              ) : null}
            </div>
            <div className="max-w-[500px] flex flex-col pt-[50px] md:pt-[150px]">
              {text ? (
                <p className="text-[16px] md:text-[20px]">{parse(text)}</p>
              ) : null}
              <div className="pt-[50px] flex wrap gap-[30px] flex-wrap w-auto mr-[50px]">
                {button?.url ? (
                  <Button href={button.url} variant="large">
                    {button.title}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Edges>
      </div>
    </div>
  );
}
