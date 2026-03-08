"use client";

interface ProjectHeaderProps {
  title?: string;
  children?: React.ReactElement;
}

export default function ProjectHeader({ title, children }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-12 pb-8">
      {children}
      <h1 className="text-center text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
