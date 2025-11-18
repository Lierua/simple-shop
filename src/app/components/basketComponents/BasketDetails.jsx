"use client";

import useBasketStore from "@/app/store/AddItem";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const BasketDetails = () => {
  const basketItems = useBasketStore((state) => state.basketItems);
  const removeItem = useBasketStore((state) => state.removeItem);
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col">
      <div>
        {basketItems.length === 0 && <p>No items yet</p>}
        {basketItems.map((item) => (
          <div key={item.title} className="flex gap-4">
            <Image
              src={`${item.thumbnail}`}
              alt={item.title}
              loading="eager"
              width={40}
              height={40}
              className="bg-sky-200 rounded-[5px] h-[40px]"
            />
            <div className="flex border-b-white/20 border-b-[2px] mb-2 items-center w-[350px]">
              <div>
                <div key={item.id}>{item.title}</div>
                <p className="mr-4">{item.price} £</p>
              </div>
              <RxCross1
                onClick={() => removeItem(item.id)}
                className="hover:rotate-[90deg] transition-all duration-200 ease ml-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center text-2xl w-[400px]">
        <p className="py-3 mt-auto">Total Price: </p>
        <p className="ml-auto">DKK {totalPrice.toFixed(2)}</p>
      </div>
      <button
        className={`hover:bg-(--secondary) hover:text-(--primary)
            transition-all duration-200 ease mt-8 mb-4 mr-auto px-[25px] py-[8px] border-white border-[2px] rounded-[5px]`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BasketDetails;
