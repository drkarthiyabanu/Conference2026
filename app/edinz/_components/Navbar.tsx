'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/edinz',               label: 'Home' },
  { href: '/edinz/services',      label: 'Services' },
  { href: '/edinz/about',         label: 'About Us' },
  { href: '/edinz/about#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [hash, setHash]           = useState('');
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || '');
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setHash(window.location.hash || '');
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (href.includes('#')) {
      const [, fragment] = href.split('#');
      setHash(fragment ? `#${fragment}` : '');
    } else {
      setHash('');
    }
  };

  const isActive = (href: string) => {
    if (href.includes('#')) {
      const [hrefPath, hrefHash] = href.split('#');
      return pathname === hrefPath && hash === `#${hrefHash}`;
    }

    if (pathname !== href) {
      return false;
    }

    return hash === '';
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300"
        style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.1)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[76px]">

          {/* ── Logo ── */}
          <Link href="/edinz" className="flex items-center shrink-0 max-w-[180px]">
            {!logoError ? (
              <Image
                src="/logos/edinz_logo.png"
                alt="Edinz Tech Pvt. Ltd."
                width={160}
                height={52}
                className="object-contain max-h-[52px]"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              /* Fallback text logo matching brand colours */
              <span className="flex flex-col leading-none select-none">
                <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#00AEEF', letterSpacing: '-0.01em' }}>
                  edinz
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#E87722', letterSpacing: '0.05em' }}>
                  TECH PVT. LTD
                </span>
                <span style={{ fontSize: '0.52rem', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.04em' }}>
                  An Inspire Softech Group Company
                </span>
              </span>
            )}
          </Link>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => handleLinkClick(l.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color:      isActive(l.href) ? '#E87722' : '#374151',
                    background: isActive(l.href) ? 'rgba(232,119,34,.08)' : 'transparent',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/edinz/about#contact"
            onClick={() => handleLinkClick('/edinz/about#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: '#E87722' }}
          >
            Get in Touch
          </Link>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#1B3A6B', transform: open ? 'rotate(45deg) translate(4px,4px)' : '' }} />
            <span className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#1B3A6B', opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: '#1B3A6B', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="fixed top-[76px] left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => {
                setOpen(false);
                handleLinkClick(l.href);
              }}
              className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
              style={{ color: isActive(l.href) ? '#E87722' : '#374151', background: isActive(l.href) ? 'rgba(232,119,34,.08)' : 'transparent' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/edinz/about#contact"
            onClick={() => {
              setOpen(false);
              handleLinkClick('/edinz/about#contact');
            }}
            className="mt-3 px-4 py-3 rounded-lg text-white text-center font-semibold"
            style={{ background: '#E87722' }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
}
