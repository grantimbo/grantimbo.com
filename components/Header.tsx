"use client";

import HeaderLinks from "@/components/HeaderLinks";
import { icons } from "@/utils/icons";
import { ProjectContext } from "@/utils/projectContext";
import { siteConfig } from "@/utils/siteConfig";
import { HeaderProps } from "@/utils/types";
import Link from "next/link";
import { useContext } from "react";
import ReactGA from "react-ga4";

const Header = ({ hidemenu = false, fixed = false }: HeaderProps) => {
  siteConfig.enableAnalytics && ReactGA.initialize("G-40N9DDPQQT");

  const ctx = useContext(ProjectContext);

  const renderIcon = () => {
    return !ctx?.projectLinksMenu ? icons.menu : icons.close;
  };

  return (
    <header
      className={`${
        fixed ? `fixed left-0 right-0 top-0 z-10` : "relative"
      }  flex h-[60px] justify-between border-b-2 border-eggblue/10 bg-blue pl-2 pr-4 md:pr-10`}
    >
      <div className="flex items-center gap-1">
        {!hidemenu && (
          <div
            className="cursor-pointer select-none p-2 md:hidden"
            onClick={() => ctx?.setProjectLinksMenu(!ctx?.projectLinksMenu)}
          >
            {renderIcon()}
          </div>
        )}
        <Link
          href="/"
          className="pl-2 text-lg font-medium text-white !no-underline hover:text-eggblue  sm:block sm:text-2xl sm:font-semibold"
        >
          Grant Imbo
        </Link>
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
