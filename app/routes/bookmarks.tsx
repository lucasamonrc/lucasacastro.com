import type { Route } from "./+types/bookmarks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bookmarks | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. Bookmarks is my weekly list of interesting links, articles, and resources that I came across during the week.",
    },
  ];
}

export default function Bookmarks() {
  return (
    <>
      <h3>Bookmarks</h3>
    </>
  );
}
