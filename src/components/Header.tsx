import React, { useState, useEffect } from 'react';
import { Shield, Star, Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenAuditModal: () => void;
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditModal, onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#features' },
    { label: 'The Cost of 3.8★', href: '#pain-vs-solution' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Free Audit', href: '#audit-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-slate-950/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Agency Trust Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-6 h-6 text-slate-950 fill-slate-950/20" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center">
                <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">Vctors</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  B2B
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Google Maps Reputation & Review Engine
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Watch 2-Min Demo</span>
            </button>

            <a
              href="#audit-section"
              onClick={onOpenAuditModal}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:brightness-105 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Get Free Reputation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#audit-section"
              onClick={onOpenAuditModal}
              className="px-3 py-2 min-h-[44px] flex items-center justify-center text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg shadow active:scale-95 transition-transform"
            >
              Free Audit
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-3 px-3 min-h-[44px] flex items-center rounded-lg hover:bg-slate-900/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 px-4 min-h-[48px] rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Watch 2-Min Interactive Demo</span>
            </button>

            <a
              href="#audit-section"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3.5 px-4 min-h-[48px] rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform"
            >
              <span>Claim Free Reputation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
