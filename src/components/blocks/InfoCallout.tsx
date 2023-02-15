import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import parse from "html-react-parser";

function InfoCallout({ headline, tag, button1, button2, text }) {
  return (
    <div className="primaryRadialBg py-[100px] md:py-[150px]">
      <Edges size="lg">
        <div className="flex w-full h-full flex-wrap  text-white items-start justify-center">
          <div className="w-full md:w-1/2 mb-[30px] md:mb-0">
            {tag && (
              <FadeInUp className="delay-300">
                <p className="max-w-[575px]">{tag}</p>
              </FadeInUp>
            )}
            {headline && (
              <FadeInUp className="delay-100">
                <h1 className=" max-w-[985px] text-[48px] ">{headline}</h1>
              </FadeInUp>
            )}

            <FadeInUp className="delay-500">
              <div className="pt-[50px] flex wrap gap-[30px] flex-wrap w-auto mr-[50px]">
                {button1?.url && (
                  <Button variant="large" href={button1?.url} reverse={true}>
                    {button1?.title}
                  </Button>
                )}
                {button2?.url && (
                  <Button
                    variant="basicWhite"
                    href={button2?.url}
                    reverse={true}
                    className="heroButton"
                  >
                    {button2?.title}
                  </Button>
                )}
              </div>
            </FadeInUp>
          </div>
          <div className="w-full md:w-1/2">
            {text && (
              <FadeInUp className="flex items-center justify-center ">
                <div>
                  <div className="relative">{parse(text)}</div>
                </div>
              </FadeInUp>
            )}
          </div>
        </div>
      </Edges>
    </div>
  );
}

export default InfoCallout;
