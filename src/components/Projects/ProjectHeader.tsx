"use client";

interface ProjectHeaderProps {
  title?: string;
  children?: React.ReactElement;
}

export default function ProjectHeader({ title, children }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-12 pb-4 md:gap-10 md:pb-8">
      {children}
      <h1 className="text-center text-3xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
