import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex gap-[4rem] py-6">
      <Link href="/">
        <h1 className="flex gap-2">
          Simple Shop <IoHomeOutline className="scale-[1.3]" />
        </h1>
      </Link>
      <ul className="flex gap-8 [&>p]:mr-4 [&>p]:font-semibold ">
        <li>
          <Link href="/products" className="flex gap-2">
            <p>Products</p> <AiOutlineShopping className="scale-[1.3]" />
          </Link>
        </li>
        <li>
          <Link href="/" className="flex gap-2">
            <p>Basket</p> <SlBasket className="scale-[1.3]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
