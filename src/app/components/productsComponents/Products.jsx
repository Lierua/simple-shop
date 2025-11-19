import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaStar } from "react-icons/fa6";
import CartButton from "./CartButton";
import BasketButton from "../detailComponents/BasketButton";

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
    <div className="relative z-10 group h-[420px] w-[235px] overflow-hidden rounded-sm" key={product.id}>
      <Link href={`/detail/${product.id}`} className="relative z-10 ">
        <div
          className=" grid grid-cols-[0.1fr_1fr_0.1fr] [&>*]:col-start-2 w-[minmax(0,300px)] min-w-0 bg-white 
          text-secondary shadow-xl  pb-3 overflow-hidden h-[420px]"
        >
          
          <div className="grid grid-cols-1 [&>*]:col-start-1 [&>*]:row-start-1 col-start-1! col-span-full overflow-hidden">
            <h1 className="text-primary p-4 text-2xl font-bold absolute uppercase z-10">{product.category}</h1>
            <Image className="group-hover:scale-110 transition-all ease-in-out duration-300 h-full w-full object-contain bg-blue" loading="eager" src={product.thumbnail} width={300} height={200} alt={product.title} />
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 py-4 min-w-0">
            <div className="min-w-0">
              <h1 className=" text-lg truncate font-semibold">{product.title}</h1>

              <span className="flex flex-nowrap gap-1 border-b-1 border-gray-400  mt-2">
                <p className="text-gray-400 text-xs">{product.brand}</p>
              </span>
            </div>
            <h3 className="justify-self-end-safe text-base">{product.price} kr.</h3>
          </div>
        </div>
      </Link>
      <div className="relative z-20 bottom-14 left-4">
        <BasketButton product={product}></BasketButton>
      </div>
    </div>
  ));
};
export default Products;
