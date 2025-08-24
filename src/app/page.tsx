import styles from "@/styles/Page.module.css";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section id="top" className={styles.section}>
        <h1>hi, i’m prakash yuvaraj 👋</h1>
        <p>aspiring full-stack engineer..</p>
        <SocialLinks />
      </section>

      <section id="about" className={styles.section}>
        <h2>about</h2>
        <p>short intro about me…</p>
      </section>

      <section id="experience" className={styles.section}>
        <h2>experience</h2>
        <ul>
          <li><strong>role @ company</strong> — description</li>
        </ul>
      </section>

      <section id="projects" className={styles.section}>
        <h2>projects</h2>
        <p>placeholder for projects</p>
      </section>

      <section id="education" className={styles.section}>
        <h2>education</h2>
        <p>concordia university — master’s (example)</p>
      </section>

      <section id="skills" className={styles.section}>
        <h2>skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
          {["React","Next.js","TypeScript","CSS","Node.js"].map(s => (
            <span key={s} className={styles.badge}>{s}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
