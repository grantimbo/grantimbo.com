import HeaderLinks from "@/src/components/HeaderLinks";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        className={`bg-drkblue/30 fixed top-0 z-20 flex h-15 w-full justify-between border-b-2 border-blue-600/10 pr-4 pl-2 backdrop-blur-md md:pr-10`}
      >
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="hover:text-eggblue pl-2 text-2xl font-semibold text-white no-underline transition-colors sm:block"
          >
            Grant Imbo
          </Link>
        </div>
        <HeaderLinks />
      </header>
      <div className="h-15 w-full" />
    </>
  );
};

export default Header;
