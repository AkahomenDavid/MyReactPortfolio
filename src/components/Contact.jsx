
import { Mail, ArrowUpRight, MapPin, GitFork, X } from 'lucide-react';

function Contact() {
  const email = 'davidakahomen1@gmail.com';

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-content">
            <p className="eyebrow">
              <span>04.</span> HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let's build something
              <br />
              <span className="accent">meaningful.</span>
            </h2>

            <p>
              Have a project, an opportunity, or just want to connect?
              My inbox is open. Let's talk about what we can create.
            </p>

            <a
              className="button button-primary"
              href={`https://mail.google.com/mail/?view=cm&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} /> Get in touch <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-icon"><Mail size={20} /></span>
              <div>
                <span>Email me</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><MapPin size={20} /></span>
              <div>
                <span>Location</span>
                <strong>Nigeria · Open to remote work</strong>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><GitFork size={20} /></span>
              <div>
                <span>GitHub</span>
                <a
                  href="https://github.com/AkahomenDavid?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore my repositories
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><X size={20} /></span>
              <div>
                <span>LinkedIn</span>
                <a
                  href="https://x.com/davidakahomen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;