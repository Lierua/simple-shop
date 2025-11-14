import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AiOutlineShopping } from "react-icons/ai";

const Menu = () => {
  return (
    <div className="flex gap-[4rem] py-6">
      <h1 className="flex gap-2">
        Simple Shop <IoHomeOutline className="scale-[1.3]" />
      </h1>
      <ul className="flex gap-8 [&>p]:mr-4 [&>p]:font-semibold [&>li]:flex [&>li]:gap-2">
        <li>
          <p>Products</p> <AiOutlineShopping className="scale-[1.3]" />
        </li>
        <li>
          <p>Basket</p> <SlBasket className="scale-[1.3]" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
