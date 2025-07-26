import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work | Lucas Castro" },
    {
      name: "description",
      content:
        "Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry.",
    },
  ];
}

export default function Work() {
  return (
    <>
      <h2>Work</h2>
      <p>
        I do my best work in fast-paced, cross-functional teams, and I like to
        own my projects end-to-end—design, implementation, and release.
      </p>

      <p>
        While the majority of my experience is in product engineering, I'm
        always happy to work with infrastructure and platform. I'm very
        comfortable with TypeScript, C#, Go, web servers, databases, queues, and
        distributed systems.
      </p>

      <p>
        I work as a software engineer at{" "}
        <a href="https://www.cloudflare.com">Cloudflare</a> on the Business
        Intelligence team. We're responsible for building and maintaining
        Cloudflare's internal data platform. We steward the company's vast
        datasets and partner with teams across the organization to support their
        data needs.
      </p>
      <p>
        Right now, I'm working on improving our research and connectivity
        platform to help our go-to-market teams obtain actionable insights
        during prospect research.
      </p>
      <p>
        Previously, I was one of <a href="https://www.trinsic.id">Trinsic's</a>{" "}
        founding engineers. Trinsic is on a crusade against document scans in
        online identity verification, and their platform helps businesses verify
        users more securely and quickly by connecting them to digital IDs.
      </p>
      <p>
        Before that, I was a attending school at{" "}
        <a href="https://byu.edu">BYU</a>, and I graduated with a degree in
        Computer Science in 2023. During that time I took on several programming
        part-time jobs and internships, most notably at{" "}
        <a href="https://www.pluralsight.com">Pluralsight</a> and{" "}
        <a href="https://utahcounty.gov">Utah County Government</a>
      </p>
      <p>Here's where I've worked:</p>
      <ul>
        <WorkEntry
          position="Systems Engineer"
          company="Cloudflare"
          companyUrl="https://www.cloudflare.com"
          range="jul 2025-present"
        />
        <WorkEntry
          position="Founding Engineer"
          company="Trinsic"
          companyUrl="https://trinsic.id"
          range="feb 2023-jul 2025"
        />
        <WorkEntry
          position="Engineering Intern"
          company="Pluralsight"
          companyUrl="https://www.pluralsight.com"
          range="may 2022-aug 2022"
        />
        <WorkEntry
          position="Programmer"
          company="Utah County Gov."
          companyUrl="https://utahcounty.gov"
          range="jun 2020-aug 2021"
        />
      </ul>
    </>
  );
}

interface WorkEntryProps {
  position: string;
  company: string;
  companyUrl: string;
  range: string;
}

function WorkEntry({ position, company, companyUrl, range }: WorkEntryProps) {
  return (
    <li>
      <strong>{position}</strong> at <a href={companyUrl}>{company}</a>{" "}
      <span className="font-light text-sm">({range})</span>
    </li>
  );
}
