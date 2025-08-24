import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#top" className={styles.logo}>prakash.dev</Link>
        <nav className={styles.nav}>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#education">education</a>
          <a href="#skills">skills</a>
        </nav>
      </div>
    </header>
  );
}
