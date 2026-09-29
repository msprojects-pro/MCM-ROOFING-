import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Shield, MapPin, Users } from 'lucide-react';
import heroImage from '../assets/images/hero_uk_roofing_1790702423364.jpg';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Trust Kicker / Subtitle (Unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 mb-4 tracking-wide uppercase">
              <span className="text-[#DF3536] font-bold">Independent Family-Run</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Great Sutton & Ellesmere Port</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
              Quality Roofing. <br />
              <span className="text-[#DF3536]">Built to Last.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-8 max-w-2xl">
              MCM Roofing is an independent, family-run roofing business serving customers in Great Sutton, Ellesmere Port and the surrounding areas.
            </p>

            {/* Prominent Direct Phone Call Banner */}
            <div className="mb-8 p-4 bg-[#F5F5F5] border-l-4 border-[#DF3536] rounded-r-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Direct Line to MCM Roofing
                </div>
                <a
                  href="tel:+447468038315"
                  className="text-2xl sm:text-3xl font-extrabold text-[#171717] hover:text-[#DF3536] transition-colors tabular-nums tracking-tight inline-flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-6 h-6 text-[#DF3536]" />
                  +44 7468 038315
                </a>
              </div>
              <div className="text-xs text-neutral-600 sm:text-right font-medium">
                Fast Response · Friendly Advice
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="tel:+447468038315"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call MCM Roofing</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#171717] bg-white border-2 border-neutral-300 rounded-md hover:border-[#DF3536] hover:text-[#DF3536] transition-all whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Trust Signals (Professional, Reliable, Local, Family-run, Quality workmanship) */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-neutral-700">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#DF3536] shrink-0" />
                <span>Family Run</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#DF3536] shrink-0" />
                <span>Reliable Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DF3536] shrink-0" />
                <span>Local Business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DF3536] shrink-0" />
                <span>Quality Focused</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Roofing Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-md bg-[#F5F5F5]">
              {!imageError ? (
                <img
                  src={heroImage}
                  alt="UK residential roofing work by MCM Roofing"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
                />
              ) : (
                <div className="w-full h-[480px] flex flex-col items-center justify-center p-8 bg-neutral-100 text-center">
                  <Shield className="w-16 h-16 text-[#DF3536] mb-4" />
                  <h3 className="text-xl font-bold text-[#171717]">Quality Roofing Craftsman</h3>
                  <p className="text-sm text-neutral-600 mt-2">Serving Great Sutton and Ellesmere Port</p>
                </div>
              )}

              {/* Verified Trust Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded border border-neutral-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-neutral-500">
                    Customer Reputation
                  </div>
                  <div className="text-lg font-extrabold text-[#171717]">
                    100% Recommended
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-neutral-500">Verified Feedback</div>
                  <div className="text-sm font-bold text-[#DF3536] tabular-nums">110 Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
