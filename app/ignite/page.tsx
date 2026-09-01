"use client";

import React, { useState } from 'react';
import {
  Award,
  Users,
  Briefcase,
  FileText,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  GraduationCap,
  Globe,
  Trophy,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IgnitePage = () => {
  const [selectedModel, setSelectedModel] = useState<'campus' | 'hybrid' | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Architectural Mesh & Subtle Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.12),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Talent Hunt 2026
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              INSPIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">IGNITE</span> 2026
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-3 tracking-tight">
              Talent Hunt for Scalable Startup Ideas
            </p>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Bridging academic innovation and enterprise scalability. Where visionary student projects interface directly with industry leaders and capital partners.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => setSelectedModel('campus')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                <GraduationCap className="w-4 h-4 text-slate-950" />
                Campus to Corporate
              </button>
              <button
                onClick={() => setSelectedModel('hybrid')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <Globe className="w-4 h-4 text-slate-400" />
                Hybrid Model
              </button>
            </div>

            {/* Rewards Banner */}
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-slate-900/40 to-slate-900/80 p-6 sm:p-8 backdrop-blur-md max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Top 3 Teams Recognition</h2>
                    <p className="text-sm text-slate-400">Award pool, mentorship access, and investor introduction</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Competitive Grant
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUE PROPOSITION / FEATURES --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-900 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Direct Industry Pitch",
                  desc: "Present your architecture and business model directly to seasoned senior engineers."
                },
                {
                  icon: Briefcase,
                  title: "Capital Access",
                  desc: "Connect directly with angel syndicates, mentors, and corporate incubators."
                },
                {
                  icon: Award,
                  title: "Industry Credentialing",
                  desc: "Verified certificates of merit and participation for professional profile enhancements."
                },
                {
                  icon: FileText,
                  title: "Direct Placement Tracks",
                  desc: "Accelerated interview rounds and internship placements from corporate affiliates."
                }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 text-amber-400">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CRITICAL PARTICIPATION GUIDELINES --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Key Participation Metrics
              </h2>
              <p className="text-sm text-slate-400">Strict eligibility guidelines apply across all participating institutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Nomination Quota",
                  value: "3 Teams Maximum",
                  detail: "Per accredited collegiate institution"
                },
                {
                  label: "Team Formation",
                  value: "1 - 3 Members",
                  detail: "Cross-disciplinary teams permitted"
                },
                {
                  label: "Cohort Capacity",
                  value: "Limited Intake",
                  detail: "Evaluated on rolling submission quality"
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-colors duration-200"
                >
                  <p className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-2">{item.label}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.value}</h3>
                  <p className="text-xs text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- REGISTRATION MILESTONES --- */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                <div className="md:border-r border-slate-800 md:pr-6">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</span>
                  <div className="mt-1.5 flex items-center justify-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xl font-bold text-white tracking-wide">REGISTRATION OPEN</span>
                  </div>
                </div>

                <div className="md:border-r border-slate-800 md:pr-6">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Submissions Open</span>
                  <p className="text-xl font-bold text-slate-200 mt-1.5">Sep 01, 2026</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Event Timeline</span>
                  <p className="text-xl font-bold text-amber-400 mt-1.5">Sep 30, 2026</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-center gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors duration-200">
                  Proceed to Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORPORATE & CONTACT DIRECTORY --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Entity Overview */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Inspire Softech Group</h3>
                      <p className="text-xs text-slate-400">Institutional Event Organizer</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    An enterprise initiative dedicated to bridging applied innovation, student engineering excellence, and scalable venture capital.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Authorized Collegiate Program</span>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Communication Channels */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
                <h3 className="text-base font-bold text-white mb-6">Inquiries & Program Secretariat</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span className="text-slate-300">Olympia Technology Park, Guindy, Chennai, India</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="flex items-center gap-2">
                      <a href="tel:+919360505768" className="text-slate-300 hover:text-white transition-colors">
                        +91 93605 05768
                      </a>
                      <span className="text-slate-600">•</span>
                      <a href="tel:+918667493679" className="text-slate-300 hover:text-white transition-colors">
                        +91 86674 93679
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href="mailto:Projects@edinztech.com" className="text-slate-300 hover:text-white transition-colors">
                      Projects@edinztech.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
                    <a 
                      href="https://inspiresoftechgroup.com/ignite" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      inspiresoftechgroup.com/ignite
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MODEL SELECTION MODAL --- */}
        {selectedModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setSelectedModel(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedModel === 'campus' ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Campus to Corporate</h3>
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    A comprehensive on-site pitching track structured to interface promising student innovators directly with corporate leadership, technology architects, and venture scouts.
                  </p>

                  <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-2.5">
                    {[
                      "Direct engagement with enterprise engineering mentors",
                      "Formal closed-room pitch sessions",
                      "Actionable technical and business model feedback",
                      "Priority fast-track internship evaluations"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Hybrid Participation Model</h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    Flexible remote and in-person participation pathways designed for teams outside regional hubs, retaining the same rigorous evaluation standards.
                  </p>

                  <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-2.5">
                    {[
                      "Remote digital presentation capabilities",
                      "National audience and investor visibility",
                      "Scheduled asynchronous and live feedback sessions",
                      "Access to virtual industry advisory networks"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={() => setSelectedModel(null)}
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Dismiss Overview
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default IgnitePage;
