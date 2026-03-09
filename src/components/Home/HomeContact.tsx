import { Suspense } from "react";
import Image from "next/image";
import contactImage from "@/public/imgs/contact.png";
import { shimmer, toBase64 } from "@/src/utils/BlurData";
import ContactForm from "../Contact/ContactForm";

export default async function HomeContactForm() {
  return (
    <section className="faded bg-drkblue relative px-4 py-40 pb-50">
      <header className="relative z-10 mx-auto mb-2 w-full max-w-[560px] md:mb-6">
        <Image
          alt="Experience"
          src={contactImage}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(750, 289))}`}
          quality={100}
          width={750}
          height={289}
          className="w-full object-contain"
        />
      </header>
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
