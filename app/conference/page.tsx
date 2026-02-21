// src/app/conference/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Mail, Phone, Award, BookOpen, 
  Users, Globe, CheckCircle, ShieldCheck, Landmark, Briefcase, CreditCard, ArrowRight
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { downloadPDF } from '../../utils/downloadUtils';

const ConferencePage = () => {
  const [activeSub, setActiveSub] = useState('about');

  useEffect(() => {
    const ids = ['about', 'advisory', 'tracks', 'publication', 'awards', 'registration', 'contact'];
    const offset = 140; // adjust to account for fixed nav height

    const onScroll = () => {
      const scrollPos = window.scrollY + offset;
      for (let id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSub(id);
          return;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSub(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/images/conference-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* --- SUB-NAVBAR MENU --- */}
          {/* --- SUB-NAVBAR MENU --- */}
          <div className="sticky top-16 pt-[1.5%] z-20 hidden md:block">
            <style>{`
              .conference-subnav{background:linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,244,229,0.95));backdrop-filter:blur(6px);border-bottom:1px solid rgba(203,213,225,0.6);box-shadow:0 8px 30px rgba(2,6,23,0.08);border-bottom-left-radius:12px;border-bottom-right-radius:12px}
              .conference-subnav ul{display:flex;justify-content:center;gap:2.25rem;padding:0;margin:0;list-style:none}
              .conference-subnav a.nav-link{display:inline-block;padding:.45rem .9rem;border-radius:9999px;color:#475569;transition:transform .35s,background .25s,color .2s}
              .conference-subnav a.nav-link.active{color:#c2410c;background:rgba(255,239,213,0.7);transform:scale(1.06);animation:zoom 1.6s ease-in-out infinite}
              @keyframes zoom{0%{transform:scale(1)}50%{transform:scale(1.06)}100%{transform:scale(1)}}
            `}</style>

            <div className="conference-subnav">
              <div className="max-w-6xl mx-auto px-6 py-3">
                <ul>
                  <li><a href="#about" onClick={(e) => handleSubNavClick(e, 'about')} className={`nav-link ${activeSub === 'about' ? 'active' : ''}`}>About</a></li>
                  <li><a href="#advisory" onClick={(e) => handleSubNavClick(e, 'advisory')} className={`nav-link ${activeSub === 'advisory' ? 'active' : ''}`}>Advisory Board</a></li>
                  <li><a href="#tracks" onClick={(e) => handleSubNavClick(e, 'tracks')} className={`nav-link ${activeSub === 'tracks' ? 'active' : ''}`}>Tracks</a></li>
                  <li><a href="#publication" onClick={(e) => handleSubNavClick(e, 'publication')} className={`nav-link ${activeSub === 'publication' ? 'active' : ''}`}>Publication</a></li>
                  <li><a href="#awards" onClick={(e) => handleSubNavClick(e, 'awards')} className={`nav-link ${activeSub === 'awards' ? 'active' : ''}`}>Awards</a></li>
                  <li><a href="#registration" onClick={(e) => handleSubNavClick(e, 'registration')} className={`nav-link ${activeSub === 'registration' ? 'active' : ''}`}>Registration</a></li>
                  <li><a href="#contact" onClick={(e) => handleSubNavClick(e, 'contact')} className={`nav-link ${activeSub === 'contact' ? 'active' : ''}`}>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

        {/* --- HERO SECTION --- */}
        <div className="relative pt-[5%] text-white pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-amber-500 text-white text-xs font-bold mb-6 uppercase tracking-widest">
              ISO 9001:2015 Certified | AICTE-Associated
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              GC³I² – 2026
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
              Global Conference & Excellence Awards on <br />
              <span className="text-amber-500 font-semibold italic">Innovation, Intelligence & Impact</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm md:text-base mb-10">
              <div className="flex items-center justify-center gap-2 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>21 & 22 March 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Olympia Technology Park Auditorium, Guindy, Chennai</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm border border-white/20">
                <Globe className="w-5 h-5 text-amber-500" />
                <span>Mode: Hybrid (Offline & Online)</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={() => downloadPDF('Conference brochure 2026.pdf', '/pdfs/Conference brochure 2026.pdf')}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* --- ABOUT & DATES SECTION --- */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-6xl pt-[5%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-amber-500 pl-4">About the Conference</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The GC³I² – 2026 is an international forum bringing together academicians, researchers, industry professionals, healthcare practitioners, entrepreneurs, and social leaders from across the globe.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Promote interdisciplinary research",
                    "Strengthen industry–academia collaboration",
                    "Encourage applied and impact-driven research",
                    "Global platform for knowledge exchange"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-500">
                  <Calendar className="w-5 h-5" /> Important Dates
                </h3>
                <div className="space-y-4">
                  <DateItem label="Abstract Submission" date="2 March 2026" />
                  <DateItem label="Notification of Acceptance" date="6 March 2026" />
                  <DateItem label="Camera-Ready Paper" date="10 March 2026" />
                  <DateItem label="Awards Nomination" date="2 March 2026" />
                  <div className="pt-4 border-t border-slate-700 mt-4">
                    <p className="text-amber-500 font-bold">Conference Dates</p>
                    <p className="text-xl">21 & 22 March 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADVISORY BOARD --- */}
        <section id="advisory" className="py-20 px-6 bg-white">
          <div className="max-w-6xl pt-[5%] mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Advisory Board</h2>
            <p className="text-gray-600 text-lg">Advisory Board members will be announced shortly.</p>
          </div>
        </section>

        {/* --- TRACKS --- */}
        <section id="tracks" className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl pt-[5%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Conference Tracks</h2>
              <p className="text-gray-500">Exploring multifaceted domains of innovation</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Artificial Intelligence & Intelligent Systems",
                "Data Science, Analytics & Decision Sciences",
                "Industry 4.0, Automation & Smart Technologies",
                "Healthcare, Medical Technologies & Bio-Innovation",
                "Management, Business & Entrepreneurship",
                "Engineering, Technology & Applied Sciences",
                "Arts, Humanities & Social Sciences",
                "Sustainable Development & Green Technologies",
                "Education, Skill Development & Digital Learning"
              ].map((track, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-amber-300 transition-all group">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                    <BookOpen className="w-6 h-6 text-amber-600 group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 leading-tight">{track}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PUBLICATION & CERTIFICATION --- */}
        <section id="publication" className="py-20 px-6 bg-white">
          <div className="max-w-6xl pt-[5%] mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-amber-600" /> Publication Benefits
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-gray-600">All papers undergo rigorous peer-review.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-gray-600">Accepted papers included in Conference Proceedings with <strong>ISBN</strong>.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-gray-600">High-quality papers recommended for <strong>Indexed Journals</strong> or edited book chapters.</p>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Certification & Recognition</h3>
              <p className="text-sm text-amber-800 mb-4">
                Official Paper Presentation Certificates will be issued to all presenting authors.
              </p>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-amber-200">
                <Award className="w-10 h-10 text-amber-600" />
                <div>
                  <p className="font-bold text-slate-900">Best Paper Awards</p>
                  <p className="text-xs text-gray-500 italic">Based on originality, technical quality, and innovation.</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-amber-700 font-medium">
                * Hard copies provided to offline participants; digital copies for all.
              </p>
            </div>
          </div>
        </section>

        {/* --- AWARDS SECTION --- */}
        <section id="awards" className="py-20 px-6 bg-slate-900 text-white">
          <div className="max-w-6xl pt-[5%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Global Excellence Awards – 2026</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Hosted by Edinz Tech Private Limited, recognizing leadership and impactful contributions across diverse domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AwardCategory title="Academic & Research" items={["Best Academician of the Year", "Best Researcher of the Year", "Young Researcher Award", "Excellence in Teaching & Learning", "Outstanding Contribution to Research"]} />
              <AwardCategory title="Industry & Corporate" items={["Industry Leader of the Year", "Excellence in Corporate Leadership", "Innovation Leader Award", "Excellence in Digital Transformation"]} />
              <AwardCategory title="Healthcare & Medical" items={["Medical Professional of the Year", "Excellence in Healthcare Services", "Innovation in Medical Technology", "Community Healthcare"]} />
              <AwardCategory title="Technology & Innovation" items={["Technology Innovator of the Year", "Excellence in AI & Emerging Tech", "Best Startup / Entrepreneurial Innovation"]} />
              <AwardCategory title="Education & Training" items={["Excellence in Skill Development", "Outstanding Training Organisation", "Mentor of the Year"]} />
              <AwardCategory title="Social Impact" items={["Excellence in Social Impact", "Women Leadership Excellence", "Young Achiever Award"]} />
            </div>

            <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-4">How to Nominate?</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Submit a detailed resume and a brief summary of achievements to: <br />
                <span className="text-amber-500 font-mono text-lg">globalconfinspire@gmail.com</span>
              </p>
              <div className="flex justify-center mt-6">
                <a href="https://forms.gle/rZJcaTBkSNv98Rjp9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                  <ArrowRight className="w-4 h-4" /> Open Awards Nomination Form
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- REGISTRATION TABLE --- */}
        <section id="registration" className="py-20 px-6 bg-white">
          <div className="max-w-4xl pt-[5%] mx-auto">
            <div className="mb-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Paper Presentation Registration</h3>
              <p className="text-gray-600 mb-4">Participants intending to present a paper must complete the Paper Presentation Registration Form.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <a href="https://forms.gle/GXc2QXiKhhYJWvfU7" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-semibold">Open Registration Form</a>
          
              </div>

              <h4 className="text-lg font-semibold mb-2 text-slate-900">Certification</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>All registered paper presenters will receive an official Paper Presentation Certificate.</li>
                <li>Certificates will be issued to all authors who successfully present their papers.</li>
                <li>Digital certificates will be provided to all participants; hard copies will be issued to offline participants where applicable.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Registration Fees</h2>
            <div className="overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-900 uppercase text-xs font-bold">
                  <tr>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">India (INR)</th>
                    <th className="px-6 py-4">Payment</th>
                    <th className="px-6 py-4">International (USD)</th>
                    <th className="px-6 py-4">Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Online Paper Presenter</td>
                    <td className="px-6 py-4 text-slate-600">₹2,750</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/edmlvzag" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$25</td>
                    <td className="px-2 py-4 text-center align-middle" rowSpan={6}>
                      <div className="text-sm font-semibold text-amber-600">For International Payments</div>
                      <div className="text-xs text-slate-600 mt-1">contact Admin</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Offline Student</td>
                    <td className="px-6 py-4 text-slate-600">₹1,250</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/A14ubQnO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$50</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Offline Research Scholar</td>
                    <td className="px-6 py-4 text-slate-600">₹1,500</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/H63vX2S" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$69</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Offline Academician</td>
                    <td className="px-6 py-4 text-slate-600">₹1,750</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/FhE4CANt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$70</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Offline Industry Professional</td>
                    <td className="px-6 py-4 text-slate-600">₹2,500</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/d4OCrd4a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$90</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">Awards Nomination</td>
                    <td className="px-6 py-4 text-slate-600">₹3,000</td>
                    <td className="px-2 py-4">
                      <a href="https://rzp.io/rzp/vDNoXs2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md">
                        <CreditCard className="w-3 h-3" /> Register Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-gray-600">
              <p><strong>Payment Info:</strong> Mention Transaction ID / Reference Number in the registration form.</p>
            </div>
          </div>
        </section>

        {/* --- PARTNERS & CONTACT --- */}
        <section id="contact" className="py-20 px-6 bg-slate-50 border-t border-gray-200">
          <div className="max-w-6xl pt-[5%] mx-auto text-center">
            <div className="mb-12">
              <div className="mx-auto w-full sm:w-96 bg-white p-8 rounded-2xl shadow-xl border border-amber-100 mb-6 group hover:bg-amber-600 hover:border-amber-600 transition-colors">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-600 group-hover:bg-white/10 group-hover:text-white">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest group-hover:text-white">Patron</p>
                <p className="font-bold text-slate-900 text-lg mt-2 group-hover:text-white">Dr. Karthiya Banu</p>
                <p className="text-xs text-gray-400 mt-1 group-hover:text-white">Founder & CEO, Inspire Softech Group</p>
              </div>

              <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-6">Industry Partners</h3>
              <div className="flex flex-wrap justify-center gap-10 opacity-80 mb-8">
                <PartnerLogo name="Edinz Tech Private Limited" />
                <PartnerLogo name="Adore Technology Solutions" />
                <PartnerLogo name="iGreen StarTech Solutions" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
              <ContactCard icon={<Mail />} title="Email Us" content="globalconfinspire@gmail.com" link="mailto:globalconfinspire@gmail.com" />
              <ContactCard icon={<Phone />} title="Call Us" content="+91 86674 93679" link="tel:+918667493679" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const DateItem = ({ label, date }: { label: string, date: string }) => (
  <div className="flex justify-between border-b border-slate-800 pb-2">
    <span className="text-slate-400 text-sm">{label}</span>
    <span className="font-semibold text-amber-500 text-sm">{date}</span>
  </div>
);

const AwardCategory = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
    <h3 className="text-lg font-bold text-amber-500 mb-4 border-b border-white/10 pb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
          <div className="w-1 h-1 bg-amber-500 rounded-full" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const FeeRow = ({ category, inr, usd, inrLink, usdLink }: { category: string, inr: string, usd: string, inrLink?: string, usdLink?: string }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-medium text-slate-700">{category}</td>
    <td className="px-6 py-4 text-slate-600">{inr}</td>
    <td className="px-2 py-4">
      {inrLink ? (
        <a href={inrLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md">
          <CreditCard className="w-4 h-4" /> Register Now
          <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <span className="text-xs text-slate-400 italic">—</span>
      )}
    </td>
    <td className="px-6 py-4 text-slate-600">{usd}</td>
    <td className="px-2 py-4">
      <span className="text-xs text-slate-400 italic">—</span>
    </td>
  </tr>
);

const ContactCard = ({ icon, title, content, link }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
      {icon}
    </div>
    <p className="font-bold text-slate-900">{title}</p>
    <a href={link} className="text-gray-600 hover:text-amber-600 transition-colors text-sm">{content}</a>
  </div>
);

const PartnerLogo = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2">
    <Briefcase className="w-5 h-5 text-amber-600" />
    <span className="font-bold text-slate-800 tracking-tight">{name}</span>
  </div>
);

export default ConferencePage;