"use client"

import { FC, useState } from "react";
import { Leagues } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const SideBar: FC = () => {
  const [active, setActive] = useState<string>("");

  return (
    <section className="hidden sm:block mt-20 px-2 md:px-4 py-2 h-full bg-zinc-100 shadow dark:bg-zinc-900 rounded-md">
      <div>
        <h1 className="font-bold text-xl md-4 text-teal-400">Leagues</h1>
        <div className="border-y my-2 dark:border-zinc-100 border-zinc-500 w-full" />
        <ul className="space-y-2">
          {Leagues.map((league) => (
            <li key={league.id} className="flex">
              <Link
                href={"/leagues/" + league.href}
                onClick={() => setActive(league.name)}
                className={`flex w-full items-center py-2 px-2 rounded-md hover:bg-zinc-200 hover:dark:bg-zinc-700 ${
                  active === league.name ? "bg-zinc-200 dark:bg-zinc-700" : ""
                }`}
              >
                <Image
                  src={league.emblem}
                  alt={league.name}
                  width={20}
                  height={20}
                  className="aspect-square"
                  priority={true}
                />
                <p className="ml-4 text-base md:text-sm">{league.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
