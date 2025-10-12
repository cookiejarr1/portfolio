import { SocialLink } from "@/app/data/socials";

export default function Socials({
  socialsLinks,
}: {
  socialsLinks: SocialLink[];
}) {
  return (
    <nav className="flex items-center space-x-4">
      {socialsLinks.map((social) => (
        <a
          key={social.link}
          href={social.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground transition-colors px-2 py-1"
          aria-label={social.name ?? "Link Name"}
        >
          <social.icon size={20} />
        </a>
      ))}
    </nav>
  );
}
