import React, { useState } from 'react';
import { X, Sparkles, Building2, MapPin, Star, Mail, Phone, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { IndustryType } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [businessName, setBusinessName] = useState<string>('');
  const [industry, setIndustry] = useState<IndustryType>('solar');
  const [location, setLocation] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in-50">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Claim Free Reputation &amp; ROI Audit</h3>
              <p className="text-xs text-slate-400">Executive Confidential Google Maps Benchmarking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close audit modal"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Enter your business details below to generate a comprehensive 25-km Google Maps competitor review gap report and 90-day review growth roadmap.
              </p>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Business / Agency Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Arnergy & SunPeak Power Nigeria"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Industry Category *</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value as IndustryType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="solar">Solar &amp; Inverter EPC (Lagos / Abuja)</option>
                    <option value="medical">Medical, Surgical &amp; Specialty Care</option>
                    <option value="legal">Senior Advocate &amp; Corporate Law</option>
                    <option value="real_estate">Ikoyi / Lekki / Abuja Luxury Real Estate</option>
                    <option value="automotive">European Automotive &amp; Dealership Service</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>City &amp; State *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Victoria Island, Lagos"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Work Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@business.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>WhatsApp / Direct Mobile *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 555 0199"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 min-h-[52px] rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 shadow-xl shadow-amber-500/20 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Dispatch Free 90-Day Audit &amp; SMS Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Audit Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Our algorithm is auditing <strong className="text-white">{businessName || 'your business'}</strong> in{' '}
                <strong className="text-white">{location || 'your market'}</strong> against the Top-3 Google Maps competitors. We have sent confirmation to <strong className="text-amber-400">{email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
                >
                  Return to Vctors
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
