import React from "react";
import { SiFacebook } from "react-icons/si";

interface FacebookCtaButtonProps {
  href?: string;
  label?: string;
}

export default function FacebookCtaButton({
  href = "https://www.facebook.com/brtashahid",
  label = "ফেসবুকে যোগাযোগ করুন",
}: FacebookCtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-olive"
      style={{
        background: "var(--olive-mid)",
        color: "var(--stone-warm)",
        border: "1.5px solid var(--olive-pale)",
      }}
    >
      <SiFacebook size={18} className="shrink-0" />
      {label}
    </a>
  );
}
