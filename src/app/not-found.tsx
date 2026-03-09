import Header from "@/src/components/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
  description:
    "The page you are looking for might have been moved or no longer exists.",
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="flex h-[90vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-5xl font-bold">404 - Error</h1>

        <p className="text-sm leading-snug text-blue-300/70">
          The page you are looking for no longer exists.
        </p>

        <Link
          href="/"
          className="group flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back Home
        </Link>
      </section>
    </>
  );
}
