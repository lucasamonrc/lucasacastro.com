import { NavLink } from "react-router";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <img
        src="/me.jpg"
        alt="A picture of me (Lucas)"
        className="w-32 h-32 rounded-lg shadow-sm float-start mr-6 !my-0"
      />
      <p className="mt-0">Hello, there! I'm Lucas.</p>
      <p>
        I work as software engineer at{" "}
        <a href="https://www.cloudflare.com">Cloudflare</a>. Previously I was a
        founding engineer at <a href="https://trinsic.id">Trinsic</a>, and
        before that I was attending school at <a href="https://byu.edu">BYU</a>{" "}
        in Provo, UT.
      </p>
      <p>
        I like to <NavLink to="/writing">write</NavLink> every now and then, and
        about once a year I give a <NavLink to="/talks">talk</NavLink> at a
        developer conference or local meetup.
      </p>
      <p>
        You can find me on <a href="https://github.com/lucasamonrc">GitHub</a>,
        and <a href="https://www.linkedin.com/in/lucasamonrc">LinkedIn</a>.
      </p>
      <h3>Contact</h3>
      <p>
        I enjoy meeting new people! You're always welcome to send me an email at{" "}
        <a href="mailto:hello@lucasacastro.com">hello@lucasacastro.com</a>. I
        like chatting about programming, games, parenthood, and religion. If you
        want to talk about something else, that's fine too!
      </p>
    </>
  );
}
