import React from 'react';
import { School, Award, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData.ts';

export const EducationSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'school': return School;
      case 'workspace_premium': return Award;
      default: return BookOpen;
    }
  };

  return (
    <section id="education" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest font-semibold">
              // CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              Education & Background
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-md mt-2 md:mt-0 leading-relaxed">
            Strong academic foundations in software engineering and competitive analytical distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu) => {
            const Icon = getIcon(edu.icon);
            return (
              <div
                key={edu.id}
                className="p-6 sm:p-7 rounded-xl bg-[#1b2028] border border-white/5 shadow-md flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg bg-[#252a33] flex items-center justify-center mb-4 ${
                    edu.accentColor === 'primary' ? 'text-[#4edea3]' :
                    edu.accentColor === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#adc6ff]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`font-mono text-xs font-bold ${
                    edu.accentColor === 'primary' ? 'text-[#4edea3]' :
                    edu.accentColor === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#adc6ff]'
                  }`}>
                    {edu.year}
                  </span>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#dee2ee] mt-1 mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4cd7f6] font-mono mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 font-mono text-xs ${
                  edu.accentColor === 'primary' ? 'text-[#4edea3]' :
                  edu.accentColor === 'secondary' ? 'text-[#4cd7f6]' : 'text-[#adc6ff]'
                }`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{edu.gradeBadge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
