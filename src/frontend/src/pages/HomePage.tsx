import { Link } from "@tanstack/react-router";
import {
  Award,
  BedDouble,
  Bike,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Phone,
  Shield,
  Star,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

// ── Course Data ──
const courses = [
  {
    id: 1,
    titleBn: "সরকার নির্ধারিত ৬০ ঘণ্টার বাধ্যতামূলক কোর্স",
    icon: <Shield size={28} />,
    badge: null,
    popular: false,
    details: [{ label: "মোট সময়", value: "৬০ ঘণ্টা" }],
    features: [
      "থিওরি ও প্র্যাকটিক্যাল",
      "ট্রাফিক আইন ও সড়ক নিরাপত্তা",
      "লাইসেন্স পরীক্ষার প্রস্তুতি",
    ],
    fee: null,
    feeNote: "সরকার নির্ধারিত",
  },
  {
    id: 2,
    titleBn: "৩০ দিনের বেসিক ড্রাইভিং কোর্স",
    icon: <Award size={28} />,
    badge: "সবচেয়ে জনপ্রিয়",
    popular: true,
    details: [
      { label: "সময়কাল", value: "১ মাস" },
      { label: "প্রতিদিন", value: "৩০ মিনিট" },
    ],
    features: ["ম্যানুয়াল ও অটো", "হাতে-কলমে প্র্যাকটিস", "ট্রাফিক নিয়ম শিক্ষা"],
    fee: "১০,০০০ টাকা",
    feeNote: null,
  },
  {
    id: 3,
    titleBn: "স্পেশাল ড্রাইভিং কোর্স",
    icon: <BookOpen size={28} />,
    badge: null,
    popular: false,
    details: [],
    features: ["উন্নত রোড দক্ষতা", "অ্যাডভান্সড প্র্যাকটিক্যাল", "বিশেষজ্ঞ প্রশিক্ষক"],
    fee: "২৫,০০০ টাকা",
    feeNote: null,
  },
  {
    id: 4,
    titleBn: "মোটরসাইকেল বেসিক কোর্স",
    icon: <Bike size={28} />,
    badge: null,
    popular: false,
    details: [],
    features: ["ব্যালেন্স ও নিয়ন্ত্রণ", "রোড সেফটি", "হাতে-কলমে প্র্যাকটিস"],
    fee: "৭,০০০ টাকা",
    feeNote: null,
  },
];

// ── Team Data ──
const teamMembers = [
  {
    id: 1,
    name: "মোঃ শহিদুল ইসলাম",
    position: "প্রধান প্রশিক্ষক",
    image: "/assets/6-4.jpeg",
    objectPosition: "center top",
    initials: "শই",
  },
  {
    id: 2,
    name: "কাওসার",
    position: "ড্রাইভিং প্রশিক্ষক",
    image: "/assets/generated/kawsar-photo.dim_400x400.png",
    objectPosition: "center top",
    initials: "কা",
  },
  {
    id: 3,
    name: "মিজানুর রহমান রকি",
    position: "ম্যানেজার",
    image: "/assets/generated/team-mizanur-rahman-rocky.dim_400x400.png",
    objectPosition: "center top",
    initials: "মর",
  },
  {
    id: 4,
    name: "হাবিবুর রহমান বাবুল",
    position: "অফিস সহকারী",
    image: "/assets/generated/habibur-rahman-babul.dim_400x500.png",
    objectPosition: "center top",
    initials: "হব",
  },
  {
    id: 5,
    name: "মোস্তফা কামাল",
    position: "মার্কেটিং অফিসার",
    image: "/assets/generated/team-habibur-rahman-babul.dim_400x400.png",
    objectPosition: "center top",
    initials: "মক",
  },
];

// ── Gallery preview ──
const galleryPreview = [
  "/assets/01.jpeg",
  "/assets/02.jpeg",
  "/assets/3.jpeg",
  "/assets/FB_IMG_1770189588543.jpg",
  "/assets/FB_IMG_1770189544503.jpg",
  "/assets/FB_IMG_1770189556187.jpg",
];

export default function HomePage() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImgError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main>
      {/* ════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "oklch(0.18 0.065 240)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-driving-bg.dim_1920x1080.png"
            alt="ড্রাইভিং প্রশিক্ষণ"
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.src = "/assets/generated/hero-driving-lesson.dim_1200x600.jpg";
              t.onerror = () => {
                t.style.display = "none";
              };
            }}
          />
          {/* Dark navy overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.055 240 / 0.92) 0%, oklch(0.18 0.065 240 / 0.80) 60%, oklch(0.22 0.068 240 / 0.70) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-2xl">
            {/* Approval badge */}
            <div
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl mb-6"
              style={{
                background: "oklch(0.88 0.025 85 / 0.18)",
                color: "oklch(0.95 0.015 85)",
                border: "1.5px solid oklch(0.78 0.12 75 / 0.70)",
                backdropFilter: "blur(6px)",
                textShadow: "0 1px 4px oklch(0.14 0.055 240 / 0.5)",
              }}
            >
              <Shield size={15} />
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত
            </div>

            {/* Main heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5"
              style={{
                color: "oklch(0.97 0.008 85)",
                textShadow: "0 2px 16px oklch(0.14 0.055 240 / 0.8)",
              }}
            >
              নিরাপদ ও দক্ষ ড্রাইভার গড়ার বিশ্বস্ত প্রতিষ্ঠান
            </h1>

            {/* Gold divider */}
            <div
              className="w-24 h-1 mb-5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
              }}
            />

            {/* Subheading */}
            <p
              className="text-xl sm:text-2xl font-bold mb-8"
              style={{
                color: "oklch(0.78 0.12 75)",
                textShadow: "0 1px 8px oklch(0.14 0.055 240 / 0.6)",
              }}
            >
              সরকার নির্ধারিত ৬০ ঘণ্টার বাধ্যতামূলক প্রশিক্ষণ
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:01712727004"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg font-extrabold text-base transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "oklch(0.78 0.12 75)",
                  color: "oklch(0.18 0.065 240)",
                  boxShadow: "0 4px 20px oklch(0.78 0.12 75 / 0.40)",
                }}
              >
                <Phone size={18} />
                ভর্তি হতে কল করুন – 01712727004
              </a>
              <a
                href="https://wa.me/8801712727004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-lg font-bold text-base transition-all hover:-translate-y-1"
                style={{
                  background: "#25D366",
                  color: "white",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                }}
              >
                <SiWhatsapp size={18} />
                WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: <Award size={14} />, text: "সরকার অনুমোদিত" },
                { icon: <Users size={14} />, text: "অভিজ্ঞ প্রশিক্ষক" },
                { icon: <Clock size={14} />, text: "৬০ ঘণ্টার কোর্স" },
                { icon: <CheckCircle size={14} />, text: "লাইসেন্স সহায়তা" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(0.88 0.025 85 / 0.12)",
                    color: "oklch(0.88 0.025 85)",
                    border: "1px solid oklch(0.88 0.025 85 / 0.25)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT SECTION
      ════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "oklch(0.96 0.012 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "oklch(0.18 0.065 240)",
                  color: "oklch(0.78 0.12 75)",
                }}
              >
                আমাদের সম্পর্কে
              </div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold mb-4"
                style={{ color: "oklch(0.18 0.065 240)" }}
              >
                শম্ভুগঞ্জ ড্রাইভিং স্কুল
              </h2>
              <div
                className="w-16 h-1 mb-5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
                }}
              />
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.22 0.045 240)" }}
              >
                শম্ভুগঞ্জ ড্রাইভিং স্কুল একটি সরকার অনুমোদিত ও নিবন্ধিত ড্রাইভিং প্রশিক্ষণ
                কেন্দ্র। আমরা সরকার নির্ধারিত ৬০ ঘণ্টার বাধ্যতামূলক প্রশিক্ষণ নিয়ম অনুসরণ করে
                থিওরি ও প্র্যাকটিক্যাল প্রশিক্ষণ প্রদান করি। আমাদের লক্ষ্য দক্ষ, সচেতন ও
                দায়িত্বশীল ড্রাইভার তৈরি করা।
              </p>
              <div className="govt-approval-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Shield
                    size={16}
                    style={{ color: "oklch(0.65 0.13 75)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: "oklch(0.14 0.055 240)",
                    }}
                  >
                    গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "oklch(0.28 0.060 240)",
                    paddingLeft: "1.5rem",
                  }}
                >
                  ড্রাইভিং প্রশিক্ষণ কেন্দ্র | নিবন্ধন নং: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div
                className="rounded-2xl overflow-hidden w-full max-w-md"
                style={{
                  border: "3px solid oklch(0.78 0.12 75)",
                  boxShadow: "0 8px 32px oklch(0.18 0.065 240 / 0.20)",
                }}
              >
                <img
                  src="/assets/generated/about-institute.dim_1200x600.png"
                  alt="শম্ভুগঞ্জ ড্রাইভিং স্কুল"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src =
                      "/assets/generated/hero-driving-lesson.dim_1200x600.jpg";
                    t.onerror = () => {
                      t.style.display = "none";
                    };
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COURSES SECTION
      ════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "oklch(0.93 0.018 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.18 0.065 240)",
                color: "oklch(0.78 0.12 75)",
              }}
            >
              কোর্সসমূহ
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ color: "oklch(0.18 0.065 240)" }}
            >
              আমাদের প্রশিক্ষণ কোর্স
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-4 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
              }}
            />
            <p
              className="text-sm max-w-xl mx-auto font-medium"
              style={{ color: "oklch(0.28 0.045 240)" }}
            >
              আপনার প্রয়োজন অনুযায়ী কোর্স বেছে নিন
            </p>
          </div>

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
                    ? "0 8px 32px oklch(0.18 0.065 240 / 0.25)"
                    : "0 4px 20px oklch(0.18 0.065 240 / 0.12)",
                }}
              >
                {/* Gold top accent line for non-popular cards */}
                {!course.popular && (
                  <div
                    style={{
                      height: "3px",
                      background:
                        "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
                    }}
                  />
                )}

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
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
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
                  <h3
                    className="font-extrabold mb-3"
                    style={{
                      color: course.popular
                        ? "oklch(0.97 0.008 85)"
                        : "oklch(0.12 0.045 240)",
                      fontSize: "1rem",
                      lineHeight: "1.4",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {course.titleBn}
                  </h3>

                  {/* Details */}
                  {course.details.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {course.details.map((d) => (
                        <span
                          key={d.label}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: course.popular
                              ? "oklch(0.78 0.12 75 / 0.15)"
                              : "oklch(0.18 0.065 240 / 0.08)",
                            color: course.popular
                              ? "oklch(0.86 0.10 75)"
                              : "oklch(0.24 0.070 240)",
                          }}
                        >
                          {d.label}: {d.value}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm"
                        style={{
                          color: course.popular
                            ? "oklch(0.82 0.018 85)"
                            : "oklch(0.28 0.040 240)",
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
                      className="text-xl font-extrabold mb-4"
                      style={{
                        color: course.popular
                          ? "oklch(0.86 0.10 75)"
                          : "oklch(0.65 0.13 75)",
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
                    className="mt-auto w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                    style={{
                      background: course.popular
                        ? "oklch(0.78 0.12 75)"
                        : "oklch(0.18 0.065 240)",
                      color: course.popular
                        ? "oklch(0.18 0.065 240)"
                        : "oklch(0.96 0.012 85)",
                    }}
                  >
                    ভর্তি হতে কল করুন
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SPECIAL FACILITIES SECTION
      ════════════════════════════════════════ */}
      <section
        className="py-16"
        style={{ background: "oklch(0.18 0.065 240)" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.78 0.12 75 / 0.20)",
                color: "oklch(0.78 0.12 75)",
              }}
            >
              বিশেষ সুবিধা
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ color: "oklch(0.96 0.012 85)" }}
            >
              আমাদের বিশেষ সুবিধাসমূহ
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-4 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BedDouble size={28} />,
                title: "আবাসন সুবিধা",
                desc: "দূরবর্তী শিক্ষার্থীদের জন্য আবাসন ব্যবস্থা রয়েছে।",
                img: "/assets/generated/facility-accommodation.dim_800x600.png",
              },
              {
                icon: <UtensilsCrossed size={28} />,
                title: "খাবার সুবিধা",
                desc: "প্রশিক্ষণ চলাকালীন খাবারের ব্যবস্থা রয়েছে।",
                img: "/assets/generated/facility-food.dim_800x600.png",
              },
              {
                icon: <Award size={28} />,
                title: "সার্টিফিকেট প্রদান",
                desc: "কোর্স সম্পন্নের পর সরকার অনুমোদিত সার্টিফিকেট প্রদান করা হয়।",
                img: "/assets/generated/driving-license-card.dim_300x200.jpg",
              },
            ].map((facility) => (
              <div
                key={facility.title}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(0.22 0.060 240)",
                  border: "1.5px solid oklch(0.78 0.12 75 / 0.25)",
                  boxShadow: "0 4px 20px oklch(0.14 0.055 240 / 0.30)",
                }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="p-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: "oklch(0.78 0.12 75 / 0.15)",
                      color: "oklch(0.78 0.12 75)",
                    }}
                  >
                    {facility.icon}
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: "oklch(0.96 0.012 85)" }}
                  >
                    {facility.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.82 0.016 85)" }}
                  >
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TEAM SECTION
      ════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "oklch(0.96 0.012 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.18 0.065 240)",
                color: "oklch(0.78 0.12 75)",
              }}
            >
              আমাদের দল
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ color: "oklch(0.18 0.065 240)" }}
            >
              অভিজ্ঞ প্রশিক্ষক দল
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-4 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(0.99 0.005 85)",
                  border: "1.5px solid oklch(0.88 0.018 85)",
                  boxShadow: "0 2px 12px oklch(0.18 0.065 240 / 0.08)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full overflow-hidden mb-3"
                  style={{
                    border: "2.5px solid oklch(0.78 0.12 75)",
                    boxShadow: "0 2px 10px oklch(0.78 0.12 75 / 0.30)",
                  }}
                >
                  {imgErrors[member.id] ? (
                    <div
                      className="w-full h-full flex items-center justify-center text-lg font-bold"
                      style={{
                        background: "oklch(0.18 0.065 240)",
                        color: "oklch(0.78 0.12 75)",
                      }}
                    >
                      {member.initials}
                    </div>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.objectPosition }}
                      onError={() => handleImgError(member.id)}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <h3
                  className="font-bold text-sm mb-1 leading-snug"
                  style={{ color: "oklch(0.12 0.045 240)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.35 0.045 240)" }}
                >
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GALLERY PREVIEW SECTION
      ════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "oklch(0.93 0.018 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.18 0.065 240)",
                color: "oklch(0.78 0.12 75)",
              }}
            >
              গ্যালারি
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{ color: "oklch(0.18 0.065 240)" }}
            >
              আমাদের প্রশিক্ষণ মুহূর্ত
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-4 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {galleryPreview.map((src, idx) => (
              <div
                key={src}
                className="rounded-xl overflow-hidden aspect-video"
                style={{ border: "1.5px solid oklch(0.82 0.020 85)" }}
              >
                <img
                  src={src}
                  alt={`গ্যালারি ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: "center" }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "oklch(0.18 0.065 240)",
                color: "oklch(0.96 0.012 85)",
              }}
            >
              সব ছবি দেখুন <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════ */}
      <section
        className="py-16"
        style={{ background: "oklch(0.18 0.065 240)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ color: "oklch(0.96 0.012 85)" }}
          >
            আজই ভর্তি হোন
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-5 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
            }}
          />
          <p className="text-sm mb-8" style={{ color: "oklch(0.88 0.018 85)" }}>
            দক্ষ চালক হওয়ার সুযোগ নিন। আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01712727004"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg font-extrabold text-base transition-all hover:-translate-y-1"
              style={{
                background: "oklch(0.78 0.12 75)",
                color: "oklch(0.18 0.065 240)",
                boxShadow: "0 4px 20px oklch(0.78 0.12 75 / 0.40)",
              }}
            >
              <Phone size={18} />
              01712727004
            </a>
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-base transition-all hover:-translate-y-1"
              style={{
                background: "oklch(0.26 0.060 240)",
                color: "oklch(0.96 0.012 85)",
                border: "1.5px solid oklch(0.78 0.12 75 / 0.40)",
              }}
            >
              ভর্তির আবেদন করুন <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
