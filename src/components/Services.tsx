import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, MapPin, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const benefitCards = [
    {
      id: 'workmanship',
      title: 'Quality Workmanship',
      description: 'Careful attention to detail on every project.',
      icon: Award,
    },
    {
      id: 'reliable',
      title: 'Reliable Service',
      description: 'A straightforward, professional approach from a family-run business.',
      icon: Clock,
    },
    {
      id: 'standards',
      title: 'Professional Standards',
      description: 'Work carried out with a strong focus on quality and finish.',
      icon: ShieldCheck,
    },
    {
      id: 'local',
      title: 'Local Roofing Company',
      description: 'Proud to serve customers around Great Sutton and Ellesmere Port.',
      icon: MapPin,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#DF3536] mb-3">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-5 [text-wrap:balance]">
            Professional Roofing Services
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            From roofing work to maintaining the quality and protection of your property, MCM Roofing takes pride in delivering dependable workmanship and professional service.
          </p>
        </div>

        {/* 4 Benefit Cards Grid (strictly avoiding invented services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-lg border border-neutral-200 hover:border-[#DF3536] transition-all duration-200 shadow-sm hover:shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-neutral-100 group-hover:bg-[#DF3536] transition-colors flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-[#DF3536] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#171717] mb-3 group-hover:text-[#DF3536] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-[#DF3536] transition-colors">
                  <span>MCM Commitment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conversational prompt callout */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-base font-bold text-[#171717]">
              Have a roofing project or enquiry in Great Sutton or Ellesmere Port?
            </div>
            <div className="text-sm text-neutral-600">
              Speak directly with an independent roofer who cares about your property.
            </div>
          </div>
          <a
            href="tel:+447468038315"
            className="px-5 py-2.5 text-sm font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] transition-colors whitespace-nowrap"
          >
            Call 07468 038315
          </a>
        </div>

      </div>
    </section>
  );
};
