import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  parentPage?: string;
  parentPageLink?: string;
  parentPage2?: string;
  parentPageLink2?: string;
  currentPage: string;
}

export default function Breadcrumbs({
  parentPage,
  parentPageLink,
  parentPage2,
  parentPageLink2,
  currentPage,
}: BreadcrumbsProps) {
  return (
    <nav className="md:text-md flex items-center gap-2 text-xs font-medium">
      {/* Home */}
      <Link
        href="/"
        className="whitespace-nowrap text-blue-300 transition-colors hover:text-blue-700"
      >
        Home
      </Link>

      <ChevronRight
        className="h-4 w-4 shrink-0 text-blue-400/70"
        strokeWidth={2}
      />

      {/* Parent Page (e.g., Gallery or Players) */}
      {parentPage && parentPageLink && (
        <>
          <Link
            href={parentPageLink as string}
            className="whitespace-nowrap text-blue-300 transition-colors hover:text-blue-700"
          >
            {parentPage}
          </Link>

          <ChevronRight
            className="h-4 w-4 shrink-0 text-blue-400/70"
            strokeWidth={2}
          />
        </>
      )}

      {/* Parent Page 2 (Second Level) */}
      {parentPage2 && parentPageLink2 && (
        <>
          <Link
            href={parentPageLink2 as string}
            className="whitespace-nowrap text-blue-300 transition-colors hover:text-blue-700"
          >
            {parentPage2}
          </Link>

          <ChevronRight
            className="h-4 w-4 shrink-0 text-blue-400/70"
            strokeWidth={2}
          />
        </>
      )}

      {/* Current Page - Bold & Pinned Left */}
      <span className="max-w-45 truncate font-bold text-white md:max-w-none">
        {currentPage}
      </span>
    </nav>
  );
}
