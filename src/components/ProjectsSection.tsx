import React from 'react';
import { ExternalLink, Code, Eye, Rocket, Info } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#090e16]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // PORTFOLIO ARTIFACTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-md mt-2 md:mt-0 leading-relaxed">
            Handcrafted production applications, utility platforms, and community initiatives engineered to solve clear problems.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col rounded-xl bg-[#1b2028] border border-white/5 shadow-xl overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Preview with Category Badge */}
              <div className="relative h-52 overflow-hidden bg-[#252a33]">
                <img
                  src={proj.image}
                  alt={proj.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#090e16]/80 text-[#4edea3] font-mono text-xs backdrop-blur-md border border-white/10">
                  {proj.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                    <span className="text-[#4edea3] font-semibold">{proj.tag}</span>
                    <span className="text-[#86948a]">•</span>
                    <span className="text-[#bbcabf]">Production Ready</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#dee2ee] mb-3 group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-[#bbcabf] mb-4">
                    <p>
                      <strong className="text-white font-medium">Problem:</strong> {proj.problem}
                    </p>
                    <p>
                      <strong className="text-white font-medium">Solution:</strong> {proj.solution}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#252a33] text-[#bbcabf] font-mono text-xs border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-white/5">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-[#dee2ee] font-mono text-xs transition-all flex items-center justify-center gap-1.5 border border-white/5"
                  >
                    <Code className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>GitHub Repo</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(proj)}
                    className="flex-1 text-center py-2 px-3 rounded-lg bg-[#10b981] hover:bg-[#4edea3] text-[#003824] font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                    type="button"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Banner Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#171c24] border border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#252a33] flex items-center justify-center text-[#4edea3] shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-lg font-semibold text-[#dee2ee]">
                  More Systems Under Development
                </span>
                <span className="px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#4edea3] font-mono text-xs font-medium border border-[#4edea3]/30">
                  ROADMAP 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#bbcabf] mt-1">
                Next repos in pipeline: Distributed event queue, offline P2P networking protocols, and a Linux defensive monitoring tool.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-[#4edea3] font-mono text-xs font-semibold flex items-center gap-2 transition-all border border-[#4edea3]/30"
          >
            <Code className="w-4 h-4" />
            <span>Watch on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
