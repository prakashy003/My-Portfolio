export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", marginTop: "32px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#6b7280",
          fontSize: ".95rem",
        }}
      >
        <span>© {new Date().getFullYear()} Prakash Yuvaraj</span>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf">Resume</a>
        </div>
      </div>
    </footer>
  );
}
