export default function ModalDate({ date }: { date: string }) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const year = d.getFullYear();

  return (
    <div className="inline-block rounded-md border border-eggblue/20 bg-eggblue/10 px-2 py-1 text-[0.8rem] text-eggblue/50 md:text-xs">
      <span className=" text-eggblue/80">Date Publised : </span>
      {month} {year}
    </div>
  );
}
