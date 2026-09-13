import React from 'react';
import { Brain, Layers, Hammer, RefreshCw, Quote } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Methodology: React.FC = () => {
  const steps = [
    {
      num: '01 • Understand',
      title: 'Deconstruct the Reality',
      desc: 'Understand the real problem before writing code. Clarify user bottlenecks, constraints, and success criteria.',
      icon: Brain,
      color: 'text-[#4edea3]',
      borderHover: 'hover:border-[#4edea3]/40'
    },
    {
      num: '02 • Design',
      title: 'Modular Blueprint',
      desc: 'Break complex problems into simple, practical components with clean interfaces and solid data models.',
      icon: Layers,
      color: 'text-[#4cd7f6]',
      borderHover: 'hover:border-[#4cd7f6]/40'
    },
    {
      num: '03 • Build',
      title: 'Iterate & Validate',
      desc: 'Develop, test and improve the solution. Write clean code with rapid telemetry and verifiable edge cases.',
      icon: Hammer,
      color: 'text-[#adc6ff]',
      borderHover: 'hover:border-[#adc6ff]/40'
    },
    {
      num: '04 • Learn',
      title: 'Audit & Elevate',
      desc: 'Evaluate what worked, what didn’t and how the solution can become faster, more secure, and easier to maintain.',
      icon: RefreshCw,
      color: 'text-[#4edea3]',
      borderHover: 'hover:border-[#4edea3]/40'
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#090e16]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
            // METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
            How I Approach Problems
          </h2>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-xl mt-2 leading-relaxed">
            Writing code is simply the realization phase. Engineering starts with empathy, analytical scrutiny, and deliberate design.
          </p>
        </div>

        {/* 4-Step Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-[#1b2028] border border-white/5 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 ${step.borderHover}`}
              >
                <div>
                  <span className={`font-mono text-xs font-bold ${step.color}`}>
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[#dee2ee] mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className={`mt-6 pt-4 border-t border-white/5 flex justify-end ${step.color}`}>
                  <Icon className="w-7 h-7 opacity-80" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mindset Quote Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#252a33] via-[#1b2028] to-[#252a33] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Quote className="w-10 h-10 text-[#4edea3] shrink-0 mt-1 opacity-80" />
            <div>
              <blockquote className="text-lg sm:text-xl text-[#dee2ee] font-medium italic">
                {PERSONAL_INFO.mission}
              </blockquote>
              <span className="font-mono text-xs text-[#bbcabf] uppercase mt-2 block">
                — Derrick Okoro • Software Engineering Principle
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#adc6ff]" />
          </div>
        </div>
      </div>
    </section>
  );
};
