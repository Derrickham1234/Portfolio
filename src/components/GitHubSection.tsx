import React from 'react';
import { FolderGit2, Star, GitFork, Terminal as TerminalIcon } from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData.ts';

export const GitHubSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#171c24]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // OPEN SOURCE TELEMETRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dee2ee] mt-1">
              Explore My Code • GitHub Repositories
            </h2>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-[#4edea3] font-mono text-xs font-semibold transition-all border border-white/5"
          >
            <TerminalIcon className="w-4 h-4" />
            <span>@derrickokoro on GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GITHUB_REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#1b2028] border border-white/5 shadow-sm hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm sm:text-base font-semibold text-[#4cd7f6] hover:underline flex items-center gap-2"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>{repo.name}</span>
                  </a>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#252a33] text-[#bbcabf] border border-white/5">
                    Public
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#bbcabf] mb-6 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-[#86948a] pt-3 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
