import React from 'react';

export const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Commenced Degree Program',
      desc: 'Started Bachelor of Science in Software Engineering at the University of Eastern Africa, Baraton. Began foundational coursework in computing theory, object-oriented concepts, and computational problem solving.',
      color: 'bg-[#86948a]',
      badgeColor: 'bg-[#252a33] text-[#dee2ee]'
    },
    {
      year: '2024',
      title: 'Foundations in Web & Mobile',
      desc: 'Developed stronger foundations in programming, relational & document databases, software engineering methodologies, React frontend mechanics, and Flutter cross-platform architecture.',
      color: 'bg-[#4cd7f6]',
      badgeColor: 'bg-[#4cd7f6]/20 text-[#4cd7f6]'
    },
    {
      year: '2025',
      title: 'Real-World Projects & Field Work',
      desc: 'Expanded practical development experience through hands-on project builds, practical operational work, and community initiative deployments (CyberVault).',
      color: 'bg-[#adc6ff]',
      badgeColor: 'bg-[#adc6ff]/20 text-[#adc6ff]'
    },
    {
      year: '2026',
      title: 'Cybersecurity & Cloud Expansion',
      desc: 'Deepening skills in cybersecurity, Linux kernel fundamentals, networking, cloud technologies, advanced full-stack systems, and practical innovation blueprints.',
      color: 'bg-[#4edea3]',
      badgeColor: 'bg-[#4edea3]/20 text-[#4edea3]'
    },
    {
      year: 'CURRENT',
      title: 'Production Readiness & Opportunities',
      desc: 'Continuously building open-source projects, mastering modern distributed technologies, and actively interviewing for software engineering internships and junior developer roles.',
      color: 'bg-[#4edea3]',
      badgeColor: 'bg-[#10b981] text-[#003824]',
      isCurrent: true
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest font-semibold">
            // PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
            My Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-lg mx-auto mt-2 leading-relaxed">
            A disciplined timeline of consistent academic pursuit, project milestones, and self-directed software engineering mastery.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical spine */}
          <div className="absolute top-3 bottom-3 left-2 sm:left-3 w-0.5 bg-[#252a33]" />

          {milestones.map((item, idx) => (
            <div key={idx} className="relative pl-6 group">
              {/* Spine Node Dot */}
              <div
                className={`absolute -left-[19px] sm:-left-[15px] top-1.5 w-4 h-4 rounded-full bg-[#1b2028] border-2 flex items-center justify-center ${
                  item.isCurrent ? 'border-[#4edea3]' : 'border-[#3c4a42]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${item.color} ${item.isCurrent ? 'animate-ping' : ''}`} />
              </div>

              {/* Content Card */}
              <div
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  item.isCurrent
                    ? 'bg-[#252a33] border-[#4edea3]/40 shadow-lg shadow-[#4edea3]/5'
                    : 'bg-[#1b2028] border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold ${item.badgeColor}`}>
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-[#dee2ee]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
