export type Page = "home" | "hikes" | "destinations" | "cabins" | "about"

export const pageLinks: Array<{ page: Page; label: string; path: string }> = [
  { page: "home", label: "Hjem", path: "/" },
  { page: "hikes", label: "Turer", path: "/turer" },
  { page: "destinations", label: "Turmål", path: "/turmal" },
  { page: "cabins", label: "Hytter", path: "/hytter" },
  { page: "about", label: "Om TiU", path: "/om" },
]
