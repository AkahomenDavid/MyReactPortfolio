
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="DeDev home">
        <span className="brand-icon"><Code2 size={23} /></span>
        <span>De<span className="accent">Dev</span></span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Let's talk <span>↗</span>
        </a>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
