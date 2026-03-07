// Shared gallery images data — deduplicated unique training/activity photos
// Duplicate detection: files within each numbered series (3-x, 4-x, 5-x, 6-x, 1-x)
// are byte-for-byte identical copies. Only one representative per unique image is kept.

export const galleryImages = [
  // Original gallery set — distinct real training photos
  "/assets/01.jpeg",
  "/assets/02.jpeg",
  "/assets/3.jpeg", // unique image (different hash from 3-x series)
  "/assets/3-1.jpeg", // one representative from the 3-x series (all identical)
  "/assets/4.jpeg", // one representative from the 4/4-x series (all identical)
  "/assets/5.jpeg", // one representative from the 5/5-x series (all identical)
  "/assets/6.jpeg", // one representative from the 6/6-x series (all identical)
  // FB gallery photos — all unique files
  "/assets/FB_IMG_1770189588543.jpg",
  "/assets/FB_IMG_1770189544503.jpg",
  "/assets/FB_IMG_1770189556187.jpg",
  "/assets/FB_IMG_1770189539764.jpg",
  "/assets/FB_IMG_1770189560006.jpg",
  "/assets/FB_IMG_1770189522713.jpg",
  "/assets/FB_IMG_1770189563793.jpg",
  "/assets/FB_IMG_1770189532635.jpg",
  "/assets/FB_IMG_1770189581553.jpg",
  "/assets/FB_IMG_1770189573755.jpg",
  "/assets/FB_IMG_1770189568309.jpg",
];
