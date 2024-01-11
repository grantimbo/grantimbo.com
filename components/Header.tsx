"use client";

import HeaderLinks from "@/components/HeaderLinks";
import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import { HeaderProps } from "@/utils/types";
import Link from "next/link";
import { useContext } from "react";

const Header = ({ hidemenu = false, fixed = false }: HeaderProps) => {
  const ctx = useContext(ProjectContext);

  const renderIcon = () => {
    if (!ctx?.projectLinksMenu) {
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
            onClick={() => ctx?.setProjectLinksMenu(!ctx?.projectLinksMenu)}
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
