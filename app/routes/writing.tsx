import Post from "~/components/post";
import type { Route } from "./+types/writing";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry.",
    },
  ];
}

export default function Writing() {
  return (
    <>
      <h2>Writing</h2>
      <p>
        Every now and then I feel compelled to publish some of my thoughts. They
        can be about anything, really, but usually they are about my career,
        programming, or the industry.
      </p>

      <p>
        These posts don't have any regular cadence, they simply pop right out of
        my head whenever I feel like it is a thought worth sharing.
      </p>
      {/* <p className="italic">
        Since August 2025 I've been releasing a weekly series called{" "}
        <strong>Bookmarks</strong>. You can find it{" "}
        <NavLink to="/bookmarks">here</NavLink>.
      </p> */}
      <h3>Recent</h3>
      <ul className="p-0">
        <Post
          date="Mar. 7, 2025"
          title="Auth 101: A Survey of Auth Concepts, Practices, and Strategies"
          url="https://github.com/lucasamonrc/content/blob/main/essays/2025-03-07-auth-101/README.md"
        />
      </ul>
      <p>
        <a
          href="https://github.com/lucasamonrc/content/tree/main/essays"
          className="text-sm font-light"
        >
          View all →
        </a>
      </p>
    </>
  );
}
