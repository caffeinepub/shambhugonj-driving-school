import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight, Target } from "lucide-react";
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "মোঃ শহিদুল ইসলাম",
    nameEn: "Md. Shahidul Islam",
    positionBn: "প্রধান প্রশিক্ষক",
    positionEn: "Chief Instructor",
    cardClass: "team-card-1",
    accent: "oklch(0.42 0.08 120)",
    image: "/assets/6-4.jpeg",
    objectPosition: "center top",
  },
  {
    id: 2,
    name: "কাওসার",
    nameEn: "Kawsar",
    positionBn: "ড্রাইভিং প্রশিক্ষক",
    positionEn: "Driving Instructor",
    cardClass: "team-card-2",
    accent: "oklch(0.50 0.07 100)",
    image: "/assets/generated/kawsar-photo.dim_400x400.png",
    objectPosition: "center top",
  },
  {
    id: 3,
    name: "হাবিবুর রহমান বাবুল",
    nameEn: "Habibur Rahman Babul",
    positionBn: "অফিস সহকারী",
    positionEn: "Office Assistant",
    cardClass: "team-card-3",
    accent: "oklch(0.52 0.06 90)",
    image: "/assets/generated/habibur-rahman-babul.dim_400x500.png",
    objectPosition: "center top",
  },
  {
    id: 4,
    name: "মোস্তফা কামাল",
    nameEn: "Mostafa Kamal",
    positionBn: "মার্কেটিং অফিসার",
    positionEn: "Marketing Officer",
    cardClass: "team-card-4",
    accent: "oklch(0.46 0.08 108)",
    image: "/assets/generated/team-habibur-rahman-babul.dim_400x400.png",
    objectPosition: "center top",
  },
  {
    id: 5,
    name: "মিজানুর রহমান রকি",
    nameEn: "Mizanur Rahman Rocky",
    positionBn: "ম্যানেজার",
    positionEn: "Manager",
    cardClass: "team-card-5",
    accent: "oklch(0.48 0.07 95)",
    image: "/assets/generated/team-mizanur-rahman-rocky.dim_400x400.png",
    objectPosition: "center top",
  },
];

const stats = [
  { value: "৫০০+", label: "সফল শিক্ষার্থী" },
  { value: "১০+", label: "বছরের অভিজ্ঞতা" },
  { value: "৫", label: "দক্ষ প্রশিক্ষক" },
  { value: "১০০%", label: "সরকার অনুমোদিত" },
];

