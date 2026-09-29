import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Trust & Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-[#171717] hover:text-[#DF3536] transition-colors"
          >
            MCM <span className="text-[#DF3536]">Roofing</span>
          </a>

          {/* Zone 2: 4 nav links with clean hover styling */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#171717]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#DF3536] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DF3536] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action (Direct phone call) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+447468038315"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>07468 038315</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+447468038315"
              aria-label="Call MCM Roofing"
              className="p-2 text-white bg-[#DF3536] rounded-md"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:text-[#DF3536] hover:bg-[#F5F5F5] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#171717] hover:bg-[#F5F5F5] hover:text-[#DF3536] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-100">
            <a
              href="tel:+447468038315"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call MCM Roofing: 07468 038315</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
