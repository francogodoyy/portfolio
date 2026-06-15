import Head from "next/head";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Navbar />
      <ScrollToTop />
      <main className="relative min-h-screen">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
