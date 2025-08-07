import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React from "react";

import { Link, usePage } from "@inertiajs/react";

import { IconMenuDeep } from "@tabler/icons-react";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/Components/ui/sheet";

import {
  InformasiDropDown,
  MabaDropDown,
  UserDropdown,
} from "@/lib/data/navlink";
import { UserAuthProps } from "@/lib/types/User";

import logopplk_white from "!assets/logo-pplk-20204-white.png";

interface NavMobileProps {
  isSolid?: boolean;
  isFixed?: boolean;
  isScrolled?: boolean;
}

export default function NavMobile({
  isSolid = false,
  isScrolled = false,
}: NavMobileProps) {
  type MyPage = PageProps<{
    auth: {
      user: UserAuthProps;
    };
  }>;

  const { auth } = usePage<MyPage>().props;

  return (
    <div className="md:hidden block -mt-2">
      <Sheet>
        <SheetTrigger
          asChild
          className="focus:border-none focus:outline-none ring-0 focus:ring-0 -mr-1 border-none outline-none"
        >
          <IconMenuDeep color="white" size={32} />
        </SheetTrigger>

        <SheetContent className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 border-none">
          <SheetHeader>
            <img
              src={logopplk_white}
              alt="logopplk_white"
              className="w-32 h-32 -ml-3"
            />
          </SheetHeader>

          <div className="font-tinos flex flex-col pl-2 mt-5">
            <Accordion type="single" collapsible className="w-full">
              <Link
                href="/"
                className={`text-[18px] font-bold text-white transition duration-200 ease-in focus:border-none focus:outline-none ring-0 focus:ring-0 border-none outline-none`}
              >
                Beranda
              </Link>

              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={`text-[18px] font-bold text-white transition duration-200 ease-in focus:border-none focus:outline-none ring-0 focus:ring-0 border-none outline-none`}
                >
                  Informasi
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {InformasiDropDown.map((item, index) =>
                      item ? (
                        <Link
                          key={index}
                          href={item.href}
                          className={`ml-2 text-[18px] font-bold text-white transition duration-200 ease-in`}
                        >
                          {item.title}
                        </Link>
                      ) : null
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="-mt-4 border-none">
                <AccordionTrigger
                  className={`text-[18px] font-bold text-white transition duration-200 ease-in focus:border-none focus:outline-none ring-0 focus:ring-0 border-none outline-none`}
                >
                  Mahasiswa Baru
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {MabaDropDown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`ml-2 text-[18px] font-bold text-white transition duration-200 ease-in`}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <a
                      href="https://drive.google.com/drive/folders/1jsJHZSWUynxDs1P_URlCwz2l1um6voUf?usp=sharing"
                      target="_blank"
                      className={`ml-2 text-[18px] font-bold text-white transition duration-200 ease-in`}
                    >
                      Panduan Penggunaan
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <Link
                href="/faq"
                className={`text-[18px] font-bold text-white transition duration-200 ease-in focus:border-none focus:outline-none ring-0 focus:ring-0 border-none outline-none`}
              >
                FAQ
              </Link>
            </Accordion>
          </div>

          <SheetFooter className="mt-52">
            <div className="flex flex-col">
              {auth.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`flex items-center justify-start border-none outline-none transition-all focus:border-none focus:outline-none focus:ring-0 p-1 rounded-full border w-full duration-300 ease-in-out`}
                  >
                    <div
                      className={`${isScrolled || isSolid ? "bg-jaffa-600" : "bg-jaffa-400"} p-2 -ml-1 w-fit rounded-md flex gap-2`}
                    >
                      <IconUserCircle
                        size={28}
                        color="white"
                        className="place-items-end"
                      />
                      <p className="font-semibold text-white">
                        {auth.user.name}
                      </p>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className={`${isScrolled || isSolid ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-jaffa-100"} border-none outline-none`}
                    align="start"
                  >
                    {UserDropdown.filter((item) => {
                      return (
                        auth.user.role_id !== 1 || item.title !== "Dashboard"
                      );
                    }).map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className={`${isScrolled || isSolid ? "focus:bg-jaffa-600" : "focus:bg-jaffa-200"} w-full transition-all duration-300 ease-in-out`}
                      >
                        <Link
                          href={item.href}
                          className={`mx-2 flex w-full items-center justify-start gap-3 px-[2px] py-[4px] text-[14px] font-semibold font-montserrat ${isScrolled || isSolid ? "text-white" : "text-black"} transition-all duration-200 ease-in`}
                        >
                          <span
                            className={`${isScrolled || isSolid ? "bg-jaffa-500" : "bg-jaffa-300"} p-1 rounded-md`}
                          >
                            {item.icon}
                          </span>
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuItem
                      className={`${isScrolled || isSolid ? "focus:bg-jaffa-600" : "focus:bg-jaffa-200"} w-full transition-all duration-300 ease-in-out`}
                    >
                      <Link
                        href={route("logout")}
                        method="post"
                        className={`mx-2 flex w-full items-center justify-start gap-3 px-[2px] py-[4px] text-[14px] font-semibold font-montserrat ${isScrolled || isSolid ? "text-white" : "text-black"} transition-all duration-200 ease-in`}
                      >
                        <span
                          className={`${isScrolled || isSolid ? "bg-jaffa-500" : "bg-jaffa-300"} p-1 rounded-md`}
                        >
                          <IconLogout color="#fcedd8" />
                        </span>
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={route("login")}
                  className={`mx-2 rounded-[6px] px-4 py-[10px] font-montserrat text-[16px] font-semibold  shadow-sm bg-white text-jaffa-950`}
                >
                  Login
                </Link>
              )}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
