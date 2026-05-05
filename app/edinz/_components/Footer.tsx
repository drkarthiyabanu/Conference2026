'use client';

import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { href: '/edinz/services#web', label: 'Web Development' },
  { href: '/edinz/services#erp', label: 'ERP Solutions' },
  { href: '/edinz/services#fullstack', label: 'Full Stack Dev' },
  { href: '/edinz/services#ai', label: 'AI & Machine Learning' },
  { href: '/edinz/services#cloud', label: 'Cloud Computing' },
];

const quickLinks = [
  { href: '/edinz', label: 'Home' },
  { href: '/edinz/services', label: 'Services' },
  { href: '/edinz/about', label: 'About Us' },
  { href: '/edinz/about#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B2A', color: 'rgba(255,255,255,.7)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/edinz">
                <Image
                  src="/logos/edinz_logo.png"
                  alt="Edinz Tech Pvt. Ltd."
                  width={150}
                  height={52}
                  className="object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.5)' }}>
              Next-generation software development and technology solutions — headquartered at Olympia Tech Park,
              Chennai. ISO 9001:2015 certified, AICTE associated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-all duration-200 hover:pl-1" style={{ color: 'rgba(255,255,255,.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E87722')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-all duration-200" style={{ color: 'rgba(255,255,255,.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E87722')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: '📞', content: <><a href="tel:+914461459000" style={{ color: 'rgba(255,255,255,.55)' }} className="text-sm block hover:text-[#E87722]">+91 44 6145 90000</a><a href="tel:+918667493679" style={{ color: 'rgba(255,255,255,.55)' }} className="text-sm block hover:text-[#E87722]">+91 86674 93679</a></> },
                { icon: '✉️', content: <a href="mailto:projects@edinztech.com" style={{ color: 'rgba(255,255,255,.55)' }} className="text-sm hover:text-[#E87722]">projects@edinztech.com</a> },
                { icon: '📍', content: <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.55)' }}>10th Floor, CITIUS – A Block,<br />Olympia Tech Park, Guindy,<br />Chennai – 600032</p> },
              ].map(({ icon, content }, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-base mt-0.5" style={{ color: '#E87722' }}>{icon}</span>
                  <div>{content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,.35)' }}>
            © 2025 Edinz Tech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,.35)' }}>
            Part of <span style={{ color: '#E87722', fontWeight: 600 }}>Inspire Softech Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