const features = [
  "BRTA অনুমোদিত প্রশিক্ষক",
  "আধুনিক প্রশিক্ষণ পদ্ধতি",
  "থিওরি ও প্র্যাকটিক্যাল ক্লাস",
  "লাইসেন্স প্রসেসিং সহায়তা",
  "নমনীয় সময়সূচি",
  "সাশ্রয়ী মূল্যে প্রশিক্ষণ",
];

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-14" style={{ background: "var(--olive-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "oklch(0.96 0.015 95)" }}
          >
            আমাদের সম্পর্কে
          </h1>
          <div className="shim-divider w-24 mx-auto mb-4" />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "oklch(0.88 0.018 85)" }}
          >
            শম্ভুগঞ্জ ড্রাইভিং স্কুল — নিরাপদ সড়কের জন্য দক্ষ চালক তৈরির প্রতিশ্রুতি
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16" style={{ background: "#f0f4f8" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text content */}
            <div
              className="rounded-2xl p-7 sm:p-9"
              style={{
                background: "#ffffff",
                border: "1.5px solid #d1dce8",
                boxShadow: "0 4px 24px rgba(30,58,138,0.08)",
              }}
            >
              <h2
                className="text-2xl sm:text-3xl font-extrabold mb-1 leading-snug"
                style={{ color: "#1e3a8a" }}
              >
                আমাদের সম্পর্কে
              </h2>
              <div
                className="h-1 w-16 rounded-full mb-5"
                style={{ background: "#D4AF37" }}
              />

              {/* Tagline */}
              <p
                className="text-base font-bold mb-4"
                style={{ color: "#1e3a8a" }}
              >
                নিরাপদ সড়কের জন্য চাই দক্ষ চালক।
              </p>

              {/* Para 1 */}
              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "#1a2740" }}
              >
                শম্ভুগঞ্জ ড্রাইভিং স্কুল একটি বিশ্বস্ত ও দায়িত্বশীল ড্রাইভিং প্রশিক্ষণ প্রতিষ্ঠান।
                আমাদের মূল লক্ষ্য হলো সড়ক নিরাপত্তা নিশ্চিত করার জন্য দক্ষ, সচেতন এবং
                দায়িত্বশীল চালক তৈরি করা।
              </p>

              {/* Para 2 */}
              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "#1a2740" }}
              >
                আমি মোঃ শহিদুল ইসলাম, বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA) কর্তৃক অনুমোদিত
                একজন সার্টিফাইড ড্রাইভিং ইনস্ট্রাক্টর। আমার ড্রাইভিং ইনস্ট্রাক্টর লাইসেন্স নম্বর:{" "}
                <span className="font-semibold" style={{ color: "#1e3a8a" }}>
                  আইএলএল নং ০৯০/২৪
                </span>
                ।
              </p>

              {/* Para 3 */}
              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "#1a2740" }}
              >
                বিআরটিএ সংক্রান্ত বিভিন্ন কার্যক্রমে আমার দীর্ঘদিনের অভিজ্ঞতা রয়েছে এবং
                দীর্ঘদিন ধরে আমি সড়ক নিরাপত্তা ও ড্রাইভিং প্রশিক্ষণ নিয়ে কাজ করে আসছি।
              </p>

              {/* Para 4 */}
              <p
                className="text-sm leading-7 mb-4"
                style={{ color: "#1a2740" }}
              >
                আমাদের শম্ভুগঞ্জ ড্রাইভিং স্কুল থেকে প্রশিক্ষণ নিয়ে অনেক শিক্ষার্থী সফলতার সাথে
                দেশে ও বিদেশে ড্রাইভিং পেশায় নিয়োজিত রয়েছে।
              </p>

              {/* Para 5 */}
              <p className="text-sm leading-7" style={{ color: "#1a2740" }}>
                আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীকে একজন দক্ষ, সচেতন এবং দায়িত্বশীল চালক
                হিসেবে গড়ে তোলা, যাতে তারা নিরাপদভাবে গাড়ি চালাতে পারে এবং সড়ক দুর্ঘটনা কমাতে
                গুরুত্বপূর্ণ ভূমিকা রাখতে পারে।
              </p>

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#1a2740" }}
                  >
                    <CheckCircle
                      size={15}
                      style={{ color: "#D4AF37", flexShrink: 0 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-start md:sticky md:top-28">
              <div
                className="rounded-xl overflow-hidden w-full max-w-xs"
                style={{
                  border: "2.5px solid #D4AF37",
                  aspectRatio: "3/4",
                  boxShadow: "0 8px 32px rgba(30,58,138,0.15)",
                }}
              >
                <img
                  src="/assets/6-4.jpeg"
                  alt="প্রধান প্রশিক্ষক মোঃ শহিদুল ইসলাম"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 section-olive">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="text-center p-6 rounded-xl shadow-card"
                style={{
                  background: "var(--card)",
                  border: "1.5px solid var(--olive-pale)",
                }}
              >
                <div
                  className="text-3xl font-extrabold mb-1"
                  style={{ color: "oklch(0.65 0.13 75)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.28 0.045 240)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 section-stone">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-2"
              style={{ color: "oklch(0.12 0.045 240)" }}
            >
              আমাদের দল
            </h2>
            <div className="shim-divider w-20 mx-auto mb-3" />
            <p className="text-sm" style={{ color: "oklch(0.28 0.045 240)" }}>
              অভিজ্ঞ ও দক্ষ প্রশিক্ষক দল
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`${member.cardClass} rounded-xl p-5 flex flex-col items-center text-center shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1`}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full overflow-hidden mb-3 shrink-0"
                  style={{
                    border: `2px solid ${member.accent}`,
                    boxShadow: `0 2px 8px ${member.accent}55`,
                  }}
                >
                  <img
                    src={member.image}
                    alt={`${member.nameEn} - ${member.positionEn}, Shambhugonj Driving School`}
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: member.objectPosition }}
                    loading="lazy"
                  />
                </div>
                <h3
                  className="font-bold text-sm mb-0.5 leading-snug"
                  style={{ color: "oklch(0.12 0.045 240)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "oklch(0.35 0.045 240)" }}
                >
                  {member.positionBn}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.28 0.045 240)" }}
                >
                  {member.positionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal CTA */}
      <section className="py-14" style={{ background: "var(--olive-mid)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Target
            size={36}
            className="mx-auto mb-4"
            style={{ color: "var(--shim-gold)" }}
          />
          <h2
            className="text-2xl font-extrabold mb-3"
            style={{ color: "oklch(0.97 0.012 95)" }}
          >
            আমাদের লক্ষ্য
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "oklch(0.90 0.012 85)" }}
          >
            প্রতিটি শিক্ষার্থীকে নিরাপদ, দক্ষ ও আত্মবিশ্বাসী চালক হিসেবে গড়ে তোলাই আমাদের মূল
            লক্ষ্য। সড়ক দুর্ঘটনামুক্ত বাংলাদেশ গড়তে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--shim-gold)",
              color: "oklch(0.22 0.025 95)",
            }}
          >
            আজই ভর্তি হোন <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
