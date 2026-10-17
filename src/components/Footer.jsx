
import { Code2, ArrowUp } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon"><Code2 size={20} /></span>
          <span>de<span className="accent">dev</span></span>
          <span className="brand-dot">.</span>
        </a>

        <p>
          
        </p>

        <a className="back-to-top" href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} DeDev</span>
      </div>
    </footer>
  );
}

export default Footer;
