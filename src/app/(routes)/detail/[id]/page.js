import Reviews from "@/app/components/detailComponents/Reviews";
import Showcase from "@/app/components/detailComponents/Showcase";
import Basket from "@/app/components/utilityComponents/Basket";
import Image from "next/image";
import { Suspense } from "react";

export default async function detail({ params }) {
  const { id } = await params;
  console.log("id = " + id);
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <div className="mt-8">
        <div className="grid grid-cols-[4fr_2fr] gap-8">
          <Showcase product={product}></Showcase>
          <Basket></Basket>
        </div>
      </div>
      <Reviews product={product}></Reviews>
    </Suspense>
  );
}
