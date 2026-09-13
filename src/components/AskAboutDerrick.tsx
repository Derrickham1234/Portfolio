import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Cpu } from 'lucide-react';
import { FAQ_DATA } from '../data/portfolioData.ts';

export const AskAboutDerrick: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentFaq = FAQ_DATA[selectedIndex] || FAQ_DATA[0];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#171c24]/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs uppercase tracking-wider font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>// INSTANT INTEL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dee2ee] mt-1">
              Ask About Derrick
            </h2>
          </div>
          <p className="text-sm text-[#bbcabf] max-w-md mt-2 md:mt-0 leading-relaxed">
            Click any inquiry query below to view quick validated facts about Derrick’s background, skills, and current initiatives.
          </p>
        </div>

        {/* Quick Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Buttons Rail */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {FAQ_DATA.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-4 rounded-lg font-mono text-xs sm:text-sm flex items-center justify-between transition-all border ${
                    isSelected
                      ? 'bg-[#252a33] text-white border-[#4edea3]/40 shadow-md shadow-[#4edea3]/5 translate-x-1'
                      : 'bg-[#1b2028] text-[#bbcabf] border-white/5 hover:bg-[#252a33] hover:text-[#dee2ee]'
                  }`}
                  type="button"
                >
                  <span className="font-medium pr-2">
                    {idx + 1}. {item.question}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#4edea3] translate-x-0.5' : 'text-[#86948a]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Dynamic Answer Display Pane */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#1b2028] border border-white/10 shadow-xl relative min-h-[220px] flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#4edea3] font-mono text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span className="uppercase tracking-wider font-semibold">
                  {currentFaq.topic}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#dee2ee] mb-4">
                {currentFaq.question}
              </h3>
              <p className="text-base sm:text-lg text-[#bbcabf] leading-relaxed">
                {currentFaq.answer}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[#86948a] font-mono text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                <span>Query response cached • Status: OK (200)</span>
              </span>
              <span className="text-[#4edea3] font-semibold">sys.okoro.intel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
