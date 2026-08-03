import React, { useState } from 'react';
import { X, Play, ShieldAlert, CheckCircle2, MessageSquare, ArrowRight, Star, Smartphone, RefreshCw } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenAudit }) => {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [simulatedRating, setSimulatedRating] = useState<number>(5);
  const [demoClientName, setDemoClientName] = useState<string>('Dr. Aris Thorne (Spinal Surgery Patient)');

  if (!isOpen) return null;

  const steps = [
    {
      title: 'Step 1: Automated SMS / WhatsApp Post-Service Trigger',
      desc: 'When a solar installation or surgical procedure is marked complete in your CRM, Vctors automatically sends a 1-tap review invitation via verified WhatsApp or SMS.',
      badge: '98% Open Rate',
    },
    {
      title: 'Step 2: Smart Feedback Gatekeeper (AI Sentiment Routing)',
      desc: 'The customer taps their rating rating first. If they tap 4 or 5 stars, they are instantly redirected to your Google Maps listing. If they tap 1, 2, or 3 stars, they are routed to a private executive feedback form.',
      badge: '100% Google Compliant',
    },
    {
      title: 'Step 3: Private Executive Resolution & Alert',
      desc: 'Negative feedback never hits your Google profile. Instead, your managing director receives an instant SMS & email alert with the patient/client notes so you can resolve it privately.',
      badge: 'Zero Public Scars',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in-50">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Play className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Interactive 2-Minute Engine Walkthrough</h3>
              <p className="text-xs text-slate-400">Test the Gatekeeper &amp; WhatsApp Automation Live</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Interactive Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setDemoStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  demoStep === idx
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 mb-1">{st.badge}</div>
                <div className="text-xs font-bold leading-snug">{st.title}</div>
              </button>
            ))}
          </div>

          {/* Current Step Description */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-base font-bold text-white mb-2">{steps[demoStep].title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{steps[demoStep].desc}</p>
          </div>

          {/* Interactive Phone Simulator */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Live Interactive Sandbox: Try Tapping a Star Rating Below</span>
              </div>
              <button
                onClick={() => setSimulatedRating(5)}
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Sandbox</span>
              </button>
            </div>

            <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
                    VC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Vctors Verification SMS</div>
                    <div className="text-[10px] text-slate-400">Just now · Verified Business</div>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  Delivered
                </span>
              </div>

              <div className="bg-slate-950/80 rounded-xl p-3.5 text-xs text-slate-200 space-y-2">
                <p>
                  Hi <strong>{demoClientName}</strong>, thank you for choosing our clinic today. How would you rate your experience with our team?
                </p>
              </div>

              {/* Star Rating Buttons */}
              <div className="flex items-center justify-center gap-2 py-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setSimulatedRating(star)}
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg transition-all transform hover:scale-110 ${
                      simulatedRating >= star
                        ? 'bg-amber-400/20 border-amber-400 text-amber-400 font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-500'
                    }`}
                    title={`Rate ${star} stars`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* Dynamic Routing Output */}
              {simulatedRating >= 4 ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-1.5 animate-in fade-in-50">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>PUBLIC BOOST ROUTE TRIGGERED (4–5 ★)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Customer selected <strong>{simulatedRating} stars</strong>. The system instantly deep-links them to your Google Business Profile review dialog. Your Google Maps ranking climbs.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs space-y-1.5 animate-in fade-in-50">
                  <div className="flex items-center gap-2 text-rose-300 font-bold">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>PRIVATE GATEKEEPER ROUTE TRIGGERED ({simulatedRating} ★)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Customer selected <strong>{simulatedRating} stars</strong>. Google Maps link is <strong>suppressed</strong>. The customer is shown an executive private feedback form. An urgent SMS alert is dispatched to your managing partner.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer CTA inside Modal */}
          <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Ready to Deploy This Funnel for Your Business?</div>
              <div className="text-xs text-slate-400">Get a complimentary competitor Maps gap audit in 2 minutes.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-105 transition-all flex items-center gap-2 shrink-0"
            >
              <span>Get Free Reputation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
