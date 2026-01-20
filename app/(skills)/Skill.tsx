"use client";
import Image from "next/image";
import UnknownCookie from "@/app/assets/icons/unknown-cookie.png";

export default function Skill({ skill }: { name: string; link: string }) {
  return (
    <div
      className="
      bg-transparent border border-transparent px-12 py-6 rounded-lg flex-shrink-0 cursor-pointer group
    hover:border-slate-300 hover:border hover:shadow-sm hover:bg-slate-200 
    hover:dark:border-sky-700 dark:bg-slate-700
      "
    >
      <span className="flex flex-col gap-2 items-center justify-center group-hover:scale-110 transition ease-in-out delay-50 duration-300">
        {skill.link ? (
          <Image
            src={skill.link}
            alt={skill.name}
            width={60}
            height={60}
            className="bg-white bg-clip-text object-contain block"
            loading="lazy"
            onError={(e) => {
              // fallback to unknown-cookie.png if image fails to load
              e.target.src = UnknownCookie;
            }}
          />
        ) : (
          <Image
            src={UnknownCookie}
            alt={skill.name}
            width={60}
            height={60}
            style={{ objectFit: "contain", display: "block" }}
            loading="lazy"
          />
        )}
        <span className="text-base font-medium break-normal whitespace-pre-line min-w-fit text-center text-slate-800 dark:text-foreground">
          {skill.name}
        </span>
      </span>
    </div>
  );
}
