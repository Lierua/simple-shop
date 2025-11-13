import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Products = async ({ Category }) => {
  return (
    <Suspense>
      <FetchProduct Category={Category} />
    </Suspense>
  );
};

const FetchProduct = async ({ Category }) => {
  "use server";

  let url = "https://dummyjson.com/products";

  if (Category && Category !== "Alle") {
    url = `https://dummyjson.com/products/category/${Category}`;
  }

  const response = await fetch(url);
  const { products } = await response.json();
  console.log({ Category });
  return products.map((product) => (
    <div key={product.id}>
      <Link href={`/detail/${product.id}`}>
        <Image
          loading="eager"
          src={product.thumbnail}
          width={300}
          height={200}
          className="h-full object-cover bg-[#f2968f]/50"
          alt={product.title}
        />
      </Link>
    </div>
  ));
};
export default Products;
