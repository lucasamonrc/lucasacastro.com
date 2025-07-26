import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { NavigationSide, NavigationTop } from "./components/navigation";
import Footer from "./components/footer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦫</text></svg>",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://lucasacastro.com/" />
        <meta property="og:title" content="Lucas Castro" />
        <meta
          property="og:description"
          content="Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry."
        />
        <meta property="og:image" content="/meta-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://lucasacastro.com/" />
        <meta property="twitter:title" content="Lucas Castro" />
        <meta
          property="twitter:description"
          content="Hello, there! I'm Lucas. Welcome to my personal website. You can learn more about me, my work, and the things I care about here. I talk about programming, careers, and the tech industry."
        />
        <meta property="twitter:image" content="/meta-image.png" />
        1
        <Links />
      </head>
      <body className="max-w-5xl mx-auto w-full p-4">
        <NavigationTop />
        <div className="sm:mt-20 sm:flex space-x-8 divide-x divide-neutral-300 items-start">
          <NavigationSide />
          <main className="w-full sm:w-2/3 prose">{children}</main>
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
