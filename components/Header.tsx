"use client";

import HeaderLinks from "@/components/HeaderLinks";
import { icons } from "@/utils/icons";
import { MenuContext } from "@/utils/menuContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga4";

type HeaderProps = {
  hidemenu?: boolean;
  fixed?: boolean;
};

const Header = ({ hidemenu = false, fixed = false }: HeaderProps) => {
  const ctxMenu = useContext(MenuContext);

  // ReactGA.initialize("UA-47603859-1");

  // useEffect(() => {
  //   // Send pageview with a custom path
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: window.location.pathname,
  //     title: `Grant Imbo`,
  //   });
  // }, [router?.pathname]);

  const renderIcon = () => {
    if (!ctxMenu?.projectLinksMenu) {
      return icons.menu;
    } else {
      return icons.close;
    }
  };

  return (
    <header
      className={`${
        fixed == true ? `fixed left-0 right-0 top-0 z-10` : "relative"
      }  flex h-[60px] justify-between border-b-2 border-eggblue/10 bg-blue px-5 md:pr-10`}
    >
      <div className="flex items-center gap-1">
        {!hidemenu && (
          <div
            className="cursor-pointer select-none md:hidden"
            onClick={() =>
              ctxMenu?.setProjectLinksMenu(!ctxMenu?.projectLinksMenu)
            }
          >
            {renderIcon()}
          </div>
        )}
        <Link href="/">
          <div className=" pl-2 text-2xl font-semibold text-white hover:text-eggblue sm:block">
            Grant Imbo
          </div>
        </Link>
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
