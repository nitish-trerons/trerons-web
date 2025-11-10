
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LoadingAnimation from '@/components/LoadingAnimation';
import './App.css';

// Lazy load pages for code splitting
const EventServices = lazy(() => import('@/pages/EventServices'));
const FilmVideo = lazy(() => import('@/pages/FilmVideo'));
const TechServices = lazy(() => import('@/pages/TechServices'));
const About = lazy(() => import('@/pages/About'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const Careers = lazy(() => import('@/pages/Careers'));
const Contact = lazy(() => import('@/pages/Contact'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <SEO 
                  title="Trerons - Event, Film Production & Tech Solutions"
                  description="Transform your vision into reality with our comprehensive event services, film & video production, and tech solutions. Professional, creative, and innovative services for modern businesses."
                  keywords="event planning, film production, video production, tech solutions, corporate events, wedding planning, video services, technology services, Bhubaneswar, Odisha"
                  url="https://trerons.com"
                />
                <Hero />
                <Services />
                <Clients />
              </main>
            } />
            <Route path="/event-services" element={
              <Suspense fallback={<LoadingAnimation />}>
                <EventServices />
              </Suspense>
            } />
            <Route path="/film-video" element={
              <Suspense fallback={<LoadingAnimation />}>
                <FilmVideo />
              </Suspense>
            } />
            <Route path="/tech-services" element={
              <Suspense fallback={<LoadingAnimation />}>
                <TechServices />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingAnimation />}>
                <About />
              </Suspense>
            } />
            <Route path="/privacy-policy" element={
              <Suspense fallback={<LoadingAnimation />}>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/terms-of-service" element={
              <Suspense fallback={<LoadingAnimation />}>
                <TermsOfService />
              </Suspense>
            } />
            <Route path="/careers" element={
              <Suspense fallback={<LoadingAnimation />}>
                <Careers />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingAnimation />}>
                <Contact />
              </Suspense>
            } />
            <Route path="/blog" element={
              <Suspense fallback={<LoadingAnimation />}>
                <Blog />
              </Suspense>
            } />
            <Route path="/blog/:slug" element={
              <Suspense fallback={<LoadingAnimation />}>
                <BlogPost />
              </Suspense>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
