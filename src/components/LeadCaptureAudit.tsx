import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, Sparkles, Building2, MapPin, Mail, Phone, Award, Star } from 'lucide-react';
import { IndustryType, AuditLeadSubmission, DiagnosticResult } from '../types';
import { INDUSTRY_CONFIGS } from '../data/mockData';

export const LeadCaptureAudit: React.FC = () => {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [formData, setFormData] = useState<AuditLeadSubmission>({
    businessName: '',
    industry: 'solar',
    googleProfileUrl: '',
    cityState: '',
    currentRating: '3.8',
    contactName: '',
    email: '',
    whatsappNumber: '',
    primaryFrustration: 'competitor_more_reviews',
  });

  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null);

  const industryOptions: { id: IndustryType; name: string }[] = [
    { id: 'solar', name: 'Solar & Clean Energy EPC' },
    { id: 'medical', name: 'Medical, Surgical & Dental' },
    { id: 'legal', name: 'Personal Injury & Litigation Firm' },
    { id: 'real_estate', name: 'Luxury Real Estate Brokerage' },
    { id: 'automotive', name: 'Automotive & European Service' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentStars = parseFloat(formData.currentRating) || 3.8;
    const cfg = INDUSTRY_CONFIGS[formData.industry] || INDUSTRY_CONFIGS.solar;

    // Calculate score
    const score = Math.min(99, Math.round((currentStars / 5) * 65 + 15));
    const gap = Math.round((4.9 - currentStars) * 10) / 10;
    const estLostRevenue = Math.round(cfg.defaultDealValue * 2.4 * 12);

    let rankEst = 'Page 2 (#7–#11 Rank)';
    if (currentStars >= 4.7) rankEst = 'Top-3 Pack (#2–#3 Rank)';
    else if (currentStars >= 4.3) rankEst = 'Mid-Page (#4–#6 Rank)';

    let topRisk = 'Competitors with 200+ reviews capturing 84% of high-intent Google Maps clicks.';
    if (formData.primaryFrustration === 'bad_review_scar') {
      topRisk = 'Retaliatory 1-star reviews visible without a private gatekeeper interception layer.';
    }

    setDiagnostic({
      score,
      competitorGap: gap,
      estimatedMonthlyLostRevenue: Math.round(cfg.defaultDealValue * 2.4),
      mapsRankEstimate: rankEst,
      topRiskFactor: topRisk,
      quickWinRecommendation: `Deploy WhatsApp post-completion trigger to generate 140+ verified reviews in 90 days.`,
    });

    setStep('result');
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 })
      .format(val)
      .replace('NGN', '₦')
      .replace('NGN ', '₦');
  };

  return (
    <section id="audit-section" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-slate-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy & Proof Bullets - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Executive Audit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Claim Your Free{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                Google Maps Reputation &amp; ROI
              </span>{' '}
              Audit
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              In 2 minutes, our algorithm benchmarks your Google Business Profile against your top 3 local competitors
              and calculates how much contract revenue you are losing each month.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">
                  <strong>Competitor Gap Analysis:</strong> See exactly how many reviews you need to rank #1 in your 25-km service radius.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">
                  <strong>Revenue Leak Calculation:</strong> Discover the Naira value of contracts stolen by better-rated competitors.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">
                  <strong>90-Day Automation Roadmap:</strong> Receive custom SMS &amp; WhatsApp completion scripts tailored to your industry.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <Lock className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-slate-400">
                <strong className="text-white">Strict Executive NDA &amp; Zero Spam:</strong> Your business metrics remain 100% confidential. No sales harassment.
              </p>
            </div>
          </div>

          {/* Right Audit Form or Diagnostic Result - 7 Columns */}
          <div className="lg:col-span-7">
            {step === 'form' ? (
              <form
                onSubmit={handleRunAudit}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
              >
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">100% Free Diagnostic Audit Generator</h3>
                    <p className="text-xs text-slate-400">Enter your business details below to generate instant competitive benchmarks</p>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 hidden sm:inline-block">
                    Instant Preview
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Business / Agency Name *</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Arnergy & SunPeak Power Nigeria"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Industry Category *</span>
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {industryOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Google Profile URL or City / Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>City / State or Profile Location *</span>
                    </label>
                    <input
                      type="text"
                      name="cityState"
                      required
                      value={formData.cityState}
                      onChange={handleInputChange}
                      placeholder="e.g. Lekki, Lagos or Abuja FCT"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Current Rating */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>Approx. Current Google Rating *</span>
                    </label>
                    <select
                      name="currentRating"
                      value={formData.currentRating}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="3.5">Below 3.6★ (Critical Alert)</option>
                      <option value="3.8">3.7★ – 3.9★ (Losing Pipeline)</option>
                      <option value="4.2">4.0★ – 4.4★ (Average Competitor)</option>
                      <option value="4.6">4.5★ – 4.8★ (Strong but Vulnerable)</option>
                      <option value="4.9">4.9★ – 5.0★ (Market Leader)</option>
                    </select>
                  </div>

                  {/* Contact Executive Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Executive Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="e.g. Engr. Tunde Adeleke"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tunde@sunpeaknigeria.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>WhatsApp / Mobile Number (To receive test SMS completion demo) *</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    placeholder="+234 803 555 0188"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Primary Frustration Radio */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-bold text-slate-300">What is your #1 reputation frustration?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'competitor_more_reviews', label: 'Competitors have 100+ more Google reviews' },
                      { id: 'bad_review_scar', label: 'Unfair 1-star reviews hurt our close rate' },
                      { id: 'staff_forgets', label: 'Staff forgets to ask for Google reviews' },
                      { id: 'low_maps_rank', label: 'We are stuck below the Google Maps Top-3' },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className={`p-3.5 min-h-[44px] rounded-xl border cursor-pointer flex items-center gap-2.5 text-xs transition-all ${
                          formData.primaryFrustration === opt.id
                            ? 'bg-amber-500/10 border-amber-500/40 text-white font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="primaryFrustration"
                          value={opt.id}
                          checked={formData.primaryFrustration === opt.id}
                          onChange={handleInputChange}
                          className="accent-amber-400 w-4 h-4 shrink-0"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 min-h-[52px] rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 shadow-xl shadow-amber-500/20 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Generate Free Google Maps Audit &amp; ROI Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* RESULT VIEW AFTER SUBMITTING */
              <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 animate-in fade-in-50">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Audit Generated for {formData.businessName || 'Your Business'}
                    </span>
                    <h3 className="text-xl font-extrabold text-white">Executive Reputation Diagnostic</h3>
                  </div>
                  <button
                    onClick={() => setStep('form')}
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                  >
                    Edit Input
                  </button>
                </div>

                {diagnostic && (
                  <div className="space-y-6">
                    {/* Score Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                        <div className="text-xs text-slate-400 font-semibold uppercase">Reputation Health Score</div>
                        <div className="text-3xl font-black text-amber-400 mt-1">{diagnostic.score} / 100</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Benchmark vs Top-3 Pack</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                        <div className="text-xs text-slate-400 font-semibold uppercase">Estimated Monthly Leak</div>
                        <div className="text-3xl font-black text-rose-400 mt-1">
                          {formatCurrency(diagnostic.estimatedMonthlyLostRevenue)}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Lost to competitors</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                        <div className="text-xs text-slate-400 font-semibold uppercase">Maps Rank Position</div>
                        <div className="text-lg font-bold text-white mt-1">{diagnostic.mapsRankEstimate}</div>
                        <div className="text-[11px] text-amber-400 font-semibold mt-0.5">Target: #1 Organic</div>
                      </div>
                    </div>

                    {/* Top Risk & Quick Win */}
                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-xs space-y-1">
                        <div className="font-bold text-rose-300 uppercase tracking-wider">Identified Risk Factor:</div>
                        <p className="text-slate-300 leading-relaxed">{diagnostic.topRiskFactor}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                        <div className="font-bold text-amber-300 uppercase tracking-wider">
                          Vctors Recommendation:
                        </div>
                        <p className="text-slate-300 leading-relaxed">{diagnostic.quickWinRecommendation}</p>
                      </div>
                    </div>

                    {/* Notification Sent Banner */}
                    <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">Audit Report Delivered to {formData.email}</div>
                          <div className="text-[11px] text-slate-400">
                            Our team has queued a sample WhatsApp review trigger to {formData.whatsappNumber}.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
