import { Suspense } from "react";
import Image from "next/image";
import contactImage from "@/public/imgs/contact.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import ContactForm from "../Contact/ContactForm";
import TitleParalax from "./TitleParalax";

export default async function HomeContactForm() {
  const layers = [
    {
      src: "/imgs/paralax-title/balls-sm.png",
      alt: "Balls background",
      depth: 0.2,
      zIndex: 1,
    },
    {
      src: "/imgs/paralax-title/balls-md.png",
      alt: "Balls mid",
      depth: 0.25,
      zIndex: 2,
    },
    {
      src: "/imgs/paralax-title/balls-lg.png",
      alt: "Balls foreground",
      depth: 0.4,
      zIndex: 3,
    },
    {
      src: "/imgs/paralax-title/contact.png",
      alt: "Creator Thinker",
      depth: 0.6,
      zIndex: 4,
    },
  ];

  return (
    <section
      className="relative px-4 py-20 pb-10 md:py-40 md:pb-50"
      id="contact"
    >
      <header className="z-10 mx-auto mb-2 w-full max-w-[700px] md:mb-6">
        <TitleParalax LAYERS={layers} />
      </header>
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
