import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  return (
    <div className="flex h-full w-fit min-w-0  rounded-full  bg-emerald-400 p-2">
      <span className="flex flex-nowrap items-center gap-2">
        <FaCartShopping className="text-white" />
        <p className="text-white">Add To cart</p>
      </span>
    </div>
  );
};

export default CartButton;
