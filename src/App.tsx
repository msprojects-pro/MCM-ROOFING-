import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustAndWork } from './components/TrustAndWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans">
      {/* Strict Top Bar Contract */}
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services / What We Do */}
        <Services />

        {/* Section 3: About MCM Roofing */}
        <About />

        {/* Section 4: Trust / Work */}
        <TrustAndWork />

        {/* Section 5: Contact / CTA */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Quick Action for fast customer calling */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/447468038315"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp MCM Roofing"
          className="w-12 h-12 rounded-full bg-[#171717] text-white flex items-center justify-center shadow-lg border border-neutral-700 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5 text-[#DF3536]" />
        </a>
        <a
          href="tel:+447468038315"
          aria-label="Call MCM Roofing"
          className="w-12 h-12 rounded-full bg-[#DF3536] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
