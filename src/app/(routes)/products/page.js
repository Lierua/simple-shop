import Image from "next/image";
import Products from "@/app/components/productsComponents/Products";
import Categories from "@/app/components/productsComponents/Categories";
import { Suspense } from "react";

export default function productlist({ searchParams }) {
  return (
    <div className="grid grid-cols-[minmax(0,auto)_auto] gap-8 grid-rows-[minmax(0,50px)_auto]">
      <div className="grid grid-cols-3 gap-6 grid-rows-subgrid row-start-1 row-span-2  ">
        <div className="row-start-1 col-span-full">
          <Categories />
        </div>

        <Suspense>
          <div > 
          <ProductListContainer searchParams={searchParams} />
          </div>
        </Suspense>
       
      </div>
      <div className="bg-white w-[300px] shadow-xl  text-black p-4 grid grid-rows-subgrid row-start-2 col-start-2">
        <h2>Basket Details...</h2>
      </div>
    </div>
  );
}
async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  // console.log(category);
  return <Products Category={category} />;
}
