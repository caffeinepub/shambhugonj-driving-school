import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const navLinks = [
  { href: '/', label: 'হোম' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/courses', label: 'কোর্সসমূহ' },
  { href: '/driving-license', label: 'ড্রাইভিং লাইসেন্স' },
  { href: '/gallery', label: 'গ্যালারি' },
  { href: '/contact', label: 'যোগাযোগ' },
];

// bKash icon as SVG component
function BkashIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#E2136E" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">bK</text>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50" style={{ boxShadow: '0 4px 20px oklch(0.14 0.055 240 / 0.35)' }}>
      {/* ── TOP BAR ── */}
      <div style={{ background: 'oklch(0.14 0.055 240)', borderBottom: '1px solid oklch(0.22 0.060 240)' }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          {/* Left: Government approval text */}
          <span
            className="text-xs font-medium text-center sm:text-left"
            style={{ color: 'oklch(0.88 0.018 85)' }}
          >
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ড্রাইভিং প্রশিক্ষণ কেন্দ্র
          </span>
          {/* Right: Registration number badge */}
          <span
            className="text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap"
            style={{
              background: 'oklch(0.88 0.025 85)',
              color: 'oklch(0.18 0.065 240)',
              border: '1px solid oklch(0.78 0.12 75)',
            }}
          >
            নিবন্ধন নম্বর: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
          </span>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <div style={{ background: 'oklch(0.18 0.065 240)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Logo + School Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shrink-0"
              style={{ border: '2.5px solid oklch(0.78 0.12 75)', background: 'oklch(0.24 0.070 240)' }}
            >
              <img
                src="/assets/generated/shambhugonj-logo-optimized.dim_200x200.png"
                alt="শম্ভুগঞ্জ ড্রাইভিং স্কুল লোগো"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = '/assets/generated/school-logo-transparent.dim_200x200.png';
                  t.onerror = () => { t.style.display = 'none'; };
                }}
              />
            </div>
            <div>
              <div className="font-extrabold text-lg leading-tight" style={{ color: 'oklch(0.96 0.012 85)' }}>
                শম্ভুগঞ্জ ড্রাইভিং স্কুল
              </div>
              <div className="text-xs font-medium" style={{ color: 'oklch(0.78 0.12 75)' }}>
                Shambhugonj Driving School
              </div>
            </div>
          </Link>

          {/* Right: Contact info column */}
          <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
            {/* Primary number with WhatsApp + bKash */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/8801712727004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full transition-transform hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <SiWhatsapp size={16} color="white" />
              </a>
              <a
                href="tel:01712727004"
                className="text-xl font-extrabold tracking-wide hover:underline"
                style={{ color: 'oklch(0.78 0.12 75)' }}
              >
                01712727004
              </a>
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110"
                title="bKash"
              >
                <BkashIcon size={32} />
              </div>
            </div>
            {/* Office number + hours */}
            <div className="flex items-center gap-3 text-xs" style={{ color: 'oklch(0.75 0.020 85)' }}>
              <span className="flex items-center gap-1">
                <Phone size={11} />
                অফিস: <a href="tel:01711605754" className="hover:underline ml-0.5">01711605754</a>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                সকাল ৯টা – রাত ৯টা
              </span>
            </div>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 rounded-md ml-auto"
            style={{ color: 'oklch(0.88 0.018 85)', background: 'oklch(0.24 0.070 240)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="মেনু"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile contact info */}
        <div className="sm:hidden px-4 pb-2 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/8801712727004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full"
              style={{ background: '#25D366' }}
              aria-label="WhatsApp"
            >
              <SiWhatsapp size={14} color="white" />
            </a>
            <a
              href="tel:01712727004"
              className="text-lg font-extrabold"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              01712727004
            </a>
            <div className="flex items-center justify-center w-7 h-7 rounded-full" title="bKash">
              <BkashIcon size={28} />
            </div>
          </div>
          <div className="text-xs" style={{ color: 'oklch(0.75 0.020 85)' }}>
            অফিস: 01711605754 | সকাল ৯টা – রাত ৯টা
          </div>
        </div>
      </div>

      {/* ── NAVIGATION BAR ── */}
      <div style={{ background: 'oklch(0.22 0.068 240)', borderTop: '1px solid oklch(0.28 0.060 240)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-3 text-sm font-semibold transition-all duration-200 border-b-2"
                style={{
                  color: isActive(link.href) ? 'oklch(0.78 0.12 75)' : 'oklch(0.88 0.018 85)',
                  borderBottomColor: isActive(link.href) ? 'oklch(0.78 0.12 75)' : 'transparent',
                  background: isActive(link.href) ? 'oklch(0.26 0.065 240)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="ml-auto px-5 py-2 my-1.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: 'oklch(0.78 0.12 75)', color: 'oklch(0.18 0.065 240)' }}
            >
              ভর্তি হন
            </Link>
          </nav>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="lg:hidden flex flex-col gap-0.5 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2.5 rounded-md text-sm font-semibold transition-all"
                  style={{
                    color: isActive(link.href) ? 'oklch(0.78 0.12 75)' : 'oklch(0.88 0.018 85)',
                    background: isActive(link.href) ? 'oklch(0.26 0.065 240)' : 'transparent',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admission"
                className="mt-1 px-4 py-2.5 rounded-lg text-sm font-bold text-center"
                style={{ background: 'oklch(0.78 0.12 75)', color: 'oklch(0.18 0.065 240)' }}
                onClick={() => setMobileOpen(false)}
              >
                ভর্তি হন
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
