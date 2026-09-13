import React from 'react';
import { ArrowUp, Terminal, MessageSquare, Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#090e16] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-[#4edea3]">
              Software Engineering • Technology • Innovation
            </span>
            <p className="text-xs text-[#bbcabf] mt-1">
              Building solutions, one problem at a time.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#1b2028] text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#252a33] transition-all border border-white/5"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#1b2028] text-[#bbcabf] hover:text-[#4cd7f6] hover:bg-[#252a33] transition-all border border-white/5"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-[#1b2028] text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#252a33] transition-all border border-white/5"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Derrick"
              className="p-2 rounded-lg bg-[#1b2028] text-[#bbcabf] hover:text-[#adc6ff] hover:bg-[#252a33] transition-all border border-white/5"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1b2028] text-[#bbcabf] hover:text-white hover:bg-[#252a33] transition-all font-mono text-xs border border-white/5"
            type="button"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Copyright and system status */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#86948a] font-mono">
          <p>© 2026 Derrick Okoro. All rights reserved.</p>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block animate-pulse" />
            SYS_ONLINE // PORTFOLIO_V2.6
          </span>
        </div>
      </div>
    </footer>
  );
};
