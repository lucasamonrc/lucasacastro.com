interface PostProps {
  date: string;
  title: string;
  url: string;
}

export default function Post({ date, title, url }: PostProps) {
  return (
    <li className="flex items-center space-x-4">
      <span className="font-light text-secondary w-1/4">{date}</span>
      <a href={url}>{title}</a>
    </li>
  );
}
