# Specification

## Summary
**Goal:** Replace the AI-generated placeholder photo of team member Habibur Rahman Babul with his real uploaded portrait across the website.

**Planned changes:**
- Crop and optimize the uploaded portrait (3-8.jpeg) of Habibur Rahman Babul and save it as `frontend/public/assets/generated/habibur-rahman-babul.png`
- Update all references to Habibur Rahman Babul's photo in `AboutPage.tsx` and `HomePage.tsx` to use the new image path

**User-visible outcome:** Habibur Rahman Babul's real portrait (white shirt, white background, face fully visible) is displayed in the team section on both the About page and Home page.
