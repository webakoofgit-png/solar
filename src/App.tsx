import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { FloatingActions } from './components/layout/FloatingActions';
import { QuoteModal } from './components/common/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ResidentialSolarPage } from './pages/ResidentialSolarPage';
import { CommercialSolarPage } from './pages/CommercialSolarPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialSolution, setQuoteInitialSolution] = useState('Residential Rooftop Solar');
  const [quoteInitialSize, setQuoteInitialSize] = useState('');

  const handleOpenQuote = (solution = 'Residential Rooftop Solar') => {
    setQuoteInitialSolution(solution);
    setQuoteInitialSize('');
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithDetails = (systemSize: string) => {
    setQuoteInitialSize(systemSize);
    setQuoteInitialSolution(
      systemSize.toLowerCase().includes('commercial')
        ? 'Commercial & Corporate Solar'
        : systemSize.toLowerCase().includes('industrial')
        ? 'Industrial Solar Power Plant'
        : 'Residential Rooftop Solar'
    );
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Scroll Reset on Route Change */}
        <ScrollToTop />

        {/* Sticky Header Navigation */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Main Routed Content */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuote={() => handleOpenQuote()}
                  onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuote={() => handleOpenQuote()} />}
            />
            <Route
              path="/solutions"
              element={<SolutionsPage onOpenQuote={() => handleOpenQuote()} />}
            />
            <Route
              path="/solutions/residential"
              element={
                <ResidentialSolarPage
                  onOpenQuote={() => handleOpenQuote('Residential Rooftop Solar')}
                  onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
                />
              }
            />
            <Route
              path="/solutions/commercial"
              element={
                <CommercialSolarPage
                  onOpenQuote={() => handleOpenQuote('Commercial & Corporate Solar')}
                  onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
                />
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:slug"
              element={
                <ProjectDetailPage
                  onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
                />
              }
            />
            <Route
              path="/why-us"
              element={<WhyChooseUsPage onOpenQuote={() => handleOpenQuote()} />}
            />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback 404 redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Floating Actions: WhatsApp & Back-To-Top */}
        <FloatingActions />

        {/* Global Footer */}
        <Footer />

        {/* Global Quote / Feasibility Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialSolution={quoteInitialSolution}
          initialSystemSize={quoteInitialSize}
        />
      </div>
    </Router>
  );
}

export default App;
