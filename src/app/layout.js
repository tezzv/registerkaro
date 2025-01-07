import Navbar from "@/components/Navbar";

// src/app/layout.js
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js App</title>
        {/* Add other meta tags or links to stylesheets here */}
      </head>
      <body>
        <header>
          <Navbar />
          {/* Navbar or other layout components */}
        </header>
        <main>{children}</main>
        <footer>
          {/* <p>&copy; 2025 Company</p> */}
        </footer>
      </body>
    </html>
  );
}
