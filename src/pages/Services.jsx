import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Droplet, Zap, Flame, Shield, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    id: 'bloodwork',
    icon: <Activity size={40} />,
    tag: 'Foundation',
    title: 'Advanced Bloodwork & Biomarker Analysis',
    subtitle: 'Know your biology. Own your performance.',
    desc: 'Our foundational protocol begins with the most comprehensive blood panel available. We analyze 80+ biomarkers — from complete metabolic and hormonal panels to inflammation markers, micronutrients, heavy metals, and genetic predispositions. Every protocol at APEX Performance Medicine starts here.',
    includes: [
      'Complete Metabolic Panel & CBC',
      'Full Thyroid Panel (TSH, T3, T4, rT3)',
      'Advanced Lipid & Cardiovascular Markers',
      'Sex Hormones (Testosterone, Estradiol, DHEA, SHBG)',
      'Inflammation: hs-CRP, IL-6, Homocysteine',
      'Micronutrient & Vitamin Analysis',
      'Heavy Metal Toxicity Screening',
    ],
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'iv-therapy',
    icon: <Droplet size={40} />,
    tag: 'Infusion',
    title: 'Concierge IV Therapy & Nutrient Infusions',
    subtitle: '100% bioavailability. Zero delay.',
    desc: 'Oral supplementation has limits. IV therapy bypasses the gut entirely, delivering precise, high-dose nutrients directly into your bloodstream with immediate effect. Whether you\'re recovering from intense training, optimizing cognitive performance, or fighting illness — our custom infusion protocols deliver.',
    includes: [
      'NAD+ Infusions (Anti-Aging & Brain Optimization)',
      'Myers Cocktail (Energy & Immunity)',
      'Glutathione Pushes (Detox & Antioxidant)',
      'High-Dose Vitamin C Infusions',
      'Amino Acid & Recovery Drips',
      'Alpha-Lipoic Acid Infusions',
      'Custom Formulations Based on Your Labs',
    ],
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'peptides',
    icon: <Zap size={40} />,
    tag: 'Regeneration',
    title: 'Precision Peptide Therapy',
    subtitle: 'Signal your body to heal, rebuild, and optimize.',
    desc: 'Peptides are short-chain amino acids that act as precise biological messengers — telling your body to heal faster, produce more growth hormone, burn fat, reduce inflammation, or improve cognition. We craft custom peptide stacks informed by your labs, goals, and lifestyle.',
    includes: [
      'BPC-157 — Tissue Repair & Gut Health',
      'TB-500 — Accelerated Wound & Injury Healing',
      'Sermorelin & CJC-1295 — Growth Hormone Secretagogues',
      'Ipamorelin — Lean Muscle & Deep Sleep',
      'PT-141 — Sexual Health & Libido',
      'Selank & Semax — Cognitive Enhancement',
      'GHK-Cu — Skin, Hair, & Collagen Repair',
    ],
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'hormones',
    icon: <Flame size={40} />,
    tag: 'Optimization',
    title: 'Hormone Replacement & Optimization',
    subtitle: 'Reclaim the biology of your prime.',
    desc: 'Hormonal decline is not inevitable — it\'s treatable. Our concierge HRT program is built around your specific lab values, symptoms, and goals. We optimize testosterone, estrogen, progesterone, thyroid, and adrenal function using bioidentical hormones and evidence-based protocols.',
    includes: [
      'Testosterone Replacement Therapy (TRT)',
      'Estrogen & Progesterone Balancing for Women',
      'Thyroid Optimization (T3 + T4 Protocols)',
      'DHEA & Pregnenolone Supplementation',
      'Adrenal & Cortisol Support',
      'HCG Therapy for Fertility Preservation',
      'Continuous Lab Monitoring',
    ],
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'recovery',
    icon: <Shield size={40} />,
    tag: 'Performance',
    title: 'Advanced Recovery & Regeneration',
    subtitle: 'Recover like your future depends on it.',
    desc: 'Performance without recovery is just breakdown. Our recovery suite combines the most advanced modalities available to reduce systemic inflammation, accelerate healing, and restore peak function — so you can train harder, perform longer, and bounce back faster.',
    includes: [
      'Hyperbaric Oxygen Therapy (HBOT)',
      'Whole-Body Cryotherapy',
      'Red Light & Near-Infrared Therapy',
      'Infrared Sauna Protocols',
      'Compression & Lymphatic Drainage',
      'Ozone Therapy',
      'Exosome & PRP Treatments',
    ],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'longevity',
    icon: <Brain size={40} />,
    tag: 'Longevity',
    title: 'Longevity & Healthspan Extension',
    subtitle: 'Not just longer life — better life.',
    desc: 'True longevity means extending the years you are truly healthy, sharp, and vital. We deploy the most advanced longevity science available — targeting cellular senescence, mitochondrial decline, and epigenetic aging — to add quality decades to your life.',
    includes: [
      'Epigenetic Age Testing (Biological Age Assessment)',
      'NAD+ Optimization Protocols',
      'Rapamycin & Senolytic Therapies',
      'Mitochondrial Support (CoQ10, PQQ)',
      'Telomere Length Monitoring',
      'Alzheimer\'s & Cognitive Decline Prevention',
      'Personalized Longevity Blueprint',
    ],
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=900',
  },
];

export default function Services() {
  return (
    <div className="page-services">
      {/* Header */}
      <div className="services-page-header">
        <div className="services-page-header-bg"></div>
        <div className="container services-page-header-content">
          <p className="overline">What We Offer</p>
          <div className="gold-divider"></div>
          <h1>Six Pillars of<br /><span className="text-gold">Human Optimization</span></h1>
          <p className="section-subtitle">
            Each service is a precision instrument. Together, they form a complete system for elite health, performance, and longevity.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-8)' }}>
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Services List */}
      <div className="services-detail-list">
        {SERVICES.map((s, i) => (
          <section key={s.id} className={`service-detail-row ${i % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="container service-detail-grid">
              <div className="service-detail-content">
                <div className="service-detail-icon">{s.icon}</div>
                <span className="service-tag">{s.tag}</span>
                <h2>{s.title}</h2>
                <p className="service-detail-sub">{s.subtitle}</p>
                <p className="service-detail-desc">{s.desc}</p>
                <div className="service-includes">
                  <p className="service-includes-label">What's Included</p>
                  <ul>
                    {s.includes.map((item, j) => (
                      <li key={j}>
                        <CheckCircle size={16} className="text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Book This Service <ArrowRight size={16} />
                </Link>
              </div>
              <div className="service-detail-image">
                <img src={s.img} alt={s.title} />
                <div className="service-detail-image-overlay"></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="overline">Get Started Today</p>
          <div className="gold-divider center"></div>
          <h2>Not Sure Where to Start?</h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '1rem auto 2rem', fontSize: '1.1rem' }}>
            Book an initial consultation. We'll run your comprehensive baseline labs and build your custom protocol.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Schedule Your Consult <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
