import React, { useState, useMemo } from 'react';
import { Calculator, Banknote, Users, TrendingDown, ArrowRight, ShieldAlert, Sparkles, AlertCircle, BarChart3 } from 'lucide-react';
import { IndustryType } from '../types';
import { INDUSTRY_CONFIGS } from '../data/mockData';

interface RoiCalculatorProps {
  onOpenAuditModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('solar');
  const [monthlyOpportunities, setMonthlyOpportunities] = useState<number>(18);
  const [averageDealValue, setAverageDealValue] = useState<number>(15000000);
  const [currentRating, setCurrentRating] = useState<number>(3.8);

  // When industry changes, reset default benchmarks
  const handleIndustryChange = (ind: IndustryType) => {
    setSelectedIndustry(ind);
    const cfg = INDUSTRY_CONFIGS[ind];
    setMonthlyOpportunities(cfg.defaultMonthlyJobs);
    setAverageDealValue(cfg.defaultDealValue);
  };

  // HBR & BrightLocal Review Conversion Penalty Model
  const calculation = useMemo(() => {
    // Percentage of prospects who disqualify a brand based on star rating
    let penaltyPercent = 0.42; // default for 3.8 stars
    if (currentRating >= 4.8) penaltyPercent = 0.05;
    else if (currentRating >= 4.5) penaltyPercent = 0.14;
    else if (currentRating >= 4.2) penaltyPercent = 0.24;
    else if (currentRating >= 3.9) penaltyPercent = 0.35;
    else if (currentRating <= 3.6) penaltyPercent = 0.58;

    const monthlyLostDeals = Math.round(monthlyOpportunities * penaltyPercent * 10) / 10;
    const monthlyLostRevenue = Math.round(monthlyLostDeals * averageDealValue);
    const annualLostRevenue = monthlyLostRevenue * 12;

    // Vctors recovery estimate (assuming jump to 4.9 stars -> only 5% loss)
    const afterLostDeals = Math.round(monthlyOpportunities * 0.05 * 10) / 10;
    const recoveredDealsPerMonth = Math.max(0, Math.round((monthlyLostDeals - afterLostDeals) * 10) / 10);
    const monthlyRecoveredRevenue = Math.round(recoveredDealsPerMonth * averageDealValue);
    const annualRecoveredRevenue = monthlyRecoveredRevenue * 12;

    return {
      penaltyPercent: Math.round(penaltyPercent * 100),
      monthlyLostDeals,
      monthlyLostRevenue,
      annualLostRevenue,
      recoveredDealsPerMonth,
      monthlyRecoveredRevenue,
      annualRecoveredRevenue,
    };
  }, [monthlyOpportunities, averageDealValue, currentRating]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace('NGN', '₦')
      .replace('NGN ', '₦');
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive HBR Review Impact Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            How Much Is a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              {currentRating}★ Rating
            </span>{' '}
            Costing Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Use the interactive sliders below to calculate the exact annual contract revenue your business is losing to
            competitors with better Google Maps ratings.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Sliders & Controls - 7 Columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Industry Selection Pill Bar */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  1. Select Your High-Ticket Industry Benchmark:
                </label>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(INDUSTRY_CONFIGS) as IndustryType[]).map((ind) => {
                    const cfg = INDUSTRY_CONFIGS[ind];
                    const isActive = selectedIndustry === ind;
                    return (
                      <button
                        key={ind}
                        onClick={() => handleIndustryChange(ind)}
                        className={`px-3.5 py-2.5 min-h-[44px] flex items-center rounded-xl text-xs font-bold transition-all active:scale-95 ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/10'
                            : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        {cfg.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider 1: Monthly New Opportunities / Jobs */}
              <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-white">
                      Monthly Qualified Customer Opportunities
                    </span>
                  </div>
                  <span className="text-lg font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    {monthlyOpportunities} / Month
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="1"
                  value={monthlyOpportunities}
                  onChange={(e) => setMonthlyOpportunities(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5 Jobs / Mo</span>
                  <span>50 Jobs / Mo</span>
                  <span>150+ Jobs / Mo</span>
                </div>
              </div>

              {/* Slider 2: Average Deal / Contract Value */}
              <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-white">Average Contract / Patient Deal Value</span>
                  </div>
                  <span className="text-lg font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    {formatCurrency(averageDealValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={averageDealValue}
                  onChange={(e) => setAverageDealValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>₦500,000</span>
                  <span>₦25,000,000</span>
                  <span>₦50,000,000+</span>
                </div>
              </div>

              {/* Slider 3: Current Google Rating */}
              <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-white">Your Current Google Maps Rating</span>
                  </div>
                  <span
                    className={`text-lg font-black px-3 py-1 rounded-lg border ${
                      currentRating >= 4.8
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : currentRating >= 4.0
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                    }`}
                  >
                    {currentRating.toFixed(1)} ★
                  </span>
                </div>
                <input
                  type="range"
                  min="3.3"
                  max="5.0"
                  step="0.1"
                  value={currentRating}
                  onChange={(e) => setCurrentRating(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>3.3★ (Critical Risk)</span>
                  <span>4.0★ (Average)</span>
                  <span>5.0★ (Dominant #1)</span>
                </div>
              </div>
            </div>

            {/* Right Calculated Revenue Loss Breakdown - 5 Columns */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border-2 border-rose-500/40 rounded-3xl p-4 sm:p-6 lg:p-8 space-y-6 shadow-2xl relative max-w-full overflow-hidden">
                {/* Status Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
                      Calculated Annual Leak
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 whitespace-nowrap">
                    {calculation.penaltyPercent}% Prospect Drop-Off
                  </span>
                </div>

                {/* Big Lost Annual Revenue Number */}
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Estimated Annual Revenue Lost to Better-Reviewed Competitors
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1 break-words">
                    {formatCurrency(calculation.annualLostRevenue)}
                    <span className="text-sm font-semibold text-rose-400 ml-2 whitespace-nowrap">/ year</span>
                  </div>
                </div>

                {/* Monthly Loss Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Monthly Lost Deals</div>
                    <div className="text-lg sm:text-xl font-extrabold text-rose-400 mt-0.5 break-words">
                      {calculation.monthlyLostDeals} contracts
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Monthly Lost Revenue</div>
                    <div className="text-lg sm:text-xl font-extrabold text-white mt-0.5 break-words">
                      {formatCurrency(calculation.monthlyLostRevenue)}
                    </div>
                  </div>
                </div>

                {/* What Vctors Recovers */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Vctors 90-Day Recovery Potential
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 break-words">
                    +{formatCurrency(calculation.annualRecoveredRevenue)}{' '}
                    <span className="text-xs font-normal text-slate-300 block sm:inline">in annual contract value</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By elevating your rating to 4.9★ and capturing the Google Maps Top-3, you stop losing{' '}
                    <strong>{calculation.recoveredDealsPerMonth} contracts every month</strong>.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-4 px-6 min-h-[52px] rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-xl shadow-amber-500/20 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Your Free Revenue Recovery Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
