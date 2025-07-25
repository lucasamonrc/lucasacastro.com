import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work | Lucas Castro" },
    {
      name: "description",
      content: "Hello, there! I'm Lucas. Welcome to my personal website.",
    },
  ];
}

export default function Work() {
  return (
    <>
      <h3>Work</h3>
    </>
  );
}
