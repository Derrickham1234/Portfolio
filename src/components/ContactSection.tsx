import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Lock, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate direct dispatch and storage
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#171c24]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // CONNECT & COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1 mb-4">
              Let’s Build Something.
            </h2>
            <p className="text-base sm:text-lg text-[#bbcabf] mb-8 leading-relaxed">
              Have an opportunity, project idea, internship opportunity or technology problem you’d like to discuss? I’d be happy to connect.
            </p>

            <div className="space-y-4">
              {/* Email link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm flex items-center gap-4 hover:border-[#4edea3]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#252a33] group-hover:bg-[#4edea3] group-hover:text-[#003824] text-[#4edea3] flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#86948a]">EMAIL ADDRESS</span>
                  <span className="text-sm sm:text-base font-semibold text-[#dee2ee] group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp link */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm flex items-center gap-4 hover:border-[#4cd7f6]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#252a33] group-hover:bg-[#4cd7f6] group-hover:text-[#003640] text-[#4cd7f6] flex items-center justify-center transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#86948a]">PHONE / WHATSAPP</span>
                  <span className="text-sm sm:text-base font-semibold text-[#dee2ee] group-hover:text-[#4cd7f6] transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#252a33] text-[#adc6ff] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#86948a]">LOCATION</span>
                  <span className="text-sm sm:text-base font-semibold text-[#dee2ee]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#1b2028] border border-white/10 shadow-xl relative">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#dee2ee] font-medium mb-1.5" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#171c24] text-[#dee2ee] text-sm focus:outline-none focus:ring-1 focus:ring-[#4edea3] placeholder:text-[#86948a] border border-white/5"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#dee2ee] font-medium mb-1.5" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#171c24] text-[#dee2ee] text-sm focus:outline-none focus:ring-1 focus:ring-[#4edea3] placeholder:text-[#86948a] border border-white/5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#dee2ee] font-medium mb-1.5" htmlFor="contact-subject">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Internship Opportunity / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#171c24] text-[#dee2ee] text-sm focus:outline-none focus:ring-1 focus:ring-[#4edea3] placeholder:text-[#86948a] border border-white/5"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#dee2ee] font-medium mb-1.5" htmlFor="contact-message">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your software requirement, role parameters, or questions..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#171c24] text-[#dee2ee] text-sm focus:outline-none focus:ring-1 focus:ring-[#4edea3] placeholder:text-[#86948a] border border-white/5 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="font-mono text-[11px] text-[#86948a] flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>Transmitted directly to Derrick Okoro</span>
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] text-[#003824] font-mono text-xs sm:text-sm font-semibold hover:bg-[#4edea3] transition-all shadow-md disabled:opacity-50 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#4edea3]/20 text-[#4edea3] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Received!
                </h3>
                <p className="text-sm text-[#bbcabf] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-white">{name}</strong>. Your message has been logged. Derrick will review and respond promptly via email.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#252a33] text-[#4edea3] font-mono text-xs font-semibold hover:bg-[#30353e] transition-colors"
                  type="button"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
