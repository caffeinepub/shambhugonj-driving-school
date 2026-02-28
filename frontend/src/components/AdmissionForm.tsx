import React, { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { useActor } from '../hooks/useActor';

const courseOptions = [
  { value: 'car-30', label: 'কার ড্রাইভিং - ৩০ দিন (৳৩,৫০০)' },
  { value: 'car-60', label: 'কার ড্রাইভিং - ৬০ দিন (৳৫,০০০)' },
  { value: 'motorcycle-30', label: 'মোটরসাইকেল - ৩০ দিন (৳২,৫০০)' },
  { value: 'motorcycle-60', label: 'মোটরসাইকেল - ৬০ দিন (৳৩,৫০০)' },
];

const inputStyle: React.CSSProperties = {
  background: 'var(--stone-warm)',
  border: '1.5px solid var(--olive-pale)',
  color: 'var(--foreground)',
  borderRadius: '8px',
  padding: '0.625rem 0.875rem',
  width: '100%',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginBottom: '0.375rem',
  color: 'var(--olive-dark)',
};

export default function AdmissionForm() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    course: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    setError('');
    try {
      await actor.submitRegistrationInquiry(
        form.name,
        form.phone,
        form.address,
        form.course,
        form.message
      );
      setSubmitted(true);
    } catch {
      setError('ফর্ম জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle size={52} className="mx-auto mb-4" style={{ color: 'var(--olive-mid)' }} />
        <h3 className="text-xl font-extrabold mb-2" style={{ color: 'var(--olive-dark)' }}>
          ভর্তির আবেদন সফল হয়েছে!
        </h3>
        <p className="text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
          আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', address: '', course: '', message: '' }); }}
          className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
          style={{ background: 'var(--olive-mid)', color: 'var(--stone-warm)' }}
        >
          নতুন আবেদন করুন
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label style={labelStyle}>নাম *</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
          placeholder="আপনার পূর্ণ নাম"
        />
      </div>
      <div>
        <label style={labelStyle}>ফোন নম্বর *</label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={inputStyle}
          placeholder="01XXXXXXXXX"
        />
      </div>
      <div>
        <label style={labelStyle}>ঠিকানা *</label>
        <input
          type="text"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          style={inputStyle}
          placeholder="আপনার ঠিকানা"
        />
      </div>
      <div>
        <label style={labelStyle}>কোর্স নির্বাচন করুন *</label>
        <select
          required
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          style={inputStyle}
        >
          <option value="">-- কোর্স বেছে নিন --</option>
          {courseOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={labelStyle}>বার্তা (ঐচ্ছিক)</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'none' }}
          placeholder="কোনো প্রশ্ন বা বিশেষ তথ্য থাকলে লিখুন..."
        />
      </div>
      {error && (
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: 'var(--olive-mid)', color: 'var(--stone-warm)' }}
      >
        {submitting ? <Loader2 size={16} className="animate-spin" /> : null}
        {submitting ? 'জমা দেওয়া হচ্ছে...' : 'আবেদন জমা দিন'}
      </button>
    </form>
  );
}
