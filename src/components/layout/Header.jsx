import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="logo" onClick={close}>
            <span className="logo-mark">A</span>
            <div className="logo-text-wrap">
              <span className="logo-brand">APEX</span>
              <span className="logo-sub">PERFORMANCE</span>
            </div>
          </Link>

          {/* Navigation links removed to match minimalist header style */}

          {/* Right cluster */}
          <div className="header-right">
            <Link to="/contact" className="btn btn-primary header-cta" onClick={close}>
              Book Now
            </Link>

            {/* MENU BUTTON — legacyfit.com style */}
            <button
              className={`menu-btn ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="menu-btn-label">{menuOpen ? 'CLOSE' : 'MENU'}</span>
              <div className="menu-btn-lines">
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Overlay Menu */}
      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="nav-overlay-inner">
          <nav className="nav-overlay-links">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `overlay-link ${isActive ? 'active' : ''}`}
                onClick={close}
                style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.07}s` : '0s' }}
              >
                <span className="overlay-link-num">0{i + 1}</span>
                <span className="overlay-link-text">{link.label}</span>
                <ArrowRight className="overlay-link-arrow" size={20} />
              </NavLink>
            ))}
          </nav>

          <div className="nav-overlay-footer">
            <div className="nav-overlay-info">
              <p>Miami, Florida</p>
              <p>optimize@apexperformance.com</p>
              <p>(555) 123-4567</p>
            </div>
            <Link to="/contact" className="btn btn-primary" onClick={close}>
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
