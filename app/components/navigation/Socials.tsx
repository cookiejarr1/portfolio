import { SocialLink } from "@/app/data/socials";

export default function Socials({ socialsLinks, isWithLabel = false }: { socialsLinks: SocialLink[], isWithLabel?: boolean  }) {
  return (
    <nav className="flex flex-wrap items-center gap-4">
      {socialsLinks.map((social) => (
        <a
          key={social.link}
          href={social.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground hover:scale-110 transition-colors px-2 py-1 pointer-events-auto flex items-center gap-2"
          aria-label={social.name ?? "Link Name"}
        >
          <social.icon size={20} />
          {isWithLabel && <span className="text-sm">{social.name}</span>}
        </a>
      ))}
    </nav>
  );
}
