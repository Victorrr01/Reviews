import React from 'react';
import { Shield, Star, ArrowRight, PhoneCall, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenDemoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal, onOpenDemoModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      {/* Top Banner CTA inside footer */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              Ready to Own Your Google Maps Market?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start Generating Verified 5-Star Reviews Within 24 Hours
            </h3>
            <p className="text-sm text-slate-300">
              No contracts. Dedicated account manager. 100% HIPAA and Google Terms of Service compliant.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Watch Interactive Demo
            </button>
            <a
              href="#audit-section"
              onClick={onOpenAuditModal}
              className="px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all flex items-center gap-2"
            >
              <span>Get Free Reputation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
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
                <p className="text-[11px] text-slate-400 font-medium">Google Maps Reputation &amp; Review Engine</p>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Vctors is the enterprise review automation &amp; local SEO growth platform built exclusively for high-ticket service operations across Solar, Surgery, Legal, Luxury Real Estate, and Automotive dealerships.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  WhatsApp &amp; SMS Funnels
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Smart Gatekeeper Routing
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Google Maps 3-Pack SEO
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  HBR Revenue Loss Calculator
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Client Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  Solar &amp; Clean Energy EPC
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  Medical Surgery &amp; Specialty Care
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  Personal Injury &amp; Trial Law
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  Luxury Real Estate Brokerages
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  European Automotive Dealerships
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Plot 14, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+23412710192" className="hover:text-white transition-colors">
                  +234 1 271 0192
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:exec@vctorsb2b.com" className="hover:text-white transition-colors">
                  exec@vctorsb2b.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Vctors B2B Technologies Inc. All rights reserved. Google Business Profile &amp; Google Maps are registered trademarks of Google LLC.
          </div>

          <div className="flex items-center gap-6">
            <a href="#audit-section" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#audit-section" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#audit-section" className="hover:text-slate-300 transition-colors">
              HIPAA Disclosures
            </a>
            <a href="#audit-section" className="hover:text-slate-300 transition-colors">
              Security &amp; Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
