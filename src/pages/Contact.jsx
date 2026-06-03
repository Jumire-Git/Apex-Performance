import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const SERVICES_LIST = [
  'Comprehensive Bloodwork & Biomarker Analysis',
  'IV Therapy & Nutrient Infusions',
  'Peptide Therapy Protocols',
  'Hormone Replacement & Optimization',
  'Advanced Recovery & Regeneration',
  'Longevity & Healthspan Extension',
  'General Performance Consultation',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      <div className="container contact-layout">

        {/* Left: Info */}
        <div className="contact-info">
          <p className="overline">Let's Talk</p>
          <div className="gold-divider"></div>
          <h1>Start Your<br /><span className="text-gold">Optimization Journey.</span></h1>
          <p>
            Fill out the form and a member of our clinical team will be in touch within 24 hours to confirm your consultation and answer any questions.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><MapPin size={20} /></div>
              <div>
                <h3>Location</h3>
                <p>1234 Performance Blvd, Suite 500<br />Miami, FL 33101</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><Phone size={20} /></div>
              <div>
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><Mail size={20} /></div>
              <div>
                <h3>Email</h3>
                <p>optimize@apexperformance.com</p>
              </div>
            </div>
          </div>

          <div className="contact-promise">
            <p className="overline" style={{ marginBottom: 'var(--space-4)' }}>Our Promise</p>
            {[
              '48-hour lab result turnaround',
              'Direct physician access — no middlemen',
              'Fully personalized protocols',
              'Private, concierge-level experience',
            ].map((item, i) => (
              <div key={i} className="contact-promise-item">
                <CheckCircle2 size={16} className="text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="form-success">
              <CheckCircle2 size={48} className="text-gold" />
              <h2>Request Received</h2>
              <p>A member of our team will be in touch within 24 hours to confirm your consultation.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Request a Consultation</h2>
              <p className="form-sub">Your first step toward a fully optimized life.</p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name *</label>
                  <input type="text" id="first-name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name *</label>
                  <input type="text" id="last-name" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="(555) 000-0000" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Primary Interest *</label>
                <select id="service" required>
                  <option value="">Select a service...</option>
                  {SERVICES_LIST.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="goals">Your Primary Goals</label>
                <textarea id="goals" rows={4} placeholder="Tell us about your health goals, current concerns, or what prompted you to reach out..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit My Request <ArrowRight size={16} />
              </button>

              <p className="form-disclaimer">
                Your information is completely confidential and protected under HIPAA.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
