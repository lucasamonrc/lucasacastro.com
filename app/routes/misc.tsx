import type { Route } from "./+types/misc";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Misc | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. Miscellaneous is a collection of loose links and posts I authored, includes my setup and some other stuff.",
    },
  ];
}

export default function Misc() {
  return (
    <>
      <h3>Miscellaneous</h3>
    </>
  );
}
