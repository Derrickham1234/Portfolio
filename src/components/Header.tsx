import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#090e16]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.5)] border-b border-white/5' 
          : 'bg-[#090e16]/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#171c24] border border-[#3c4a42]/50 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 transition-colors">
            <span className="font-mono text-sm font-bold tracking-tight">&gt;_DO</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#dee2ee] group-hover:text-white transition-colors">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#4edea3] uppercase tracking-wider">
              Open to Opportunities
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 font-mono text-xs tracking-wide transition-all rounded-md ${
                  isActive
                    ? 'bg-[#252a33] text-[#4edea3] font-medium shadow-sm'
                    : 'text-[#bbcabf] hover:text-[#dee2ee] hover:bg-[#1b2028]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#10b981] text-[#003824] font-mono text-xs font-semibold rounded-md hover:bg-[#4edea3] transition-all shadow-md shadow-[#10b981]/20 active:scale-95"
            type="button"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </button>

          <a
            href="#about"
            className="w-8 h-8 rounded-full bg-[#1b2028] border border-white/10 flex items-center justify-center text-[#4edea3] hover:border-[#4edea3] transition-colors"
            title="About Derrick"
          >
            <User className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-[#bbcabf] hover:text-white rounded-md hover:bg-[#1b2028] transition-colors"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#090e16]/98 border-b border-white/10 px-4 py-4 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-[#252a33] text-[#4edea3] font-semibold'
                      : 'text-[#bbcabf] hover:bg-[#1b2028] hover:text-[#dee2ee]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#10b981] text-[#003824] font-mono text-xs font-semibold rounded hover:bg-[#4edea3] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Derrick's CV (.PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
