"use client";

import React from 'react';
import CommitteeCard from './CommitteeCard';
import { committeesData } from '@/data/committees';
import { Users, Users2, Briefcase, Award } from 'lucide-react';

const CommitteesSection: React.FC = () => {
  const sectionIcons = {
    "Patron": <Award className="w-6 h-6" />,
    "Conference Dignitaries": <Users className="w-6 h-6" />,
    "Advisory Committee": <Users2 className="w-6 h-6" />,
    "Technical & Media Team": <Briefcase className="w-6 h-6" />,
  };

  return (
    <section id="committees" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <div className="text-center mb-20">          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Organizing{" & "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Technical Committees
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collective of visionary leaders, accomplished researchers, and industry experts driving the conference's excellence and impact.
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-16">
          {committeesData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="scroll-mt-20">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100">
                  <div className="text-amber-600">
                    {sectionIcons[section.title as keyof typeof sectionIcons] || <Users className="w-6 h-6" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 border-l-4 border-amber-500 pl-4">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-gray-600 text-sm mt-1 pl-4">{section.description}</p>
                  )}
                </div>
              </div>

              {/* Members Grid */}
              <div className={`grid ${section.gridCols} gap-6 md:gap-8`}>
                {section.members.map((member) => (
                  <CommitteeCard key={member.id} member={member} />
                ))}
              </div>

              {/* Section Divider */}
              {sectionIndex !== committeesData.length - 1 && (
                <div className="mt-12 pt-12 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default CommitteesSection;

