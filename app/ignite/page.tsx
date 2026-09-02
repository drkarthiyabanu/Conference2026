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
  Building2,
  Cpu,
  Zap,
  Layers,
  Activity,
  Network,
  ChevronDown,
  Clock
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IgnitePage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Inter-college Startup Idea & Product Showcase
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
                INSPIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">IGNITE</span> 2026
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-amber-300 mb-4">
                Where student ideas meet industry and investors.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                An inter-college startup idea and product showcase, run by industry — not by a campus. Present your idea to founders, hiring managers and investors, and walk away with feedback that is worth more than a certificate.
              </p>

              {/* Key Details Strip */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
                <p className="text-sm sm:text-base text-slate-300 space-y-2">
                  <span className="block font-semibold text-amber-300">30 September 2026 — On campus, Olympia Auditorium, Chennai</span>
                  <span className="block">1 October 2026 — Online</span>
                  <span className="block text-amber-400 font-semibold">Registrations close 27 September 2026</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://forms.gle/fgzDCKsVHqDsHEUB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 group"
                >
                  Register Your Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/pdfs/Ignite Brochure 2026.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <FileText className="w-4 h-4" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT THE EVENT --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-900 bg-slate-900/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">About the Event</h2>
            
            <div className="space-y-6 text-slate-300 text-base leading-relaxed">
              <p>
                Most student ideas die in a submission folder. <span className="text-amber-300 font-semibold">INSPIRE IGNITE 2026</span> exists to change that.
              </p>
              
              <p>
                This is not a college competition run by a college. It is run by <span className="text-white font-semibold">Inspire Softech Group Companies</span> — a working technology consortium in Chennai that builds software, hires engineers and mentors students every week. That single difference changes what you get out of it. <span className="text-amber-300">The people judging your idea are the people who fund, build and hire in the real market.</span>
              </p>

              <p>
                Bring an idea, a prototype, a working product or a business model. You get <span className="text-amber-300 font-semibold">seven minutes on the stage</span>, direct feedback from an industry jury, and a room full of people worth knowing. Teams that impress us do not just win a prize — they get a conversation about internships and, where the idea has legs, a longer relationship with our group.
              </p>

              <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-amber-400 font-bold text-lg">Open Theme</p>
                  <p className="text-xs text-slate-400 mt-2">Any domain, any idea stage</p>
                </div>
                <div>
                  <p className="text-amber-400 font-bold text-lg">All Colleges</p>
                  <p className="text-xs text-slate-400 mt-2">Three teams per college</p>
                </div>
                <div>
                  <p className="text-amber-400 font-bold text-lg">Up to 3 Members</p>
                  <p className="text-xs text-slate-400 mt-2">Per team, one fee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- JUDGES PANEL --- */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/70 border-b border-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-amber-400 mb-4 animate-pulse">
              <span aria-hidden="true" className="text-lg">⚡</span>
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">Judges Panel</span>
              <span aria-hidden="true" className="text-lg">⚡</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">🏆 Board Announcing Soon 🏆</h2>
            <p className="text-slate-400 text-base sm:text-lg">Our industry jury will be revealed shortly. Stay tuned! ✨</p>
          </div>
        </section>

        {/* --- WHY TAKE PART --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <style>{`
            @keyframes ignite-toy-icon {
              0%, 100% { transform: translateY(10px) scale(.82) rotate(-8deg); opacity: .55; }
              22% { transform: translateY(-5px) scale(1.12) rotate(8deg); opacity: 1; }
              42% { transform: translateY(1px) scale(1) rotate(-4deg); opacity: 1; }
              58% { transform: translateY(-2px) scale(1.04) rotate(2deg); opacity: 1; }
            }
            @keyframes ignite-icon-swing {
              0%, 100% { transform: translateX(-12px) rotate(-12deg) scale(.86); opacity: .6; }
              35% { transform: translateX(10px) rotate(12deg) scale(1.08); opacity: 1; }
              55% { transform: translateX(-3px) rotate(-4deg) scale(1); opacity: 1; }
            }
            @keyframes ignite-icon-flip {
              0%, 100% { transform: translateY(8px) rotateY(-75deg) scale(.86); opacity: .55; }
              35% { transform: translateY(-4px) rotateY(25deg) scale(1.1); opacity: 1; }
              58% { transform: translateY(0) rotateY(0) scale(1); opacity: 1; }
            }
            @keyframes ignite-icon-orbit {
              0%, 100% { transform: translate(-10px, 8px) rotate(-14deg) scale(.86); opacity: .55; }
              30% { transform: translate(8px, -6px) rotate(10deg) scale(1.1); opacity: 1; }
              55% { transform: translate(0, 1px) rotate(-2deg) scale(1); opacity: 1; }
            }
            @keyframes ignite-icon-pop {
              0%, 100% { transform: translateY(10px) scale(.7) rotate(-10deg); opacity: .5; }
              28% { transform: translateY(-8px) scale(1.2) rotate(8deg); opacity: 1; }
              48% { transform: translateY(1px) scale(.96) rotate(-3deg); opacity: 1; }
            }
            @keyframes ignite-icon-zigzag {
              0%, 100% { transform: translate(-8px, 8px) rotate(-10deg) scale(.84); opacity: .55; }
              25% { transform: translate(8px, -5px) rotate(10deg) scale(1.08); opacity: 1; }
              45% { transform: translate(-5px, -1px) rotate(-7deg) scale(1); opacity: 1; }
              65% { transform: translate(3px, 1px) rotate(4deg) scale(1.03); opacity: 1; }
            }
            .ignite-toy-icon { animation: ignite-toy-icon 3.8s ease-in-out infinite; transform-origin: center bottom; perspective: 500px; }
            .ignite-feature-card:nth-child(1) .ignite-toy-icon { animation-delay: 0s; }
            .ignite-feature-card:nth-child(2) .ignite-toy-icon { animation: ignite-icon-swing 3.8s ease-in-out .45s infinite; }
            .ignite-feature-card:nth-child(3) .ignite-toy-icon { animation: ignite-icon-flip 3.8s ease-in-out .9s infinite; }
            .ignite-feature-card:nth-child(4) .ignite-toy-icon { animation: ignite-icon-orbit 3.8s ease-in-out 1.35s infinite; }
            .ignite-feature-card:nth-child(5) .ignite-toy-icon { animation: ignite-icon-pop 3.8s ease-in-out 1.8s infinite; }
            .ignite-feature-card:nth-child(6) .ignite-toy-icon { animation: ignite-icon-zigzag 3.8s ease-in-out 2.25s infinite; }
            @media (prefers-reduced-motion: reduce) {
              .ignite-toy-icon { animation: none; }
            }
          `}</style>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Take Part</h2>
              <p className="text-slate-400 text-lg">Six compelling reasons to join INSPIRE IGNITE 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Present to Industry and Investors",
                  desc: "Your jury is made up of founders, senior engineers and investors — not only academics. The feedback is commercial, direct and immediately useful."
                },
                {
                  icon: Trophy,
                  title: "Cash Prizes Worth ₹30,000",
                  desc: "A prize pool of ₹30,000 — ₹15,000 awarded on each day, so offline and online teams compete for their own set of prizes. Special recognition awards for Best Prototype, Best Social Impact Idea and Best Presentation."
                },
                {
                  icon: Briefcase,
                  title: "Internship Opportunities",
                  desc: "Shortlisted participants are considered for structured internships across Inspire Softech Group Companies and our partner network."
                },
                {
                  icon: Network,
                  title: "Industry Connections",
                  desc: "Networking built into the day, with executive lunch and high tea alongside industry professionals and investors."
                },
                {
                  icon: Award,
                  title: "E-certificates for Everyone",
                  desc: "Every registered participant — online and offline, presenting and attending — receives a digital certificate."
                },
                {
                  icon: Zap,
                  title: "Visibility for Your Idea",
                  desc: "Winning and standout ideas are featured across our channels and shared with our industry network."
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="ignite-feature-card rounded-xl border border-slate-800 bg-slate-900/60 p-8 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300"
                >
                  <div className="ignite-toy-icon w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EVENT FORMAT (HYBRID) --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Event Format — Hybrid</h2>
              <p className="text-slate-400 text-lg">INSPIRE IGNITE 2026 runs over two days with equal opportunities on both</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Day 1 */}
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Day 1</h3>
                    <p className="text-amber-300 font-semibold">Wednesday, 30 September 2026</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">On Campus — Olympia Auditorium</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Olympia Technology Park, Guindy, Chennai 600 032. Live presentations before the jury and audience, executive lunch, high tea, networking, and the prize ceremony the same evening.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Live presentations before the jury and audience</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Executive lunch and high tea</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Networking with industry professionals</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Prize ceremony the same evening</span>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Day 2</h3>
                    <p className="text-blue-300 font-semibold">Thursday, 1 October 2026</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">Online — Google Meet</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Live virtual presentations for teams unable to travel to Chennai, judged by the same panel against the same criteria. Results are announced at the end of the session.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Live virtual presentations on Google Meet</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Same jury, same judging criteria</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Results announced same day</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Equal opportunities and prizes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-950/60 border border-slate-800 rounded-lg text-center text-sm text-slate-300">
              <p><span className="text-amber-400 font-semibold">Both modes face the same jury</span> and the same judging criteria. Each day carries its own set of prizes — so online teams compete against online teams, not against the auditorium.</p>
            </div>
          </div>
        </section>

        {/* --- WHO CAN PARTICIPATE --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Who Can Participate</h2>

            <div className="space-y-4">
              {[
                "Students currently enrolled in any recognised college or university. All disciplines welcome — this is not an engineering-only event.",
                "Recent graduates are also eligible.",
                "A maximum of three teams per college.",
                "Each team may have up to three members. Solo entries and two-member teams are permitted; the fee is the same.",
                "Cross-department teams from the same college are encouraged.",
                "An individual may be part of only one team."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-amber-400">{idx + 1}</span>
                  </div>
                  <p className="text-slate-300 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHAT YOU CAN PRESENT --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">What You Can Present</h2>
            <p className="text-center text-slate-400 text-lg mb-12">Open theme — there are no fixed tracks. Bring anything at any stage of maturity, as long as it is your own work:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Startup Idea",
                  desc: "A clear problem and a proposed solution"
                },
                {
                  title: "Prototype or MVP",
                  desc: "A working prototype or minimum viable product"
                },
                {
                  title: "Launched Product",
                  desc: "A product with early users"
                },
                {
                  title: "Research Project",
                  desc: "With commercial potential"
                },
                {
                  title: "Social Enterprise",
                  desc: "Or sustainability solution"
                },
                {
                  title: "Your Unique Vision",
                  desc: "If it fits the spirit of the event"
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 hover:border-amber-500/30 transition-colors">
                  <h4 className="text-amber-400 font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- REGISTRATION FEES TABLE --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Registration Fees</h2>
            <p className="text-center text-slate-400 mb-12 text-base">Presenting fees are per team, not per member — one fee covers up to three members. All fees are inclusive of applicable taxes and are non-refundable once registration is confirmed.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Fee</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">What is Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Presenting Team — Offline</td>
                    <td className="py-6 px-6 text-amber-400 font-extrabold text-lg tracking-wide">₹999</td>
                    <td className="py-6 px-6 text-slate-300">Stage slot on 30 September for up to 3 members, executive lunch, high tea, networking access, e-certificates, participation in prizes and internship shortlisting</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Presenting Team — Online</td>
                    <td className="py-6 px-6 text-amber-400 font-extrabold text-lg tracking-wide">₹499</td>
                    <td className="py-6 px-6 text-slate-300">Virtual presentation slot on 1 October for up to 3 members, e-certificates, participation in prizes and internship shortlisting</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Attendee Pass — Offline</td>
                    <td className="py-6 px-6 text-amber-400 font-extrabold text-lg tracking-wide">₹599</td>
                    <td className="py-6 px-6 text-slate-300">Full-day access on 30 September as audience, executive lunch, high tea, networking access, e-certificate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-slate-400 text-sm mt-6">Payments are collected through Razorpay. Registration is complete only when the fee is paid and a confirmation email has been received.</p>
          </div>
        </section>

        {/* --- KEY DATES TABLE --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Key Dates</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Milestone</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Registrations Open</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">1 September 2026</td>
                    <td className="py-4 px-6 text-slate-300">Online at inspiresoftechgroup.com/ignite</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Registration Closes</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">27 September 2026</td>
                    <td className="py-4 px-6 text-slate-300">No entries accepted after this date</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Presentation Deck Submission</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">28 September 2026</td>
                    <td className="py-4 px-6 text-slate-300">PDF or PPT, emailed to projects@edinztech.com</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Offline Event</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">30 September 2026</td>
                    <td className="py-4 px-6 text-slate-300">Olympia Auditorium, Guindy, Chennai</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Online Event</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">1 October 2026</td>
                    <td className="py-4 px-6 text-slate-300">Live on Google Meet</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 text-white font-semibold">Results & Certificates</td>
                    <td className="py-4 px-6 text-amber-300 font-semibold">30 Sep & 1 Oct 2026</td>
                    <td className="py-4 px-6 text-slate-300">Announced on event day; all e-certificates by 1 October</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- EVENT SCHEDULE --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Event Schedule</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Day 1 Schedule */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-amber-300 mb-6">Day 1 — 30 September 2026</h3>
                  <p className="text-slate-400 text-sm mb-6">Olympia Auditorium</p>
                  
                  <div className="space-y-3">
                    {[
                      { time: "08:30 – 09:30", session: "Registration, check-in and team briefing" },
                      { time: "09:30 – 10:00", session: "Inauguration and opening address" },
                      { time: "10:00 – 13:00", session: "Team presentations — Round 1" },
                      { time: "13:00 – 14:00", session: "Executive lunch" },
                      { time: "14:00 – 16:00", session: "Team presentations — Round 2" },
                      { time: "16:00 – 16:45", session: "High tea and networking" },
                      { time: "16:45 – 17:15", session: "Jury deliberation · Industry address" },
                      { time: "17:15 – 18:00", session: "Results, prize distribution and valedictory" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                        <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm min-w-fit">
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </div>
                        <p className="text-slate-300 text-sm">{item.session}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">Day 2 — 1 October 2026</h3>
                  <p className="text-slate-400 text-sm mb-6">Online (Google Meet)</p>
                  
                  <div className="space-y-3">
                    {[
                      { time: "09:30 – 10:00", session: "Virtual lobby opens, technical check for all teams" },
                      { time: "10:00 – 13:00", session: "Online presentations — Round 1" },
                      { time: "14:00 – 16:00", session: "Online presentations — Round 2" },
                      { time: "16:00 – 16:45", session: "Jury feedback session" },
                      { time: "17:00", session: "Results announced" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm min-w-fit">
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </div>
                        <p className="text-slate-300 text-sm">{item.session}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- JUDGING CRITERIA --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Judging Criteria</h2>
            <p className="text-center text-slate-400 mb-12 text-base">Every team, online and offline, is judged by the same panel against the same four criteria, each carrying 25 marks.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Criterion</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-400 w-20">Weight</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">What the Jury is Looking For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Problem Clarity</td>
                    <td className="py-6 px-6 text-center text-amber-400 font-bold">25</td>
                    <td className="py-6 px-6 text-slate-300">Is the problem real, specific and worth solving? Do you know who has it?</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Innovation</td>
                    <td className="py-6 px-6 text-center text-amber-400 font-bold">25</td>
                    <td className="py-6 px-6 text-slate-300">What is genuinely new here, and why has nobody solved it this way already?</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Feasibility</td>
                    <td className="py-6 px-6 text-center text-amber-400 font-bold">25</td>
                    <td className="py-6 px-6 text-slate-300">Can this actually be built and run with realistic resources? How far have you got?</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Impact and Business Potential</td>
                    <td className="py-6 px-6 text-center text-amber-400 font-bold">25</td>
                    <td className="py-6 px-6 text-slate-300">Who pays, who benefits, and how big can this become?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-slate-950/60 border border-slate-800 rounded-lg text-center text-sm text-slate-300">
              <p><span className="text-amber-400 font-semibold">How well you present</span> is not scored separately, but it decides whether the jury understands the other four. Seven minutes is short — <span className="text-amber-300">rehearse it.</span></p>
            </div>
          </div>
        </section>

        {/* --- PRIZES AND RECOGNITION --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Prizes and Recognition</h2>
            <p className="text-center text-slate-400 mb-12 text-base">A total prize pool of ₹30,000, split equally across the two days. Offline and online teams each compete for their own set of prizes.</p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Award</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Prize</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Awarded On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-900/30 transition-colors bg-gradient-to-r from-amber-500/10 to-transparent">
                    <td className="py-6 px-6 text-white font-bold">Winner — Offline</td>
                    <td className="py-6 px-6 text-amber-400 font-bold">₹10,000 + Trophy</td>
                    <td className="py-6 px-6 text-slate-300">30 September 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Runner-up — Offline</td>
                    <td className="py-6 px-6 text-amber-400 font-bold">₹5,000</td>
                    <td className="py-6 px-6 text-slate-300">30 September 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors bg-gradient-to-r from-blue-500/10 to-transparent">
                    <td className="py-6 px-6 text-white font-bold">Winner — Online</td>
                    <td className="py-6 px-6 text-blue-400 font-bold">₹10,000 + Trophy</td>
                    <td className="py-6 px-6 text-slate-300">1 October 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Runner-up — Online</td>
                    <td className="py-6 px-6 text-blue-400 font-bold">₹5,000</td>
                    <td className="py-6 px-6 text-slate-300">1 October 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
              <h3 className="text-lg font-bold text-amber-300 mb-6">Special Recognition Awards</h3>
              <p className="text-slate-400 text-sm mb-4">Presented on both days, in addition to the cash prizes:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <span className="text-slate-300">Best Prototype</span>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <span className="text-slate-300">Best Social Impact Idea</span>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <span className="text-slate-300">Best Presentation</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-amber-300 font-semibold mb-4">Beyond the Prizes</h4>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Internship offers for shortlisted participants across Inspire Softech Group Companies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>E-certificates for every registered participant</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Mentorship conversations for ideas worth taking further</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VENUE --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Venue</h2>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Olympia Auditorium</h3>
              <p className="text-white font-semibold mb-6">Olympia Technology Park, Guindy, Chennai 600 032</p>
              
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                The venue is close to Guindy railway station and the Guindy metro station, and is well connected by bus. Detailed directions are shared with registered teams by email before the event.
              </p>

              <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-6">
                <p className="text-slate-400 text-sm text-center">
                  🗺️ <span className="text-amber-300">Google Map embedding and detailed directions coming soon</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT THE ORGANISER --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">About the Organiser</h2>

            <div className="space-y-6 text-slate-300 text-base leading-relaxed">
              <p>
                <span className="text-amber-300 font-semibold">Inspire Softech Group Companies</span> is a Chennai-based technology consortium that bridges academia, research and industry. The group operates several brands — including Inspire Softech Solutions, Edinz Tech Private Limited, Adore Technology Solutions and iGreen StarTech Solutions — across software development, technology training, industry internships and academic partnerships.
              </p>

              <p>
                The group works with colleges across Tamil Nadu through memoranda of understanding, structured internships, industry-mentored projects, industrial visits and placement readiness programmes. <span className="text-amber-300 font-semibold">INSPIRE IGNITE 2026</span> is an extension of that work: an industry-run platform where student ideas are evaluated by the people who actually build and fund products.
              </p>

              <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-8 mt-8">
                <p className="font-semibold text-white mb-2">Led by</p>
                <p className="text-amber-300 font-bold text-lg">Dr. Karthiya Banu</p>
                <p className="text-slate-400">Founder & CEO, with over two decades of combined experience across academia and the corporate sector</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- FREQUENTLY ASKED QUESTIONS --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Do I need a working product to participate?",
                  a: "No. An idea with a clearly defined problem and solution is enough. A prototype or working product strengthens your case on feasibility, but ideas are welcome and judged fairly."
                },
                {
                  q: "Is there a fixed theme?",
                  a: "No. INSPIRE IGNITE 2026 runs on an open theme — bring an idea from any domain."
                },
                {
                  q: "Can students from different departments form one team?",
                  a: "Yes, and we encourage it. A team with a mix of technical and business thinking usually presents better."
                },
                {
                  q: "Are recent graduates eligible?",
                  a: "Yes. Recent graduates may participate alongside currently enrolled students."
                },
                {
                  q: "Is the fee per person or per team?",
                  a: "Presenting fees are per team — one fee covers up to three members. The attendee pass is per person."
                },
                {
                  q: "What if only two of us want to present?",
                  a: "That is fine. Teams of one, two or three all pay the same fee."
                },
                {
                  q: "Can our college send more than three teams?",
                  a: "No. Three teams per college is a firm limit, so that the day stays fair to smaller colleges."
                },
                {
                  q: "I want to attend but not present. Can I?",
                  a: "Yes. The offline attendee pass is ₹599 and gives you full access to the day, including executive lunch, high tea, the networking session and an e-certificate."
                },
                {
                  q: "Will online teams be judged differently?",
                  a: "No. The same jury applies the same four criteria to both days. Each day has its own set of prizes, and results are declared on the day you present."
                },
                {
                  q: "Are the prizes the same for online and offline teams?",
                  a: "Yes. Each day carries an identical set — a winner's prize of ₹10,000 and a runner-up prize of ₹5,000, plus the three special recognition awards. Online teams compete only against other online teams."
                },
                {
                  q: "How do I pay?",
                  a: "Registration is through an online form, and payment is completed through a Razorpay link issued at the end of it."
                },
                {
                  q: "Will you take ownership of our idea?",
                  a: "No. You retain complete ownership of your intellectual property. Please do not present anything you consider confidential, as the event is public."
                },
                {
                  q: "Is the registration fee refundable?",
                  a: "No. Fees are non-refundable and non-transferable once registration is confirmed."
                },
                {
                  q: "Will we get a certificate?",
                  a: "Yes. Every registered participant receives an e-certificate, whether presenting or attending, online or offline."
                }
              ].map((faq, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full text-left p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-amber-500/30 hover:bg-slate-900/90 transition-all duration-200 flex items-center justify-between"
                  >
                    <h4 className="font-semibold text-white text-base">{faq.q}</h4>
                    <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedFAQ === idx && (
                    <div className="p-6 bg-slate-950/60 border border-slate-800 border-t-0 rounded-b-lg text-slate-300 text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- REGISTRATION AND PAYMENT --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Registration & Payment</h2>
            <p className="text-center text-slate-400 mb-12 text-base">Complete your registration through our secure online form</p>

            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-2xl p-10 mb-12">
              <h3 className="text-2xl font-bold text-amber-300 mb-6 text-center">Google Registration Form</h3>
              <div className="text-center mb-8">
                <p className="text-slate-300 mb-6">Click below to start your registration</p>
                <a 
                  href="https://forms.gle/fgzDCKsVHqDsHEUB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-base transition-all duration-200 shadow-lg shadow-amber-500/20 group"
                >
                  Open Registration Form
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Category</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Fee</th>
                    <th className="text-left py-4 px-6 font-semibold text-amber-400">Payment Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Offline Presenting Team</td>
                    <td className="py-6 px-6 text-amber-400 font-extrabold text-lg tracking-wide">₹999 per team</td>
                    <td className="py-6 px-6">
                      <a href="https://rzp.io/rzp/joD2Na9" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1">
                        Pay Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Online Presenting Team</td>
                    <td className="py-6 px-6 text-blue-400 font-extrabold text-lg tracking-wide">₹499 per team</td>
                    <td className="py-6 px-6">
                      <a href="https://rzp.io/rzp/joD2Na9" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                        Pay Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-6 px-6 text-white font-semibold">Offline Attendee Pass</td>
                    <td className="py-6 px-6 text-green-400 font-extrabold text-lg tracking-wide">₹599 per person</td>
                    <td className="py-6 px-6">
                      <a href="https://rzp.io/rzp/R6SHgE9e" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-medium inline-flex items-center gap-1">
                        Pay Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- CONTACT & CLOSING CALL TO ACTION --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-2xl p-10 sm:p-14 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Registrations close on 27 September 2026
              </h2>
              <p className="text-xl text-amber-300 font-semibold text-center mb-8">
                Three teams per college. Seven minutes each. Make them count.
              </p>
              <div className="text-center">
                <a 
                  href="https://forms.gle/fgzDCKsVHqDsHEUB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-base transition-all duration-200 shadow-lg shadow-amber-500/20 group"
                >
                  Register Your Team Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Venue</p>
                      <p className="text-white font-semibold mt-1">Olympia Technology Park, Guindy, Chennai 600 032</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Phone</p>
                      <div className="flex items-center gap-3 mt-1">
                        <a href="tel:+919360505768" className="text-white hover:text-amber-300 transition-colors">
                          +91 93605 05768
                        </a>
                        <span className="text-slate-600">•</span>
                        <a href="tel:+918667493679" className="text-white hover:text-amber-300 transition-colors">
                          +91 86674 93679
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <a href="mailto:projects@edinztech.com" className="text-white hover:text-amber-300 transition-colors mt-1">
                        projects@edinztech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Web</p>
                      <a href="https://inspiresoftechgroup.com/ignite" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-medium transition-colors mt-1">
                        inspiresoftechgroup.com/ignite
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organization Info */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Inspire Softech Group</h3>
                
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Inspire Softech Group Companies is a Chennai-based technology consortium bridging academia, research and industry.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-lg">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Founded by</p>
                    <p className="text-white font-bold mt-2">Dr. Karthiya Banu</p>
                    <p className="text-xs text-slate-400 mt-1">Founder & CEO</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-lg">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Operating Companies</p>
                    <p className="text-slate-300 text-sm mt-2">
                      • Inspire Softech Solutions<br/>
                      • Edinz Tech Private Limited<br/>
                      • Adore Technology Solutions<br/>
                      • iGreen StarTech Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default IgnitePage;