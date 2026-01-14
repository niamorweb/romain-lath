import Image from "next/image";
import React, { useState } from "react";

interface projectSectionType {
  subtitle?: string;
  title: string;
  description: React.ReactNode;
  img?: string;
  imgArray?: any[];
  icon: React.ReactNode;
}

export default function ProjectSection({
  subtitle,
  title,
  description,
  img,
  imgArray,
  icon,
}: projectSectionType) {
  const [imgSelected, setImgSelected] = useState<number>(0);

  return (
    <section className="grid grid-cols-1 gap-10 items-center">
      <div className="flex flex-col gap-4 w-full max-w-[700px] mx-auto">
        {icon && (
          <div className="bg-white outline outline-1 outline-neutral-200 size-16 rounded-2xl flex items-center justify-center ">
            <span className=" text-neutral-600">{icon}</span>
          </div>
        )}
        <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
          {title}
        </h3>
        <div className="text-neutral-600 text-balance leading-relaxed">
          {description}
        </div>
      </div>
      {imgArray && (
        <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            {imgArray.map((item, i) => (
              <button
                key={i}
                onClick={() => setImgSelected(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  imgSelected === i
                    ? "bg-neutral-800 text-neutral-100 "
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {item.textBtn}
              </button>
            ))}
          </div>
          <div className="bg-neutral-50 rounded-xl p-2 border border-neutral-100">
            <Image
              src={imgArray[imgSelected].image}
              width={1200}
              height={700}
              alt="UX View"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      )}
      {img && (
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src={img}
            width={1200}
            height={700}
            alt="Main preview"
            className="rounded-xl w-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
