"use client";

import { twMerge } from "tailwind-merge";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

type Props = {
  role?: any;
  className?: string;
};

const InfoBar = ({ className, role }: Props) => {
  return (
    <>
      <div
        className={twMerge(
          "fixed z-[20] md:left-[300px] left-0 right-0 top-0 p-4 bg-background/80 backdrop-blur-md flex  gap-4 items-center border-b-[1px] ",
          className
        )}
      >
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/">Sair</Link>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default InfoBar;
