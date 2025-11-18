"use client";

import useBasketStore from "@/app/store/AddItem";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Basket = () => {
  const basketItems = useBasketStore((state) => state.basketItems);
  const removeItem = useBasketStore((state) => state.removeItem);
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col sticky top-4 min-w-[320px] bg-(--secondary) text-(--primary) py-4 px-6">
      {basketItems.length === 0 && <p>No items yet</p>}
      {basketItems.map((item) => (
        <div className="flex flex-col">
          <div key={item.id} className="flex items-center mb-2 ">
            <div className="mr-6">
              {item.title.length > 20
                ? item.title.slice(0, 20) + "..."
                : item.title}
            </div>
            <p className="ml-auto mr-4 text-(--blue)">DKK {item.price}</p>
            <RxCross1
              onClick={() => removeItem(item.id)}
              className="hover:rotate-[90deg] transition-all duration-200 ease text-(--blue)"
            />
          </div>
          <div className="w-[200px] h-[1px] bg-(--primary) mb-1"></div>
        </div>
      ))}
      <div className="flex items-center mt-auto text-2xl">
        <p className="py-3 mt-auto">Total Price: </p>
        <p className="ml-auto text-(--blue)">DKK {totalPrice.toFixed(2)}</p>
      </div>
      <Link href={"/basket"}>
        <button
          onClick={() => addItem(product)}
          className={`hover:bg-(--primary) hover:text-(--secondary)
            transition-all duration-200 ease mt-auto mb-4 text-[12px] mr-auto px-[20px] py-[6px]  border-[2px]`}
        >
          Check out
        </button>
      </Link>
    </div>
  );
};

export default Basket;
