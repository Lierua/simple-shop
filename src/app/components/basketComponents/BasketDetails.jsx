"use client";

import useBasketStore from "@/app/store/AddItem";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const BasketDetails = () => {
  const basketItems = useBasketStore((state) => state.basketItems);
  const removeItem = useBasketStore((state) => state.removeItem);
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col mt-8 bg-white shadow p-8 w-fit h-fit">
      <div className="flex flex-col gap-2">
        {basketItems.length === 0 && <p>No items yet.</p>}
        {basketItems.map((item) => (
          <div key={item.title} className="flex gap-4">
            <Link href={`/detail/${item.id}`} className="relative z-10 ">
              <div className="overflow-hidden">
                <Image
                  src={`${item.thumbnail}`}
                  alt={item.title}
                  loading="eager"
                  width={40}
                  height={40}
                  className="bg-(--blue) h-[60px] w-[60px] fit hover:scale-[1.1]"
                />
              </div>
            </Link>
            <div className="flex border-b-white/20 border-b-[2px] mb-2 items-center w-[350px]">
              <div>
                <Link href={`/detail/${item.id}`} className="relative z-10 ">
                  <div key={item.id}>{item.title}</div>
                </Link>
                <p className="mr-4 text-(--blue)">DKK {item.price}</p>
              </div>
              <RxCross1
                onClick={() => removeItem(item.id)}
                className="hover:rotate-[90deg] transition-all duration-200 ease ml-auto text-(--blue)"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[500px] h-[1px] bg-(--secondary) mt-5"></div>

      <div className="flex items-center text-2xl w-[400px]">
        <p className="py-3 mt-auto">Total Price: </p>
        <p className="ml-auto text-(--blue)">DKK {totalPrice.toFixed(2)}</p>
      </div>
      <button
        className={`hover:bg-(--blueLight) hover:border-(--blueLight)
            transition-all duration-200 ease mt-3 mr-auto px-[25px] py-[8px] border-(--blue) bg-(--blue) text-(--primary) border-[2px]`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BasketDetails;
