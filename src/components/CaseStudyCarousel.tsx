import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Award, Building2, Stethoscope, Scale, Home, Car, TrendingUp } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { IndustryType } from '../types';

export const CaseStudyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const activeCase = CASE_STUDIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
  };

  const industryIcons: Record<IndustryType, React.ReactNode> = {
    solar: <Building2 className="w-4 h-4" />,
    medical: <Stethoscope className="w-4 h-4" />,
    legal: <Scale className="w-4 h-4" />,
    real_estate: <Home className="w-4 h-4" />,
    automotive: <Car className="w-4 h-4" />,
  };

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Documented Client Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Real B2B Agencies &amp; High-Ticket Brands{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              Dominating Their Markets
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how high-stakes service operators across 5 key industries use Vctors to protect revenue and hold #1 Google Maps positions.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={cs.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {industryIcons[cs.industry]}
                <span>{cs.industryLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Case Study Hero Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy & Quote - 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {activeCase.industryLabel} · {activeCase.location}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Timeframe: <strong className="text-white">{activeCase.timeframe}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {activeCase.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{activeCase.summary}</p>

              {/* Executive Quote Block */}
              <div className="bg-slate-900/80 border-l-4 border-amber-400 rounded-r-2xl p-5 relative">
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-3 right-4 pointer-events-none" />
                <p className="text-sm text-slate-200 italic leading-relaxed">&quot;{activeCase.quote}&quot;</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-amber-400 overflow-hidden shrink-0">
                    {activeCase.executiveName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{activeCase.executiveName}</div>
                    <div className="text-[11px] text-slate-400">{activeCase.executiveTitle} · {activeCase.clientName}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metrics Scorecard - 5 Columns */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified 90-Day Impact</span>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Audited Result
                  </span>
                </div>

                {/* Rating Jump Visualizer */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Before Vctors</div>
                    <div className="text-xl font-bold text-slate-300 mt-0.5">{activeCase.beforeRating.toFixed(1)} ★</div>
                    <div className="text-[10px] text-slate-500">{activeCase.beforeReviews} reviews</div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-black text-amber-400">
                    →
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-amber-400 uppercase font-bold">After Vctors</div>
                    <div className="text-2xl font-black text-white mt-0.5">{activeCase.afterRating.toFixed(1)} ★</div>
                    <div className="text-xs font-bold text-emerald-400">{activeCase.afterReviews} reviews</div>
                  </div>
                </div>

                {/* 4 Metric Boxes */}
                <div className="grid grid-cols-2 gap-3">
                  {activeCase.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-lg sm:text-xl font-black text-white tracking-tight">{metric.value}</div>
                      <div className="text-[11px] text-slate-400 font-medium mt-0.5 leading-snug">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation controls */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400">
                    Case {currentIndex + 1} of {CASE_STUDIES.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous case study"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next case study"
                      className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
