
import { GitFork, X, ArrowUpRight, Download } from 'lucide-react';

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Available for new opportunities
          </div>

          <p className="eyebrow">HELLO, WORLD. I'M DAVID AKAHOMEN.</p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span className="accent">make an impact.</span>
          </h1>

          <h2 className="hero-role">
            I'm a <span>Frontend Developer</span>
          </h2>

          <p className="hero-description">
            I turn ideas into beautiful, responsive, and user-friendly
            web experiences. I enjoy solving problems and bringing
            designs to life with code.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my projects <ArrowUpRight size={18} />
            </a>

            <a className="button button-outline" href="#contact">
              Contact me
            </a>
          </div>

          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitFork size={19} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <X size={19} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="portrait-card">
            <div className="portrait-top">
              <span className="window-dots">
                <i></i><i></i><i></i>
              </span>
              <span>developer.js</span>
            </div>

            <div className="portrait-art">
              <div className="portrait-glow"></div>
              <div className="portrait-head"></div>
              <div className="portrait-neck"></div>
              <div className="portrait-body"></div>
              <div className="portrait-code code-one">{'<div>'}</div>
              <div className="portrait-code code-two">{'{ }'}</div>
              <div className="portrait-code code-three">{'</>'}</div>
            </div>

            <div className="portrait-caption">
              <div>
                <strong>DeDev</strong>
                <span>Frontend Developer</span>
              </div>
              <span className="portrait-badge">DEV</span>
            </div>
          </div>

          <div className="floating-card floating-code">
            <span className="floating-icon">{'</>'}</span>
            <div>
              <strong>Clean code</strong>
              <span>Built with purpose</span>
            </div>
          </div>

          <div className="floating-card floating-stack">
            <span className="stack-dot"></span>
            <div>
              <strong>Always learning</strong>
              <span>Growing every day</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <a href="#projects" aria-label="Scroll to projects">↓</a>
        <span className="hero-bottom-line"></span>
      </div>
    </section>
  );
}

export default Hero;
