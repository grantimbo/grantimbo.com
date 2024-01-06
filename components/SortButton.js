import Link from "next/link";
import { useRouter } from "next/router";

const SortButton = (btn) => {
  const router = useRouter();
  return (
    <Link
      href={`/projects?tag=${btn?.name}`}
      className={router.query.tag === btn?.name ? "menu active" : "menu"}
    >
      <span class="material-symbols-rounded">{btn?.icon}</span>
      {btn?.title}
    </Link>
  );
};

export default SortButton;
