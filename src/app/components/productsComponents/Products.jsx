import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaStar } from "react-icons/fa6";
import CartButton from "./CartButton";

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

  if (Category && Category !== "All") {
    url = `https://dummyjson.com/products/category/${Category}`;
  }

  const response = await fetch(url);
  const { products } = await response.json();
  console.log({ Category });
  return products.map((product) => (
    <Link href={`/detail/${product.id}`}>
      <div
        key={product.id}
        className=" grid 
    grid-rows-[200px_auto_auto]
    grid-cols-[0.1fr_1fr_0.1fr]
    [&>*]:col-start-2
    w-[minmax(0,300px)]
    min-w-0
    bg-white 
    text-black 
    border-2 
   shadow-xl
    rounded-4xl
    pb-3
    overflow-hidden"
      >
        <Image
          className="col-start-1! col-span-full h-full w-full object-contain bg-[#f2968f]/50"
          loading="eager"
          src={product.thumbnail}
          width={300}
          height={200}
          alt={product.title}
        />

        <div className="grid grid-cols-[1fr_auto] gap-4 py-6 min-w-0">
          <div className="min-w-0">
            <h2 className=" text-lg truncate font-semibold">{product.title}</h2>
            <p className="text-gray-400">{product.brand}</p>
            <span className="flex flex-nowrap items-center gap-1">
              <FaStar className="text-gray-400" />
              <p className="text-gray-400">{product.rating}</p>
            </span>
          </div>
          <h3 className="justify-self-end-safe text-base">
            {product.price} kr.
          </h3>
        </div>

        <CartButton className="self-end" />
      </div>
    </Link>
  ));
};
export default Products;
