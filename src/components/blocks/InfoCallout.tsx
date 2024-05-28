import parse from "html-react-parser";
import type { WpLink } from "@nextwp/core";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";

export function InfoCallout({
  headline,
  tag,
  button_1,
  button_2,
  text,
}: {
  headline?: string;
  tag?: string;
  button_1?: WpLink;
  button_2?: WpLink;
  text?: string;
}) {
  return (
    <div className="primaryRadialBg py-16">
      <Edges size="lg">
        <div className="flex w-full h-full flex-wrap  text-white items-start justify-center">
          <div className="w-full md:w-1/2 mb-[30px] md:mb-0">
            {tag ? (
              <FadeInUp className="delay-300">
                <p className="max-w-[575px]">{tag}</p>
              </FadeInUp>
            ) : null}

            {headline ? (
              <FadeInUp className="delay-100">
                <h2 className=" max-w-[985px] text-[2rem]  sm:text-[2.5rem] px-[15px] ">
                  {headline}
                </h2>
              </FadeInUp>
            ) : null}

            <FadeInUp className="delay-500 px-[15px]">
              <div className="pt-[50px] flex wrap gap-[30px] flex-wrap w-auto mr-[50px]">
                {button_1?.url ? (
                  <Button href={button_1.url} reverse variant="large">
                    {button_1.title}
                  </Button>
                ) : null}

                {button_2?.url ? (
                  <Button
                    className="heroButton"
                    href={button_2.url}
                    reverse
                    variant="basicWhite"
                  >
                    {button_2.title}
                  </Button>
                ) : null}
              </div>
            </FadeInUp>
          </div>

          <div className="w-full md:w-1/2">
            {text ? (
              <FadeInUp className="flex items-center justify-center ">
                <div>
                  <div className="relative wysiwyg">{parse(text)}</div>
                </div>
              </FadeInUp>
            ) : null}
          </div>
        </div>
      </Edges>
    </div>
  );
}
