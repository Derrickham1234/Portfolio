import React, { useRef } from 'react';
import { X, Download, Printer, CheckCircle, MapPin, Mail, Phone, Globe, Award, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData.ts';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    // Generate text/markdown dossier data blob for reliable instant download
    const dossierContent = `DERRICK OKORO - CURRICULUM VITAE
Software Engineering Undergraduate | Software Developer | IT
--------------------------------------------------
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
- BSc Software Engineering (2023 - Present)
  University of Eastern Africa, Baraton (UEAB)
- KCSE Certificate (Class of 2021) - Grade B+ (71 points)
  St James Namamba Boy's High School
- KCPE Certificate (Class of 2017) - Grade B- (320 marks)
  St. Mary's Ebusambe Primary School

TECHNICAL SKILLS:
- Frontend: React, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS
- Backend & Databases: Node.js, Express, MongoDB, REST APIs, SQL
- Mobile: Flutter, Dart, Firebase Firestore & Auth
- Systems & Tools: Git, GitHub, Linux, Bash, System Administration
- Cybersecurity: Network Security, OWASP Top 10, Defensive Auditing

FEATURED PROJECTS:
1. E-Commerce Web Application (React, Node.js, MongoDB, REST API)
   - Full-stack web application with cart persistence and JWT authentication.
2. Mobile Attendance Application (Flutter, Firebase, Dart)
   - Offline-capable roll call system with cloud sync.
3. CyberVault IT Centre
   - Founder & Operator: OS hardening, computer maintenance, security hygiene.

PROFESSIONAL EXPERIENCE:
1. Daja Construction Company (Eldoret, Kenya | May 2025 - Sep 2025)
   - Construction Site Helper: Heavy materials, physical endurance, multi-team coordination.
2. General Shop CEO (Kakamega, Kenya | Aug 2022 - Aug 2023)
   - Shop Attendant & Bread Distributor: Retail operations, inventory auditing, logistics.
3. Airtel Dealer (Mumias, Kenya | May 2022 - Aug 2022)
   - SIM Card Distributor: Regulatory KYC verification, airtime reconciliation, sales.

REFERENCES:
Available upon request.
`;

    const blob = new Blob([dossierContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Derrick_Okoro_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090e16]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#1b2028] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#171c24] border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] inline-block animate-pulse" />
            <h3 className="font-mono text-sm sm:text-base font-semibold text-white">
              Curriculum Vitae • Derrick Okoro
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-md bg-[#252a33] text-[#bbcabf] hover:text-white hover:bg-[#30353e] transition-colors"
              title="Print CV"
              type="button"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadPdf}
              className="px-3 py-1.5 rounded-md bg-[#10b981] text-[#003824] font-mono text-xs font-semibold hover:bg-[#4edea3] transition-colors flex items-center gap-1.5"
              type="button"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Document</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#86948a] hover:text-white hover:bg-[#252a33] transition-colors ml-2"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div ref={printRef} className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#0f141c] text-[#dee2ee]">
          {/* Header Title */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#4edea3] mt-1 font-medium">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#bbcabf] mt-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4edea3]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#4cd7f6]" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#adc6ff]" />
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#4edea3] font-bold">
              // PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
              {PERSONAL_INFO.bio} Focused on engineering scalable web architectures, cross-platform mobile solutions, structured database design, and defensive cyber postures. Proven resilience, high operational discipline, and practical problem-solving mindset.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#4cd7f6] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>// EDUCATION</span>
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-lg bg-[#171c24] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{edu.degree}</h3>
                    <p className="text-xs text-[#bbcabf]">{edu.institution}</p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs">
                    <span className="text-[#4edea3] font-medium block">{edu.year}</span>
                    <span className="text-[#86948a] text-[11px]">{edu.gradeBadge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#adc6ff] font-bold flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>// CORE TECHNICAL PROFICIENCIES</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.id} className="p-2.5 rounded bg-[#171c24] border border-white/5">
                  <span className="text-xs font-semibold text-white block">{skill.name}</span>
                  <span className="font-mono text-[10px] text-[#4edea3]">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#4edea3] font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>// WORK HISTORY & RESPONSIBILITIES</span>
            </h2>
            <div className="space-y-3">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="p-4 rounded-lg bg-[#171c24] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                      <p className="text-xs text-[#4cd7f6]">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-[#86948a] mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#bbcabf] pt-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#4edea3]">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#171c24] border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#86948a]">
          <span>Verified dossier timestamp: 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#252a33] text-[#dee2ee] hover:bg-[#30353e] hover:text-white transition-colors"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
