import React, { useState } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, TrendingDown, TrendingUp, ShieldAlert } from 'lucide-react';
import { PAIN_VS_SOLUTION_DATA } from '../data/mockData';
import { IndustryType } from '../types';

export const PainVsSolution: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('solar');

  const badReviewCostData: Record<
    IndustryType,
    { dealLoss: string; customerValue: string; explanation: string; annualImpact: string }
  > = {
    solar: {
      dealLoss: '2.4 Lost Roof Contracts / Mo',
      customerValue: '₦15,000,000 Average Contract',
      explanation:
        'When a homeowner comparing 3 solar installers sees a 3.8★ rating or an unhandled 1-star inverter complaint, they immediately disqualify your proposal.',
      annualImpact: '₦432,000,000 / Year in Stolen Contracts',
    },
    medical: {
      dealLoss: '4.8 Lost Surgical Consults / Mo',
      customerValue: '₦4,500,000 Elective Procedure Value',
      explanation:
        'Patients will never book knee, spine, or cosmetic surgery with a clinic showing billing grievances or rude reception complaints on Google Maps.',
      annualImpact: '₦259,200,000 / Year in Lost Patient Bookings',
    },
    legal: {
      dealLoss: '3.2 Lost Personal Injury Retainers / Mo',
      customerValue: '₦8,500,000 Average Fee',
      explanation:
        'Accident victims and corporate clients choose the attorney with the most overwhelming 5-star social proof. A 3.7★ rating pushes leads directly to competitors.',
      annualImpact: '₦326,400,000 / Year in Missed Retainers',
    },
    real_estate: {
      dealLoss: '1.8 Lost Luxury Estate Listings / Mo',
      customerValue: '₦12,500,000 Commission Value',
      explanation:
        'High-net-worth home sellers interview brokers based on market prestige. Being ranked #6 on Google Maps with 3.9★ costs you the listing presentation.',
      annualImpact: '₦270,000,000 / Year in Lost Luxury Commissions',
    },
    automotive: {
      dealLoss: '8.5 Lost Premium Service Workorders / Mo',
      customerValue: '₦850,000 Average Repair Ticket',
      explanation:
        'Luxury car owners (Porsche, BMW, Mercedes) refuse to trust dealerships or shops with scattered reviews about delayed repairs or unexpected fees.',
      annualImpact: '₦86,700,000 / Year in Stolen Repair Orders',
    },
  };

  const currentImpact = badReviewCostData[selectedIndustry];

  return (
    <section id="pain-vs-solution" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Silent Revenue Leak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Why Manual Review Requests Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
              Bleeding Your High-Ticket Pipeline
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            In B2B and high-stakes consumer services, your Google Maps reputation is your most critical sales asset.
            Here is what happens when you rely on manual emails vs. the Vctors automated engine.
          </p>
        </div>

        {/* Two-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Column 1: The Pain (Manual Review Requests) */}
          <div className="bg-slate-900/60 border border-rose-500/30 rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-xl shadow-rose-950/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Manual Review Requests</h3>
                    <p className="text-xs text-rose-400 font-semibold">Lost Revenue & Vulnerable Reputation</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Old Way
                </span>
              </div>

              <div className="mt-6 space-y-6">
                {PAIN_VS_SOLUTION_DATA.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{row.category}</div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{row.painTitle}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{row.painDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>
                  <strong>Result:</strong> Your happy customers stay silent while 1 angry client drops your average
                  rating below 4.0★, sending high-intent buyers to competitors.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: The Solution (Vctors Automated Engine) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 relative overflow-hidden">
            {/* Top corner badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
              Recommended B2B Standard
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Vctors Review Engine</h3>
                    <p className="text-xs text-amber-400 font-semibold">Automated Growth & Private Protection</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {PAIN_VS_SOLUTION_DATA.map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="text-xs font-bold text-amber-400/80 uppercase tracking-wider">{row.category}</div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          {row.statDelta}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{row.solutionTitle}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{row.solutionDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    <strong>Result:</strong> 98% open rates, automatic 5-star review collection, and #1 Google Maps
                    authority without any staff effort.
                  </span>
                </div>
                <a
                  href="#audit-section"
                  className="w-full sm:w-auto text-center px-4 py-2 min-h-[44px] flex items-center justify-center rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shrink-0 hover:bg-amber-300 active:scale-95 transition-all"
                >
                  Audit Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Bad Review Cost Simulator */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl max-w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Real Industry Cost Impact
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                How Much Does a Single 3.8★ Rating Cost Your Business Every Month?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Select your industry to see the documented revenue lost to competitors when your Google profile is
                ranked below #3 or carries unhandled negative feedback.
              </p>

              {/* Industry Select Buttons */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {(['solar', 'medical', 'legal', 'real_estate', 'automotive'] as IndustryType[]).map((ind) => {
                  const isActive = selectedIndustry === ind;
                  const labelMap: Record<IndustryType, string> = {
                    solar: 'Solar & Energy',
                    medical: 'Medical Surgery',
                    legal: 'Legal Practice',
                    real_estate: 'Luxury Real Estate',
                    automotive: 'Auto Dealership',
                  };
                  return (
                    <button
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-3 py-2 min-h-[38px] rounded-lg text-xs font-bold transition-all active:scale-95 ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 shadow-md'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {labelMap[ind]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculated Impact Card */}
            <div className="w-full lg:w-auto lg:min-w-[360px] bg-slate-950 border border-rose-500/30 rounded-2xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-semibold uppercase">Estimated Revenue At Risk</span>
                <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20 whitespace-nowrap">
                  Critical Vulnerability
                </span>
              </div>

              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight break-words">
                  {currentImpact.annualImpact}
                </div>
                <div className="text-xs font-bold text-rose-400 mt-1">{currentImpact.dealLoss}</div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                {currentImpact.explanation}
              </p>

              <a
                href="#roi-calculator"
                className="w-full py-3.5 px-4 min-h-[48px] rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Calculate Your Exact ROI Recovery</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
