import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { FC } from "react";
import MobileSideBar from "./MobileSidebar";

const Navbar: FC = () => {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center p-2 z-[999] bg-white dark:bg-black">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-4 h-4 sm:w-6 sm:h-6 z-50">
          <Image
            fill
            sizes="10vw"
            className="object-fit"
            src="/football-info.png"
            alt="logo"
          />
        </div>
        <span className="text-sm sm:text-2xl font-bold none md:block z-50">
          Football Info
        </span>
      </Link>
      <div className="flex flex-row justify-center items-center">
        <ToggleTheme className="mx-4 z-50" />
        <MobileSideBar />
      </div>
    </nav>
  );
};

export default Navbar;
