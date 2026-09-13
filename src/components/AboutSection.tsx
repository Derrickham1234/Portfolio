import React from 'react';
import { MapPin, Phone, School, Code2, ShieldAlert, Rocket, Cloud, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  const focusItems = [
    { icon: School, label: 'Studying Software Engineering (UEAB)', color: 'text-[#4edea3]' },
    { icon: Code2, label: 'Building scalable software projects', color: 'text-[#4cd7f6]' },
    { icon: ShieldAlert, label: 'Learning cybersecurity & Linux defense', color: 'text-[#adc6ff]' },
    { icon: Rocket, label: 'Improving full-stack development skills', color: 'text-[#4edea3]' },
    { icon: Cloud, label: 'Exploring cloud and modern architectures', color: 'text-[#4cd7f6]' },
  ];

  return (
    <section id="about" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Narrative & Identity */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest font-semibold mb-2">
              // 01 • IDENTITY & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mb-6">
              About Me
            </h2>

            <div className="p-6 sm:p-8 rounded-xl bg-[#1b2028] border border-white/5 shadow-md mb-6 space-y-4">
              <p className="text-base sm:text-lg text-[#dee2ee] leading-relaxed">
                I’m a Software Engineering undergraduate at the University of Eastern Africa, Baraton, with a growing foundation in full-stack web and mobile application development. I enjoy turning ideas and real-world problems into practical technology solutions.
              </p>
              <p className="text-sm sm:text-base text-[#bbcabf] leading-relaxed">
                My experience includes working with modern development technologies such as React, Node.js, MongoDB, Flutter, Firebase and Git. Beyond writing code, I’m interested in cybersecurity, cloud technologies, software architecture, automation, databases and technology-driven innovation.
              </p>
              <p className="text-sm sm:text-base text-[#bbcabf] leading-relaxed">
                I’m continuously learning, building projects and looking for opportunities where I can contribute, gain real-world experience and grow into a highly capable software engineer.
              </p>
            </div>

            {/* Location & Direct Comms Callout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#252a33] border border-white/5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#171c24] flex items-center justify-center text-[#4edea3]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#bbcabf]">BASE LOCATION</span>
                  <span className="text-lg font-semibold text-[#dee2ee]">Kenya</span>
                </div>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-lg bg-[#252a33] border border-white/5 flex items-center gap-3.5 hover:border-[#4cd7f6]/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#171c24] flex items-center justify-center text-[#4cd7f6] group-hover:bg-[#4cd7f6] group-hover:text-[#003640] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-[#bbcabf]">DIRECT LINE</span>
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#dee2ee] group-hover:text-[#4cd7f6] transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Work Station Image + "Currently" Focus Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Developer Workspace Graphic */}
            <div className="rounded-xl overflow-hidden shadow-xl bg-[#171c24] border border-white/10 relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVl97F8apgiwZQ7Fs1aYri1rPP4HlpLIZDIsW8lav_uGm4SpAb3v36q2D_kwkG-dZ3tyFx78ysBwgyrvMkak_GRBheXT2qGwK3GJzsj8y5NuI53sAFCxt3kbmH08ig5c2uMEpHYzXvuraFPp3lX6X6b66Ak8Zo7EIujqGiw5BGMlqspqXYEfGX56nQdQPWmXLR74Pfuax89dguXJe2j-vwVNW4R3P7xNLiTaDOar3sQTJ_StnueqB"
                alt="Derrick Okoro workstation and developer environment"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#090e16] via-[#090e16]/80 to-transparent">
                <span className="font-mono text-xs text-[#4edea3] uppercase font-semibold">
                  DERRICK OKORO // PORTFOLIO_V2.6
                </span>
                <p className="text-xs text-[#dee2ee] mt-0.5">
                  Software Engineering Student • Builder • Security Enthusiast
                </p>
              </div>
            </div>

            {/* Currently Focus Card */}
            <div className="p-6 rounded-xl bg-[#171c24] border border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <span className="font-mono text-xs text-[#4edea3] uppercase font-bold flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                  ACTIVE FOCUS STACK
                </span>
                <span className="font-mono text-[11px] text-[#86948a]">Q2 2026</span>
              </div>

              <ul className="space-y-2.5">
                {focusItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-[#1b2028] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className={`p-1.5 rounded-md bg-[#252a33] ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#dee2ee] font-medium">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
