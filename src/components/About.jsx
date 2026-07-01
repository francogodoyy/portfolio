import AboutBlock from "./AboutBlock";
import SkillsBlock from "./SkillsBlock";
import TimelineBlock from "./TimelineBlock";

export default function About() {
  return (
    <section id="about" style={{ borderTop: "1px solid var(--border)" }}>
      <AboutBlock />
      <SkillsBlock />
      <TimelineBlock />
    </section>
  );
}