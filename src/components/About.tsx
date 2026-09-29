import React from 'react';
import { motion } from 'motion/react';
import { Users, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const whyPoints = [
    {
      title: 'Family Run',
      description: 'Personal care, accountability, and direct communication on every job.',
      icon: Users,
    },
    {
      title: 'Quality Focused',
      description: 'Dedicated to durable materials, meticulous details, and tidy finishes.',
      icon: CheckCircle2,
    },
    {
      title: 'Professional Service',
      description: 'Clear expectations, punctual attendance, and honest recommendations.',
      icon: ShieldCheck,
    },
    {
      title: 'Local Business',
      description: 'Based locally in Great Sutton, Ellesmere Port, serving our community.',
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DF3536] mb-3">
              About MCM Roofing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              An Independent, <br />
              <span className="text-[#DF3536]">Family-Run</span> Roofing Business
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                MCM Roofing takes pride in the quality of their workmanship and the service they provide. As an independent, family-run business, they focus on delivering a professional and dependable experience for their customers.
              </p>
              <p className="text-neutral-600 text-base">
                Whether you need advice on a minor repair or comprehensive roofing work, you deal directly with experienced tradespeople who value integrity, punctuality, and lasting standards.
              </p>
            </div>

            {/* Brand Message Banner */}
            <div className="mt-8 p-6 bg-[#F5F5F5] border-l-4 border-[#DF3536] rounded-r-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Our Core Promise
              </div>
              <p className="text-xl font-bold text-[#171717] italic">
                “Quality workmanship and quality service”
              </p>
              <div className="mt-2 text-xs font-medium text-neutral-600">
                MCM Roofing · Great Sutton & Ellesmere Port
              </div>
            </div>
          </div>

          {/* Right Column: Why MCM Roofing Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                Why MCM Roofing?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="p-5 bg-white border border-neutral-200 rounded-lg shadow-sm hover:border-[#DF3536] transition-colors"
                  >
                    <div className="w-10 h-10 rounded bg-[#F5F5F5] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#DF3536]" />
                    </div>
                    <h4 className="text-base font-bold text-[#171717] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-normal">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Local Commitment Card */}
            <div className="mt-6 p-5 bg-[#171717] text-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#DF3536]">
                  Local Ellesmere Port Community
                </div>
                <div className="text-sm font-medium text-neutral-300 mt-0.5">
                  Great Sutton, Ellesmere Port & surrounding Cheshire regions
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-bold bg-[#DF3536] hover:bg-[#c82829] text-white rounded transition-colors whitespace-nowrap"
              >
                Discuss Your Roof
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
