// src/app/conference/page.tsx
import React from 'react';
import { Calendar, MapPin, Mail, Phone, Award, BookOpen, Users, Globe } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ConferencePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
            GC³I² – 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Global Conference on <br />
            <span className="text-amber-500">Innovation, Intelligence & Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            An International Conference & Awards Platform bringing together academicians, researchers, and industry professionals.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center justify-center gap-2 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>21 & 22 March 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>Olympia Tech Park, Chennai (Hybrid)</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About the <span className="text-amber-600">Conference</span></h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Global Conference on Innovation, Intelligence & Impact – 2026 (GC³I² – 2026) is an international forum bringing together academicians, researchers, industry professionals, healthcare practitioners, entrepreneurs, and social leaders from across the globe.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Promote interdisciplinary research and innovation",
                "Strengthen industry–academia collaboration",
                "Encourage applied and impact-driven research",
                "Provide a global platform for knowledge exchange"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" /> Important Dates
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Abstract Submission</span>
                <span className="font-semibold text-slate-900 text-right">9 Feb 2026</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Notification of Acceptance</span>
                <span className="font-semibold text-slate-900 text-right">15 Feb 2026</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Camera-Ready Submission</span>
                <span className="font-semibold text-slate-900 text-right">2 Mar 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Awards Nomination</span>
                <span className="font-semibold text-slate-900 text-right">23 Feb 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TRACKS --- */}
      <div className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Conference <span className="text-amber-600">Tracks</span></h2>
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
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <BookOpen className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-semibold text-slate-800">{track}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- AWARDS SECTION --- */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Recognition</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Global Excellence Awards 2026</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hosted by Edinz Tech Private Limited, recognizing outstanding individuals and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AwardCategory title="Academic & Research" items={["Best Academician", "Best Researcher", "Young Researcher Award", "Teaching Excellence"]} />
          <AwardCategory title="Industry & Corporate" items={["Industry Leader of the Year", "Innovation Leader", "Corporate Excellence", "Digital Transformation"]} />
          <AwardCategory title="Healthcare & Medical" items={["Medical Professional of Year", "Healthcare Services", "MedTech Innovation", "Community Healthcare"]} />
          <AwardCategory title="Technology" items={["Tech Innovator", "AI Excellence", "Best Startup", "Product Development"]} />
          <AwardCategory title="Social Impact" items={["Social Impact Excellence", "Women Leadership", "Young Achiever", "Community Development"]} />
        </div>
        
        <div className="mt-10 text-center">
           <a href="mailto:globalconfinspire@gmail.com" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
             <Award className="w-4 h-4" /> Nominate for Awards
           </a>
        </div>
      </div>

      {/* --- REGISTRATION TABLE --- */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Registration <span className="text-amber-500">Fees</span></h2>
          <div className="overflow-x-auto bg-slate-800 rounded-2xl border border-slate-700">
            <table className="w-full text-left">
              <thead className="bg-slate-950 text-amber-500 uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">India (INR)</th>
                  <th className="px-6 py-4">International (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <FeeRow category="Online Paper Presenter" inr="₹750" usd="$25" />
                <FeeRow category="Offline Student" inr="₹1,250" usd="$50" />
                <FeeRow category="Offline Research Scholar" inr="₹1,500" usd="$60" />
                <FeeRow category="Offline Academician" inr="₹1,750" usd="$75" />
                <FeeRow category="Offline Industry Professional" inr="₹2,500" usd="$90" />
                <FeeRow category="Awards Nomination" inr="₹3,000" usd="$100" />
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Participants must complete payment and mention the Transaction ID in the registration form.
          </p>
        </div>
      </div>

      {/* --- CONTACT --- */}
      <div className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-amber-600">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold text-slate-900">Email Us</p>
              <a href="mailto:globalconfinspire@gmail.com" className="text-gray-600 hover:text-amber-600">globalconfinspire@gmail.com</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-amber-600">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold text-slate-900">Call Us</p>
              <a href="tel:+918667493679" className="text-gray-600 hover:text-amber-600">+91 86674 93679</a>
            </div>
          </div>
          
          <div className="mt-12 border-t border-amber-200/50 pt-8">
            <p className="font-bold text-slate-800">Patron</p>
            <p className="text-gray-600">Dr. Karthiya Banu</p>
            <p className="text-sm text-gray-500">Founder & CEO, Inspire Softech Group Companies</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Helper Components
const AwardCategory = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-amber-100 pb-2">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const FeeRow = ({ category, inr, usd }: { category: string, inr: string, usd: string }) => (
  <tr className="hover:bg-slate-800/50 transition-colors">
    <td className="px-6 py-4 font-medium text-gray-200">{category}</td>
    <td className="px-6 py-4 text-gray-300">{inr}</td>
    <td className="px-6 py-4 text-gray-300">{usd}</td>
  </tr>
);

export default ConferencePage;