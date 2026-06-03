import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Droplet, Zap, Flame, Shield, Brain, ChevronRight, Star, Users, TrendingUp, Clock } from 'lucide-react';
import './Home.css';

const SERVICES = [
  {
    id: 'bloodwork',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    label: 'Diagnostics',
    title: 'Advanced Biomarker Analysis',
    desc: 'Over 80+ biomarkers analyzed. We measure everything from hormones to inflammation to build your personalized roadmap.',
    tag: 'Foundation',
  },
  {
    id: 'iv-therapy',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    label: 'Infusion',
    title: 'Concierge IV Therapy',
    desc: 'High-dose vitamins, minerals, and antioxidants delivered directly into the bloodstream for immediate cellular repair.',
    tag: 'Vitality',
  },
  {
    id: 'peptides',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    label: 'Regeneration',
    title: 'Peptide Protocols',
    desc: 'Precision sequences that signal your body to repair, regenerate, and optimize at the cellular level.',
    tag: 'Repair',
  },
  {
    id: 'hormones',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    label: 'Optimization',
    title: 'Hormone Restoration',
    desc: 'Guided by your actual labs, we restore the hormonal environment of your prime for energy and clarity.',
    tag: 'Balance',
  },
  {
    id: 'recovery',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    label: 'Recovery',
    title: 'Advanced Recovery',
    desc: 'Hyperbaric oxygen, red light, and cryotherapy. Science-backed modalities to accelerate healing.',
    tag: 'Performance',
  },
  {
    id: 'longevity',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    label: 'Longevity',
    title: 'Healthspan Extension',
    desc: 'NAD+ therapy, senolytics, and epigenetic testing to target the root mechanisms of aging.',
    tag: 'Anti-Aging',
  },
];

const COMMUNITY = [
  {
    name: 'Marcus T.',
    role: 'CEO & Serial Entrepreneur',
    quote: "After 6 months, my labs look like a 28-year-old's. My energy is the highest it's been in a decade.",
    stars: 5,
    size: 'tall',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=1100',
  },
  {
    name: 'Renée V.',
    role: 'Competitive Athlete',
    quote: 'Every protocol is dialed in. My recovery has never been faster. This changed everything.',
    stars: 5,
    size: 'wide',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80&w=900&h=600',
  },
  {
    name: 'Daniel F.',
    role: 'Physician & Patient',
    quote: "APEX Performance Medicine operates at the highest standard of concierge medicine I've ever encountered.",
    stars: 5,
    size: 'square',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=700&h=700',
  },
  {
    name: 'Sofia R.',
    role: 'Wellness Advocate',
    quote: 'I finally understand my body. The personalized bloodwork results were a revelation.',
    stars: 5,
    size: 'square',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=700&h=700',
  },
  {
    name: 'James K.',
    role: 'Executive & Triathlete',
    quote: "NAD+ therapy combined with the peptide protocols took my performance to a level I didn't think possible at 44.",
    stars: 5,
    size: 'tall',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800&h=1100',
  },
  {
    name: 'Mia L.',
    role: 'Health Coach',
    quote: "The team here doesn't just treat symptoms. They look at the whole picture — and it shows.",
    stars: 5,
    size: 'wide',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=900&h=600',
  },
  {
    name: 'Alex P.',
    role: 'Longevity Enthusiast',
    quote: 'I came in curious. I left transformed. The science here is unlike anything else.',
    stars: 5,
    size: 'square',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=700&h=700',
  },
];

