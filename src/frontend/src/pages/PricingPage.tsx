import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight } from "lucide-react";
import React from "react";

const plans = [
  {
    id: 1,
    titleBn: "বেসিক কোর্স",
    titleEn: "Basic Course",
    subtitle: "কার ড্রাইভিং ৩০ দিন",
    price: "৳৩,৫০০",
    popular: false,
    features: [
      "থিওরি ক্লাস",
      "প্র্যাকটিক্যাল ড্রাইভিং",
      "ট্রাফিক নিয়ম",
      "পার্কিং প্রশিক্ষণ",
      "সার্টিফিকেট",
    ],
  },
  {
    id: 2,
    titleBn: "স্পেশাল কোর্স",
    titleEn: "Special Course",
    subtitle: "কার ড্রাইভিং ৬০ দিন",
    price: "৳৫,০০০",
    popular: true,
    features: [
      "বিস্তারিত থিওরি",
      "দীর্ঘমেয়াদী প্র্যাকটিক্যাল",
      "হাইওয়ে ড্রাইভিং",
      "রাতের ড্রাইভিং",
      "লাইসেন্স সহায়তা",
      "সার্টিফিকেট",
    ],
  },
  {
    id: 3,
    titleBn: "মোটরসাইকেল বেসিক",
    titleEn: "Motorcycle Basic",
    subtitle: "মোটরসাইকেল ৩০ দিন",
    price: "৳২,৫০০",
    popular: false,
    features: [
      "বেসিক মোটরসাইকেল",
      "ব্যালেন্স প্রশিক্ষণ",
      "ট্রাফিক নিয়ম",
      "নিরাপত্তা বিধি",
      "সার্টিফিকেট",
    ],
  },
  {
    id: 4,
    titleBn: "মোটরসাইকেল স্পেশাল",
    titleEn: "Motorcycle Special",
    subtitle: "মোটরসাইকেল ৬০ দিন",
    price: "৳৩,৫০০",
    popular: false,
    features: [
      "অ্যাডভান্সড রাইডিং",
      "দীর্ঘ রুট প্র্যাকটিস",
      "হাইওয়ে রাইডিং",
      "মেইনটেন্যান্স বেসিক",
      "সার্টিফিকেট",
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-14" style={{ background: "var(--olive-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "oklch(0.96 0.015 95)" }}
          >
            মূল্য তালিকা
          </h1>
          <div className="shim-divider w-24 mx-auto mb-4" />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "oklch(0.80 0.030 100)" }}
          >
            সাশ্রয়ী মূল্যে পেশাদার ড্রাইভিং প্রশিক্ষণ
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 section-olive">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative rounded-xl p-6 flex flex-col shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: plan.popular ? "var(--olive-mid)" : "var(--card)",
                  border: plan.popular
                    ? "2px solid var(--shim-gold)"
                    : "1.5px solid var(--olive-pale)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "var(--shim-gold)",
                      color: "oklch(0.22 0.025 95)",
                    }}
                  >
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3
                    className="font-extrabold text-base mb-0.5"
                    style={{
                      color: plan.popular
                        ? "oklch(0.97 0.010 95)"
                        : "var(--olive-dark)",
                    }}
                  >
                    {plan.titleBn}
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{
                      color: plan.popular
                        ? "oklch(0.85 0.025 100)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    {plan.subtitle}
                  </p>
                  {/* Price badge */}
                  <div className="flex justify-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{
                        border: `2px solid ${plan.popular ? "var(--shim-gold)" : "var(--olive-pale)"}`,
                        background: plan.popular
                          ? "oklch(0.38 0.075 120)"
                          : "var(--stone-warm)",
                      }}
                    >
                      <span
                        className="text-lg font-extrabold"
                        style={{
                          color: plan.popular
                            ? "var(--shim-gold)"
                            : "var(--olive-dark)",
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs">
                      <CheckCircle
                        size={13}
                        style={{
                          color: plan.popular
                            ? "var(--shim-gold)"
                            : "var(--olive-mid)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: plan.popular
                            ? "oklch(0.90 0.020 100)"
                            : "var(--foreground)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/admission"
                  className="w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{
                    background: plan.popular
                      ? "var(--shim-gold)"
                      : "var(--olive-mid)",
                    color: plan.popular
                      ? "oklch(0.22 0.025 95)"
                      : "var(--stone-warm)",
                  }}
                >
                  ভর্তি হন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "var(--olive-mid)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "oklch(0.97 0.010 95)" }}
          >
            প্রশ্ন আছে?
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "oklch(0.88 0.025 100)" }}
          >
            যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:shadow-olive-lg hover:-translate-y-0.5"
            style={{
              background: "var(--shim-gold)",
              color: "oklch(0.22 0.025 95)",
            }}
          >
            যোগাযোগ করুন <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
