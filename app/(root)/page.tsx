import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.action";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";

export const metadata = {
  title: "Home",
};

const HomePage = async () => {
  const latestProducts = (await getLatestProducts()).map((product) => ({
    ...product,
    rating: Number(product.rating),
  }));
  const featuredProducts = (await getFeaturedProducts()).map((product) => ({
    ...product,
    rating: Number(product.rating),
  }));

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" />
      <ViewAllProductsButton />
    </>
  );
};

export default HomePage;
