"use client";

const projects = [
  {
    title: "StackOverflow Tag Recommendation",
    tags: "Natural Language Processing · Machine Learning",
    desc: "Built an NLP pipeline for automatic tag recommendation on StackOverflow questions using TF-IDF, word embeddings, and multi-label classification models.",
    href: "https://github.com/Ashfinnn/stackoverflow-tag-recommendation",
    type: "video" as const,
    poster: "https://framerusercontent.com/images/U2x1VERveHLImjvyW4YEcPI65MI.jpg?width=2700&height=2160",
    videoSrc: "https://framerusercontent.com/assets/ZwaNYg3Afj7hcOYzzkSTsZOIWOE_WGPx.mp4",
  },
  {
    title: "Tomato Disease Classification",
    tags: "Computer Vision / Edge AI · Deep Learning",
    desc: "Compared traditional CNNs, modern architectures, and hybrid models for tomato disease classification under CPU-constrained conditions. Under review, Springer.",
    href: "public/obidur_cv.pdf",
    type: "image" as const,
    img: "https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE_WGPx.webp",
  },
  {
    title: "JusticeLens",
    tags: "Social Impact / Web · Fullstack Development",
    desc: "A design tool that intelligently resurfaces saved resources at contextually relevant moments, helping designers build visual taste through pattern recognition.",
    href: "https://github.com/Ashfinnn/JusticeLens",
    type: "image" as const,
    img: "https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ_004_WGPx.webp",
  },
  {
    title: "Northaxis",
    tags: "Systems Engineering · AI Infrastructure",
    desc: "Researching and implementing AI features and creating multi-purpose AI agents to solve real-world problems across multiple product domains.",
    href: "https://northaxis.xyz",
    type: "image" as const,
    img: "https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0_WGPx.webp",
  },
];

const research = [
  { title: "CPU-Constrained Deep Learning for Tomato Disease Detection: Traditional, Modern, and Hybrid CNN Comparison", desc: "Under Review, Springer Book Proceedings." },
  { title: "Pathways from digital distractions and study habits to academic performance, exploring self-regulation as a mediator among Bangladeshi university students", desc: "Presented at SCRIS 2026." },
  { title: "Disentangling the determinants of non-metered fares in a developing port city (Chattogram)", desc: "Presented at SCRIS 2026." },
];

export function HomeClient() {
  const row1 = projects.slice(0, 2);
  const row2 = projects.slice(2, 4);

  return (
    <div className="ob-home">
      <section className="ob-hero">
        <div className="ob-hero-text">
          <h1 className="ob-hero-name">Obidur Rahman</h1>
          <h2 className="ob-hero-subtitle">Research &amp; development engineer translating complexity into intelligent systems.</h2>
        </div>
      </section>

      <section id="work" className="ob-work-section">
        <div className="ob-work-content">
          <p className="ob-section-label">projects</p>

          {[row1, row2].map((row, ri) => (
            <div key={ri} className="ob-project-row">
              {row.map((p, i) => (
                <a key={i} href={p.href} className="ob-project-card" target="_blank" rel="noopener noreferrer">
                  <div className="ob-project-thumb">
                    {p.type === "video" ? (
                      <video src={p.videoSrc} loop muted autoPlay playsInline poster={p.poster} />
                    ) : (
                      <img src={p.img} alt="" loading="lazy" />
                    )}
                  </div>
                  <div className="ob-project-body">
                    <h2 className="ob-project-title">{p.title}</h2>
                    <p className="ob-project-tags">{p.tags}</p>
                    <p className="ob-project-desc">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="ob-research-section">
        <div className="ob-research-label">
          <p className="ob-section-label">research</p>
        </div>
        <div className="ob-research-content">
          {research.map((r, i) => (
            <div key={i} className={`ob-research-item${i === research.length - 1 ? " ob-research-item--last" : ""}`}>
              <div className="ob-research-left">
                <h2 className="ob-research-title"><a href="public/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">{r.title}</a></h2>
              </div>
              <div className="ob-research-right">
                <p className="ob-research-skills">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="ob-footer">
        <div className="ob-footer-inner">
          <div className="ob-footer-top">
            <span className="ob-footer-copy">&copy;2026</span>
            <div className="ob-footer-links">
              <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">github</a>
              <a href="mailto:obidur.shawal@gmail.com">email</a>
              <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">linkedin</a>
              <a href="public/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">resume</a>
            </div>
          </div>
          <div className="ob-footer-charm">
            <p>here&apos;s a goodluck charm for you!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
