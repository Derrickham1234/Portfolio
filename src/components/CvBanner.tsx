import React from 'react';
import { Download, FileText } from 'lucide-react';

interface CvBannerProps {
  onOpenCvModal: () => void;
}

export const CvBanner: React.FC<CvBannerProps> = ({ onOpenCvModal }) => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0f141c]">
      <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-[#252a33] via-[#1b2028] to-[#252a33] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FileText className="w-4 h-4 text-[#4edea3]" />
            <span className="font-mono text-xs text-[#4edea3] uppercase font-bold tracking-wider">
              // COMPREHENSIVE DOSSIER
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#dee2ee] mt-2">
            Want the complete picture?
          </h3>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-lg mt-2 leading-relaxed">
            Download my CV to see my education, technical skills, experience, project architecture records, and professional background.
          </p>
        </div>

        <button
          onClick={onOpenCvModal}
          className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#10b981] text-[#003824] font-mono text-xs sm:text-sm font-semibold hover:bg-[#4edea3] transition-all shadow-lg shadow-[#10b981]/20 active:scale-95"
          type="button"
        >
          <Download className="w-4 h-4" />
          <span>Download Full CV (.PDF)</span>
        </button>
      </div>
    </section>
  );
};
