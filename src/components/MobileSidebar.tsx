"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Leagues } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="sm:hidden flex items-center justify-center">
      <Button
        aria-label="mobile nav"
        variant="ghost"
        size="sm"
        onClick={toggleOpen}
      >
        <Menu className="relative z-50 h-5 w-5" />
      </Button>

      {isOpen ? (
        <div className="fixed w-full h-screen bg-zinc-100 dark:bg-zinc-900 top-0 left-0 z-[49]">
          {/* Wrap the content in a scrollable div */}
          <div className="mt-14 border-t border-zinc-500 h-[calc(100% - 3.5rem)] overflow-y-auto">
            {Leagues.map((league) => (
              <div key={league.id} className="flex mt-2">
                {/* Use the Link component to navigate */}
                <Link
                  href={"/leagues/" + league.href}
                  onClick={toggleOpen}
                  className="flex w-full items-center py-2 px-2 rounded-md hover:bg-zinc-200 hover:dark:bg-zinc-700"
                >
                  <Image
                    src={league.emblem}
                    alt={league.name}
                    width={20}
                    height={20}
                    className="aspect-square"
                    loading="lazy"
                  />
                  <p className="ml-4 text-base md:text-sm">{league.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileSideBar;
