export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href === "/#what-we-do") {
    return pathname.startsWith("/services");
  }
  if (href.startsWith("/#")) return false;
  if (href === "/about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
