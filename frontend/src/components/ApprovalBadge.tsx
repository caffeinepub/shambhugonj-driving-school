import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface ApprovalBadgeProps {
  variant?: 'compact' | 'full';
}

export default function ApprovalBadge({ variant = 'compact' }: ApprovalBadgeProps) {
  if (variant === 'compact') {
    return (
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{
          background: 'var(--olive-wash)',
          border: '1.5px solid var(--olive-pale)',
          color: 'var(--olive-dark)',
        }}
      >
        <ShieldCheck size={14} style={{ color: 'var(--shim-gold)' }} />
        সরকারি নিবন্ধন নং: ০০১/২৬
      </div>
    );
  }

  return (
    <div
      className="p-4 rounded-xl flex items-start gap-3"
      style={{
        background: 'var(--olive-wash)',
        border: '1.5px solid var(--olive-pale)',
      }}
    >
      <ShieldCheck size={22} style={{ color: 'var(--shim-gold)', flexShrink: 0, marginTop: 2 }} />
      <div>
        <p className="text-sm font-bold" style={{ color: 'var(--olive-dark)' }}>
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
          সরকারি নিবন্ধন নং: ০০১/২৬
        </p>
      </div>
    </div>
  );
}
