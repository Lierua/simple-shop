"use client";

import useBasketStore from "@/app/store/AddItem";

const BasketButton = ({ product }) => {
  const addItem = useBasketStore((state) => state.addItem);
  const basketItems = useBasketStore((state) => state.basketItems);

  const isInBasket = basketItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addItem(product)}
      className={`${isInBasket ? "bg-secondary text-primary" : "hover:bg-(--secondary) hover:text-(--primary)"} 
      transition-all duration-200 ease mt-auto mb-4 mr-auto px-[25px] py-[8px] border-white border-[2px] rounded-[5px] bg-blue text-primary`}
    >
      {isInBasket ? "Added" : "Add to cart"}
    </button>
  );
};

export default BasketButton;
