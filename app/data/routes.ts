export interface Route {
  name: string,
  href: string
}

export const routeLinks: Route[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];