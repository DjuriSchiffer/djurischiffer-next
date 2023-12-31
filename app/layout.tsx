import "./globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: "Djuri Schiffer - Next",
  description: "Generated by Djuri Fucking Schiffer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body className="dark">
        <Header />
        {children}

        <footer>
          <nav>
            <li>test</li>
          </nav>
        </footer>
      </body>
    </html>
  );
}