const MARQUEE_REVIEWS = [
  { name: 'Marcus T.', role: 'CEO', text: 'My labs look like a 28-year-old\'s. This is not a clinic — it\'s an edge.', stars: 5 },
  { name: 'Renée V.', role: 'Competitive Athlete', text: 'My recovery has never been faster. Every protocol is dialed in perfectly.', stars: 5 },
  { name: 'Daniel F.', role: 'Physician', text: 'The highest standard of concierge medicine I have ever encountered.', stars: 5 },
  { name: 'Sofia R.', role: 'Wellness Advocate', text: 'I finally understand my body. The bloodwork results were a revelation.', stars: 5 },
  { name: 'James K.', role: 'Triathlete', text: 'NAD+ and peptide protocols took my performance to another level entirely.', stars: 5 },
  { name: 'Mia L.', role: 'Health Coach', text: 'They look at the whole picture. The results speak for themselves.', stars: 5 },
  { name: 'Alex P.', role: 'Longevity Enthusiast', text: 'I came in curious. I left transformed. The science here is unmatched.', stars: 5 },
  { name: 'Carla M.', role: 'Executive', text: 'Worth every penny. My energy, focus and sleep have all dramatically improved.', stars: 5 },
  { name: 'Trevor B.', role: 'Pro Cyclist', text: 'The most personalized protocol I\'ve ever experienced. Absolutely elite.', stars: 5 },
  { name: 'Naomi S.', role: 'Entrepreneur', text: 'APEX Performance Medicine gave me my life back. I feel 10 years younger, no exaggeration.', stars: 5 },
  { name: 'Chris D.', role: 'Strength Coach', text: 'The team\'s depth of knowledge is extraordinary. This is next-level medicine.', stars: 5 },
  { name: 'Ingrid L.', role: 'Yoga Instructor', text: 'I was skeptical. Two months in, my hormone panel is the best it\'s been in years.', stars: 5 },
  { name: 'Omar F.', role: 'Surgeon', text: 'As a clinician, I am blown away by the precision and evidence behind every protocol.', stars: 5 },
  { name: 'Rachel H.', role: 'Marathon Runner', text: 'My VO2 max improved by 12% in 3 months. The data doesn\'t lie.', stars: 5 },
  { name: 'David W.', role: 'Angel Investor', text: 'Best investment I\'ve made — and I\'ve made a lot of investments. This one pays dividends daily.', stars: 5 },
  { name: 'Priya K.', role: 'Functional MD', text: 'I send my most complex patients here. The outcomes are consistently remarkable.', stars: 5 },
];

