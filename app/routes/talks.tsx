import type { Route } from "./+types/talks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Talks | Lucas Castro" },
    {
      name: "description",
      content:
        "I like to engage with the dev community thorugh talks and presentation. It is also a good way to share things I've learned and meet new people, so I try to give a talk or two every year. Here's a list of some of the talks I've given:",
    },
  ];
}

export default function Talks() {
  return (
    <>
      <h2>Talks</h2>
      <p>
        I like to engage with the dev community thorugh talks and presentations.
        It is also a good way to share things I've learned and meet new people,
        so I try to give a talk or two every year. Here's a list of some of the
        talks I've given:
      </p>
      <ul className="p-0">
        <Talk
          date="Mar. 5, 2025"
          title="Auth 101"
          videoUrl="https://www.youtube.com/watch?v=Z8iFDkBRfWI"
          notesUrl="https://github.com/lucasamonrc/content/blob/main/essays/2025-03-07-auth-101/README.md"
        />
        <Talk
          date="Sep. 13, 2024"
          title="Getting Started with Passkeys and WebAuthn"
          videoUrl="https://www.youtube.com/watch?v=sSxibbZ3GL4"
          slidesUrl="https://slides.com/lucasamonrc/deck-1683a2/scroll"
        />
        <Talk
          date="Sep. 15, 2023"
          title="Using LLMs to Learn a New Programming Language"
          videoUrl="https://www.youtube.com/watch?v=BKbXrQ0z-FY"
          notesUrl="https://github.com/lucasamonrc/content/blob/main/misc/llms-to-learn.md"
        />
      </ul>
    </>
  );
}

interface TalkProps {
  date: string;
  title: string;
  videoUrl: string;
  notesUrl?: string;
  slidesUrl?: string;
}

function Talk({ date, title, videoUrl, notesUrl, slidesUrl }: TalkProps) {
  return (
    <li className="flex justify-between items-center space-x-4">
      <span className="font-light text-secondary w-1/4">{date}</span>
      <a href={videoUrl} className="w-1/2">
        {title}
      </a>
      {notesUrl && (
        <a href={notesUrl} className="text-sm font-normal w-1/4">
          Notes
        </a>
      )}
      {slidesUrl && (
        <a href={slidesUrl} className="text-sm font-normal w-1/4">
          Slides
        </a>
      )}
    </li>
  );
}
