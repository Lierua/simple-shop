"use client";

import useBasketStore from "@/app/store/AddItem";
import { RxCross1 } from "react-icons/rx";

const Basket = () => {
  const basketItems = useBasketStore((state) => state.basketItems);
  const removeItem = useBasketStore((state) => state.removeItem);
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col">
      {basketItems.length === 0 && <p>No items yet</p>}
      {basketItems.map((item) => (
        <div className="flex items-center border-b-white/20 border-b-[2px] mb-2">
          <div key={item.id}>{item.title}</div>
          <p className="ml-auto mr-4">{item.price} £</p>
          <RxCross1
            onClick={() => removeItem(item.id)}
            className="hover:rotate-[90deg] transition-all duration-200 ease"
          />
        </div>
      ))}
      <div className="flex items-center mt-auto text-2xl">
        <p className="py-3 mt-auto">Total Price: </p>
        <p className="ml-auto">{totalPrice.toFixed(2)} £</p>
      </div>
    </div>
  );
};

export default Basket;
