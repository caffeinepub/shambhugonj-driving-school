import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AdmissionFormPage from "./pages/AdmissionFormPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import DrivingLicensePage from "./pages/DrivingLicensePage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import StudentRecordsPage from "./pages/StudentRecordsPage";

const queryClient = new QueryClient();

export type Language = "bn" | "en";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "bn",
  setLanguage: () => {},
});

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}

function Layout() {
  const [language, setLanguage] = useState<Language>("bn");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageContext.Provider>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});

const licenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/driving-license",
  component: DrivingLicensePage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const studentRecordsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/student-records",
  component: StudentRecordsPage,
});

const admissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admission",
  component: AdmissionPage,
});

const admissionFormRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admission-form",
  component: AdmissionFormPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  pricingRoute,
  licenseRoute,
  galleryRoute,
  contactRoute,
  studentRecordsRoute,
  admissionRoute,
  admissionFormRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
