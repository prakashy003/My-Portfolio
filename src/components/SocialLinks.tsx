export default function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", marginTop: "12px" }}>
      {/* replace with your real links */}
      <a href="mailto:you@example.com" aria-label="Email">✉️</a>
      <a href="https://leetcode.com/your-handle" target="_blank" rel="noreferrer" aria-label="LeetCode">👨‍💻</a>
      <a href="https://github.com/your-github" target="_blank" rel="noreferrer" aria-label="GitHub">🐙</a>
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
    </div>
  );
}
