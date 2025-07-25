import type { Route } from "./+types/writing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing | Lucas Castro" },
    {
      name: "description",
      content: "Hello, there! I'm Lucas. Welcome to my personal website.",
    },
  ];
}

export default function Writing() {
  return (
    <>
      <h3>Writing</h3>
    </>
  );
}
