
import { ArrowUpRight, Code2, Lightbulb, Rocket } from 'lucide-react';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-card">
            <div className="about-card-header">
              <span className="window-dots"><i></i><i></i><i></i></span>
              <span>about-me.txt</span>
            </div>

            <div className="about-code">
              <p><span>01</span> <b>const</b> developer = {'{'}</p>
              <p><span>02</span> &nbsp; name: <em>'DeDev'</em>,</p>
              <p><span>03</span> &nbsp; focus: <em>'Frontend'</em>,</p>
              <p><span>04</span> &nbsp; mindset: <em>'Keep learning'</em>,</p>
              <p><span>05</span> &nbsp; goal: <em>'Build useful things'</em></p>
              <p><span>06</span> {'}'}</p>
            </div>

            <div className="about-card-footer">
              <span className="status-dot"></span>
              Open to learning and collaboration
            </div>
          </div>

          <div className="about-decoration">{"{ }"}</div>
        </div>

        <div className="about-content">
          <p className="eyebrow"><span>02.</span> A LITTLE ABOUT ME</p>
          <h2>Code with purpose.<br /><span className="accent">Design with care.</span></h2>

          <p>
            I'm a frontend developer who enjoys turning ideas and designs
            into interactive web experiences. I'm focused on building
            websites that look good, work smoothly, and are easy to use.
          </p>

          <p>
            I'm continually improving my skills in React, JavaScript, and
            responsive design by building projects and learning through
            practical experience.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <span><Code2 size={20} /></span>
              <div>
                <strong>Clean development</strong>
                <p>Readable, maintainable interfaces.</p>
              </div>
            </div>

            <div className="about-feature">
              <span><Lightbulb size={20} /></span>
              <div>
                <strong>Curious mindset</strong>
                <p>Learning, experimenting, improving.</p>
              </div>
            </div>

            <div className="about-feature">
              <span><Rocket size={20} /></span>
              <div>
                <strong>Practical projects</strong>
                <p>Turning concepts into real products.</p>
              </div>
            </div>
          </div>

          <a className="text-link" href="#contact">
            Let's work together <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
