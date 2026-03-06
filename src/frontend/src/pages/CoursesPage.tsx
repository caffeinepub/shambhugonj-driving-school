import { Link } from "@tanstack/react-router";
import {
  Award,
  Bike,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import React from "react";

const courses = [
  {
    id: 1,
    titleBn: "সরকার নির্ধারিত ৬০ ঘণ্টার বাধ্যতামূলক কোর্স",
    icon: <Shield size={32} />,
    badge: null,
    popular: false,
    details: [{ label: "মোট সময়", value: "৬০ ঘণ্টা" }],
    features: [
      "থিওরি ও প্র্যাকটিক্যাল",
      "ট্রাফিক আইন ও সড়ক নিরাপত্তা",
      "লাইসেন্স পরীক্ষার প্রস্তুতি",
      "সরকার অনুমোদিত সার্টিফিকেট",
    ],
    fee: null,
    feeNote: "সরকার নির্ধারিত",
  },
  {
    id: 2,
    titleBn: "৩০ দিনের বেসিক ড্রাইভিং কোর্স",
    icon: <Award size={32} />,
    badge: "সবচেয়ে জনপ্রিয়",
    popular: true,
    details: [
      { label: "সময়কাল", value: "১ মাস" },
      { label: "প্রতিদিন", value: "৩০ মিনিট" },
    ],
    features: [
      "ম্যানুয়াল ও অটো",
      "হাতে-কলমে প্র্যাকটিস",
      "ট্রাফিক নিয়ম শিক্ষা",
      "লাইসেন্স পরীক্ষার প্রস্তুতি",
    ],
    fee: "১০,০০০ টাকা",
    feeNote: null,
  },
  {
    id: 3,
    titleBn: "স্পেশাল ড্রাইভিং কোর্স",
    icon: <BookOpen size={32} />,
    badge: null,
    popular: false,
    details: [],
    features: [
      "উন্নত রোড দক্ষতা",
      "অ্যাডভান্সড প্র্যাকটিক্যাল",
      "বিশেষজ্ঞ প্রশিক্ষক",
      "সার্টিফিকেট প্রদান",
    ],
    fee: "২৫,০০০ টাকা",
    feeNote: null,
  },
  {
    id: 4,
    titleBn: "মোটরসাইকেল বেসিক কোর্স",
    icon: <Bike size={32} />,
    badge: null,
    popular: false,
    details: [],
    features: [
      "ব্যালেন্স ও নিয়ন্ত্রণ",
      "রোড সেফটি",
      "হাতে-কলমে প্র্যাকটিস",
      "সার্টিফিকেট প্রদান",
    ],
    fee: "৭,০০০ টাকা",
    feeNote: null,
  },
];

export default function CoursesPage() {
  return (
    <main>
      {/* ── Page Header ── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.18 0.065 240)" }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "oklch(0.96 0.012 85)" }}
          >
            কোর্সসমূহ
          </h1>
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
            }}
          />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "oklch(0.72 0.020 85)" }}
          >
            সরকার অনুমোদিত প্রশিক্ষণ কোর্স — আপনার প্রয়োজন অনুযায়ী বেছে নিন
          </p>
        </div>
      </section>

      {/* ── Courses Grid ── */}
      <section className="py-16" style={{ background: "oklch(0.93 0.018 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: course.popular
                    ? "oklch(0.18 0.065 240)"
                    : "oklch(0.98 0.008 85)",
                  border: course.popular
                    ? "2.5px solid oklch(0.78 0.12 75)"
                    : "1.5px solid oklch(0.82 0.020 85)",
                  boxShadow: course.popular
                    ? "0 8px 32px oklch(0.18 0.065 240 / 0.30)"
                    : "0 2px 12px oklch(0.18 0.065 240 / 0.08)",
                }}
              >
                {/* Popular badge */}
                {course.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-extrabold"
                      style={{
                        background: "oklch(0.78 0.12 75)",
                        color: "oklch(0.18 0.065 240)",
                        borderRadius: "0 0 12px 12px",
                      }}
                    >
                      <Star size={12} fill="currentColor" />
                      {course.badge}
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                )}

                <div
                  className={`p-6 flex flex-col flex-1 ${course.badge ? "pt-10" : ""}`}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: course.popular
                        ? "oklch(0.78 0.12 75 / 0.20)"
                        : "oklch(0.18 0.065 240 / 0.08)",
                      color: course.popular
                        ? "oklch(0.78 0.12 75)"
                        : "oklch(0.18 0.065 240)",
                    }}
                  >
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h2
                    className="font-extrabold text-base mb-3 leading-snug"
                    style={{
                      color: course.popular
                        ? "oklch(0.96 0.012 85)"
                        : "oklch(0.18 0.065 240)",
                    }}
                  >
                    {course.titleBn}
                  </h2>

                  {/* Details */}
                  {course.details.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {course.details.map((d) => (
                        <span
                          key={d.label}
                          className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: course.popular
                              ? "oklch(0.78 0.12 75 / 0.15)"
                              : "oklch(0.18 0.065 240 / 0.08)",
                            color: course.popular
                              ? "oklch(0.86 0.10 75)"
                              : "oklch(0.24 0.070 240)",
                          }}
                        >
                          <Clock size={11} />
                          {d.label}: {d.value}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm"
                        style={{
                          color: course.popular
                            ? "oklch(0.82 0.018 85)"
                            : "oklch(0.35 0.040 240)",
                        }}
                      >
                        <CheckCircle
                          size={14}
                          style={{
                            color: course.popular
                              ? "oklch(0.78 0.12 75)"
                              : "oklch(0.42 0.055 240)",
                            flexShrink: 0,
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Fee */}
                  {course.fee && (
                    <div
                      className="text-2xl font-extrabold mb-4"
                      style={{
                        color: course.popular
                          ? "oklch(0.78 0.12 75)"
                          : "oklch(0.18 0.065 240)",
                      }}
                    >
                      {course.fee}
                    </div>
                  )}
                  {course.feeNote && (
                    <div
                      className="text-xs font-semibold mb-4 px-2 py-1 rounded-md inline-block"
                      style={{
                        background: "oklch(0.18 0.065 240 / 0.08)",
                        color: "oklch(0.32 0.065 240)",
                      }}
                    >
                      {course.feeNote}
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href="tel:01712727004"
                    className="mt-auto w-full text-center py-3 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    style={{
                      background: course.popular
                        ? "oklch(0.78 0.12 75)"
                        : "oklch(0.18 0.065 240)",
                      color: course.popular
                        ? "oklch(0.18 0.065 240)"
                        : "oklch(0.96 0.012 85)",
                    }}
                  >
                    <Phone size={14} />
                    ভর্তি হতে কল করুন
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-14"
        style={{ background: "oklch(0.18 0.065 240)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "oklch(0.96 0.012 85)" }}
          >
            আজই শুরু করুন
          </h2>
          <p className="text-sm mb-6" style={{ color: "oklch(0.72 0.020 85)" }}>
            আপনার পছন্দের কোর্সে ভর্তি হতে এখনই যোগাযোগ করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01712727004"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "oklch(0.78 0.12 75)",
                color: "oklch(0.18 0.065 240)",
              }}
            >
              <Phone size={16} />
              01712727004
            </a>
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "oklch(0.96 0.012 85)",
                color: "oklch(0.18 0.065 240)",
              }}
            >
              ভর্তি ফর্ম পূরণ করুন <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
