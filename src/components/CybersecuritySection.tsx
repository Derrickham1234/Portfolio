import React, { useState, useEffect } from 'react';
import { Shield, Lock, Terminal as TerminalIcon, CheckCircle, Activity, Play, Pause } from 'lucide-react';

export const CybersecuritySection: React.FC = () => {
  const [activeScanning, setActiveScanning] = useState(true);
  const [scanTime, setScanTime] = useState(0);

  useEffect(() => {
    if (!activeScanning) return;
    const interval = setInterval(() => {
      setScanTime((t) => (t + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeScanning]);

  const cyberBadges = [
    'Linux Security',
    'Networking Fundamentals',
    'Web Security',
    'Ethical Hacking',
    'Privacy Defense',
    'System Administration',
    'Defensive Security',
    'OWASP Top 10'
  ];

  return (
    <section id="cybersecurity" className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#171c24]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-widest font-semibold">
              // DEFENSIVE POSTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dee2ee] tracking-tight mt-1 mb-5">
              Exploring Cybersecurity
            </h2>
            <p className="text-base sm:text-lg text-[#dee2ee] leading-relaxed mb-6">
              I’m currently expanding my knowledge in cybersecurity, Linux, networking and ethical hacking concepts. My approach is focused on understanding how systems work, how vulnerabilities arise and how secure systems can be designed and defended.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {cyberBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#1b2028] text-[#bbcabf] font-mono text-xs border border-white/5 hover:border-[#4edea3]/40 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Defensive Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#1b2028] border border-white/5">
                <span className="font-mono text-xs text-[#4edea3] font-semibold">AUDIT_PARADIGM</span>
                <p className="text-xs sm:text-sm text-[#bbcabf] mt-1.5 leading-relaxed">
                  Zero-Trust mindset applied from database layer to UI input validation and token handling.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#1b2028] border border-white/5">
                <span className="font-mono text-xs text-[#4cd7f6] font-semibold">NETWORK_LAYER</span>
                <p className="text-xs sm:text-sm text-[#bbcabf] mt-1.5 leading-relaxed">
                  TCP/IP packet diagnostics, secure tunneling, and firewall rule auditing on Linux hosts.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Simulated Security Dashboard Readout */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#090e16] border border-white/10 shadow-2xl p-5 sm:p-6 font-mono text-xs">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#4edea3]" />
                  <span className="text-white font-semibold">
                    Security_Daemon_Inspector.log
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveScanning(!activeScanning)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#1b2028] text-[#bbcabf] hover:text-white"
                    title={activeScanning ? "Pause live scanner" : "Resume live scanner"}
                    type="button"
                  >
                    {activeScanning ? <Pause className="w-3 h-3 text-[#4edea3]" /> : <Play className="w-3 h-3 text-[#ffb4ab]" />}
                    <span className="text-[10px]">{activeScanning ? "LIVE" : "PAUSED"}</span>
                  </button>
                  <span className="px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#4edea3] text-[10px] font-bold">
                    PASSIVE_MONITOR
                  </span>
                </div>
              </div>

              {/* Log stream */}
              <div className="space-y-2.5 text-[#bbcabf] leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="text-[#4edea3] font-bold">[OK]</span>
                  <span>iptables default policy: DROP input on untracked ports</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#4edea3] font-bold">[OK]</span>
                  <span>SSH daemon hardened: PasswordAuthentication disabled, Ed25519 keys enforced</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#4cd7f6] font-bold">[INFO]</span>
                  <span>HTTP security headers: Strict-Transport-Security: max-age=63072000; includeSubDomains</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#4cd7f6] font-bold">[INFO]</span>
                  <span>OWASP sanitize check: SQLi, XSS, and CSRF token validations active</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#adc6ff] font-bold">[AUDIT]</span>
                  <span>Subnet inspection: 192.168.1.0/24 verified • 0 open promiscuous adapters</span>
                </div>
                <div className="flex items-start gap-2 text-[#dee2ee] pt-1">
                  <span className="text-[#4edea3] font-bold">[STATUS]</span>
                  <span className="font-semibold text-white">Security baseline compliant with defensive curriculum.</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[#86948a] text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
                  <span>HEARTBEAT: {scanTime}s elapsed</span>
                </span>
                <span className="text-[#4edea3] font-bold">READY_TO_DEFEND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
