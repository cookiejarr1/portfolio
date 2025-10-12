import Image from "next/image";
import UnknownCookie from "@/app/assets/icons/unknown-cookie.png";

export default function SkillsCard({ skill }) {
  return (
    <div className="bg-transparent border border-transparent dark:hover:border-slate-500 hover:border-slate-300 hover:border hover:shadow-sm dark:bg-slate-700 dark:text-white px-12 py-6 rounded-lg flex-shrink-0">
      <span className="flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300">
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
        <span className="text-base font-medium break-normal whitespace-pre-line min-w-fit text-center">
          {skill.name}
        </span>
      </span>
    </div>
  );
}
