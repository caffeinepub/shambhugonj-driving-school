# Shambhugonj Driving School

## Current State
A fully built bilingual Bengali/English driving school website with the following pages: HomePage, CoursesPage, GalleryPage, AboutPage, AdmissionFormPage, ContactPage, DrivingLicensePage, RasulpurBranchPage, and more. Uses a Deep Navy Blue + Soft Cream color system with Gold accents. Bengali fonts (Noto Sans Bengali / Hind Siliguri) are configured via index.css. Gallery images are managed from `galleryImages.ts`.

## Requested Changes (Diff)

### Add
- Enhanced government approval badge/box with bold text, rounded border, and subtle highlight background throughout the site
- Improved visual contrast for all text elements

### Modify
- **Text clarity**: Ensure all headings and paragraphs are sharp with strong contrast between text and background on both mobile and desktop. Apply `font-feature-settings: "kern" 1` and `text-rendering: geometricPrecision` in CSS for Bengali text sharpness. Increase font-weight on key labels and paragraph text across all pages.
- **Courses section (CoursesPage + HomePage courses grid)**: All 4 course cards should have consistent styling — same rounded corners (rounded-2xl), same shadow intensity, same spacing, same text contrast. Non-popular cards should match the visual quality of the popular card (dark navy bg, gold border, clear text) but in light-card variant. Add a top gold accent line to each non-popular card to match the popular card's visual weight.
- **Admission Form (AdmissionFormPage)**: Labels should use a darker, bolder color (--navy-darkest) with slightly larger font-size (0.875rem → 0.9rem). Input fields should have a clear solid border with better contrast. Section headings should be sharp and readable. Remove any blurriness by using solid colors (no OKLCH alpha) for label text.
- **Government approval text**: In all locations where "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত ড্রাইভিং প্রশিক্ষণ কেন্দ্র / নিবন্ধন নাম্বার" appears, place it inside a clean card/box with: rounded-xl border (1.5px solid gold), subtle background (light cream with slight gold tint), bold font-weight (700+), improved font clarity, padding for breathing room.
- **Images across the website**: All images should use `object-fit: cover` with `object-position: center` (or `center top` for portraits). Team member images should not crop faces. About page image should be properly contained.
- **Gallery section (GalleryPage + galleryImages.ts)**: Remove duplicate and non-training images. "Admision Form.jpeg", "leflet.jpeg", "Team Mamber.final.png" should be removed from the gallery as they are not training photos. Keep only unique training/activity photos. All gallery items should use consistent `aspect-ratio: 4/3` with `object-cover`. Grid should be clean 3-column on desktop.
- **Global CSS (index.css)**: Add `text-rendering: geometricPrecision` and `font-feature-settings: "kern" 1` for Bengali text sharpness. Add `antialiased` rendering globally.

### Remove
- Non-gallery assets from galleryImages.ts: "Admision Form.jpeg", "leflet.jpeg", "Team Mamber.final.png" (not training photos, should not be in gallery)
- Duplicate entries in galleryImages.ts (check for any repeated paths)

## Implementation Plan
1. Update `src/index.css` — improve Bengali text rendering with geometricPrecision, stronger antialiasing, and sharper font settings
2. Update `galleryImages.ts` — remove non-training photos (Admision Form.jpeg, leflet.jpeg, Team Mamber.final.png), deduplicate paths, keep only real training/activity photos
3. Update `CoursesPage.tsx` — add consistent gold top accent line to all non-popular course cards, ensure same shadow/border/spacing as popular card
4. Update `HomePage.tsx` — apply same course card improvements (consistent gold accent, shadow, spacing)
5. Update `AdmissionFormPage.tsx` — sharpen label text (bolder, more contrast), improve input border clarity, improve section heading contrast
6. Update `HomePage.tsx` — improve government approval badge to be a proper highlighted box
7. Update `AboutPage.tsx` — ensure images use proper object-fit/position so faces are not cropped
8. Apply approval badge improvements in `Header.tsx` top bar text
