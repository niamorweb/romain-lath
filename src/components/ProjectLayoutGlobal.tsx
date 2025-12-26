import React from "react";

export default function ProjectLayoutGlobal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-6 md:gap-10 px-6 lg:px-24 py-4 lg:py-12 font-sans pb-12">
      <div className="flex flex-col gap-6 md:gap-10 w-full max-w-[1240px] mx-auto">
        {children}
      </div>
    </div>
  );
}
