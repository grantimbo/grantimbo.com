import HeaderLinks from "@/src/components/HeaderLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`bg-drkblue flex h-15 justify-between border-b-2 border-blue-600/20 pr-4 pl-2 md:pr-10`}
    >
      <div className="flex items-center gap-1">
        <Link
          href="/"
          className="pl-2 text-2xl font-semibold text-white no-underline transition-colors hover:text-blue-400/60 hover:text-blue-600 sm:block"
        >
          Grant Imbo
        </Link>
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
