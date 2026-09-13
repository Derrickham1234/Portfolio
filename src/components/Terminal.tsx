import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, CornerDownLeft, Lock, Trash2, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface LogEntry {
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: 'system',
      content: 'Last login: Sun Sep 13 2026 on ttys001. Kernel: Linux 6.8.0-okoro-custom x86_64'
    },
    {
      type: 'system',
      content: 'Welcome to Derrick Okoro’s Portfolio Shell. Type "help" to list available commands.'
    },
    {
      type: 'input',
      content: 'whoami'
    },
    {
      type: 'output',
      content: <span className="text-[#4cd7f6]">{PERSONAL_INFO.name}</span>
    },
    {
      type: 'input',
      content: 'mission'
    },
    {
      type: 'output',
      content: <span className="text-[#4edea3] font-medium">{PERSONAL_INFO.mission}</span>
    }
  ]);

  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [logs]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newLogs: LogEntry[] = [...logs, { type: 'input', content: trimmed }];

    if (lower === 'clear') {
      setLogs([
        {
          type: 'system',
          content: 'Terminal cleared. Type "help" for a list of commands.'
        }
      ]);
      setInput('');
      return;
    }

    let resultNode: React.ReactNode = null;
    let entryType: 'output' | 'error' = 'output';

    switch (lower) {
      case 'whoami':
        resultNode = (
          <div>
            <p className="text-[#4cd7f6] font-semibold">{PERSONAL_INFO.name}</p>
            <p className="text-[#bbcabf] text-xs mt-0.5">{PERSONAL_INFO.title}</p>
          </div>
        );
        break;

      case 'role':
        resultNode = (
          <p className="text-[#dee2ee]">
            Software Engineering Undergraduate @ Univ. of Eastern Africa, Baraton (UEAB)
          </p>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-1">
            <p className="text-[#4edea3] font-medium">Core Stack:</p>
            <p className="text-[#bbcabf]">
              React, Node.js, Express, MongoDB, Flutter, Dart, Firebase, REST APIs, Git, Linux, Cybersecurity
            </p>
          </div>
        );
        break;

      case 'mission':
        resultNode = (
          <p className="text-[#4edea3] font-medium italic">{PERSONAL_INFO.mission}</p>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-0.5 text-xs sm:text-sm">
            <p className="text-[#dee2ee]">
              Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#4cd7f6] underline">{PERSONAL_INFO.email}</a>
            </p>
            <p className="text-[#dee2ee]">
              Phone: <span className="text-[#4edea3]">{PERSONAL_INFO.phone}</span>
            </p>
            <p className="text-[#dee2ee]">
              Location: <span className="text-[#adc6ff]">{PERSONAL_INFO.location}</span>
            </p>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-[#4edea3] font-semibold">Featured Repositories & Initiatives:</p>
            <p className="text-[#bbcabf]">
              1. <strong className="text-white">E-Commerce Web App:</strong> React, Node.js, MongoDB (Full-Stack)
            </p>
            <p className="text-[#bbcabf]">
              2. <strong className="text-white">Mobile Attendance App:</strong> Flutter & Firebase Cloud Sync
            </p>
            <p className="text-[#bbcabf]">
              3. <strong className="text-white">CyberVault IT Centre:</strong> Hardware, OS Hardening & Security Awareness
            </p>
          </div>
        );
        break;

      case 'cat about.txt':
      case 'about':
        resultNode = (
          <p className="text-[#bbcabf] leading-relaxed text-xs sm:text-sm">
            {PERSONAL_INFO.bio}
          </p>
        );
        break;

      case 'education':
        resultNode = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-[#4edea3]">• BSc Software Engineering (2023–Present) @ Univ. of Eastern Africa, Baraton</p>
            <p className="text-[#4cd7f6]">• KCSE Grade B+ (71 points) @ St James Namamba High</p>
            <p className="text-[#adc6ff]">• KCPE Grade B- (320 marks) @ St. Mary’s Ebusambe Primary</p>
          </div>
        );
        break;

      case 'ls':
        resultNode = (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs text-[#4cd7f6]">
            <span>about.txt</span>
            <span>projects/</span>
            <span>skills.json</span>
            <span>curriculum_vitae.pdf</span>
            <span>defense_audit.log</span>
            <span>credentials.pem</span>
          </div>
        );
        break;

      case 'date':
        resultNode = <p className="text-[#bbcabf]">{new Date().toUTCString()}</p>;
        break;

      case 'help':
        resultNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#4cd7f6] font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-[#dee2ee]">
              <span><strong className="text-[#4edea3]">whoami</strong> - Author identity</span>
              <span><strong className="text-[#4edea3]">role</strong> - Current position</span>
              <span><strong className="text-[#4edea3]">skills</strong> - Technical competencies</span>
              <span><strong className="text-[#4edea3]">projects</strong> - Key artifacts</span>
              <span><strong className="text-[#4edea3]">mission</strong> - Engineering ethos</span>
              <span><strong className="text-[#4edea3]">education</strong> - Academic track</span>
              <span><strong className="text-[#4edea3]">contact</strong> - Comms endpoints</span>
              <span><strong className="text-[#4edea3]">about</strong> - Narrative summary</span>
              <span><strong className="text-[#4edea3]">ls</strong> - List directories</span>
              <span><strong className="text-[#4edea3]">date</strong> - System time</span>
              <span><strong className="text-[#ffb4ab]">clear</strong> - Wipe screen</span>
            </div>
          </div>
        );
        break;

      default:
        entryType = 'error';
        resultNode = (
          <span className="text-[#ffb4ab]">
            bash: command not found: {trimmed}. Type <strong className="text-[#4edea3] underline cursor-pointer" onClick={() => executeCommand('help')}>help</strong> for valid commands.
          </span>
        );
        break;
    }

    newLogs.push({ type: entryType, content: resultNode });
    setLogs(newLogs);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const quickCommands = ['whoami', 'role', 'skills', 'mission', 'contact', 'projects', 'education', 'help', 'clear'];

  return (
    <section id="terminal" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
            // CLI INTERFACE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1">
            Interactive Developer Shell
          </h2>
          <p className="text-sm sm:text-base text-[#bbcabf] max-w-xl mt-2">
            Test interactive Unix commands or click fast shortcuts to query system credentials and runtime configuration directly.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-xl overflow-hidden bg-[#090e16] border border-white/10 shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="bg-[#171c24] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#4cd7f6] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#4edea3] inline-block opacity-80" />
              <span className="ml-2 font-mono text-xs text-[#bbcabf]">
                derrick@baraton-workstation: ~ (zsh)
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#86948a]">
              <Lock className="w-3 h-3 text-[#4edea3]" />
              <span>SSH-2.0-PORTFOLIO</span>
            </div>
          </div>

          {/* Quick Command Action Bar */}
          <div className="bg-[#1b2028] px-4 py-2 flex flex-wrap items-center gap-1.5 border-b border-white/5">
            <span className="font-mono text-[11px] text-[#86948a] mr-1 hidden sm:inline">
              Quick Tokens:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className={`px-2.5 py-1 rounded font-mono text-xs transition-all ${
                  cmd === 'clear'
                    ? 'bg-[#252a33] text-[#ffb4ab] hover:bg-[#ffb4ab] hover:text-[#690005]'
                    : cmd === 'help'
                    ? 'bg-[#252a33] text-[#4cd7f6] hover:bg-[#4cd7f6] hover:text-[#003640]'
                    : 'bg-[#252a33] text-[#dee2ee] hover:bg-[#4edea3] hover:text-[#003824]'
                }`}
                type="button"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Log Screen */}
          <div
            ref={screenRef}
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] h-80 sm:h-96 overflow-y-auto space-y-2 select-text cursor-text bg-[#090e16]"
          >
            {logs.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                {log.type === 'system' && (
                  <div className="text-[#86948a] text-[11px] pb-1 border-b border-white/5">
                    {log.content}
                  </div>
                )}
                {log.type === 'input' && (
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-[#4edea3]">derrick@okoro:~$</span>
                    <span>{log.content}</span>
                  </div>
                )}
                {log.type === 'output' && (
                  <div className="pl-4 sm:pl-6 text-[#bbcabf] my-1">
                    {log.content}
                  </div>
                )}
                {log.type === 'error' && (
                  <div className="pl-4 sm:pl-6 my-1">
                    {log.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#171c24] px-4 py-3 flex items-center gap-2 border-t border-white/5"
          >
            <span className="text-[#4edea3] font-bold font-mono text-xs sm:text-sm shrink-0">
              derrick@okoro:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (e.g., help, whoami, skills)..."
              className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-[#86948a]"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="p-1 rounded text-[#4edea3] hover:text-[#6ffbbe] transition-colors"
              title="Execute"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
