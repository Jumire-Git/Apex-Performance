import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is concierge medicine?',
      answer: 'Concierge medicine is a patient-centered approach where you have direct access to your physician, longer appointment times, and personalized treatment plans. At APEX, we focus on proactive prevention and optimization—not just treating symptoms.',
    },
    {
      question: 'How is APEX different from traditional medicine?',
      answer: 'Traditional medicine is reactive—you see a doctor when sick. APEX is proactive. We identify what\'s holding you back at the molecular level before it becomes a problem. We analyze 80+ biomarkers, create personalized protocols, and optimize your performance through advanced science-based treatments.',
    },
    {
      question: 'Is this only for athletes?',
      answer: 'No. While we work with many athletes, APEX serves anyone who wants to optimize their health and performance—executives, entrepreneurs, busy professionals, and anyone serious about longevity and peak performance.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Bring your insurance card, a list of current medications/supplements, and your medical history. We also recommend bringing any previous lab work or health records. Our team will conduct a comprehensive bloodwork analysis during your initial consultation.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'APEX operates as a concierge practice with flexible payment options. Some services may be covered by insurance depending on your plan. We recommend scheduling a consultation to discuss pricing and payment options that work for you.',
    },
    {
      question: 'What is peptide therapy?',
      answer: 'Peptides are short chains of amino acids that signal your body to optimize specific functions—like recovery, muscle growth, cognition, and immune function. At APEX, we use peptides as part of personalized protocols to enhance your performance.',
    },
    {
      question: 'How often do I need to come in?',
      answer: 'Frequency depends on your goals and current health status. Initial protocols typically involve monthly consultations and lab work to track progress. As you optimize, visits may decrease. We create a customized schedule that fits your life.',
    },
    {
      question: 'What results can I expect?',
      answer: 'Results vary, but patients typically report increased energy, improved sleep, better mental clarity, enhanced athletic performance, and visible physical improvements within 4-8 weeks. We track your progress through comprehensive biomarker analysis.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing varies based on your personalized protocol and services needed. Initial consultations start at competitive rates. We offer transparent pricing and flexible payment plans. Contact us for a custom quote based on your goals.',
    },
    {
      question: 'How do I schedule a consultation?',
      answer: 'You can schedule through our Contact page, email optimize@apexperformance.com, or call (305) 555-0100. We offer virtual and in-person consultations. Our team will work with you to find a time that fits your schedule.',
    },
    {
      question: 'What makes your bloodwork different?',
      answer: 'We analyze 80+ biomarkers—far beyond standard lab work. This includes complete metabolic panels, hormonal analysis, inflammation markers, micronutrients, heavy metals, and genetic predispositions. This comprehensive approach identifies root causes, not just symptoms.',
    },
    {
      question: 'Is this scientifically-backed?',
      answer: 'Absolutely. Every protocol at APEX is based on peer-reviewed research and clinical evidence. Our physicians stay current with the latest advancements in longevity and performance medicine. We focus on measurable results.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about APEX Performance Medicine</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="chevron-icon" />
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="faq-cta-content">
          <h2>Still have questions?</h2>
          <p>Our team is ready to help. Get in touch with us today.</p>
          <div className="faq-cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Schedule a Consultation
            </a>
            <a href="mailto:optimize@apexperformance.com" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