const STATS = [
  { value: '80+', label: 'Biomarkers Tracked', icon: <Activity size={20} /> },
  { value: '100%', label: 'Personalized Protocols', icon: <TrendingUp size={20} /> },
  { value: '2,400+', label: 'Members Optimized', icon: <Users size={20} /> },
  { value: '< 48h', label: 'Lab Results Returned', icon: <Clock size={20} /> },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      hero.style.setProperty('--parallax-y', `${y * 0.3}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-home">

      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <video 
          className="hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>

        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span className="overline">Concierge Longevity &amp; Performance Medicine — Miami, FL</span>
          </div>
          <h1 className="hero-title">
            Built for
            <em className="serif hero-title-serif">Those Who</em>
            <span className="text-gold">Refuse to Settle.</span>
          </h1>
          <p className="hero-subtitle">
            Florida's premier performance medicine practice. Advanced diagnostics,
            elite protocols, and concierge care — engineered for high performers who demand the absolute best from their biology.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Start Your Protocol <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-dot"></span>
            <span className="hero-trust-label">Trusted by athletes, executives & physicians</span>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span></span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INTRO / MISSION ===== */}
      <section className="section mission-section">
        <div className="container mission-grid">
          <div className="mission-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=900"
              alt="Luxury wellness environment"
              className="mission-img"
              loading="lazy"
              decoding="async"
            />
            <div className="mission-badge">
              <Brain size={20} className="text-gold" />
              <div>
                <div className="mission-badge-title">Evidence-Based</div>
                <div className="mission-badge-sub">Every protocol backed by science</div>
              </div>
            </div>
          </div>
          <div className="mission-content">
            <p className="overline">Our Philosophy</p>
            <div className="gold-divider"></div>
            <h2>Healthcare That<br /><em className="serif">Doesn't Wait</em><br /><span className="text-gold">for Disease.</span></h2>
            <p className="section-subtitle">
              We exist at the intersection of preventive medicine, human optimization, and elite concierge care.
              APEX Performance Medicine isn't reactive. We identify what's holding you back — at the molecular level — before it becomes a problem.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
              Your biology is unique. Your protocol should be too.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: 'var(--space-8)' }}>
              Our Story <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header center">
            <p className="overline">What We Offer</p>
            <div className="gold-divider center"></div>
            <h2>Six Pillars of<br /><em className="serif">Human</em> <span className="text-gold">Optimization</span></h2>
            <p className="section-subtitle">
              Each service is a precision instrument. Together, they form a comprehensive system for elite health.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <article key={s.id} className="service-card">
                <div className="service-card-image">
                  <img src={s.image} alt={s.title} loading="lazy" decoding="async" />
                  <div className="service-card-tag">{s.tag}</div>
                </div>
                <div className="service-card-content">
                  <p className="overline service-card-label">{s.label}</p>
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-desc">{s.desc}</p>
                  <Link to="/services" className="service-card-link">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header center">
            <p className="overline">Why APEX Performance Medicine</p>
            <div className="gold-divider center"></div>
            <h2>Not a Clinic.<br /><em className="serif">A</em> <span className="text-gold">Performance Lab.</span></h2>
          </div>

          <div className="why-grid">
            {[
              {
                num: '01',
                title: 'Precision Diagnostics First',
                desc: 'We build every protocol on your actual biology, not assumptions. Advanced panels, genetic testing, and continuous monitoring.',
              },
              {
                num: '02',
                title: 'Concierge Experience',
                desc: 'Direct access to your physician. Same-day responses. No waiting rooms. A private, premium environment designed for high performers.',
              },
              {
                num: '03',
                title: 'Cutting-Edge Protocols',
                desc: 'We stay at the frontier — peptide therapy, NAD+, senolytics, and longevity science most physicians haven\'t heard of yet.',
              },
              {
                num: '04',
                title: 'Results You Can Measure',
                desc: 'Every protocol has a benchmark. We re-test, re-assess, and continuously optimize until your numbers reflect your goals.',
              },
            ].map((w) => (
              <div key={w.num} className="why-card">
                <span className="why-num">{w.num}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY / SOCIAL PROOF ===== */}
      <section className="community-section">
        <div className="community-header">
          <p className="overline">Community</p>
          <div className="gold-divider center"></div>
          <h2 className="community-title">
            What Our <em className="serif">Community</em><br />
            <span className="text-gold">Says.</span>
          </h2>
          <p className="community-subtitle">
            More than results, it's the collective experience that keeps them coming back. Discover
            what <strong>LEGACY</strong> means through the voices of those who fuel our movement.
          </p>
        </div>

        <div className="container">
        <div className="community-grid">
          {COMMUNITY.map((c, i) => (
            <div key={i} className={`community-card community-card--${c.size}`}>
              <img src={c.image} alt={c.name} className="community-card-img" loading="lazy" decoding="async" />
              <div className="community-card-overlay">
                <div className="community-card-stars">
                  {[...Array(c.stars)].map((_, si) => (
                    <Star key={si} size={12} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="community-card-quote">"{c.quote}"</blockquote>
                <div className="community-card-author">
                  <span className="community-card-name">{c.name}</span>
                  <span className="community-card-role">{c.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="overline">Testimonials</p>
          <div className="gold-divider"></div>
          <h2 className="testimonials-title">
            Real People.<br />
            <em className="serif">Real</em> <span className="text-gold">Results.</span>
          </h2>
          <p className="testimonials-subtitle">
            Don't take our word for it — hear directly from the high performers,
            athletes, and executives who made APEX Performance Medicine their edge.
          </p>
        </div>
        <div className="testimonials-carousel">
          {/* Layer 1 - scrolls left */}
          <div className="testimonials-row testimonials-row--left">
            {[...MARQUEE_REVIEWS, ...MARQUEE_REVIEWS].map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(r.stars)].map((_, si) => (
                    <Star key={si} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{r.name}</span>
                  <span className="testimonial-dot">·</span>
                  <span className="testimonial-role">{r.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Layer 2 - scrolls right */}
          <div className="testimonials-row testimonials-row--right">
            {[...MARQUEE_REVIEWS, ...MARQUEE_REVIEWS].map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(r.stars)].map((_, si) => (
                    <Star key={si} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{r.name}</span>
                  <span className="testimonial-dot">·</span>
                  <span className="testimonial-role">{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container cta-content">
          <p className="overline">Get Started</p>
          <div className="gold-divider center"></div>
          <h2>Your Legacy<br /><em className="serif">Begins</em> with a <span className="text-gold">Single Lab.</span></h2>
          <p>
            Book your initial consultation. We'll run your labs, analyze your results, and build your personalized optimization protocol — all within 48 hours.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Book Your Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
