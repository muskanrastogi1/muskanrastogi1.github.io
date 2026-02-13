import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen antialiased" style={{ background: "linear-gradient(135deg, #e8e4dc 0%, #d4cfc4 100%)" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
