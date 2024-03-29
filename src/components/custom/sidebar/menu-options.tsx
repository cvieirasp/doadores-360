"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  CalendarCheck,
  CalendarClock,
  Menu,
  PieChart,
  User,
} from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {
  defaultOpen?: boolean;
};

const MenuOptions = ({ defaultOpen }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet modal={false} {...openState}>
      <SheetTrigger
        asChild
        className="absolute flex left-4 top-4 z-[100] md:!hidden"
      >
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        showX={!defaultOpen}
        side={"left"}
        className={clsx(
          "bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6",
          {
            "hidden md:inline-block z-[0] w-[300px]": defaultOpen,
            "inline-block md:hidden z-[100] w-full": !defaultOpen,
          }
        )}
      >
        <div>
          <AspectRatio ratio={16 / 5}>
            <Image
              className="rounded-md object-contain"
              src="next.svg"
              alt="Sidebar Logo"
              fill
            />
          </AspectRatio>
          <nav className="relative">
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Pesquisar..." />
              <CommandList className="py-4 overflow-visible">
                <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
                <CommandGroup className="overflow-visible" heading="Home">
                  <CommandItem key={1} className="md:w-[320px] w-full">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <PieChart />
                      <span>Dashboard</span>
                    </Link>
                  </CommandItem>
                </CommandGroup>
                <Separator />
                <CommandGroup
                  className="overflow-visible"
                  heading="Agendamentos"
                >
                  <CommandItem key={2} className="md:w-[320px] w-full">
                    <Link
                      href="/agendamento"
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <CalendarClock />
                      <span>Agendamento de Doação</span>
                    </Link>
                  </CommandItem>
                  <CommandItem key={3} className="md:w-[320px] w-full">
                    <Link
                      href="/agendamentos"
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <CalendarCheck />
                      <span>Meus Agendamentos</span>
                    </Link>
                  </CommandItem>
                </CommandGroup>
                <Separator />
                <CommandGroup
                  className="overflow-visible"
                  heading="Configurações"
                >
                  <CommandItem key={4} className="md:w-[320px] w-full">
                    <Link
                      href="/cadastro"
                      className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                    >
                      <User />
                      <span>Atualizaçõo de Cadastro</span>
                    </Link>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;
