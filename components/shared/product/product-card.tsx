import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";
import Rating from "./rating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm h-[450px] flex flex-col">
      <CardHeader className="p-0 flex justify-center items-center h-[250px]">
        <Link href={`/product/${product.slug}`} className="w-full h-full flex">
          <Image
            src={product.images[0]}
            alt={product.name}
            height={250}
            width={250}
            priority={true}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 text-center">{product.brand}</div>

        <Link href={`/product/${product.slug}`} className="block text-center">
          <h2 className="text-sm font-medium min-h-[40px] leading-tight">
            {product.name}
          </h2>
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive text-sm font-semibold">
              Out of Stock
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
