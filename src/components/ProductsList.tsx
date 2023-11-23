"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { stripWpUrl } from "../utils/strip-wp-url";
import Button from "./Button";
import FadeInUp from "./FadeInUp";
import SideIn from "./SideIn";

function ProductsList({ products }) {
  const [activeProduct, setActiveProduct] = React.useState(null);

  React.useEffect(() => {
    setActiveProduct(0);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center md:flex-row  w-full h-auto pt-[60px]">
      <SideIn className="flex flex-col w-fit justify-evenly  " right={false}>
        {products.map(({ postItem: product }: any, index: number) => {
          return (
            <button
              className={classNames(
                " w-full h-full relative  before:absolute before:top-0 before:h-full  hidden md:flex items-center cursor-pointer transition-all ease-in-out overflow-hidden pr-[90px]",
                activeProduct === index
                  ? "md:before:bg-lightGreen before:w-[4px] before:right-[2.5px] "
                  : "md:before:bg-[#ADADAD] before:w-[1px] before:right-[4px] "
              )}
              key={index}
              onMouseEnter={() => {
                setActiveProduct(index);
              }}
              type="button"
            >
              {product?.title?.rendered ? (
                <h5
                  className="productHeadline text-black align-middle max-w-[505px] my-[7px]"
                  dangerouslySetInnerHTML={{ __html: product.title.rendered }}
                />
              ) : null}
            </button>
          );
        })}
      </SideIn>

      <SideIn className="bg-darkPurple flex flex-col justify-center md:h-[550px] overflow-hidden w-full max-w-[806px] ml-[15px]">
        {products.map(
          (
            { postItem: { title, link, _embedded }, buttonText, text }: any,
            index: number
          ) => {
            const image = _embedded["wp:featuredmedia"]?.[0];

            return (
              <FadeInUp
                className={`
								${activeProduct === index ? "block" : " mb-[30px] md:mb-0 block md:hidden "}
								  p-[20px] md:p-[50px] flex flex-col h-full ${
                    products.length !== index + 1 &&
                    "border-b-white border-b-[10px] "
                  } md:border-b-0`}
                key={index}
                playOnce={false}
              >
                <div className="flex flex-col md:flex-row justify-between w-full pb-[30px]">
                  {title?.rendered ? (
                    <h2
                      className="text-white pr-[20px] py-[30px] md:py-0 "
                      dangerouslySetInnerHTML={{ __html: title.rendered }}
                    />
                  ) : null}

                  {link ? (
                    <div className="md:block hidden">
                      <Button href={stripWpUrl(link)} reverse variant="large">
                        {buttonText}
                      </Button>
                    </div>
                  ) : null}
                </div>
                <div className="w-full">
                  {text ? <p className="text-white">{text}</p> : null}
                </div>
                <div className="relative w-full mt-[30px] bg-cover h-[218px] md:mt-auto">
                  {image?.source_url ? (
                    <Image
                      alt={image.alt_text}
                      className="object-cover h-[218px] object-center w-full"
                      height={218}
                      src={image.source_url}
                      width={700}
                    />
                  ) : null}
                </div>

                {link ? (
                  <div className="md:hidden block my-[20px] md:my-0">
                    <Button
                      className="mt-[20px]"
                      href={link ? stripWpUrl(link) : ""}
                      reverse
                      variant="full"
                    >
                      {buttonText}
                    </Button>
                  </div>
                ) : null}
              </FadeInUp>
            );
          }
        )}
      </SideIn>
    </div>
  );
}

export default ProductsList;
