import type React from "react";
import { useState } from "react";

const COURSES = [
  "সরকার নির্ধারিত ৬০ ঘণ্টার বাধ্যতামূলক কোর্স",
  "৩০ দিনের বেসিক ড্রাইভিং কোর্স",
  "স্পেশাল ড্রাইভিং কোর্স",
  "মোটরসাইকেল বেসিক কোর্স",
];

interface FormData {
  studentName: string;
  fathersName: string;
  mothersName: string;
  dateOfBirth: string;
  nidNumber: string;
  mobileNumber: string;
  currentAddress: string;
  permanentAddress: string;
  selectedCourses: string[];
  vehicleType: string;
  residentialNeeds: {
    accommodation: boolean;
    food: boolean;
    notNeeded: boolean;
  };
}

const initialFormData: FormData = {
  studentName: "",
  fathersName: "",
  mothersName: "",
  dateOfBirth: "",
  nidNumber: "",
  mobileNumber: "",
  currentAddress: "",
  permanentAddress: "",
  selectedCourses: [],
  vehicleType: "ম্যানুয়াল",
  residentialNeeds: {
    accommodation: false,
    food: false,
    notNeeded: false,
  },
};

export default function AdmissionFormPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{
    studentName?: string;
    mobileNumber?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleTextChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "studentName" || field === "mobileNumber") {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCourseToggle = (course: string) => {
    setFormData((prev) => {
      const already = prev.selectedCourses.includes(course);
      return {
        ...prev,
        selectedCourses: already
          ? prev.selectedCourses.filter((c) => c !== course)
          : [...prev.selectedCourses, course],
      };
    });
  };

  const handleResidentialChange = (
    key: "accommodation" | "food" | "notNeeded",
  ) => {
    setFormData((prev) => {
      if (key === "notNeeded") {
        const newVal = !prev.residentialNeeds.notNeeded;
        return {
          ...prev,
          residentialNeeds: {
            accommodation: false,
            food: false,
            notNeeded: newVal,
          },
        };
      }
      const newVal = !prev.residentialNeeds[key];
      return {
        ...prev,
        residentialNeeds: {
          ...prev.residentialNeeds,
          [key]: newVal,
          notNeeded: false,
        },
      };
    });
  };

  const validate = (): boolean => {
    const newErrors: { studentName?: string; mobileNumber?: string } = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = "শিক্ষার্থীর পূর্ণ নাম আবশ্যক";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "মোবাইল নম্বর আবশ্যক";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildResidentialText = (): string => {
    const parts: string[] = [];
    if (formData.residentialNeeds.accommodation)
      parts.push("আবাসিক থাকার ব্যবস্থা প্রয়োজন");
    if (formData.residentialNeeds.food) parts.push("খাবারের ব্যবস্থা প্রয়োজন");
    if (formData.residentialNeeds.notNeeded) parts.push("প্রয়োজন নেই");
    return parts.length > 0 ? parts.join(", ") : "উল্লেখ করা হয়নি";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const coursesText =
      formData.selectedCourses.length > 0
        ? formData.selectedCourses.map((c, i) => `  ${i + 1}. ${c}`).join("\n")
        : "  কোনো কোর্স নির্বাচন করা হয়নি";

    const message = [
      "🚗 ভর্তি আবেদন - শম্ভুগঞ্জ ড্রাইভিং স্কুল",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      `👤 শিক্ষার্থীর নাম: ${formData.studentName}`,
      formData.fathersName ? `👨 পিতার নাম: ${formData.fathersName}` : "",
      formData.mothersName ? `👩 মাতার নাম: ${formData.mothersName}` : "",
      formData.dateOfBirth ? `📅 জন্ম তারিখ: ${formData.dateOfBirth}` : "",
      formData.nidNumber ? `🪪 জাতীয় পরিচয়পত্র নম্বর: ${formData.nidNumber}` : "",
      `📱 মোবাইল নম্বর: ${formData.mobileNumber}`,
      formData.currentAddress
        ? `🏠 বর্তমান ঠিকানা: ${formData.currentAddress}`
        : "",
      formData.permanentAddress
        ? `📍 স্থায়ী ঠিকানা: ${formData.permanentAddress}`
        : "",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      "📚 নির্বাচিত কোর্স:",
      coursesText,
      `🚘 গাড়ির ধরন: ${formData.vehicleType}`,
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      `🏨 আবাসিক সুবিধা: ${buildResidentialText()}`,
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      "✅ অনুগ্রহ করে আবেদনটি নিশ্চিত করুন।",
    ]
      .filter((line) => line !== "")
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8801712727004?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-150";
  const inputStyle = {
    background: "var(--cream-white)",
    borderColor: "oklch(0.72 0.040 240)",
    color: "var(--navy-darkest)",
  };
  const inputFocusRingStyle = "focus:ring-navy-mid";

  const labelClass = "block text-sm font-semibold mb-1.5";
  const labelStyle = { color: "var(--navy-dark)" };

  const sectionHeadingClass =
    "text-lg font-extrabold mb-4 pb-2 border-b-2 flex items-center gap-2";
  const sectionHeadingStyle = {
    color: "var(--navy-dark)",
    borderColor: "var(--gold)",
  };

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{ background: "var(--cream-light)" }}
    >
      {/* Official Header */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-navy"
          style={{ background: "var(--navy-dark)" }}
        >
          <img
            src="/assets/generated/school-logo-transparent.dim_200x200.png"
            alt="শম্ভুগঞ্জ ড্রাইভিং স্কুল লোগো"
            className="w-12 h-12 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <h1
          className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1"
          style={{ color: "var(--navy-dark)" }}
        >
          শম্ভুগঞ্জ ড্রাইভিং স্কুল
        </h1>
        <p
          className="text-sm font-medium mb-1"
          style={{ color: "var(--navy-mid)" }}
        >
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ড্রাইভিং প্রশিক্ষণ কেন্দ্র
        </p>
        <p className="text-xs mb-4" style={{ color: "oklch(0.45 0.040 240)" }}>
          নিবন্ধন নম্বর: ময়মনঃ/ড্রাইঃপ্রশিঃস্কুল-০০১/২৬
        </p>
        <div className="shim-divider w-32 mx-auto mb-5" />
        <h2
          className="text-xl sm:text-2xl font-extrabold mb-3"
          style={{ color: "var(--navy-darkest)" }}
        >
          📝 ভর্তি আবেদন ফরম
        </h2>
        <p
          className="text-xs sm:text-sm"
          style={{ color: "oklch(0.40 0.045 240)" }}
        >
          প্রধান মোবাইল: 01712727004 &nbsp;|&nbsp; অফিস: 01711605754 &nbsp;|&nbsp;
          অফিস সময়: সকাল ৯টা – রাত ৯টা
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden shadow-navy-lg"
          style={{
            background: "var(--cream-white)",
            border: "1.5px solid oklch(0.72 0.040 240)",
            borderTop: "5px solid var(--navy-dark)",
          }}
        >
          {submitted ? (
            <div className="p-10 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "oklch(0.55 0.15 145 / 0.12)" }}
              >
                <span className="text-3xl">✅</span>
              </div>
              <h3
                className="text-xl font-extrabold mb-2"
                style={{ color: "var(--navy-dark)" }}
              >
                আবেদন সফলভাবে জমা হয়েছে!
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "oklch(0.45 0.040 240)" }}
              >
                আপনাকে WhatsApp-এ পাঠানো হচ্ছে...
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm underline"
                style={{ color: "var(--navy-mid)" }}
              >
                নতুন আবেদন করুন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="p-6 sm:p-8 space-y-8">
                {/* Section 1: Personal Info */}
                <section>
                  <h3
                    className={sectionHeadingClass}
                    style={sectionHeadingStyle}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: "var(--navy-dark)",
                        color: "var(--cream-white)",
                      }}
                    >
                      ১
                    </span>
                    ব্যক্তিগত তথ্য
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Student Name */}
                    <div>
                      <label
                        htmlFor="af-studentName"
                        className={labelClass}
                        style={labelStyle}
                      >
                        শিক্ষার্থীর পূর্ণ নাম{" "}
                        <span style={{ color: "var(--destructive)" }}>*</span>
                      </label>
                      <input
                        id="af-studentName"
                        type="text"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={{
                          ...inputStyle,
                          borderColor: errors.studentName
                            ? "var(--destructive)"
                            : "oklch(0.72 0.040 240)",
                        }}
                        placeholder="পূর্ণ নাম লিখুন"
                        value={formData.studentName}
                        onChange={(e) =>
                          handleTextChange("studentName", e.target.value)
                        }
                      />
                      {errors.studentName && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--destructive)" }}
                        >
                          {errors.studentName}
                        </p>
                      )}
                    </div>

                    {/* Father's Name */}
                    <div>
                      <label
                        htmlFor="af-fathersName"
                        className={labelClass}
                        style={labelStyle}
                      >
                        পিতার নাম
                      </label>
                      <input
                        id="af-fathersName"
                        type="text"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={inputStyle}
                        placeholder="পিতার নাম লিখুন"
                        value={formData.fathersName}
                        onChange={(e) =>
                          handleTextChange("fathersName", e.target.value)
                        }
                      />
                    </div>

                    {/* Mother's Name */}
                    <div>
                      <label
                        htmlFor="af-mothersName"
                        className={labelClass}
                        style={labelStyle}
                      >
                        মাতার নাম
                      </label>
                      <input
                        id="af-mothersName"
                        type="text"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={inputStyle}
                        placeholder="মাতার নাম লিখুন"
                        value={formData.mothersName}
                        onChange={(e) =>
                          handleTextChange("mothersName", e.target.value)
                        }
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label
                        htmlFor="af-dateOfBirth"
                        className={labelClass}
                        style={labelStyle}
                      >
                        জন্ম তারিখ
                      </label>
                      <input
                        id="af-dateOfBirth"
                        type="date"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={inputStyle}
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleTextChange("dateOfBirth", e.target.value)
                        }
                      />
                    </div>

                    {/* NID */}
                    <div>
                      <label
                        htmlFor="af-nidNumber"
                        className={labelClass}
                        style={labelStyle}
                      >
                        জাতীয় পরিচয়পত্র নম্বর
                      </label>
                      <input
                        id="af-nidNumber"
                        type="text"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={inputStyle}
                        placeholder="NID নম্বর লিখুন"
                        value={formData.nidNumber}
                        onChange={(e) =>
                          handleTextChange("nidNumber", e.target.value)
                        }
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label
                        htmlFor="af-mobileNumber"
                        className={labelClass}
                        style={labelStyle}
                      >
                        মোবাইল নম্বর{" "}
                        <span style={{ color: "var(--destructive)" }}>*</span>
                      </label>
                      <input
                        id="af-mobileNumber"
                        type="tel"
                        className={`${inputClass} ${inputFocusRingStyle}`}
                        style={{
                          ...inputStyle,
                          borderColor: errors.mobileNumber
                            ? "var(--destructive)"
                            : "oklch(0.72 0.040 240)",
                        }}
                        placeholder="01XXXXXXXXX"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          handleTextChange("mobileNumber", e.target.value)
                        }
                      />
                      {errors.mobileNumber && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--destructive)" }}
                        >
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>

                    {/* Current Address */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="af-currentAddress"
                        className={labelClass}
                        style={labelStyle}
                      >
                        বর্তমান ঠিকানা
                      </label>
                      <textarea
                        id="af-currentAddress"
                        rows={3}
                        className={`${inputClass} ${inputFocusRingStyle} resize-none`}
                        style={inputStyle}
                        placeholder="বর্তমান ঠিকানা লিখুন"
                        value={formData.currentAddress}
                        onChange={(e) =>
                          handleTextChange("currentAddress", e.target.value)
                        }
                      />
                    </div>

                    {/* Permanent Address */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="af-permanentAddress"
                        className={labelClass}
                        style={labelStyle}
                      >
                        স্থায়ী ঠিকানা
                      </label>
                      <textarea
                        id="af-permanentAddress"
                        rows={3}
                        className={`${inputClass} ${inputFocusRingStyle} resize-none`}
                        style={inputStyle}
                        placeholder="স্থায়ী ঠিকানা লিখুন"
                        value={formData.permanentAddress}
                        onChange={(e) =>
                          handleTextChange("permanentAddress", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </section>

                {/* Divider */}
                <div className="shim-divider w-full" />

                {/* Section 2: Course Selection */}
                <section>
                  <h3
                    className={sectionHeadingClass}
                    style={sectionHeadingStyle}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: "var(--navy-dark)",
                        color: "var(--cream-white)",
                      }}
                    >
                      ২
                    </span>
                    কোর্স নির্বাচন করুন
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {COURSES.map((course) => {
                      const isChecked =
                        formData.selectedCourses.includes(course);
                      return (
                        <label
                          key={course}
                          className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-150 border"
                          style={{
                            background: isChecked
                              ? "oklch(0.18 0.065 240 / 0.07)"
                              : "var(--cream-white)",
                            borderColor: isChecked
                              ? "var(--navy-mid)"
                              : "oklch(0.82 0.020 85)",
                          }}
                        >
                          <input
                            type="checkbox"
                            className="mt-0.5 w-4 h-4 rounded flex-shrink-0 cursor-pointer"
                            style={{ accentColor: "var(--navy-dark)" }}
                            checked={isChecked}
                            onChange={() => handleCourseToggle(course)}
                          />
                          <span
                            className="text-sm font-medium leading-snug"
                            style={{ color: "var(--navy-darkest)" }}
                          >
                            {course}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <p
                      className="text-sm font-bold mb-3"
                      style={{ color: "var(--navy-dark)" }}
                    >
                      গাড়ির ধরন
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["ম্যানুয়াল", "অটো"].map((type) => {
                        const isSelected = formData.vehicleType === type;
                        return (
                          <label
                            key={type}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full cursor-pointer border transition-all duration-150 font-semibold text-sm"
                            style={{
                              background: isSelected
                                ? "var(--navy-dark)"
                                : "var(--cream-white)",
                              borderColor: isSelected
                                ? "var(--navy-dark)"
                                : "oklch(0.72 0.040 240)",
                              color: isSelected
                                ? "var(--cream-white)"
                                : "var(--navy-darkest)",
                            }}
                          >
                            <input
                              type="radio"
                              name="vehicleType"
                              className="w-4 h-4 cursor-pointer"
                              style={{ accentColor: "var(--navy-dark)" }}
                              value={type}
                              checked={isSelected}
                              onChange={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  vehicleType: type,
                                }))
                              }
                            />
                            {type}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </section>

                {/* Divider */}
                <div className="shim-divider w-full" />

                {/* Section 3: Residential */}
                <section>
                  <h3
                    className={sectionHeadingClass}
                    style={sectionHeadingStyle}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: "var(--navy-dark)",
                        color: "var(--cream-white)",
                      }}
                    >
                      ৩
                    </span>
                    আবাসিক সুবিধা
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(
                      [
                        {
                          key: "accommodation" as const,
                          label: "আবাসিক থাকার ব্যবস্থা প্রয়োজন",
                          icon: "🏠",
                        },
                        {
                          key: "food" as const,
                          label: "খাবারের ব্যবস্থা প্রয়োজন",
                          icon: "🍽️",
                        },
                        {
                          key: "notNeeded" as const,
                          label: "প্রয়োজন নেই",
                          icon: "✖️",
                        },
                      ] as const
                    ).map(({ key, label, icon }) => {
                      const isChecked = formData.residentialNeeds[key];
                      return (
                        <label
                          key={key}
                          className="flex items-center gap-3 p-4 rounded-xl cursor-pointer border transition-all duration-150"
                          style={{
                            background: isChecked
                              ? "oklch(0.18 0.065 240 / 0.07)"
                              : "var(--cream-white)",
                            borderColor: isChecked
                              ? "var(--navy-mid)"
                              : "oklch(0.82 0.020 85)",
                          }}
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded cursor-pointer flex-shrink-0"
                            style={{ accentColor: "var(--navy-dark)" }}
                            checked={isChecked}
                            onChange={() => handleResidentialChange(key)}
                          />
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--navy-darkest)" }}
                          >
                            {icon} {label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </section>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-extrabold tracking-wide transition-all duration-200 shadow-navy-md hover:shadow-navy-lg active:scale-[0.99] flex items-center justify-center gap-2"
                    style={{
                      background: "var(--navy-dark)",
                      color: "var(--cream-white)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--navy-mid)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--navy-dark)";
                    }}
                  >
                    <span>📲</span>
                    ভর্তি আবেদন জমা দিন
                  </button>
                  <p
                    className="text-center text-xs mt-3"
                    style={{ color: "oklch(0.50 0.035 240)" }}
                  >
                    ফরম জমা দেওয়ার পর আপনাকে WhatsApp-এ পাঠানো হবে
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer note */}
        <div className="text-center mt-6 pb-4">
          <p className="text-xs" style={{ color: "oklch(0.50 0.035 240)" }}>
            © {new Date().getFullYear()} শম্ভুগঞ্জ ড্রাইভিং স্কুল &nbsp;|&nbsp; Built
            with <span style={{ color: "var(--destructive)" }}>♥</span> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined"
                  ? window.location.hostname
                  : "shambhugonj-driving",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--navy-mid)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
