import React from 'react';
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-extrabold tracking-tight block">
              MCM <span className="text-[#DF3536]">Roofing</span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Independent, family-run roofing business providing dependable roofing work and quality service across Great Sutton, Ellesmere Port and surrounding areas.
            </p>
            <div className="pt-1 text-xs font-semibold text-neutral-400">
              <span className="text-[#DF3536] font-bold">100% Recommended</span> from 110 reviews
            </div>
          </div>

          {/* Column 2: Location & Service Area */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Location & Area
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DF3536] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Great Sutton</div>
                  <div>Ellesmere Port</div>
                  <div>United Kingdom</div>
                </div>
              </div>
              <p className="text-xs text-neutral-500 pt-2">
                Proud to serve homeowners and properties across Great Sutton, Ellesmere Port and surrounding communities.
              </p>
            </div>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a
                  href="tel:+447468038315"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DF3536] shrink-0" />
                  <span className="tabular-nums font-semibold">+44 7468 038315</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mcmroofing.enquiries@outlook.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#DF3536] shrink-0" />
                  <span>mcmroofing.enquiries@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/mcmroofing.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#DF3536] shrink-0" />
                  <span>facebook.com/mcmroofing.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Demo Note */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-[#DF3536] transition-colors">
                  Services & Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DF3536] transition-colors">
                  About MCM Roofing
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#DF3536] transition-colors">
                  Trust & Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DF3536] transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-neutral-800">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#DF3536]" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Demo Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} MCM Roofing. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Website Demo · Independent, family-run roofing company</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
