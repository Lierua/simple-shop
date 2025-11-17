import Image from "next/image";
import Products from "@/app/components/productsComponents/Products";
import Categories from "@/app/components/productsComponents/Categories";
import { Suspense } from "react";
import Basket from "@/app/components/utilityComponents/Basket";

export default function productlist({ searchParams }) {
  return (
    <div className="grid grid-cols-[minmax(0,auto)_auto] gap-8 grid-rows-[minmax(0,50px)_auto] h-fit">
      <div className="grid-rows-subgrid row-start-1 row-span-2  ">
        <div className="row-start-1 col-span-full my-4">
          <Categories />
        </div>
        <Suspense>
          <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto_auto] w-full gap-4">
            <ProductListContainer searchParams={searchParams} />
          </div>
        </Suspense>
      </div>
      <div className="mt-12 h-full">
        <Basket />
      </div>
    </div>
  );
}
async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  // console.log(category);
  return <Products Category={category} />;
}
