import React from 'react';
import { Star, ShieldCheck, TrendingUp, Award, Users } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  const clientLogos = [
    { name: 'SunPeak Solar', rating: '4.9★', reviews: '342 reviews', tag: 'Solar EPC' },
    { name: 'Vanguard Orthopedics', rating: '4.9★', reviews: '284 reviews', tag: 'Surgery' },
    { name: 'Sterling Estate Partners', rating: '5.0★', reviews: '312 reviews', tag: 'Real Estate' },
    { name: 'Lexis & Thorne Law', rating: '4.9★', reviews: '215 reviews', tag: 'Litigation' },
    { name: 'Apex Auto Gruppe', rating: '4.9★', reviews: '410 reviews', tag: 'Automotive' },
    { name: 'Horizon Wealth Counsel', rating: '5.0★', reviews: '189 reviews', tag: 'Finance' },
  ];

  const stats = [
    {
      value: '+28,400',
      label: '5-Star Google Reviews Generated',
      sublabel: 'Across 450+ High-Ticket B2B Clients',
      icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
    },
    {
      value: '₦44.8B+',
      label: 'Estimated Client Revenue Protected',
      sublabel: 'Calculated via HBR Review Impact Model',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    },
    {
      value: '98.2%',
      label: 'Negative Review Interception Rate',
      sublabel: 'Resolved Privately Before Going Public',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      value: '99.4%',
      label: 'Google Maps Retention Rate',
      sublabel: 'Clients Holding Top-3 Pack Positions',
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
            Trusted by Leading Businesses Across Solar, Healthcare, Real Estate, Legal & Automotive
          </p>
        </div>

        {/* Client Brands Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors text-center"
            >
              <div className="text-sm font-bold text-white tracking-tight truncate w-full">{client.name}</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-bold text-amber-400">{client.rating}</span>
                <span className="text-[11px] text-slate-400">({client.reviews})</span>
              </div>
              <span className="mt-1 text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 uppercase tracking-wider font-semibold">
                {client.tag}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Performance Metric Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</span>
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm font-bold text-slate-200">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
