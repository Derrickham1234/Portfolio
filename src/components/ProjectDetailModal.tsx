import React from 'react';
import { X, Code, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#090e16]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#1b2028] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#86948a] hover:text-white p-1 rounded-lg hover:bg-[#252a33] transition-colors"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-[#4edea3] font-mono text-xs uppercase font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Deep Dive Inspection</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <span className="inline-block px-2.5 py-0.5 rounded bg-[#252a33] text-[#4cd7f6] font-mono text-xs mb-4 border border-white/5">
          {project.category}
        </span>

        {/* Detailed Overview */}
        <p className="text-sm sm:text-base text-[#bbcabf] leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Architecture Highlights Box */}
        <div className="p-4 rounded-xl bg-[#171c24] border border-white/5 mb-6">
          <span className="font-mono text-xs text-[#4cd7f6] uppercase font-semibold block mb-2">
            Architecture Highlights
          </span>
          <ul className="text-xs sm:text-sm text-[#dee2ee] space-y-2">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#4edea3] mt-0.5">•</span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies used */}
        <div className="mb-6">
          <span className="font-mono text-xs text-[#86948a] uppercase font-semibold block mb-2">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#252a33] text-[#bbcabf] font-mono text-xs border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-[#4edea3] font-mono text-xs font-semibold transition-all border border-[#4edea3]/30"
          >
            <Code className="w-4 h-4" />
            <span>Open GitHub Code</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#171c24] hover:bg-[#252a33] text-[#dee2ee] font-mono text-xs font-medium transition-colors"
            type="button"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
