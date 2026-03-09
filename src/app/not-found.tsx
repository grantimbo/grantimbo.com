import Header from "@/src/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description:
    "The page you are looking for might have been moved or no longer exists.",
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="flex h-[90vh] items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold">404 - Error</h1>
          <h3 className="mb-0 text-2xl font-medium text-blue-600">
            Page Not Found
          </h3>
          <p className="text-softgray leading-snug">
            The page you are looking for might have been moved or no longer
            exists.
          </p>
        </div>
      </section>
    </>
  );
}
