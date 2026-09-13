import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData.ts';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'mobile' | 'systems' | 'cyber'>('all');

  const filterTabs = [
    { label: 'All Domains', value: 'all' as const },
    { label: 'Frontend', value: 'frontend' as const },
    { label: 'Backend & DB', value: 'backend' as const },
    { label: 'Mobile', value: 'mobile' as const },
    { label: 'Systems & Tools', value: 'systems' as const },
    { label: 'Cybersecurity', value: 'cyber' as const },
  ];

  const filteredSkills = activeFilter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.domain === activeFilter);

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Hands-on':
        return {
          pill: 'bg-[#4edea3]/20 text-[#4edea3] border-[#4edea3]/30',
          bar: 'bg-[#4edea3]'
        };
      case 'Intermediate':
        return {
          pill: 'bg-[#4cd7f6]/20 text-[#4cd7f6] border-[#4cd7f6]/30',
          bar: 'bg-[#4cd7f6]'
        };
      case 'Working Knowledge':
        return {
          pill: 'bg-[#adc6ff]/20 text-[#adc6ff] border-[#adc6ff]/30',
          bar: 'bg-[#adc6ff]'
        };
      case 'Learning':
      default:
        return {
          pill: 'bg-[#252a33] text-[#86948a] border-white/10',
          bar: 'bg-[#86948a]'
        };
    }
  };

  return (
    <section id="skills" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // REPERTOIRE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              My Technical Stack
            </h2>
          </div>

          {/* Proficiency Legend */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-md bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/30">
              Hands-on
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#4cd7f6]/20 text-[#4cd7f6] border border-[#4cd7f6]/30">
              Intermediate
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#adc6ff]/20 text-[#adc6ff] border border-[#adc6ff]/30">
              Working Knowledge
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#252a33] text-[#bbcabf] border border-white/10">
              Learning
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 overflow-x-auto mb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
                activeFilter === tab.value
                  ? 'bg-[#4edea3] text-[#003824] font-semibold shadow-md shadow-[#4edea3]/20'
                  : 'bg-[#1b2028] text-[#bbcabf] hover:bg-[#252a33] hover:text-white border border-white/5'
              }`}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const style = getLevelStyle(skill.level);
            return (
              <div
                key={skill.id}
                className="p-5 rounded-xl bg-[#1b2028] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-[#dee2ee] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[11px] border ${style.pill}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#bbcabf] mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Visual */}
                <div className="w-full bg-[#252a33] rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`${style.bar} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
