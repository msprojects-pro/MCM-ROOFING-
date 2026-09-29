import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ZoomIn, ShieldCheck, ThumbsUp } from 'lucide-react';
import { GalleryItem } from '../types';
import { ImageModal } from './ImageModal';

import slateTilesImg from '../assets/images/roof_slate_tiles_1790702443846.jpg';
import chimneyLeadworkImg from '../assets/images/roof_chimney_leadwork_1790702457587.jpg';
import residentialRoofImg from '../assets/images/roof_residential_home_1790702470566.jpg';

export const TrustAndWork: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'slate-roof',
      title: 'Pitched Slate Roof Craftsmanship',
      category: 'Slate Tiles & Precision Linearity',
      imageSrc: slateTilesImg,
      aspectRatio: '4:3',
    },
    {
      id: 'chimney-leadwork',
      title: 'Chimney Flashing & Weatherproofing',
      category: 'Lead Detailing & Stack Protection',
      imageSrc: chimneyLeadworkImg,
      aspectRatio: '4:3',
    },
    {
      id: 'residential-roofline',
      title: 'Residential Roof Structure & Fascias',
      category: 'Tiled Roofs & Clean Roofline',
      imageSrc: residentialRoofImg,
      aspectRatio: '4:3',
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#DF3536] mb-3">
            Reputation & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 [text-wrap:balance]">
            Trusted by Our Customers
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Quality workmanship and customer service are at the heart of MCM Roofing.
          </p>
        </div>

        {/* Prominent Trust Banner: 100% Recommended & 110 Reviews */}
        <div className="bg-white rounded-lg border border-neutral-200 p-8 sm:p-10 mb-16 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            {/* Metric 1: 100% Recommended */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center mb-3">
                <ThumbsUp className="w-6 h-6 text-[#DF3536]" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-sm font-bold text-neutral-800 uppercase tracking-wider mt-1">
                Recommended
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Unanimous recommendation score
              </div>
            </div>

            {/* Metric 2: 110 Reviews */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="flex items-center gap-1 text-[#DF3536] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#DF3536]" />
                ))}
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight tabular-nums">
                110
              </div>
              <div className="text-sm font-bold text-neutral-800 uppercase tracking-wider mt-1">
                Reviews
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Genuine customer testimonials
              </div>
            </div>

            {/* Metric 3: Independent Guarantee */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-[#DF3536]" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight">
                Family-Run Care
              </div>
              <div className="text-sm font-bold text-neutral-800 uppercase tracking-wider mt-1">
                Direct Accountability
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Great Sutton, Ellesmere Port & surrounding areas
              </div>
            </div>

          </div>
        </div>

        {/* Roofing Work Gallery */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-[#171717]">
              Roofing & Property Protection Examples
            </h3>
            <p className="text-xs text-neutral-500">
              Representative roofing craftsmanship across residential properties. Click any image to view details.
            </p>
          </div>
          <div className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#DF3536]" />
            <span>High standards on every roof</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-[#DF3536] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#171717]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 bg-white rounded-full text-[#171717] shadow">
                    <ZoomIn className="w-5 h-5 text-[#DF3536]" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#DF3536] mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-base font-bold text-[#171717] group-hover:text-[#DF3536] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 text-xs font-medium text-neutral-500 flex items-center justify-between">
                  <span>View photo details</span>
                  <span className="text-[#DF3536] font-bold">Inspect &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
