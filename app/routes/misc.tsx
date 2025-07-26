import type { Route } from "./+types/misc";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Misc | Lucas Castro" },
    {
      name: "description",
      content:
        "Sometimes I write something that's not an essay, or add a document that I just need to share. You can find that here along with some other random artifacts such as git configuration, dotfiles, and more.",
    },
  ];
}

export default function Misc() {
  return (
    <>
      <h2>Miscellaneous</h2>
      <p>
        Sometimes I write something that's not an essay, or add a document that
        I just need to share. You can find that here along with some other
        random artifacts such as git configuration, dotfiles, and more.
      </p>
      <ul>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/terminal-setup.md">
            My Terminal Setup
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/.gitconfig">
            My .gitconfig
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/.ghostty.config">
            My ghostty config
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/vscode.settings.json">
            My VSCode Settings
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/dsa-tips.md">
            Tips for Coding Problems and Interviews
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasamonrc/content/blob/main/misc/llms-to-learn.md">
            Using LLMs to Learn a New Programming Language
          </a>
        </li>
      </ul>
    </>
  );
}
