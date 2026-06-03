import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Award, Microscope, Heart } from 'lucide-react';
import './About.css';

const VALUES = [
  {
    icon: <Microscope size={28} />,
    title: 'Science First',
    desc: 'Every protocol is built on peer-reviewed research and validated clinical data. We don\'t chase trends — we follow evidence.',
  },
  {
    icon: <Target size={28} />,
    title: 'Precision, Not Guesswork',
    desc: 'We measure before we prescribe. Your biology dictates your protocol — not assumptions or one-size-fits-all approaches.',
  },
  {
    icon: <Award size={28} />,
    title: 'Concierge Standard',
    desc: 'Your time is precious. Direct physician access, 48-hour lab turnaround, and a private environment designed for elite performers.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Long-Term Partnership',
    desc: 'We don\'t treat symptoms and send you home. We build lasting relationships and continuously optimize your protocols as your biology evolves.',
  },
];

export default function About() {
  return (
    <div className="page-about">

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container about-hero-content">
          <p className="overline">Our Story</p>
          <div className="gold-divider"></div>
          <h1>We Built the Practice<br />We Wished <span className="text-gold">Existed.</span></h1>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            Founded by physicians and high performers who were frustrated by the reactive, symptom-chasing model of conventional medicine.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission-grid">
          <div className="about-mission-image">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900" alt="Our facility" />
          </div>
          <div className="about-mission-content">
            <p className="overline">Our Mission</p>
            <div className="gold-divider"></div>
            <h2>Preventive. Proactive.<br /><span className="text-gold">Personalized.</span></h2>
            <p>
              APEX Performance Medicine was founded on a single, non-negotiable belief: your health is your greatest asset.
              We built a practice that treats that truth with the respect it deserves — with cutting-edge diagnostics, evidence-based protocols, and a concierge experience reserved for those who refuse to compromise.
            </p>
            <p style={{ marginTop: '1.25rem' }}>
              We don't wait for disease. We optimize the conditions of health — at the cellular level, before symptoms appear.
              Because the best treatment is prevention, and prevention requires data.
            </p>
            <div className="about-stats-row">
              <div className="about-stat">
                <span>80+</span>
                <p>Biomarkers Tracked</p>
              </div>
              <div className="about-stat">
                <span>2,400+</span>
                <p>Members Optimized</p>
              </div>
              <div className="about-stat">
                <span>&lt; 48h</span>
                <p>Lab Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="section-header center">
            <p className="overline">Core Principles</p>
            <div className="gold-divider center"></div>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="overline">Join Us</p>
          <div className="gold-divider center"></div>
          <h2>Start Your Optimization<br /><span className="text-gold">Journey Today.</span></h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '1rem auto 2rem', fontSize: '1.1rem' }}>
            Take the first step toward your optimized future. Your initial consultation includes comprehensive bloodwork and a full protocol review.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
