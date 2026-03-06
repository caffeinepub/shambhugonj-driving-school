import { Link } from "@tanstack/react-router";
import React from "react";
import AdmissionForm from "../components/AdmissionForm";
import GovernmentSealBadge from "../components/GovernmentSealBadge";

export default function AdmissionPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-14" style={{ background: "var(--olive-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-5">
            <GovernmentSealBadge />
          </div>
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: "oklch(0.96 0.015 95)" }}
          >
            ভর্তি ফর্ম
          </h1>
          <div className="shim-divider w-24 mx-auto mb-4" />
          <p
            className="text-sm max-w-xl mx-auto mb-6"
            style={{ color: "oklch(0.80 0.030 100)" }}
          >
            নিচের ফর্মটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করব
          </p>
          {/* Link to new detailed admission form */}
          <Link
            to="/admission-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-navy-md hover:shadow-navy-lg"
            style={{
              background: "var(--gold)",
              color: "var(--navy-darkest)",
            }}
          >
            📝 অনলাইন ভর্তি আবেদন ফরম পূরণ করুন
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 section-olive">
        <div className="max-w-2xl mx-auto px-4">
          <div
            className="rounded-xl overflow-hidden shadow-olive-md"
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--olive-pale)",
              borderTop: "4px solid var(--shim-gold)",
            }}
          >
            <div className="p-8">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
