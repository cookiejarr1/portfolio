import { Route } from "@/app/data/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageRoutes({ routes }: { routes: Route[] }) {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <div className="flex flex-col space-y-2 space-x-4 md:flex-row md:space-y-0">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`px-4 py-2 rounded-md text-sm font-medium dark:font-bold transition-colors ${
            isActive(route.href)
              ? "text-foreground dark:text-sky-600 hover:text-foreground"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}
