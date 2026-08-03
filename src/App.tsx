import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { PainVsSolution } from './components/PainVsSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudyCarousel } from './components/CaseStudyCarousel';
import { LeadCaptureAudit } from './components/LeadCaptureAudit';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Executive Navigation Header */}
      <Header
        onOpenAuditModal={handleOpenAuditModal}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* High-Impact Hero Section with Interactive Google Maps 3-Pack Widget */}
        <Hero
          onOpenAuditModal={handleOpenAuditModal}
          onOpenDemoModal={handleOpenDemoModal}
        />

        {/* Social Proof Logo & Authority Bar */}
        <SocialProofBar />

        {/* Pain vs. Solution Side-by-Side Comparison */}
        <PainVsSolution />

        {/* Interactive 4-Pillar Feature Grid */}
        <FeatureGrid />

        {/* Interactive HBR & BrightLocal ROI / Revenue Loss Calculator */}
        <RoiCalculator onOpenAuditModal={handleOpenAuditModal} />

        {/* Documented B2B & High-Ticket Client Case Study Carousel */}
        <CaseStudyCarousel />

        {/* Free Executive Audit & Lead Capture Form */}
        <LeadCaptureAudit />
      </main>

      {/* Footer with Compliance & Quick Links */}
      <Footer
        onOpenAuditModal={handleOpenAuditModal}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Interactive Walkthrough Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        onOpenAudit={() => {
          handleCloseDemoModal();
          handleOpenAuditModal();
        }}
      />

      {/* Instant Audit Request Modal Popup */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
      />
    </div>
  );
}
