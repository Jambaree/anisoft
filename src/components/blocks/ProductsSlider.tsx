import { getSingleItem } from "@jambaree/next-wordpress";
import type { WpPage } from "@jambaree/next-wordpress/types";
import Edges from "../Edges";
import ProductsList from "../ProductsList";

async function ProductsSlider(props: {
  headline?: string;
  tag?: string;
  products: any[];
}) {
  const { headline, tag, products } = props;

  const productsData: WpPage[] = [];
  await Promise.all(
    products.map(async (item) => {
      const postItem = (await getSingleItem({
        id: item.product.ID,
        postTypeRestBase: "posts",
      })) as WpPage;

      productsData.push({ ...item, postItem });
    })
  );

  return (
    <div className="bg-white py-[25px] md:py-[50px] overflow-x-hidden">
      <Edges size="lg">
        <div className="flex w-full h-auto  text-darkPurple flex-col">
          <div className="max-w-[900px] pb-[45px]">
            {tag ? <p className="max-w-[575px] pt-[40px]">{tag}</p> : null}

            {headline ? (
              <h1 className="heroHeadline text-[2rem]  sm:text-[3rem]">
                {headline}
              </h1>
            ) : null}
          </div>

          <ProductsList products={productsData} />
        </div>
      </Edges>
    </div>
  );
}

export default ProductsSlider;
