import React from 'react';
import { Briefcase, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData.ts';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#090e16]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // WORK HISTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-md mt-2 md:mt-0 leading-relaxed">
            Practical track record demonstrating grit, accountability, customer empathy, and operational rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#86948a]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#bbcabf]" />
                    {exp.location}
                  </span>
                  <span className={`font-medium ${
                    exp.accentColor === 'primary' ? 'text-[#4edea3]' :
                    exp.accentColor === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#adc6ff]'
                  }`}>
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#dee2ee] mb-1">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-[#4cd7f6] block mb-4">
                  {exp.company}
                </span>

                <ul className="space-y-2 text-xs sm:text-sm text-[#bbcabf]">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className={`text-xs mt-1 ${
                        exp.accentColor === 'primary' ? 'text-[#4edea3]' :
                        exp.accentColor === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#adc6ff]'
                      }`}>•</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[11px] text-[#86948a]">
                <CheckCircle className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>{exp.badges.join(' • ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
