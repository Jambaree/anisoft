import Image from "next/image";
import Button from "../Button";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import ProductsList from "../ProductsList";

function ProductsSlider({ data }) {
  const { headline, tag, products } = data;

  return (
    <div className="bg-white py-[50px] md:py-[75px]">
      <Edges size="lg">
        <div className="flex w-full h-full  text-darkPurple flex-col">
          <div className="max-w-[900px] pb-[60px]">
            {tag && <p className="max-w-[575px] pt-[40px]">{tag}</p>}

            {headline && (
              <h1 className="heroHeadline text-[2rem]  sm:text-[3rem]">
                {headline}
              </h1>
            )}
          </div>
          <ProductsList products={products} />
        </div>
      </Edges>
    </div>
  );
}

export default ProductsSlider;
