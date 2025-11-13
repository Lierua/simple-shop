import Image from "next/image";
import { Suspense } from "react";

export default async function detail({ params }) {
  const { id } = await params;
  console.log("id = " + id);
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <div className="bg-gray-600 grid grid-cols-[1fr_375px_1fr]"></div>
    </Suspense>
  );
}
