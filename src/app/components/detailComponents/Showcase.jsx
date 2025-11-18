"use client";

import Image from "next/image";
import ImageSelection from "./ImageSelection";
import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import BasketButton from "./BasketButton";

const Showcase = ({ product }) => {
  const [imageSelection, SetImageSelection] = useState(product.images[0]);
  return (
    <div className="">
      <div className="grid grid-cols-[2fr_3fr] gap-6 pr-[4rem] border-r-white/20 border-r-[2px]">
        <div className="relative">
          <Image
            loading="eager"
            src={imageSelection}
            width={300}
            height={200}
            className="aspect-square w-[310px] object-cover bg-(--blue) p-2 shadow"
            alt={product.title}
          />
          <h1 className="uppercase absolute top-4 left-4 text-3xl">
            {product.category}
          </h1>
          <ImageSelection
            product={product}
            imageSelection={imageSelection}
            setImageSelection={SetImageSelection}
          ></ImageSelection>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl mb-4"> {product.title} </h1>
          <p className="text-[14px]"> {product.description} </p>
          <div className="w-[200px] h-[2px] bg-(--secondary) mt-4"></div>
          <BasketButton product={product}></BasketButton>
          <div className=" flex justify-between">
            <p className="text-4xl "> DKK {product.price} </p>
            <p className="text-4xl flex gap-1 self-end ml-auto">
              {product.rating} <TiStarFullOutline className="scale-[0.8]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
