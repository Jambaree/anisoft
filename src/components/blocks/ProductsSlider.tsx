import Edges from "../Edges";
import ProductsList from "../ProductsList";

function ProductsSlider({ headline, tag, products }) {
  return (
    <div className="bg-white py-[25px] md:py-[50px] overflow-x-hidden">
      <Edges size="lg">
        <div className="flex w-full h-auto  text-darkPurple flex-col">
          <div className="max-w-[900px] pb-[45px]">
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
