import React, { useState } from 'react';
import {
  Smartphone,
  ShieldAlert,
  MapPin,
  BellRing,
  CheckCircle2,
  ArrowRight,
  Send,
  Star,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';
import { FEATURE_ITEMS } from '../data/mockData';

export const FeatureGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('whatsapp-sms-funnel');
  const [simulatedRating, setSimulatedRating] = useState<number | null>(null);
  const [smsSent, setSmsSent] = useState<boolean>(true);
  const [customPhone, setCustomPhone] = useState<string>('+234 803 555 0188');

  const activeFeature = FEATURE_ITEMS.find((f) => f.id === activeTab) || FEATURE_ITEMS[0];

  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-5 h-5 text-amber-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    MapPin: <MapPin className="w-5 h-5 text-amber-400" />,
    BellRing: <BellRing className="w-5 h-5 text-amber-400" />,
  };

  const handleTestSms = () => {
    setSmsSent(false);
    setTimeout(() => setSmsSent(true), 300);
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Automated 4-Pillar Reputation Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Built for Managing Directors Who Demand{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              Zero-Friction Execution
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Vctors replaces fragmented review tools with an enterprise-grade automation suite designed specifically
            for high-ticket service operations.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {FEATURE_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSimulatedRating(null);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-amber-500/60 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/30'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-slate-800'
                      }`}
                    >
                      {iconMap[item.iconName]}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Pillar 0{FEATURE_ITEMS.indexOf(item) + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                </div>
                <div className="mt-3 text-xs font-semibold text-amber-400">{item.badge}</div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Deep Dive with Interactive Live Simulation */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy - 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                {activeFeature.subtitle}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {activeFeature.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{activeFeature.description}</p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {activeFeature.bulletPoints.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  <strong className="text-white">Documented B2B Metric:</strong> {activeFeature.statHighlight}
                </p>
              </div>
            </div>

            {/* Right Live Simulation Widget - 5 Columns */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Interactive Preview Simulator
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Demo Mode
                  </span>
                </div>

                {/* SIMULATOR 1: WhatsApp / SMS Funnel */}
                {activeTab === 'whatsapp-sms-funnel' && (
                  <div className="space-y-4">
                    <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-xs space-y-3">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-900">
                        <span>SMS / WhatsApp Webhook Trigger</span>
                        <span className="text-amber-400 font-bold">Status: Active</span>
                      </div>

                      {smsSent ? (
                        <div className="space-y-2 animate-in fade-in-50">
                          <div className="bg-slate-800/80 p-3 rounded-2xl rounded-tl-none border border-slate-700/80 text-slate-200">
                            <p className="font-semibold text-white">Vctors Notification via WhatsApp:</p>
                            <p className="mt-1">
                              &quot;Hi Chief Tunde! Thanks for choosing Arnergy &amp; SunPeak Power Nigeria. Would you take 30 seconds to
                              rate your new solar &amp; inverter installation on Google Maps?&quot;
                            </p>
                            <div className="mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between">
                              <span className="text-amber-400 font-bold">⭐⭐⭐⭐⭐ Rate on Google</span>
                              <span className="text-[10px] text-slate-400">Delivered 1m ago</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="py-6 text-center text-slate-400 animate-pulse">
                          Sending verified WhatsApp hook...
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <input
                        type="text"
                        value={customPhone}
                        onChange={(e) => setCustomPhone(e.target.value)}
                        placeholder="Enter phone..."
                        aria-label="Test phone number"
                        className="w-full sm:flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                      <button
                        onClick={handleTestSms}
                        className="px-4 py-2.5 min-h-[44px] rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 shrink-0 active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Test Trigger</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 2: Smart Feedback Gatekeeping */}
                {activeTab === 'smart-gatekeeper' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-300">
                      Tap any star rating below to test how Vctors routes happy vs. unhappy customers:
                    </p>

                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 bg-slate-950 rounded-2xl border border-slate-800">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setSimulatedRating(star)}
                          className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:scale-110 active:scale-95 transition-transform focus:outline-none"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              simulatedRating && star <= simulatedRating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-700 hover:text-amber-400'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    {simulatedRating !== null ? (
                      <div className="p-3.5 rounded-xl border animate-in fade-in-50 text-xs">
                        {simulatedRating >= 4 ? (
                          <div className="bg-emerald-950/40 border-emerald-500/30 text-emerald-300 space-y-1">
                            <div className="font-bold flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span>4–5 Star Detected: Routed to Google Maps</span>
                            </div>
                            <p className="text-slate-300">
                              Customer is automatically redirected to your official Google Business Profile review box.
                            </p>
                          </div>
                        ) : (
                          <div className="bg-rose-950/40 border-rose-500/30 text-rose-300 space-y-1">
                            <div className="font-bold flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-amber-400" />
                              <span>1–3 Star Intercepted: Routed to Private Ticket</span>
                            </div>
                            <p className="text-slate-300">
                              Customer is directed to an executive feedback form. Zero public review appears on Google
                              Maps.
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-3 text-center text-xs text-slate-500">
                        Click a star above to see instant gatekeeper routing.
                      </div>
                    )}
                  </div>
                )}

                {/* SIMULATOR 3: Maps SEO Schema */}
                {activeTab === 'maps-seo' && (
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="text-amber-400 font-bold">AI Keyword Seeding Example:</div>
                      <p className="text-slate-200 italic">
                        &quot;Vctors automatically prompts the customer with custom context:&quot;
                      </p>
                      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-300">
                        &quot;Would you mention how our <strong className="text-white">solar inverter &amp; battery installation</strong> in{' '}
                        <strong className="text-white">Lekki Phase 1, Lagos</strong> lowered your generator fuel bills?&quot;
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      <span>Google Maps Keyword Relevance</span>
                      <span>+340% Higher Rank</span>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 4: 60-Second Alert System */}
                {activeTab === 'negative-alert-system' && (
                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-rose-400 font-bold">
                        <span>🚨 Simulated Alert Triggered (00:14s)</span>
                        <span>SMS / Email Sent</span>
                      </div>
                      <p className="text-slate-300">
                        &quot;New 2-star review detected on Google Business Profile. AI Legal Response &amp; TOS Violation
                        Scan initiated.&quot;
                      </p>
                      <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300">
                        <span className="text-amber-400 font-bold">AI Suggested Action:</span> &quot;Flag review for
                        removal under Google Policy #7 (Conflict of Interest). Draft professional reply ready for 1-tap
                        approval.&quot;
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
