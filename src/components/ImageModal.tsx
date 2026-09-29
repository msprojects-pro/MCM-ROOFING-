import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden border border-neutral-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div>
            <h3 className="text-lg font-bold text-[#171717]">{item.title}</h3>
            <p className="text-xs text-neutral-500">{item.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image modal"
            className="p-1.5 text-neutral-500 hover:text-[#DF3536] hover:bg-neutral-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative bg-neutral-900 flex items-center justify-center max-h-[75vh] overflow-hidden">
          <img
            src={item.imageSrc}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full max-h-[75vh] object-contain"
          />
        </div>
        <div className="p-3 text-center text-xs text-neutral-500 bg-[#F5F5F5] border-t border-neutral-200">
          Representative roofing workmanship imagery for project demonstration.
        </div>
      </div>
    </div>
  );
};
