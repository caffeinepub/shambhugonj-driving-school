import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

export default function RasulpurBranchPage() {
  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                to="/"
                className="hover:underline"
                style={{ color: "oklch(0.40 0.12 240)" }}
              >
                হোম
              </Link>
            </li>
            <li style={{ color: "oklch(0.55 0.04 240)" }}>/</li>
            <li style={{ color: "oklch(0.35 0.04 240)" }}>রসুলপুর শাখা</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div
          className="rounded-2xl p-6 mb-8 text-center"
          style={{
            background: "oklch(0.18 0.065 240)",
            border: "2px solid oklch(0.78 0.12 75)",
          }}
        >
          <h1
            className="text-2xl md:text-3xl font-extrabold mb-1"
            style={{ color: "oklch(0.96 0.012 85)" }}
          >
            রসুলপুর শাখা
          </h1>
          <p
            className="text-sm font-medium"
            style={{ color: "oklch(0.78 0.12 75)" }}
          >
            শম্ভুগঞ্জ ড্রাইভিং স্কুল — রসুলপুর শাখা
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg"
          style={{
            background: "#ffffff",
            border: "1.5px solid oklch(0.88 0.018 240)",
          }}
        >
          {/* Profile photo */}
          <div
            className="flex justify-center items-center py-8"
            style={{ background: "oklch(0.96 0.010 240)" }}
          >
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: 180,
                height: 180,
                border: "4px solid oklch(0.78 0.12 75)",
                boxShadow: "0 4px 24px oklch(0.14 0.055 240 / 0.25)",
              }}
            >
              <img
                src="/assets/uploads/2-1.jpeg"
                alt="মোঃ হাফিজুল ইসলাম — রসুলপুর শাখা পরিচালক"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="px-8 py-8">
            <h2
              className="text-2xl font-extrabold text-center mb-1"
              style={{ color: "oklch(0.18 0.065 240)" }}
            >
              মোঃ হাফিজুল ইসলাম
            </h2>
            <p
              className="text-center text-sm font-semibold mb-6"
              style={{ color: "oklch(0.45 0.10 145)" }}
            >
              পরিচালক — রসুলপুর শাখা
            </p>

            <div
              className="rounded-xl p-5 flex flex-col gap-4"
              style={{
                background: "oklch(0.97 0.008 240)",
                border: "1px solid oklch(0.90 0.015 240)",
              }}
            >
              {/* Manager */}
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.18 0.065 240)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="ব্যক্তি আইকন"
                    role="img"
                  >
                    <title>ব্যক্তি আইকন</title>
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="oklch(0.78 0.12 75)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="oklch(0.78 0.12 75)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    পরিচালনায়
                  </div>
                  <div
                    className="text-base font-bold"
                    style={{ color: "oklch(0.18 0.065 240)" }}
                  >
                    মোঃ হাফিজুল ইসলাম
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.18 0.065 240)" }}
                >
                  <MapPin size={14} color="oklch(0.78 0.12 75)" />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    ঠিকানা
                  </div>
                  <div
                    className="text-base font-bold"
                    style={{ color: "oklch(0.18 0.065 240)" }}
                  >
                    রসুলপুর, মুক্তাগাছা, ময়মনসিংহ
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.18 0.065 240)" }}
                >
                  <Phone size={14} color="oklch(0.78 0.12 75)" />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    মোবাইল
                  </div>
                  <a
                    href="tel:01641891417"
                    className="text-base font-bold hover:underline"
                    style={{ color: "oklch(0.18 0.065 240)" }}
                  >
                    01641-891417
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center">
              <a
                href="tel:01641891417"
                className="px-8 py-3 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 shadow"
                style={{
                  background: "oklch(0.78 0.12 75)",
                  color: "oklch(0.18 0.065 240)",
                }}
                data-ocid="rasulpur.call.button"
              >
                📞 এখনই কল করুন
              </a>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm font-semibold hover:underline"
            style={{ color: "oklch(0.40 0.12 240)" }}
            data-ocid="rasulpur.back_home.link"
          >
            ← হোমপেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
