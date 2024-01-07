import Link from "next/link";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <SocialIcons />
        <p>
          Designed in{" "}
          <Link
            href="https://www.adobe.com/ph_en/products/photoshop.html"
            target="_blank"
          >
            Photoshop
          </Link>{" "}
          and coded in{" "}
          <Link href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code
          </Link>{" "}
          by yours truly. Built with{" "}
          <Link href="https://www.nextjs.org" target="_blank">
            Next.js
          </Link>{" "}
          and deployed with{" "}
          <Link href="https://www.vercel.com" target="_blank">
            Vercel
          </Link>
          . 3D typography is created in{" "}
          <Link href="https://www.maxon.net/en/cinema-4d" target="_blank">
            Cinema 4D
          </Link>{" "}
          and rendered with{" "}
          <Link
            href="https://home.otoy.com/render/octane-render/"
            target="_blank"
          >
            Octane
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
