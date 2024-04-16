import { getSingleItem, type WpPage } from "@nextwp/core";
import Edges from "../Edges";
import ProductsList from "../ProductsList";

export async function ProductsSlider(props: {
  headline?: string;
  tag?: string;
  products: any[];
}) {
  const { headline, tag, products } = props;

  const productsData: WpPage[] = [];
  await Promise.all(
    products.map(async (item) => {
      const postItem = await getSingleItem({
        id: item.product.ID,
        rest_base: "solutions-products",
      });

      if (postItem?.data) {
        productsData.push({ ...item, postItem: postItem.data });
      }
    })
  );

  return (
    <div className="bg-white py-[25px] md:py-[50px] overflow-x-hidden">
      <Edges size="lg">
        <div className="flex w-full h-auto  text-darkPurple flex-col">
          <div className="max-w-[900px] pb-[45px]">
            {tag ? <p className="max-w-[575px] pt-[40px]">{tag}</p> : null}

            {headline ? (
              <h2 className=" text-[2rem]  sm:text-[3rem]">{headline}</h2>
            ) : null}
          </div>

          <ProductsList products={productsData} />
        </div>
      </Edges>
    </div>
  );
}
