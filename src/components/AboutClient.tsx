"use client";

import { useState } from "react";

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
      <div className="ob-about-inner" id="first-content">
        <div className="ob-page-title">
          <h1 className="ob-page-title-text">About Me</h1>
        </div>

        <div className="ob-sections">
          <p className="ob-section-label">Background</p>
          <div className="ob-section-body">
            <p>
              Hi — people from the Internet. I&apos;m Shawal (Obidur Rahman / ওবায়দুর রহমান in Bangla characters). I am currently a Research and Development Engineer at{" "}
              <a href="https://northaxis.xyz" target="_blank" rel="noopener noreferrer">Northaxis</a>, based in Chittagong, Bangladesh, where I research and implement AI features and build multi-purpose AI agents for real-world product domains. I am also completing my Bachelor of Science in Mathematics at{" "}
              <a href="https://cu.ac.bd" target="_blank" rel="noopener noreferrer">University of Chittagong</a>, where I was born and raised.
            </p>
            <p>
              My work spans deep learning for agriculture, natural language processing systems, and agentic AI infrastructure — always with a focus on practical, deployable solutions that work under real constraints. I believe intelligence is most valuable when it ships, and I build things that actually run, not just papers that read well.
            </p>
            <p>
              You can find my work on{" "}
              <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a> — it shows a lot of what I am currently building. Say hello at{" "}
              <span className="ob-email" onClick={handleCopyEmail}>
                obidur.shawal@gmail.com
              </span>{" "}{copied && <span className="ob-copied">Copied!</span>} or find me on{" "}
              <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
          </div>

          <p className="ob-section-label">Research</p>
          <div className="ob-section-body">
            <p>
              I am a systems engineer who believes intelligence is most valuable when it ships. My work focuses on building AI that works under real-world constraints — limited compute, noisy data, imperfect infrastructure — through three interconnected themes.
            </p>
            <ul>
              <li>
                <b>Natural Language &amp; Knowledge Systems</b> — I build systems that understand and organise language at scale. My work on StackOverflow tag recommendation uses TF-IDF, word embeddings, and multi-label classification to predict relevant topics from real user questions.{" "}
                <a href="https://github.com/Ashfinnn/stackoverflow-tag-recommendation" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#1a365d", color: "#fff" }}>tag recommender</a>
              </li>
              <li>
                <b>Computer Vision &amp; Edge Intelligence</b> — I design vision systems that work where GPUs are scarce. My work on tomato disease classification compares traditional CNNs, modern architectures, and hybrid models under CPU-constrained conditions — bringing deep learning to agricultural settings with limited resources.{" "}
                <a href="public/obidur_cv.pdf" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#9b2c2c", color: "#fff" }}>under review</a>
              </li>
              <li>
                <b>AI Agents &amp; Infrastructure</b> — I design and build general-purpose AI agents that integrate reasoning, tool use, and multi-modal capabilities into production systems. At Northaxis, I architect agentic workflows that solve real problems across multiple product domains, from intelligent automation to context-aware decision systems.{" "}
                <a href="https://northaxis.xyz" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#2b6cb0", color: "#fff" }}>northaxis</a>
              </li>
              <li>
                <b>Applied Interdisciplinary Research</b> — I also conduct empirical research at the intersection of technology and society, studying digital behaviour, self-regulation, and urban economics. My work has been presented at the Scholars&apos; Convergence Research &amp; Innovation Summit (SCRIS 2026).{" "}
                <a href="https://github.com/ashfinnn" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#5a3e1b", color: "#fff" }}>SCRIS 2026</a>
              </li>
            </ul>
          </div>

          <p className="ob-section-label">Hobbies</p>
          <div className="ob-section-body">
            <p>
              Outside of research, I find joy in the quiet focus of video games, the deep rabbit holes of long-form video essays, and the chaotic scroll of Instagram. I have a soft spot for good design — clean UI, thoughtful typography, and well-made indie games. I love talking about games and memes, and I am always happy to chat about AI too.
            </p>
          </div>
        </div>
      </div>

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
