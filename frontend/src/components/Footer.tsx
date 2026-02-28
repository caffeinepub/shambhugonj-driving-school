import React from 'react';
import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { SiFacebook, SiYoutube, SiTiktok, SiWhatsapp } from 'react-icons/si';

const quickLinks = [
  { href: '/', label: 'হোম' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
  { href: '/courses', label: 'কোর্সসমূহ' },
  { href: '/driving-license', label: 'ড্রাইভিং লাইসেন্স' },
  { href: '/gallery', label: 'গ্যালারি' },
  { href: '/contact', label: 'যোগাযোগ' },
  { href: '/admission', label: 'ভর্তি' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'shambhugonj-driving-school'
  );

  return (
    <footer style={{ background: 'oklch(0.16 0.060 240)', color: 'oklch(0.88 0.018 85)' }}>
      {/* Gold top accent */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75), oklch(0.78 0.12 75))' }} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Brand Column ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                style={{ border: '2px solid oklch(0.78 0.12 75)', background: 'oklch(0.22 0.068 240)' }}
              >
                <img
                  src="/assets/generated/shambhugonj-logo-optimized.dim_200x200.png"
                  alt="লোগো"
                  className="w-12 h-12 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="font-extrabold text-base leading-tight" style={{ color: 'oklch(0.96 0.012 85)' }}>
                  শম্ভুগঞ্জ ড্রাইভিং স্কুল
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'oklch(0.78 0.12 75)' }}>
                  Shambhugonj Driving School
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.72 0.020 85)' }}>
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ড্রাইভিং প্রশিক্ষণ কেন্দ্র।
              নিরাপদ সড়কের জন্য চাই দক্ষ চালক।
            </p>

            {/* Registration badge */}
            <div
              className="inline-block text-xs px-3 py-1.5 rounded-md font-semibold mb-5"
              style={{
                background: 'oklch(0.88 0.025 85)',
                color: 'oklch(0.18 0.065 240)',
                border: '1px solid oklch(0.78 0.12 75)',
              }}
            >
              নিবন্ধন নম্বর: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/8801712727004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={16} color="white" />
              </a>
              <a
                href="https://www.facebook.com/brtashahid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'oklch(0.26 0.065 240)', border: '1px solid oklch(0.35 0.055 240)', color: 'oklch(0.88 0.018 85)' }}
                aria-label="Facebook"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@brtashahid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'oklch(0.26 0.065 240)', border: '1px solid oklch(0.35 0.055 240)', color: 'oklch(0.88 0.018 85)' }}
                aria-label="YouTube"
              >
                <SiYoutube size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@brtashahid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'oklch(0.26 0.065 240)', border: '1px solid oklch(0.35 0.055 240)', color: 'oklch(0.88 0.018 85)' }}
                aria-label="TikTok"
              >
                <SiTiktok size={16} />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="font-bold text-base mb-5" style={{ color: 'oklch(0.78 0.12 75)' }}>
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:underline flex items-center gap-1.5"
                    style={{ color: 'oklch(0.72 0.020 85)' }}
                  >
                    <span style={{ color: 'oklch(0.78 0.12 75)' }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="font-bold text-base mb-5" style={{ color: 'oklch(0.78 0.12 75)' }}>
              যোগাযোগ
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: 'oklch(0.72 0.020 85)' }}>
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'oklch(0.78 0.12 75)' }} />
                <span>৩৩ নং ওয়ার্ড, ময়মনসিংহ সিটি কর্পোরেশন, নেত্রকোনা রোড, শম্ভুগঞ্জ সদর, ময়মনসিংহ</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: 'oklch(0.72 0.020 85)' }}>
                <Phone size={14} className="shrink-0" style={{ color: 'oklch(0.78 0.12 75)' }} />
                <div>
                  <div className="font-semibold" style={{ color: 'oklch(0.88 0.018 85)' }}>প্রধান মোবাইল:</div>
                  <a href="tel:01712727004" className="hover:underline font-bold" style={{ color: 'oklch(0.78 0.12 75)' }}>
                    01712727004
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: 'oklch(0.72 0.020 85)' }}>
                <Phone size={14} className="shrink-0" style={{ color: 'oklch(0.78 0.12 75)' }} />
                <div>
                  <div>অফিস: <a href="tel:01711605754" className="hover:underline">01711605754</a></div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: 'oklch(0.72 0.020 85)' }}>
                <Clock size={14} className="shrink-0" style={{ color: 'oklch(0.78 0.12 75)' }} />
                <span>সকাল ৯টা – রাত ৯টা</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: 'oklch(0.72 0.020 85)' }}>
                <Mail size={14} className="shrink-0" style={{ color: 'oklch(0.78 0.12 75)' }} />
                <a href="mailto:shambhugonjdrivingschool@gmail.com" className="hover:underline break-all">
                  shambhugonjdrivingschool@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid oklch(0.24 0.055 240)', background: 'oklch(0.13 0.050 240)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'oklch(0.60 0.020 85)' }}>
          <span>© {year} শম্ভুগঞ্জ ড্রাইভিং স্কুল. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="mx-0.5" style={{ color: 'oklch(0.78 0.12 75)', fill: 'oklch(0.78 0.12 75)' }} />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium"
              style={{ color: 'oklch(0.78 0.12 75)' }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
