import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { galleryImages } from "../data/galleryImages";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null,
    );

  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : null,
    );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeLightbox();
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
            গ্যালারি
          </h1>
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.86 0.10 75))",
            }}
          />
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "oklch(0.72 0.020 85)" }}
          >
            আমাদের প্রশিক্ষণ কার্যক্রমের ছবিসমূহ
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.012 85)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <button
                type="button"
                key={src}
                className="relative group rounded-2xl overflow-hidden cursor-pointer w-full"
                style={{
                  border: "1.5px solid oklch(0.82 0.020 85)",
                  boxShadow:
                    "0 2px 16px oklch(0.18 0.065 240 / 0.09), 0 1px 4px oklch(0.18 0.065 240 / 0.05)",
                  aspectRatio: "4/3",
                  background: "oklch(0.90 0.012 85)",
                  padding: 0,
                }}
                onClick={() => openLightbox(index)}
                aria-label={`প্রশিক্ষণ ছবি ${index + 1} দেখুন`}
              >
                <img
                  src={src}
                  alt={`প্রশিক্ষণ ছবি ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "oklch(0.18 0.065 240 / 0.60)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.78 0.12 75)",
                      color: "oklch(0.18 0.065 240)",
                    }}
                  >
                    <ZoomIn size={22} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <dialog
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full max-w-none max-h-none m-0 p-0 border-none"
          style={{ background: "oklch(0.10 0.040 240 / 0.95)" }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          aria-label="ছবি দেখুন"
          open
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
            style={{
              background: "oklch(0.78 0.12 75)",
              color: "oklch(0.18 0.065 240)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="বন্ধ করুন"
          >
            <X size={20} />
          </button>

          {/* Prev button */}
          <button
            type="button"
            className="absolute left-4 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
            style={{
              background: "oklch(0.22 0.068 240)",
              color: "oklch(0.88 0.018 85)",
              border: "1px solid oklch(0.35 0.055 240)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="আগের ছবি"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex]}
              alt={`প্রশিক্ষণ ছবি ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
              style={{ borderRadius: "12px" }}
            />
          </div>

          {/* Next button */}
          <button
            type="button"
            className="absolute right-4 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
            style={{
              background: "oklch(0.22 0.068 240)",
              color: "oklch(0.88 0.018 85)",
              border: "1px solid oklch(0.35 0.055 240)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="পরের ছবি"
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.22 0.068 240)",
              color: "oklch(0.88 0.018 85)",
            }}
          >
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </dialog>
      )}
    </main>
  );
}
