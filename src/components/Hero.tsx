import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  PhoneCall,
  TrendingUp,
  MapPin,
  ArrowRight,
  Play,
  CheckCircle2,
  Building2,
  Stethoscope,
  Scale,
  Home,
  Car,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { INDUSTRY_CONFIGS, MAPS_BEFORE_DATA, MAPS_AFTER_DATA } from '../data/mockData';
import { IndustryType } from '../types';

interface HeroProps {
  onOpenAuditModal: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onOpenDemoModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('solar');
  const [viewMode, setViewMode] = useState<'before' | 'after'>('after');

  const industry = INDUSTRY_CONFIGS[selectedIndustry];
  const mapsList = viewMode === 'before' ? MAPS_BEFORE_DATA[selectedIndustry] : MAPS_AFTER_DATA[selectedIndustry];

  const industryIcons = {
    solar: <Building2 className="w-4 h-4" />,
    medical: <Stethoscope className="w-4 h-4" />,
    legal: <Scale className="w-4 h-4" />,
    real_estate: <Home className="w-4 h-4" />,
    automotive: <Car className="w-4 h-4" />,
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-slate-800/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy - 7 columns */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Executive trust pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>B2B Reputation Engine for High-Stakes Local Brands</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Stop Losing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                42% of Your Customers
              </span>{' '}
              to Competitors with Better Google Reviews.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              We help local high-stakes service businesses—
              <span className="text-white font-semibold">Solar, Medical, Legal, Real Estate, and Automotive</span>—automate
              5-star Google review collection via WhatsApp & SMS, suppress negative feedback before it goes public, and
              dominate the <span className="text-amber-400 font-semibold">Google Maps Top-3 Search Pack</span>.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#audit-section"
                onClick={onOpenAuditModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:brightness-105 transition-all text-base"
              >
                <span>Claim Free Reputation Audit</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-base group"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400 ml-0.5" />
                </div>
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Key Value Bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>98% SMS Open Rate Triggers</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Private 1–3★ Gatekeeping</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>#1–#3 Google Maps Authority</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Google Maps "3-Pack" Simulator - 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Simulator Header & Industry Selector */}
              <div className="bg-slate-950 p-4 border-b border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Live Google Maps 3-Pack Simulator
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Interactive
                  </span>
                </div>

                {/* Industry Selector Tabs */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(Object.keys(INDUSTRY_CONFIGS) as IndustryType[]).map((ind) => {
                    const cfg = INDUSTRY_CONFIGS[ind];
                    const isActive = selectedIndustry === ind;
                    return (
                      <button
                        key={ind}
                        onClick={() => setSelectedIndustry(ind)}
                        className={`text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all min-h-[38px] sm:min-h-0 ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 shadow-sm'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        {industryIcons[ind]}
                        <span>{cfg.name.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Before / After Toggle Switcher */}
              <div className="bg-slate-900/60 px-4 py-3 border-b border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-400">Search Query:</div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    &quot;{industry.keyword}&quot;
                  </div>
                </div>

                <div className="flex items-center w-full sm:w-auto bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setViewMode('before')}
                    className={`flex-1 sm:flex-none px-3 py-2 min-h-[38px] rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'before'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Before (3.8★)
                  </button>
                  <button
                    onClick={() => setViewMode('after')}
                    className={`flex-1 sm:flex-none px-3 py-2 min-h-[38px] rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'after'
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    After 90 Days (4.9★)
                  </button>
                </div>
              </div>

              {/* Maps Search Results List */}
              <div className="p-4 space-y-2.5 max-h-[380px] overflow-y-auto">
                {mapsList.map((card, idx) => {
                  const isHighlightedClient = card.isClient;
                  return (
                    <div
                      key={card.name}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isHighlightedClient
                          ? viewMode === 'after'
                            ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/5'
                            : 'bg-rose-500/10 border-rose-500/30'
                          : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          {/* Rank Badge */}
                          <div
                            className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                              isHighlightedClient
                                ? viewMode === 'after'
                                  ? 'bg-amber-400 text-slate-950'
                                  : 'bg-rose-500 text-white'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            #{card.rank}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-bold text-sm text-white truncate">{card.name}</h3>
                              {isHighlightedClient && (
                                <span
                                  className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                    viewMode === 'after'
                                      ? 'bg-amber-400 text-slate-950'
                                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                  }`}
                                >
                                  {viewMode === 'after' ? 'Your Business (#1 Rank)' : 'Your Business (#7 Rank)'}
                                </span>
                              )}
                            </div>

                            {/* Stars and Review Count */}
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-xs font-bold text-amber-400">{card.rating.toFixed(1)}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, starIdx) => (
                                  <Star
                                    key={starIdx}
                                    className={`w-3.5 h-3.5 ${
                                      starIdx < Math.floor(card.rating)
                                        ? 'text-amber-400 fill-amber-400'
                                        : 'text-slate-700'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-slate-400">({card.reviews})</span>
                            </div>

                            <p className="text-xs text-slate-400 mt-1 truncate">
                              {card.category} · {card.address}
                            </p>
                          </div>
                        </div>

                        {/* Right Call Action button */}
                        <div className="flex flex-col items-end shrink-0">
                          <button
                            type="button"
                            className={`p-2.5 min-h-[38px] min-w-[38px] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                              isHighlightedClient && viewMode === 'after'
                                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            <PhoneCall className="w-4 h-4" />
                            <span className="hidden sm:inline">Call</span>
                          </button>
                        </div>
                      </div>

                      {/* Diagnostic Banner inside card if highlighted client */}
                      {isHighlightedClient && (
                        <div
                          className={`mt-2.5 pt-2 border-t text-xs flex items-center justify-between ${
                            viewMode === 'after'
                              ? 'border-amber-500/30 text-amber-300'
                              : 'border-rose-500/30 text-rose-300'
                          }`}
                        >
                          <span className="font-semibold">
                            {viewMode === 'after'
                              ? '🔥 +164 verified reviews added by Vctors'
                              : '⚠️ Stuck below fold · Competitors capturing calls'}
                          </span>
                          <span className="font-bold">
                            {viewMode === 'after' ? industry.callIncrease : 'Losing 42% Calls'}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer status bar */}
              <div className="bg-slate-950 px-4 py-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>
                    Simulated impact for <strong className="text-white">{industry.name}</strong>
                  </span>
                </div>
                <button
                  onClick={() => setViewMode(viewMode === 'before' ? 'after' : 'before')}
                  className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
                >
                  Toggle {viewMode === 'before' ? 'After Result' : 'Before State'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
