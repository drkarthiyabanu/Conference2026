"use client";

import React, { useState } from 'react';
import {
  Award, Users, Briefcase, FileText, MapPin, Phone, Mail, Calendar, Star
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IgnitePage = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 px-3 md:px-6 text-center">
          <style>{`
            @keyframes fireFlicker {
              0%, 100% { text-shadow: 0 0 20px #ff6600, 0 0 40px #ff8800, 0 0 60px #ffaa00, 0 0 80px #ffcc00; }
              50% { text-shadow: 0 0 30px #ff7700, 0 0 50px #ff9900, 0 0 70px #ffbb00, 0 0 90px #ffdd00; }
            }
            .fire-text {
              animation: fireFlicker 3s ease-in-out infinite;
              color: #ffaa00;
              font-weight: 900;
              letter-spacing: 2px;
            }
            .glow-text {
              text-shadow: 0 0 10px rgba(255, 170, 0, 0.8), 0 0 20px rgba(255, 200, 0, 0.6);
            }
          `}</style>

          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-amber-400 text-sm font-bold uppercase tracking-widest">
                ✨ Talent Hunt 2026
              </span>
            </div>

            {/* Main Title with Fire Effect */}
            <div className="mb-6">
              <p className="text-amber-400 text-lg md:text-2xl font-semibold mb-2 glow-text">INSPIRE</p>
              <h1 className="fire-text text-5xl md:text-7xl font-black mb-4 leading-tight">
                IGNITE
              </h1>
              <p className="text-4xl md:text-6xl font-black text-gradient bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2026
              </p>
            </div>

            {/* Tagline */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Talent Hunt for Startup Ideas
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-4">
                Where Student Projects Meet Industry
              </p>
              <p className="text-amber-400 text-xl md:text-2xl font-bold italic">
                Project Expo. Talent Hunt. One Stage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedModel('campus')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-amber-400 flex items-center justify-center gap-2 group"
              >
                <span className="text-2xl">👨‍🎓</span>
                Campus to Corporate
              </button>
              <button
                onClick={() => setSelectedModel('hybrid')}
                className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-amber-400/50 flex items-center justify-center gap-2 group"
              >
                <span className="text-2xl">🌐</span>
                Hybrid Model
              </button>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Present your startup or project idea, gain industry feedback, and connect with the <span className="text-amber-400 font-bold">right investors.</span>
              </p>
            </div>

            {/* Trophy & Rewards Section */}
            <div className="bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 border-2 border-amber-500 rounded-3xl p-8 md:p-12 mb-12 inline-block">
              <div className="text-5xl md:text-6xl mb-4">🏆</div>
              <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-2">Top 3 Teams</h3>
              <p className="text-xl text-white font-bold">Will Receive Rewards</p>
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="py-20 px-3 md:px-6 bg-gradient-to-b from-black/50 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 rounded-2xl p-8 text-center hover:border-amber-500/60 transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👨‍💼</div>
                <h4 className="text-white font-bold text-lg mb-2">Pitch to Real Engineers</h4>
                <p className="text-gray-400 text-sm">Get valuable feedback from industry professionals</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 rounded-2xl p-8 text-center hover:border-amber-500/60 transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤝</div>
                <h4 className="text-white font-bold text-lg mb-2">Connect with Investors</h4>
                <p className="text-gray-400 text-sm">Network with potential investors and mentors</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 rounded-2xl p-8 text-center hover:border-amber-500/60 transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📜</div>
                <h4 className="text-white font-bold text-lg mb-2">Participation Certificate</h4>
                <p className="text-gray-400 text-sm">Recognized credentials for all participants</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 rounded-2xl p-8 text-center hover:border-amber-500/60 transition-all group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                <h4 className="text-white font-bold text-lg mb-2">Internship Opportunities</h4>
                <p className="text-gray-400 text-sm">Potential internship offers from participating companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- HIGHLIGHTS SECTION --- */}
        <section className="py-20 px-3 md:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Important Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Highlight 1 */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">👥</div>
                  <h3 className="text-white font-bold text-lg">Each College</h3>
                </div>
                <p className="text-2xl font-black text-amber-400">Can Nominate Only 3 Teams</p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">👨‍👩‍👧</div>
                  <h3 className="text-white font-bold text-lg">Team Size</h3>
                </div>
                <p className="text-2xl font-black text-amber-400">Maximum 3 Members Per Team</p>
              </div>

              {/* Highlight 3 */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">🪑</div>
                  <h3 className="text-white font-bold text-lg">Availability</h3>
                </div>
                <p className="text-2xl font-black text-amber-400">Seats are Limited</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- REGISTRATION SECTION --- */}
        <section className="py-20 px-3 md:px-6 bg-gradient-to-b from-black via-black to-slate-950">
          <div className="max-w-6xl mx-auto">
            {/* Registration Banner */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-2xl p-1 mb-12">
              <div className="bg-black rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-amber-400 font-bold text-lg mb-2">REGISTRATIONS</p>
                    <h3 className="text-white text-3xl md:text-4xl font-black">OPEN</h3>
                  </div>
                  <div className="border-l border-r border-amber-500/50">
                    <p className="text-gray-400 font-bold text-lg mb-2">Registration Starts</p>
                    <h3 className="text-white text-3xl md:text-4xl font-black">1<sup className="text-lg">st</sup> Sep 2026</h3>
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-lg mb-2">Event On</p>
                    <h3 className="text-white text-3xl md:text-4xl font-black">30<sup className="text-lg">th</sup> Sep 2026</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Register Now
              </button>
            </div>
          </div>
        </section>

        {/* --- ORGANIZER INFO SECTION --- */}
        <section className="py-20 px-3 md:px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Organization Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">✨</span>
                    Organized By
                  </h3>
                  <p className="text-amber-400 font-bold text-xl mb-2">
                    Inspire Softech Group Companies
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    An initiative dedicated to nurturing innovation and connecting student talent with industry opportunities.
                  </p>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">
                        Olympia Technology Park, Guindy, Chennai
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      <div>
                        <a href="tel:+919360505768" className="text-amber-400 hover:text-amber-300 font-semibold">
                          +91 93605 05768
                        </a>
                        <span className="text-gray-500 mx-2">•</span>
                        <a href="tel:+918667493679" className="text-amber-400 hover:text-amber-300 font-semibold">
                          +91 86674 93679
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      <a href="mailto:Projects@edinztech.com" className="text-amber-400 hover:text-amber-300 font-semibold">
                        Projects@edinztech.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Star className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      <a href="https://inspiresoftechgroup.com/ignite" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold">
                        inspiresoftechgroup.com/ignite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MODEL SELECTION INFO --- */}
        {selectedModel && (
          <section className="py-20 px-3 md:px-6 bg-gradient-to-b from-slate-950 to-black">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500 rounded-3xl p-8 md:p-12">
                <button
                  onClick={() => setSelectedModel(null)}
                  className="text-gray-400 hover:text-white text-2xl mb-4"
                >
                  ✕
                </button>
                {selectedModel === 'campus' ? (
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">🎓 Campus to Corporate</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      This model is designed for college students to showcase their projects directly to corporate professionals and investors. Students present their ideas in-person and receive real-time feedback from industry experts.
                    </p>
                    <div className="bg-black/50 rounded-xl p-4 border border-amber-500/30">
                      <p className="text-amber-400 font-semibold">Key Benefits:</p>
                      <ul className="text-gray-300 mt-2 space-y-2">
                        <li>✓ Direct interaction with corporate mentors</li>
                        <li>✓ Face-to-face pitch opportunities</li>
                        <li>✓ Immediate feedback and networking</li>
                        <li>✓ On-site internship interviews</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">🌐 Hybrid Model</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Participate from anywhere! Our hybrid model allows students to present virtually or in-person, giving flexibility to teams across different locations to showcase their innovative ideas.
                    </p>
                    <div className="bg-black/50 rounded-xl p-4 border border-amber-500/30">
                      <p className="text-amber-400 font-semibold">Key Benefits:</p>
                      <ul className="text-gray-300 mt-2 space-y-2">
                        <li>✓ Participate remotely or in-person</li>
                        <li>✓ Global reach and participation</li>
                        <li>✓ Flexible presentation options</li>
                        <li>✓ Virtual mentoring opportunities</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default IgnitePage;
