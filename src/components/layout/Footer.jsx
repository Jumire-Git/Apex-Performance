import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">L</span>
              <span className="footer-logo-text">
                APEX<span className="footer-logo-sub">PERFORMANCE</span>
              </span>
            </Link>
            <p>
              Concierge longevity & performance medicine for those who demand the absolute best from their biology.
            </p>
            <div className="footer-social">
              {/* Social icons temporarily removed due to icon library issues */}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#bloodwork">Advanced Bloodwork</Link></li>
              <li><Link to="/services#iv-therapy">IV Therapy</Link></li>
              <li><Link to="/services#peptides">Peptide Protocols</Link></li>
              <li><Link to="/services#hormones">Hormone Optimization</Link></li>
              <li><Link to="/services#recovery">Advanced Recovery</Link></li>
              <li><Link to="/services#longevity">Longevity Programs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-col">
            <h4>Get Started</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              Ready to optimize? Book your initial consultation and we'll have your labs back within 48 hours.
            </p>
            <Link to="/contact" className="btn btn-primary footer-cta-btn">
              Book Consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} APEX Performance Medicine. All rights reserved.</p>
          <p>Miami, Florida · <a href="mailto:optimize@apexperformance.com">optimize@apexperformance.com</a></p>
        </div>
      </div>
    </footer>
  );
}
