"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
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
      <SideIn right={false} className={"flex flex-col w-fit justify-evenly  "}>
        {products.map(({ product }: any, index: number) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveProduct(index)}
              className={classNames(
                " w-full h-full relative  before:absolute before:top-0 before:h-full  hidden md:flex items-center cursor-pointer transition-all ease-in-out overflow-hidden pr-[90px]",
                activeProduct === index
                  ? "md:before:bg-lightGreen before:w-[4px] before:right-[2.5px] "
                  : "md:before:bg-[#ADADAD] before:w-[1px] before:right-[4px] "
              )}
            >
              {product?.title && (
                <h3 className="text-black align-middle max-w-[505px] my-[15px]">
                  {product.title}
                </h3>
              )}
            </div>
          );
        })}
      </SideIn>

      <SideIn
        className={
          "bg-darkPurple flex flex-col justify-center md:h-[550px] overflow-hidden w-full max-w-[806px] ml-[15px]"
        }
      >
        {products.map(({ product, buttonText, text }: any, idx: number) => {
          const image = product.featuredImage?.node;
          return (
            <FadeInUp
              playOnce={false}
              key={idx}
              className={`
								${activeProduct === idx ? "block" : " mb-[30px] md:mb-0 block md:hidden "}
								  p-[20px] md:p-[50px] flex flex-col h-full ${
                    products.length !== idx + 1 &&
                    "border-b-white border-b-[10px] "
                  } md:border-b-0`}
            >
              <div className="flex flex-col md:flex-row justify-between w-full pb-[30px]">
                {product?.title && (
                  <h2 className="text-white pr-[20px] py-[30px] md:py-0 ">
                    {product.title}
                  </h2>
                )}
                {product?.uri && (
                  <div className="md:block hidden">
                    <Button variant="large" href={product?.uri} reverse={true}>
                      {buttonText}
                    </Button>
                  </div>
                )}
              </div>
              <div className="w-full">
                {text && <p className="text-white">{text}</p>}
              </div>
              <div className="relative w-full mt-[30px] bg-cover h-[218px]">
                {image?.sourceUrl && (
                  <Image
                    src={image.sourceUrl}
                    alt={image.altText}
                    width={700}
                    height={218}
                    className="object-cover h-[218px] object-center"
                  />
                )}
              </div>

              {product?.uri && (
                <div className="md:hidden block my-[20px] md:my-0">
                  <Button
                    variant="full"
                    href={product.uri}
                    reverse={true}
                    className="mt-[20px]"
                  >
                    {buttonText}
                  </Button>
                </div>
              )}
            </FadeInUp>
          );
        })}
      </SideIn>
    </div>
  );
}

export default ProductsList;
