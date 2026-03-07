import { Link } from "@tanstack/react-router";
import {
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  FolderOpen,
  Phone,
  Shield,
} from "lucide-react";
import React from "react";

const services = [
  {
    step: "০১",
    icon: <FileText size={26} />,
    titleBn: "লার্নার লাইসেন্স",
    titleEn: "Learner License",
    desc: "বিআরটিএ থেকে লার্নার লাইসেন্স পেতে সম্পূর্ণ সহায়তা প্রদান করা হয়।",
  },
  {
    step: "০২",
    icon: <CreditCard size={26} />,
    titleBn: "স্মার্ট কার্ড ড্রাইভিং লাইসেন্স",
    titleEn: "Smart Card Driving License",
    desc: "স্মার্ট কার্ড ড্রাইভিং লাইসেন্স আবেদন ও প্রসেসিং সহায়তা।",
  },
  {
    step: "০৩",
    icon: <Building2 size={26} />,
    titleBn: "বিআরটিএ সহায়তা",
    titleEn: "BRTA Support",
    desc: "ড্রাইভিং লাইসেন্স প্রসেসিং এর জন্য সম্পূর্ণ বিআরটিএ সহায়তা।",
  },
  {
    step: "০৪",
    icon: <FolderOpen size={26} />,
    titleBn: "ফাইল প্রসেসিং",
    titleEn: "File Processing",
    desc: "সব ধরনের লাইসেন্স সংক্রান্ত ফাইল প্রসেসিং দ্রুত ও নির্ভরযোগ্যভাবে।",
  },
];

export default function DrivingLicensePage() {
  return (
    <main>
      {/* ── Header ── */}
      <section className="py-16" style={{ background: "var(--olive-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Main heading — clear, bold, easy to read */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{
              color: "oklch(0.97 0.015 95)",
              textShadow: "0 2px 12px oklch(0.10 0.04 240 / 0.50)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            ড্রাইভিং লাইসেন্স সেবা
          </h1>
          {/* Gold underline divider */}
          <div
            className="w-28 h-1.5 mx-auto mb-5 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75), oklch(0.78 0.12 75))",
            }}
          />

          {/* Highlighted authority badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
              style={{
                background: "oklch(0.78 0.12 75 / 0.25)",
                color: "oklch(0.97 0.010 85)",
                border: "1.5px solid oklch(0.78 0.12 75)",
              }}
            >
              <Shield size={14} style={{ color: "oklch(0.78 0.12 75)" }} />
              বাংলাদেশ সরকার প্রশিক্ষণ কেন্দ্র
            </span>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
              style={{
                background: "oklch(0.78 0.12 75 / 0.25)",
                color: "oklch(0.97 0.010 85)",
                border: "1.5px solid oklch(0.78 0.12 75)",
              }}
            >
              নিবন্ধন নাম্বার: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
            </span>
          </div>

          <p
            className="text-sm max-w-xl mx-auto mt-2"
            style={{ color: "oklch(0.88 0.018 85)" }}
          >
            লার্নার লাইসেন্স থেকে স্মার্ট কার্ড পর্যন্ত সম্পূর্ণ সহায়তা
          </p>
        </div>
      </section>

      {/* ── Services in box layout ── */}
      <section className="py-16 section-olive">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="text-xl sm:text-2xl font-extrabold mb-2"
              style={{ color: "var(--olive-dark)" }}
            >
              আমাদের সেবাসমূহ
            </h2>
            <div className="shim-divider w-20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.titleBn}
                className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--card)",
                  border: "2px solid oklch(0.78 0.12 75 / 0.55)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 4px 24px oklch(0.78 0.12 75 / 0.12), 0 1px 6px oklch(0.18 0.065 240 / 0.08)",
                }}
              >
                {/* Gold top accent bar */}
                <div
                  style={{
                    height: "4px",
                    background:
                      "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  {/* Step number */}
                  <div
                    className="text-2xl font-extrabold mb-3"
                    style={{ color: "oklch(0.78 0.12 75)" }}
                  >
                    {service.step}
                  </div>
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "var(--olive-wash)",
                      color: "var(--olive-mid)",
                      border: "1.5px solid var(--olive-pale)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="font-bold text-base mb-1 leading-snug"
                    style={{ color: "oklch(0.12 0.045 240)" }}
                  >
                    {service.titleBn}
                  </h3>
                  <p
                    className="text-xs font-medium mb-3"
                    style={{ color: "oklch(0.28 0.045 240)" }}
                  >
                    {service.titleEn}
                  </p>
                  <p
                    className="text-sm leading-relaxed mt-auto"
                    style={{ color: "oklch(0.25 0.040 240)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* License images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid oklch(0.78 0.12 75 / 0.45)",
                boxShadow: "0 4px 20px oklch(0.78 0.12 75 / 0.10)",
              }}
            >
              <img
                src="/assets/generated/driving-license-card.dim_300x200.jpg"
                alt="বিআরটিএ ড্রাইভিং লাইসেন্স কার্ড"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4" style={{ background: "var(--card)" }}>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--olive-dark)" }}
                >
                  স্মার্ট কার্ড ড্রাইভিং লাইসেন্স
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.30 0.045 240)" }}
                >
                  BRTA অনুমোদিত স্মার্ট কার্ড লাইসেন্স
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid oklch(0.78 0.12 75 / 0.45)",
                boxShadow: "0 4px 20px oklch(0.78 0.12 75 / 0.10)",
              }}
            >
              <img
                src="/assets/generated/car-training.dim_400x300.jpg"
                alt="ড্রাইভিং প্রশিক্ষণ"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4" style={{ background: "var(--card)" }}>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--olive-dark)" }}
                >
                  লাইসেন্স প্রসেসিং সহায়তা
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.30 0.045 240)" }}
                >
                  দ্রুত ও নির্ভরযোগ্য লাইসেন্স প্রসেসিং
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14" style={{ background: "var(--olive-mid)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "oklch(0.97 0.010 95)" }}
          >
            লাইসেন্স পেতে যোগাযোগ করুন
          </h2>
          <p className="text-sm mb-6" style={{ color: "oklch(0.92 0.012 85)" }}>
            আমাদের অভিজ্ঞ দল আপনাকে সম্পূর্ণ সহায়তা করবে।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01712727004"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:shadow-olive-lg hover:-translate-y-0.5"
              style={{
                background: "var(--shim-gold)",
                color: "oklch(0.22 0.025 95)",
              }}
            >
              <Phone size={18} />
              01712-727004
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "oklch(0.36 0.07 120)",
                color: "oklch(0.95 0.015 95)",
                border: "1.5px solid oklch(0.52 0.09 115)",
              }}
            >
              যোগাযোগ করুন <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
