"use client";

import React, { useState } from 'react';
import { User } from 'lucide-react';
import { CommitteeMember } from '@/data/committees';

interface CommitteeCardProps {
  member: CommitteeMember;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const imagePath = `/images/committee/${member.imageName || 'placeholder'}.jpg`;

  return (
    <div className="group relative h-full">
      {/* Card Container with Hover Effects */}
      <div className="h-full bg-white rounded-2xl border-2 border-slate-100 p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
        {/* Profile Image Container */}
        <div className="w-32 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-50 group-hover:border-amber-400 transition-colors duration-300 flex-shrink-0">
          {!imageError ? (
            <img
              src={imagePath}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Fallback Avatar */
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=fef3c7&color=b45309&size=256&font-size=0.35&bold=true`}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Honors/Awards Badge */}
        {member.honors && (
          <div className="mb-3 inline-block">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200">
              {member.honors}
            </span>
          </div>
        )}

        {/* Member Name */}
        <h4 className="font-bold text-slate-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
          {member.name}
        </h4>

        {/* Role */}
        <p className="text-amber-700 font-semibold text-xs mb-2 leading-tight">
          {member.role}
        </p>

        {/* Organization */}
        <p className="text-slate-600 text-[11px] leading-relaxed mb-3 flex-grow">
          {member.organization}
        </p>

        {/* Extra Information (if available) */}
        {member.extra && (
          <p className="text-slate-500 text-[10px] italic border-t border-slate-100 pt-2 mt-2 w-full">
            {member.extra}
          </p>
        )}

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default CommitteeCard;
