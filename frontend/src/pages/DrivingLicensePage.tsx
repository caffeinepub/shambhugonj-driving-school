import React from 'react';
import { Link } from '@tanstack/react-router';
import { Phone, FileText, CreditCard, Building2, FolderOpen, ChevronRight } from 'lucide-react';

const services = [
  {
    step: '০১',
    icon: <FileText size={24} />,
    titleBn: 'লার্নার লাইসেন্স',
    titleEn: 'Learner License',
    desc: 'বিআরটিএ থেকে লার্নার লাইসেন্স পেতে সম্পূর্ণ সহায়তা প্রদান করা হয়।',
  },
  {
    step: '০২',
    icon: <CreditCard size={24} />,
    titleBn: 'স্মার্ট কার্ড ড্রাইভিং লাইসেন্স',
    titleEn: 'Smart Card Driving License',
    desc: 'স্মার্ট কার্ড ড্রাইভিং লাইসেন্স আবেদন ও প্রসেসিং সহায়তা।',
  },
  {
    step: '০৩',
    icon: <Building2 size={24} />,
    titleBn: 'বিআরটিএ সহায়তা',
    titleEn: 'BRTA Support',
    desc: 'ড্রাইভিং লাইসেন্স প্রসেসিং এর জন্য সম্পূর্ণ বিআরটিএ সহায়তা।',
  },
  {
    step: '০৪',
    icon: <FolderOpen size={24} />,
    titleBn: 'ফাইল প্রসেসিং',
    titleEn: 'File Processing',
    desc: 'সব ধরনের লাইসেন্স সংক্রান্ত ফাইল প্রসেসিং দ্রুত ও নির্ভরযোগ্যভাবে।',
  },
];

export default function DrivingLicensePage() {
  return (
    <main>
      {/* Header */}
      <section className="py-14" style={{ background: 'var(--olive-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: 'oklch(0.96 0.015 95)' }}>
            ড্রাইভিং লাইসেন্স সেবা
          </h1>
          <div className="shim-divider w-24 mx-auto mb-4" />
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'oklch(0.80 0.030 100)' }}>
            লার্নার লাইসেন্স থেকে স্মার্ট কার্ড পর্যন্ত সম্পূর্ণ সহায়তা
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 section-olive">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, i) => (
              <div key={i} className="card-premium p-6 flex flex-col">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'var(--olive-wash)', color: 'var(--olive-mid)', border: '1.5px solid var(--olive-pale)' }}
                >
                  {service.icon}
                </div>
                <div
                  className="text-2xl font-extrabold mb-2"
                  style={{ color: 'var(--shim-gold)' }}
                >
                  {service.step}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--olive-dark)' }}>
                  {service.titleBn}
                </h3>
                <p className="text-xs mb-1" style={{ color: 'var(--muted-foreground)' }}>
                  {service.titleEn}
                </p>
                <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--foreground)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* License images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden shadow-olive" style={{ border: '2px solid var(--olive-pale)' }}>
              <img
                src="/assets/generated/driving-license-card.dim_300x200.jpg"
                alt="বিআরটিএ ড্রাইভিং লাইসেন্স কার্ড"
                className="w-full h-48 object-cover"
              />
              <div className="p-4" style={{ background: 'var(--card)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--olive-dark)' }}>
                  স্মার্ট কার্ড ড্রাইভিং লাইসেন্স
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  BRTA অনুমোদিত স্মার্ট কার্ড লাইসেন্স
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-olive" style={{ border: '2px solid var(--olive-pale)' }}>
              <img
                src="/assets/generated/car-training.dim_400x300.jpg"
                alt="ড্রাইভিং প্রশিক্ষণ"
                className="w-full h-48 object-cover"
              />
              <div className="p-4" style={{ background: 'var(--card)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--olive-dark)' }}>
                  লাইসেন্স প্রসেসিং সহায়তা
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  দ্রুত ও নির্ভরযোগ্য লাইসেন্স প্রসেসিং
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: 'var(--olive-mid)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'oklch(0.97 0.010 95)' }}>
            লাইসেন্স পেতে যোগাযোগ করুন
          </h2>
          <p className="text-sm mb-6" style={{ color: 'oklch(0.88 0.025 100)' }}>
            আমাদের অভিজ্ঞ দল আপনাকে সম্পূর্ণ সহায়তা করবে।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01712727004"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:shadow-olive-lg hover:-translate-y-0.5"
              style={{ background: 'var(--shim-gold)', color: 'oklch(0.22 0.025 95)' }}
            >
              <Phone size={18} />
              01712-727004
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'oklch(0.36 0.07 120)', color: 'oklch(0.95 0.015 95)', border: '1.5px solid oklch(0.52 0.09 115)' }}
            >
              যোগাযোগ করুন <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
