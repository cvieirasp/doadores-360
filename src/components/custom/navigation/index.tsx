import { ModeToggle } from "@/components/global/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  user?: null | any;
};

const Navigation = (props: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image src="/next.svg" width={50} height={50} alt="Logo" />
        <span className="text-xl font-bold">Doadores 360</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link
              className="hover:text-primary transition duration-500"
              href={"#"}
            >
              Doações
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary transition duration-500"
              href={"#"}
            >
              Hemocentros
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary transition duration-500"
              href={"#"}
            >
              Informações
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-2">
        <Link
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
          href={"#"}
        >
          Login
        </Link>
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
