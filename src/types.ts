export type IndustryType = 'solar' | 'medical' | 'legal' | 'real_estate' | 'automotive';

export interface IndustryConfig {
  id: IndustryType;
  name: string;
  badge: string;
  defaultDealValue: number;
  defaultMonthlyJobs: number;
  sampleBusinessName: string;
  sampleCity: string;
  keyword: string;
  beforeRating: number;
  beforeReviews: number;
  beforeRank: number;
  afterRating: number;
  afterReviews: number;
  afterRank: number;
  callIncrease: string;
}

export interface MapsCardData {
  rank: number;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  address: string;
  isClient: boolean;
  isAd?: boolean;
  phone: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: IndustryType;
  industryLabel: string;
  executiveName: string;
  executiveTitle: string;
  location: string;
  beforeRating: number;
  afterRating: number;
  beforeReviews: number;
  afterReviews: number;
  timeframe: string;
  headline: string;
  summary: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  quote: string;
  avatarUrl: string;
}

export interface AuditLeadSubmission {
  businessName: string;
  industry: IndustryType;
  googleProfileUrl: string;
  cityState: string;
  currentRating: string;
  contactName: string;
  email: string;
  whatsappNumber: string;
  primaryFrustration: string;
  estimatedDealValue?: number;
}

export interface DiagnosticResult {
  score: number;
  competitorGap: number;
  estimatedMonthlyLostRevenue: number;
  mapsRankEstimate: string;
  topRiskFactor: string;
  quickWinRecommendation: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: 'Smartphone' | 'ShieldAlert' | 'MapPin' | 'BellRing' | 'TrendingUp' | 'Users';
  bulletPoints: string[];
  statHighlight: string;
}
