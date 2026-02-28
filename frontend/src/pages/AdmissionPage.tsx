import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import GovernmentSealBadge from '../components/GovernmentSealBadge';

export default function AdmissionPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-14" style={{ background: 'var(--olive-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-5">
            <GovernmentSealBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'oklch(0.96 0.015 95)' }}>
            ভর্তি ফর্ম
          </h1>
          <div className="shim-divider w-24 mx-auto mb-4" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'oklch(0.80 0.030 100)' }}>
            নিচের ফর্মটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করব
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 section-olive">
        <div className="max-w-2xl mx-auto px-4">
          <div
            className="rounded-xl overflow-hidden shadow-olive-md"
            style={{
              background: 'var(--card)',
              border: '1.5px solid var(--olive-pale)',
              borderTop: '4px solid var(--shim-gold)',
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
