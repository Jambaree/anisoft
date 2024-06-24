import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Edges from "../Edges";
import Facebook from "../../../public/facebook.svg";
import Twitter from "../../../public/x.svg";
import Linkedin from "../../../public/linkedin.svg";

export function TeamBios({
  headline,
  members,
}: {
  headline?: string;
  members?: any[];
}) {
  function isEven(index) {
    return index % 2 === 0;
  }
  function getFirstName(fullName) {
    return fullName.split(" ")[0];
  }

  return (
    <div className="relative">
      <div className="absolute top-[-135px]" id="leadership" />
      <Edges size="lg">
        <h2 className="mt-[97px] mb-[59px] w-fit sm:mx-0 mx-auto text-[36px] text-[#100D29]">
          {headline}
        </h2>
        <div className="hidden sm:flex flex-col justify-center items-center">
          {members?.map((member, index) => {
            const rowClass = isEven(index) ? "flex-row" : "flex-row-reverse";
            const checkMargin = isEven(index) ? "ml-auto" : "mr-auto";
            const imageMargin = isEven(index) ? "mr-[65px]" : "ml-[65px]";
            const imageLine = isEven(index) ? "right-[-80px]" : "left-[-80px]";
            const greenLineAlign = isEven(index) ? "left-[32%]" : "right-[50%]";
            return (
              <div className="w-fit relative" key={index}>
                <div
                  className={` ${rowClass} w-full relative  flex pb-[20px] mb-[55px]`}
                >
                  <div
                    className={`relative z-30 w-fit ${imageMargin} min-w-[250px]`}
                  >
                    <Image
                      alt={member.image.alt}
                      height={400}
                      src={member.image.url}
                      width={350}
                    />
                  </div>
                  <div
                    className={`flex flex-col max-w-[635px] justify-center ${checkMargin}  `}
                  >
                    <div
                      className={`w-full border-[1px] border-t-black absolute ${imageLine} top-[20px]  mt-[50px] z-10`}
                    >
                      <div
                        className={`bg-[#00AC4D] w-[38px] h-[5px] absolute ${greenLineAlign} top-[-3px] rounded-full`}
                      />
                    </div>

                    <h3 className="mb-[7px] text-[#100D29] text-[36px] font-normal mt-[100px]">
                      {member.name}
                    </h3>
                    <p className="mb-[5px] text-[#100D29] text-[17px] font-bold leading-[26px]">
                      {member.professionalTitle}
                    </p>
                    <div>
                      {member?.socialIcons?.length > 0 &&
                        member?.socialIcons?.map((link, index) => (
                          <a
                            aria-label="social link"
                            className="mr-[22px] w-fit mb-[10px] relative justify-center items-center flex flex-row"
                            href={link.url || "/"}
                            key={index}
                          >
                            {link.icon === "facebook" && (
                              <Facebook className="fill-lightGreen w-fit hover:fill-white" />
                            )}
                            {link.icon === "linkedin" && (
                              <Linkedin
                                className="fill-lightGreen hover:fill-white w-fit"
                                id="linkedin"
                              />
                            )}

                            {link.icon === "twitter" && (
                              <Twitter
                                className="fill-lightGreen hover:fill-white w-fit"
                                id="twitter"
                              />
                            )}
                          </a>
                        ))}

                      <p className="text-[#100D29] text-[16px] leading-[26px]">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Edges>
      <div className="flex flex-row flex-wrap justify-center items-center pb-[55px]">
        {members?.map((member, index) => {
          const firstName = getFirstName(member.name);
          return (
            <div className="w-full relative" key={index}>
              <Accordion collapsible type="single">
                <AccordionItem value="item-1">
                  <div
                    className={` w-full relative  sm:hidden flex flex-row flex-wrap mb-[21px] `}
                  >
                    <div className={`relative z-30 w-[136px] h-[136px] `}>
                      <Image
                        alt={member.image.alt}
                        className="object-cover object-top"
                        fill
                        src={member.image.url}
                      />
                    </div>
                    <div
                      className={`flex flex-col max-w-[635px] justify-center ml-[21px]  `}
                    >
                      <h3 className="mb-[7px] text-[#100D29] text-[28px] font-normal">
                        {member.name}
                      </h3>
                      <p className="mb-[14px] text-[#100D29] text-[17px] font-bold leading-[26px]">
                        {member.professionalTitle}
                      </p>

                      <AccordionTrigger className="text-[18px] font-light text-[#00AC4D] [&[data-state=open]]:hidden">{`Read ${firstName}'s bio`}</AccordionTrigger>
                      <AccordionTrigger className="text-[18px] font-light text-[#00AC4D] hidden [&[data-state=open]]:flex">{`Close ${firstName}'s bio`}</AccordionTrigger>
                    </div>
                    <AccordionContent className="px-[15px] mt-[27px] text-[16px] leading-[26px] font-normal text-[#100D29] border-b border-b-black pb-[32px] mb-[20px]">
                      {member.description}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
