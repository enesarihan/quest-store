import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export const metadata = {
  title: "Home",
};

const HomePage = async () => {
  const latestProducts = (await getLatestProducts()).map((product) => ({
    ...product,
    rating: Number(product.rating),
  }));
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
