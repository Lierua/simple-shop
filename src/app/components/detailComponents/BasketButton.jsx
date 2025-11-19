"use client";

import useBasketStore from "@/app/store/AddItem";

const BasketButton = ({ product }) => {
  const addItem = useBasketStore((state) => state.addItem);
  const basketItems = useBasketStore((state) => state.basketItems);

  const isInBasket = basketItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addItem(product)}
      className={`${
        isInBasket
          ? "bg-(--blue) text-(--primary)"
          : "hover:bg-(--blueLight) hover:text-(--primary) hover:border-(--blueLight)"
      } 
      transition-all bg-(--blue) text-(--primary) duration-200 ease mt-auto mb-4 mr-auto px-[25px] py-[8px] border-(--blue) border-[2px]`}
    >
      {isInBasket ? "Added" : "Add to cart"}
    </button>
  );
};

export default BasketButton;
