import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Download, MapPin, GraduationCap, Terminal as TerminalIcon, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const engineer = {
  name: "Derrick Okoro",
  degree: "BSc Software Engineering",
  institution: "Univ. of Eastern Africa, Baraton",
  location: "Kenya",
  coreStack: [
    "React", "Node.js", "Flutter", 
    "MongoDB", "Firebase", "Linux"
  ],
  passions: ["DSA", "Cybersecurity", "Automation"],
  readyToBuild: true,
  contact: "derrickhambarasa@gmail.com",
  execute: function() {
    return "Solving problems with resilient code.";
  }
};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative w-full pt-12 pb-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4edea3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Hero Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b2028] border border-white/10 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4edea3]" />
            </span>
            <span className="font-mono text-xs text-[#4edea3] tracking-wide uppercase font-medium">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#dee2ee] tracking-tight leading-[1.15] mb-6">
            Building Software.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4edea3] via-[#4cd7f6] to-[#adc6ff]">
              Solving Problems.
            </span><br />
            Creating What’s Next.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#bbcabf] max-w-2xl mb-8 leading-relaxed">
            I’m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Software Engineering undergraduate passionate about building practical software solutions that solve real-world challenges with robust architecture, full-stack systems, and cybersecurity in mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#4edea3] text-[#003824] font-mono text-xs sm:text-sm font-semibold hover:bg-[#6ffbbe] transition-all shadow-lg shadow-[#4edea3]/20 active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#252a33] text-[#dee2ee] font-mono text-xs sm:text-sm hover:bg-[#30353e] hover:text-white transition-all border border-white/5 active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1b2028] text-[#4cd7f6] font-mono text-xs sm:text-sm hover:bg-[#252a33] transition-all border border-[#4cd7f6]/20 active:scale-95"
              type="button"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Quick Telemetry Bar */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#bbcabf]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4edea3]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#4cd7f6]" />
              <span>UEAB • BSc Software Eng</span>
            </div>
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#adc6ff]" />
              <span>Full-Stack & Security</span>
            </div>
          </div>
        </div>

        {/* Right Visual Column: Interactive Glassmorphic IDE Pane */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-xl bg-[#171c24] border border-white/10 shadow-2xl overflow-hidden group">
            {/* Code Editor Chrome Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#090e16] border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#4cd7f6] inline-block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#4edea3] inline-block opacity-80" />
                <div className="flex items-center gap-1.5 text-[#bbcabf] font-mono text-xs ml-2">
                  <span className="text-[#4edea3]">&gt;</span>
                  <span>derrick_profile.ts</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="p-1 rounded text-[#86948a] hover:text-[#4edea3] transition-colors"
                  title="Copy snippet"
                  type="button"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <span className="font-mono text-[11px] text-[#86948a]">v2.6.4</span>
              </div>
            </div>

            {/* Editor Body with Code Highlight */}
            <div className="p-4 bg-[#171c24]/90 overflow-x-auto">
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#dee2ee]">
                <code>
                  <span className="text-[#4cd7f6]">const</span> <span className="text-[#adc6ff]">engineer</span> = &#123;{'\n'}
                  {'  '}<span className="text-[#bbcabf]">name</span>: <span className="text-[#4edea3]">"Derrick Okoro"</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">degree</span>: <span className="text-[#4edea3]">"BSc Software Engineering"</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">institution</span>: <span className="text-[#4edea3]">"Univ. of Eastern Africa, Baraton"</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">location</span>: <span className="text-[#4edea3]">"Kenya"</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">coreStack</span>: [{'\n'}
                  {'    '}<span className="text-[#d8e2ff]">"React"</span>, <span className="text-[#d8e2ff]">"Node.js"</span>, <span className="text-[#d8e2ff]">"Flutter"</span>,{'\n'}
                  {'    '}<span className="text-[#d8e2ff]">"MongoDB"</span>, <span className="text-[#d8e2ff]">"Firebase"</span>, <span className="text-[#d8e2ff]">"Linux"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-[#bbcabf]">passions</span>: [<span className="text-[#4cd7f6]">"DSA"</span>, <span className="text-[#4cd7f6]">"Cybersecurity"</span>, <span className="text-[#4cd7f6]">"Automation"</span>],{'\n'}
                  {'  '}<span className="text-[#bbcabf]">readyToBuild</span>: <span className="text-[#4edea3]">true</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">contact</span>: <span className="text-[#4edea3]">"derrickhambarasa@gmail.com"</span>,{'\n'}
                  {'  '}<span className="text-[#bbcabf]">execute</span>: <span className="text-[#4cd7f6]">function</span>() &#123;{'\n'}
                  {'    '}<span className="text-[#4cd7f6]">return</span> <span className="text-[#4edea3]">"Solving problems with resilient code."</span>;{'\n'}
                  {'  '}&#125;{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Embedded Live Diagnostic Card */}
            <div className="m-3 p-3 rounded-lg bg-[#1b2028] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#252a33] flex items-center justify-center text-[#4edea3]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#bbcabf] font-semibold tracking-wider">RUNTIME_STATUS</span>
                  <span className="font-mono text-xs text-[#4edea3] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] inline-block animate-ping" />
                    ALL_SYSTEMS_OPERATIONAL
                  </span>
                </div>
              </div>
              <a
                href="#terminal"
                className="px-3 py-1 rounded bg-[#252a33] hover:bg-[#4edea3] hover:text-[#003824] font-mono text-xs text-[#dee2ee] transition-all flex items-center gap-1 border border-white/5"
              >
                <span>Open Shell</span>
                <span className="text-xs">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
