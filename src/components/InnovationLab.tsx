import React from 'react';
import { Printer, WifiOff, Building2, FileCheck2, AlertTriangle, FlaskConical } from 'lucide-react';
import { INNOVATION_DATA } from '../data/portfolioData.ts';

export const InnovationLab: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'print': return Printer;
      case 'wifi_off': return WifiOff;
      case 'apartment': return Building2;
      case 'fact_check': return FileCheck2;
      case 'sos': return AlertTriangle;
      default: return FlaskConical;
    }
  };

  return (
    <section id="innovation" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest font-semibold">
              // R&D BLUEPRINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              Innovation Lab • Ideas I’m Exploring
            </h2>
          </div>
          <div className="mt-4 md:mt-0 px-3 py-1.5 rounded-lg bg-[#4cd7f6]/15 text-[#4cd7f6] font-mono text-xs flex items-center gap-2 border border-[#4cd7f6]/30 self-start md:self-auto">
            <FlaskConical className="w-4 h-4" />
            <span>Concept / Research Stage</span>
          </div>
        </div>

        {/* Innovation Cards (5 Ideas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INNOVATION_DATA.map((item) => {
            const Icon = getIcon(item.icon);
            const isBeacon = item.id === 'beacon';

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-7 rounded-xl bg-[#1b2028] border border-white/5 shadow-md flex flex-col justify-between hover:border-white/20 transition-all ${
                  item.spanCol ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-semibold ${
                      isBeacon ? 'text-[#ffb4ab]' : 'text-[#4edea3]'
                    }`}>
                      {item.category}
                    </span>
                    <Icon className={`w-5 h-5 ${
                      isBeacon ? 'text-[#ffb4ab]' : 'text-[#4edea3]'
                    }`} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#dee2ee] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#bbcabf] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#86948a]">{item.techDomain}</span>
                  <span className={`font-medium ${
                    isBeacon ? 'text-[#ffb4ab]' : 'text-[#4edea3]'
                  }`}>
                    {item.statusBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
