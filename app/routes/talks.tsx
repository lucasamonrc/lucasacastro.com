import type { Route } from "./+types/talks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Talks | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. Talks is a collection of presentations and talks I've given on various topics.",
    },
  ];
}

export default function Talks() {
  return (
    <>
      <h3>Talks</h3>
    </>
  );
}
