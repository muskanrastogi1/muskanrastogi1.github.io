import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="Muskan Rastogi — product, design, and building things that matter." />
        <meta property="og:title" content="Muskan Rastogi" />
        <meta property="og:description" content="Product, design, and building things that matter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muskanrastogi1.github.io/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Muskan Rastogi" />
        <meta name="twitter:description" content="Product, design, and building things that matter." />
      </Head>
      <body className="min-h-screen antialiased" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)", transition: "background 2s ease, color 2s ease" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
