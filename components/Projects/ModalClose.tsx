import { icons } from "@/utils/icons";
import { siteConfig } from "@/utils/siteConfig";
import { useRouter } from "next/navigation";
import ReactGA from "react-ga4";

export default function ModalClose({ currentSlug }: { currentSlug: string }) {
  const router = useRouter();

  const backToProjectsPage = () => {
    siteConfig.enableAnalytics &&
      ReactGA.event({
        category: `Modal Close`,
        action: `Close (${currentSlug})`,
      });
    router.push(`/projects`);
  };

  return (
    <button
      onClick={backToProjectsPage}
      className="absolute right-[1rem] top-[0.5rem] flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-2 border-eggblue/30 bg-eggblue/30 hover:border-eggblue hover:bg-eggblue/50"
    >
      {icons.close}
    </button>
  );
}
