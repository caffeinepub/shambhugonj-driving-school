import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useActor } from "../hooks/useActor";

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    setError("");
    try {
      await actor.submitContactForm(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("ফর্ম জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setSubmitting(false);
    }
  };

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
            যোগাযোগ
          </h1>
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
            }}
          />
          <p
            className="text-sm max-w-xl mx-auto font-medium"
            style={{ color: "oklch(0.88 0.018 85)" }}
          >
            আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.96 0.012 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* ── Institute Info Card ── */}
          <div
            className="rounded-2xl p-8 mb-10 max-w-3xl mx-auto"
            style={{
              background: "oklch(0.18 0.065 240)",
              border: "2px solid oklch(0.78 0.12 75)",
              boxShadow: "0 8px 32px oklch(0.18 0.065 240 / 0.20)",
            }}
          >
            <div className="text-center mb-6">
              <h2
                className="text-2xl font-extrabold mb-2"
                style={{ color: "oklch(0.96 0.012 85)" }}
              >
                শম্ভুগঞ্জ ড্রাইভিং স্কুল
              </h2>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full"
                style={{
                  background: "oklch(0.88 0.025 85)",
                  color: "oklch(0.18 0.065 240)",
                  border: "1px solid oklch(0.78 0.12 75)",
                }}
              >
                <Shield size={13} />
                নিবন্ধন নম্বর: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Primary Mobile */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "oklch(0.22 0.068 240)",
                  border: "1px solid oklch(0.30 0.060 240)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.78 0.12 75 / 0.20)",
                    color: "oklch(0.78 0.12 75)",
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "oklch(0.92 0.010 85)" }}
                  >
                    প্রধান মোবাইল
                  </div>
                  <a
                    href="tel:01712727004"
                    className="text-xl font-extrabold hover:underline block"
                    style={{ color: "oklch(0.78 0.12 75)" }}
                  >
                    01712727004
                  </a>
                  <a
                    href="https://wa.me/8801712727004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-1 font-medium"
                    style={{ color: "#25D366" }}
                  >
                    <SiWhatsapp size={12} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Office Number */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "oklch(0.22 0.068 240)",
                  border: "1px solid oklch(0.30 0.060 240)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.78 0.12 75 / 0.20)",
                    color: "oklch(0.78 0.12 75)",
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "oklch(0.92 0.010 85)" }}
                  >
                    অফিস নম্বর
                  </div>
                  <a
                    href="tel:01711605754"
                    className="text-xl font-extrabold hover:underline block"
                    style={{ color: "oklch(0.86 0.10 75)" }}
                  >
                    01711605754
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "oklch(0.22 0.068 240)",
                  border: "1px solid oklch(0.30 0.060 240)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.78 0.12 75 / 0.20)",
                    color: "oklch(0.78 0.12 75)",
                  }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "oklch(0.92 0.010 85)" }}
                  >
                    অফিস সময়
                  </div>
                  <div
                    className="text-base font-bold"
                    style={{ color: "oklch(0.96 0.012 85)" }}
                  >
                    সকাল ৯টা – রাত ৯টা
                  </div>
                </div>
              </div>

              {/* Address */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "oklch(0.22 0.068 240)",
                  border: "1px solid oklch(0.30 0.060 240)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "oklch(0.78 0.12 75 / 0.20)",
                    color: "oklch(0.78 0.12 75)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "oklch(0.92 0.010 85)" }}
                  >
                    ঠিকানা
                  </div>
                  <div
                    className="text-sm font-medium leading-relaxed"
                    style={{ color: "oklch(0.88 0.018 85)" }}
                  >
                    ৩৩ নং ওয়ার্ড, ময়মনসিংহ সিটি কর্পোরেশন, নেত্রকোনা রোড, শম্ভুগঞ্জ সদর,
                    ময়মনসিংহ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Google Map ── */}
          <div
            className="rounded-2xl overflow-hidden mb-10 max-w-4xl mx-auto"
            style={{
              border: "2px solid oklch(0.82 0.020 85)",
              boxShadow: "0 4px 20px oklch(0.18 0.065 240 / 0.12)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.5!2d90.4!3d24.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375759c0a0000001%3A0x0!2sShambhuganj%2C+Mymensingh!5e0!3m2!1sbn!2sbd!4v1700000000000!5m2!1sbn!2sbd"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="শম্ভুগঞ্জ ড্রাইভিং স্কুল অবস্থান"
            />
          </div>

          {/* ── Contact Form ── */}
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "oklch(0.98 0.008 85)",
                border: "1.5px solid oklch(0.82 0.020 85)",
                boxShadow: "0 4px 20px oklch(0.18 0.065 240 / 0.08)",
              }}
            >
              <h2
                className="text-xl font-extrabold mb-6 text-center"
                style={{ color: "oklch(0.18 0.065 240)" }}
              >
                বার্তা পাঠান
              </h2>

              {submitted ? (
                <div
                  className="text-center py-8 rounded-xl"
                  style={{
                    background: "oklch(0.93 0.018 85)",
                    border: "1.5px solid oklch(0.82 0.020 85)",
                  }}
                >
                  <div className="text-4xl mb-3">✅</div>
                  <p
                    className="font-bold text-base mb-1"
                    style={{ color: "oklch(0.18 0.065 240)" }}
                  >
                    বার্তা পাঠানো হয়েছে!
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.25 0.045 240)" }}
                  >
                    আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      background: "oklch(0.18 0.065 240)",
                      color: "oklch(0.96 0.012 85)",
                    }}
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs mb-1.5"
                        style={{
                          color: "oklch(0.14 0.055 240)",
                          fontWeight: 700,
                        }}
                      >
                        নাম *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          background: "oklch(0.96 0.012 85)",
                          border: "1.5px solid oklch(0.65 0.055 240)",
                          color: "oklch(0.12 0.045 240)",
                        }}
                        placeholder="আপনার নাম"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs mb-1.5"
                        style={{
                          color: "oklch(0.14 0.055 240)",
                          fontWeight: 700,
                        }}
                      >
                        ফোন *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          background: "oklch(0.96 0.012 85)",
                          border: "1.5px solid oklch(0.65 0.055 240)",
                          color: "oklch(0.12 0.045 240)",
                        }}
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs mb-1.5"
                      style={{
                        color: "oklch(0.14 0.055 240)",
                        fontWeight: 700,
                      }}
                    >
                      ইমেইল
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "oklch(0.96 0.012 85)",
                        border: "1.5px solid oklch(0.65 0.055 240)",
                        color: "oklch(0.12 0.045 240)",
                      }}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs mb-1.5"
                      style={{
                        color: "oklch(0.14 0.055 240)",
                        fontWeight: 700,
                      }}
                    >
                      বার্তা *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{
                        background: "oklch(0.96 0.012 85)",
                        border: "1.5px solid oklch(0.65 0.055 240)",
                        color: "oklch(0.12 0.045 240)",
                      }}
                      placeholder="আপনার বার্তা লিখুন..."
                    />
                  </div>
                  {error && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.20 25)" }}
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{
                      background: "oklch(0.18 0.065 240)",
                      color: "oklch(0.96 0.012 85)",
                    }}
                  >
                    {submitting ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {submitting ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
