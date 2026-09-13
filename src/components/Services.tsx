import React from 'react';
import { Globe, Smartphone, Database, Cpu, Wrench, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const capabilities = [
    {
      icon: Globe,
      title: 'Web Applications',
      desc: 'Responsive and scalable web applications using modern frontend and backend technologies, intuitive states, and reactive interfaces.',
      tags: ['React', 'Node.js', 'REST APIs'],
      color: 'text-[#4edea3]',
      bgGlow: 'hover:border-[#4edea3]/30'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      desc: 'Mobile applications designed to solve practical problems and provide useful user experiences across iOS and Android ecosystems.',
      tags: ['Flutter', 'Dart', 'Firebase Sync'],
      color: 'text-[#4cd7f6]',
      bgGlow: 'hover:border-[#4cd7f6]/30'
    },
    {
      icon: Database,
      title: 'Database Systems',
      desc: 'Structured database solutions for storing, managing and retrieving application data with integrity, indexing, and scalable models.',
      tags: ['MongoDB', 'SQL Schemas', 'Firebase'],
      color: 'text-[#adc6ff]',
      bgGlow: 'hover:border-[#adc6ff]/30'
    },
    {
      icon: Cpu,
      title: 'Software Solutions',
      desc: 'Custom software solutions designed around specific business or organizational problems, eliminating repetitive human overhead.',
      tags: ['Automation', 'Architecture', 'Integration'],
      color: 'text-[#4edea3]',
      bgGlow: 'hover:border-[#4edea3]/30'
    },
    {
      icon: Wrench,
      title: 'IT & Technology Solutions',
      desc: 'Technology-driven solutions involving systems, networking, automation and digital workflows founded through practical IT leadership.',
      tags: ['Linux Workstations', 'Networks', 'IT Ops'],
      color: 'text-[#4cd7f6]',
      bgGlow: 'hover:border-[#4cd7f6]/30'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity Projects',
      desc: 'Security-focused learning projects and solutions centered around awareness, secure systems, vulnerability analysis, and defensive thinking.',
      tags: ['Linux Hardening', 'Web Sec', 'Defensive Audits'],
      color: 'text-[#adc6ff]',
      bgGlow: 'hover:border-[#adc6ff]/30'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#171c24]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest font-semibold">
              // VALUE DELIVERED
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              What I Can Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-md mt-2 md:mt-0 leading-relaxed">
            Versatile engineering capabilities spanning software development, cross-platform mobile apps, structured data pipelines, and cyber defense.
          </p>
        </div>

        {/* 6 Service/Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.bgGlow} flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg bg-[#252a33] ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#dee2ee] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#bbcabf] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 font-mono text-xs text-[#86948a]">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-[#252a33]/80 text-[#bbcabf]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
