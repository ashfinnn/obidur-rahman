"use client";

import { useState } from "react";

const interests = [
  { name: "Astrology", id: "x42kwmeLDtmC95NiCnxFXDQeqQ" },
  { name: "Broccoli", id: "O57ZLr5snexpZnklqvpx27xQgc" },
  { name: "Jewelry", id: "rP25VapUyIKjLyYVjTdjRU3x9xA" },
  { name: "Volleyball", id: "pD9jNNMhmAueriKuX2ENs7fpk0" },
  { name: "Green tea", id: "D7jwSAEmf2otwF6Zkhdh6TmyuiU" },
  { name: "Yoneyama mai", id: "J1XyXrfeQvdr96tlKE5KCIWs" },
  { name: "Thrift", id: "443Ftal2FoEJX0rd1FJzf3lG0" },
  { name: "UBC", id: "9NXRHtxYXkLywEWn1nyCCASoek" },
  { name: "Camera", id: "ZbKxTkd9kt23TQuSd4i8i29Z9A" },
  { name: "INFJ", id: "fbsCMZ2VWVpoWB1MTlGfcBrkIo" },
  { name: "Pratt", id: "TWq0c6EAHbkbWXeyPZG0GBVUCj8" },
  { name: "Sketchbook", id: "O8wDwmhRDKlQC3RB2AZg2wg8Tk" },
];

const awards = [
  { title: "CPU-Constrained Deep Learning for Tomato Disease Detection", venue: "Under Review — Springer Book Proceedings" },
  { title: "Digital Distractions & Study Habits (2026)", venue: "Presented at SCRIS 2026 — Scholars' Convergence Research & Innovation Summit" },
  { title: "Quantifying the Congestion Premium (2026)", venue: "Presented at SCRIS 2026 — Non-metered fares study, Chattogram port city" },
];

export function AboutClient() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("obidur.shawal@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  return (
    <div className="ob-about">
      <section className="ob-about-hero">
        <div className="ob-about-hero-inner">
          <div className="ob-about-hero-text">
            <h1 className="ob-about-name-wrapper">
              <span className="ob-about-name-italic">Obidur</span>
              <span> Obidur Starter Pack</span>
            </h1>
          </div>
          <div className="ob-about-interests">
            {interests.map((item, i) => (
              <img key={i} src={`https://framerusercontent.com/images/${item.id}.webp`} alt={item.name} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="ob-about-content">
        <div className="ob-bio">
          <p>
            Hi there! I&apos;m Shawal (Obidur Rahman / ওবায়দুর রহমান in Bangla characters). I am currently a Research and Development Engineer at{" "}
            <a href="https://northaxis.xyz" target="_blank" rel="noopener noreferrer">Northaxis</a>, researching and implementing AI features and creating multi-purpose AI agents. I&apos;m also finishing my Bachelor of Science in Mathematics at{" "}
            <a href="https://cu.ac.bd" target="_blank" rel="noopener noreferrer">University of Chittagong</a>, where I was born and raised.
          </p>
          <p>
            I&apos;m serious and technical by nature. You can also find my work on{" "}
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>. It shows a lot of what I&apos;m currently building. Outside work, I play games, watch video essays, and doom-scroll on Instagram.
          </p>
          <p>
            Say hello at{" "}
            <span className="ob-email" onClick={handleCopyEmail} style={{ cursor: "pointer", textDecoration: "underline", textDecorationStyle: "dashed", textUnderlineOffset: 4 }}>
              obidur.shawal@gmail.com
            </span>{" "}{copied && <span className="ob-copied">Copied!</span>}or find me on{" "}
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>. I love chatting about games and memes, and happy to talk about AI too.
          </p>
        </div>
      </section>

      <section className="ob-about-details">
        <div className="ob-details-row">
          <div className="ob-details-col">
            <p className="ob-section-label">education</p>
            <div className="ob-details-items">
              <div className="ob-details-item">
                <p><strong>B.Sc. in Mathematics (2022 – 2026)</strong></p>
                <p><a href="https://www.cu.ac.bd/" target="_blank" rel="noopener noreferrer">University of Chittagong</a></p>
              </div>
            </div>
          </div>
          <div className="ob-details-col">
            <p className="ob-section-label">experience</p>
            <div className="ob-details-items">
              <div className="ob-details-item">
                <p><strong>Research and Development Engineer (2025 – Present)</strong></p>
                <p><a href="https://northaxis.xyz" target="_blank" rel="noopener noreferrer">Northaxis</a></p>
              </div>
            </div>
          </div>
          <div className="ob-details-col">
            <p className="ob-section-label">awards &amp; publications</p>
            <div className="ob-details-items">
              {awards.map((a, i) => (
                <div key={i} className="ob-details-item">
                  <p><strong>{a.title}</strong></p>
                  <p>{a.venue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="ob-about-footer">
        <div className="ob-footer-top">
          <span className="ob-footer-copy">&copy;2026</span>
          <div className="ob-footer-links">
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">github</a>
            <a href="mailto:obidur.shawal@gmail.com">email</a>
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="public/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
