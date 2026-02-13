import { useState, useEffect, useRef } from "react";
import Head from "next/head";

const THEMES = [
  { bg: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)", text: "#831843" },
  { bg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)", text: "#581c87" },
  { bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)", text: "#0c4a6e" },
  { bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)", text: "#78350f" },
  { bg: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)", text: "#881337" },
  { bg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", text: "#3b0764" },
];

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const cycleColor = useRef(() => setColorIndex((i) => (i + 1) % THEMES.length));
  cycleColor.current = () => setColorIndex((i) => (i + 1) % THEMES.length);

  useEffect(() => {
    document.body.style.transition = "background 2s ease, color 2s ease";
    document.body.style.background = THEMES[colorIndex].bg;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.color = THEMES[colorIndex].text;
  }, [colorIndex]);

  useEffect(() => {
    const timer = setTimeout(() => cycleColor.current(), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a")) return;
      cycleColor.current();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
    <Head>
      <title>Muskan Rastogi</title>
    </Head>
    <div style={{ maxWidth: "650px", margin: "0 auto", padding: "6rem 1.5rem 3rem" }} className="paper-ruled page-enter">

        <header className="mb-10">
          <h1 className="font-bold lowercase cursor-blink" style={{ fontSize: "2rem", lineHeight: "1.6rem" }}>
            muskan rastogi
          </h1>
          <p className="lowercase mt-1" style={{ fontSize: "1.1rem", opacity: 0.6 }}>
            product · design · building things that matter
          </p>
        </header>

        <section className="mb-10">
          <p className="leading-relaxed lowercase" style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}>
            hey, i&apos;m a product-minded person who likes turning ideas into
            clear, usable experiences. i care about craft, clarity, and impact.
            currently researching at tuck school of business, dartmouth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-bold lowercase mb-4" style={{ fontSize: "1.3rem", lineHeight: "1.6rem" }}>
            past experiences:
          </h2>
          <ul className="list-disc pl-6 space-y-3 lowercase" style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}>
            <li>
              <a href="https://www.linkedin.com/company/socialtheorytechnology/" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>socialtheory</strong></a>: pm intern - piloted an emotion detection agent helping clinicians better understand their patients.
            </li>
            <li>
              <a href="https://affinsys.com/" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>affinsys ai</strong></a>: product engineer - built digital wallets and low-code botbuilder for fintech. 
            </li>
            <li>
              <a href="https://github.com/vamsatech" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>vamsa pvt ltd</strong></a>: co-founder - of a student event platform for college hackathons.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-bold lowercase mb-4" style={{ fontSize: "1.3rem", lineHeight: "1.6rem" }}>
            past projects:
          </h2>
          <ul className="list-disc pl-6 space-y-3 lowercase" style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}>
            <li>
              <a href="https://v0-daily-todos.vercel.app/" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>daily todos</strong></a>: v0 app for maintaining my daily todos.
            </li>
            <li>
              <a href="https://github.com/muskanrastogi1/mavis_tire" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>ai agent</strong></a>: built a conversational agent for tires (client project).
            </li>
            <li>
              <a href="https://www.canva.com/design/DAG4blpZ0Yo/wMjtxYhn-A2XmvIHptNETw/edit" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>a2a platform</strong></a>: developed an a2a protoype for e-commerce workflows (client project).
            </li>
            <li>
              <a href="https://github.com/muskanrastogi1/LastMinutePPT" target="_blank" rel="noopener noreferrer"><strong style={{ textDecoration: "underline", fontStyle: "italic", color: "#e11d48" }}>last minute ppt</strong></a>: built a last-minute pitch deck using AI voice-to-slide tools (gamma in the 2020s).
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-bold lowercase mb-4" style={{ fontSize: "1.3rem", lineHeight: "1.6rem" }}>
            experience &amp; skills:
          </h2>
          <p className="leading-relaxed lowercase" style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}>
            pm, research, writing, collaboration. tools: figma, notion,
            spreadsheets, whatever gets the job done.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-bold lowercase mb-4" style={{ fontSize: "1.3rem", lineHeight: "1.6rem" }}>
            contact me:
          </h2>
          <ul className="list-none space-y-2 lowercase" style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}>
            <li><a href="mailto:muskanrastogi1730@gmail.com" className="underline hover:no-underline" style={{ color: "#e11d48" }}>muskanrastogi1730@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/muskanrastogi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "#e11d48" }}>linkedin</a></li>
            <li><a href="https://github.com/muskanrastogi1" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "#e11d48" }}>github</a></li>
            <li><a href="https://muskanrastogi.substack.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "#e11d48" }}>substack</a></li>
          </ul>
        </section>

        <footer className="mt-16 pt-6 lowercase" style={{ fontSize: "0.95rem", opacity: 0.5, borderTop: "1px solid currentColor", textAlign: "center" }}>
          built with love <span style={{ color: "#e11d48", opacity: 1 }}>&#10084;&#65039;</span>
        </footer>

    </div>
    </>
  );
}
