import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import HeroBlock from "../components/HeroBlock";

const About = dynamic(() => import("../components/About"), { ssr: false });
const Projects = dynamic(() => import("../components/Projects"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Index() {
  return (
    <>
      <Head>
        <title>Franco Godoy — Software Developer</title>
        <meta name="description" content="Fullstack Developer specializing in Next.js, React, Node.js. Open to freelance & full-time work." />
        <meta property="og:title" content="Franco Godoy — Software Developer" />
        <meta property="og:description" content="Fullstack Developer specializing in Next.js, React, Node.js. Open to freelance & full-time work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://francogodoy.dev" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Navbar />
      <ScrollToTop />
      <main className="relative min-h-screen">
        <HeroBlock />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}