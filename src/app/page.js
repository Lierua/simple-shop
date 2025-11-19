import Image from "next/image";
import HERObg from "../../public/copSkyline.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 [&>*]:col-start-1 [&>*]:row-start-1 place-items-center full-bleed row-span-full p-0! m-0! ">
      <div className="relative z-5 w-full h-full">
        <Image
          loading="eager"
          src={HERObg}
          width={1500}
          height={700}
          alt="dark background img"
          className="object-cover w-full"
        />
      </div>
      <div className="relative z-10 w-full h-[80%] full-bleed backdrop-blur-xs grid grid-rows-3 [&>*]:row-start-2 justify-center rounded-e-3xl">
        <div className="flex justify-center flex-col gap-6 items-center">
          <h1 className="text-white text-8xl italic">A SIMPLE SHOP</h1>
          <Link href="/products" className="w-fit h-fit relative z-20">
            <button
              className="transition-all bg-none text-primary duration-200 ease hover:cursor-pointer hover:bg-blue hover:border-(--blue)
            mt-auto mb-4 mr-auto px-[25px] py-[8px] border-white border-[1px]"
            >
              SHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
