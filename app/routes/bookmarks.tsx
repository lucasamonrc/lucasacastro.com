import type { Route } from "./+types/bookmarks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bookmarks | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry.",
    },
  ];
}

export default function Bookmarks() {
  return (
    <>
      <h2>Bookmarks</h2>
      <p>
        I consume a lot of content, way more than I'd like to admit actually. I
        read a ton of books and articles, watch way too many videos, and listen
        to a lot of different talks and podcasts. So every week I try to collect
        some of the most interesting stuff I found, add some brief thoughts, and
        share it with you.
      </p>
      {/* <p>Here are the lastest 10 issues:</p> */}
      <ul className="p-0"></ul>
    </>
  );
}
