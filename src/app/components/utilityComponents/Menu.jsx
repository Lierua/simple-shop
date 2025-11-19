import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-[4rem] py-6 row-start-1 row-span-1 relative z-10 max-h-[70px] border-b-black border-b-2">
      <Link href="/">
        <p className="flex gap-2 text-(--secondary) font-bold hover:scale-[1.1] transition-all duration-200 ease-in">
          Simple Shop <IoHomeOutline className="scale-[1.3] mt-[2px]" />
        </p>
      </Link>
      <ul className="flex gap-8 [&>p]:mr-4 [&>p]:font-semibold ">
        <li>
          <Link href="/products" className="flex gap-2">
            <p>Products</p>{" "}
            <AiOutlineShopping className="scale-[1.3] mt-[2px]" />
          </Link>
        </li>
        <li>
          <Link href="/basket" className="flex gap-2">
            <p>Basket</p> <SlBasket className="scale-[1.3] mt-[2px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
