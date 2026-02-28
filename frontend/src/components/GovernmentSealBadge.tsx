import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function GovernmentSealBadge() {
  return (
    <div
      className="w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-3"
      style={{
        background: 'var(--olive-wash)',
        border: '2px solid var(--shim-gold)',
        boxShadow: '0 2px 12px oklch(0.68 0.10 85 / 0.20)',
      }}
    >
      <ShieldCheck size={26} style={{ color: 'var(--shim-gold)', marginBottom: 4 }} />
      <p className="text-xs font-bold leading-tight" style={{ color: 'var(--olive-dark)' }}>
        সরকার অনুমোদিত
      </p>
      <p className="text-xs leading-tight mt-0.5" style={{ color: 'var(--muted-foreground)', fontSize: '0.6rem' }}>
        নিবন্ধন: ০০১/২৬
      </p>
    </div>
  );
}
