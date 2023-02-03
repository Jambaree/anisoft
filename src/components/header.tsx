import Image from "next/image";
import Link from "next/link";

import MenuItems from "./headerMenu/MenuItems";
// @ts-ignore
import Edges from "./Edges";
import Logo from "./logos/logo";

export default function Header() {
  return (
    <>
      <div className="bg-white h-[72px] "></div>
      <div className=" fixed bg-white w-full border-b-[1px] border-b-[#0E0A30] top-0 z-10">
        <Edges size="lg">
          <div className="flex flex-row justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>
            <MenuItems />
          </div>
        </Edges>
      </div>
    </>
  );
}
