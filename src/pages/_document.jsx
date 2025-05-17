import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Hersaheli – Empowering Women Everywhere</title>
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* Basic Meta */}
        <meta name="description" content="Hersaheli – Empowering Women Everywhere" />

        {/* Open Graph */}
        <meta property="og:title" content="Hersaheli – Empowering Women Everywhere" />
        <meta property="og:description" content="Platform connecting undergraduate women graduates with remote job opportunities — built for Becrez Hackathon'25." />
        <meta property="og:image" content="https://hersaheli.vercel.app/og-image.png" />
        <meta property="og:url" content="https://hersaheli.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hersaheli" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hersaheli – Empowering Women Everywhere" />
        <meta name="twitter:description" content="Platform connecting undergraduate women graduates with remote job opportunities — built for Becrez Hackathon'25." />
        <meta name="twitter:image" content="https://hersaheli.vercel.app/og-image.png" />
        <meta name="twitter:creator" content="@hersaheli" />
      </Head>
      <body className="bg-white text-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
