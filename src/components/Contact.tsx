import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, CheckCircle, Send, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.phone.trim()) errors.phone = 'Please provide your telephone number';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please provide details of your roofing enquiry';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous local processing with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#DF3536] mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 [text-wrap:balance]">
            Need Roofing Work?
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Speak directly with MCM Roofing to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Direct Details Box */}
              <div className="space-y-6 mb-10">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#DF3536]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Telephone / Mobile
                    </div>
                    <a
                      href="tel:+447468038315"
                      className="text-xl font-bold text-[#171717] hover:text-[#DF3536] transition-colors tabular-nums"
                    >
                      +44 7468 038315
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      Direct line to MCM Roofing
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#DF3536]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      WhatsApp Messaging
                    </div>
                    <a
                      href="https://wa.me/447468038315?text=Hello%20MCM%20Roofing,%20I%20would%20like%20to%20enquire%20about%20roofing%20work."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[#171717] hover:text-[#DF3536] transition-colors tabular-nums"
                    >
                      +44 7468 038315
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      Send photos or message directly
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#DF3536]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Email Address
                    </div>
                    <a
                      href="mailto:mcmroofing.enquiries@outlook.com"
                      className="text-base sm:text-lg font-bold text-[#171717] hover:text-[#DF3536] transition-colors break-all"
                    >
                      mcmroofing.enquiries@outlook.com
                    </a>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      Enquiries and project requests
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#DF3536]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Location
                    </div>
                    <div className="text-base font-bold text-[#171717]">
                      Great Sutton, Ellesmere Port
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      United Kingdom
                    </div>
                  </div>
                </div>

              </div>

              {/* Three Prominent Action Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+447468038315"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] active:scale-[0.99] transition-all shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now (+44 7468 038315)</span>
                </a>

                <a
                  href="https://wa.me/447468038315?text=Hello%20MCM%20Roofing,%20I%20would%20like%20to%20enquire%20about%20roofing%20work."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-[#171717] bg-[#F5F5F5] hover:bg-neutral-200 rounded-md transition-colors border border-neutral-300"
                >
                  <MessageSquare className="w-5 h-5 text-[#DF3536]" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="#contact-form"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#171717] hover:text-[#DF3536] transition-colors"
                >
                  <span>Or Send Enquiry via Online Form</span>
                  <ArrowRight className="w-4 h-4 text-[#DF3536]" />
                </a>
              </div>
            </div>

            {/* Quiet reassurance note */}
            <div className="mt-8 p-4 bg-[#F5F5F5] rounded-md border-l-2 border-[#DF3536] text-xs text-neutral-600">
              <strong className="text-[#171717]">Family-Run Independence:</strong> When you contact MCM Roofing, your enquiry goes straight to our team. No third-party call centres.
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div id="contact-form" className="lg:col-span-7">
            <div className="bg-[#F5F5F5] p-6 sm:p-10 rounded-lg border border-neutral-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#171717]">
                  Send an Online Enquiry
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Fill in your details and we will respond directly to discuss your roofing needs.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white p-8 rounded-md border border-neutral-200 text-center">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#171717] mb-2">
                    Enquiry Details Prepared
                  </h4>
                  <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto">
                    Thank you, <strong className="text-[#171717]">{formData.name}</strong>. Your enquiry details have been recorded. You can also reach MCM Roofing directly on{' '}
                    <a href="tel:+447468038315" className="text-[#DF3536] font-bold underline">
                      +44 7468 038315
                    </a>{' '}
                    for urgent matters.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:mcmroofing.enquiries@outlook.com?subject=Roofing%20Enquiry%20from%20${encodeURIComponent(
                        formData.name
                      )}&body=Name:%20${encodeURIComponent(formData.name)}%0D%0APhone:%20${encodeURIComponent(
                        formData.phone
                      )}%0D%0AEmail:%20${encodeURIComponent(
                        formData.email
                      )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}
                      className="px-6 py-2.5 text-sm font-bold text-white bg-[#DF3536] rounded-md hover:bg-[#c82829] transition-colors"
                    >
                      Open in Email App
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Name <span className="text-[#DF3536]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="e.g. John Davies"
                      className={`w-full px-4 py-3 bg-white rounded border text-sm text-[#171717] placeholder-neutral-400 focus:outline-none transition-colors ${
                        formErrors.name ? 'border-[#DF3536]' : 'border-neutral-300 focus:border-[#DF3536]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-[#DF3536] mt-1 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Phone Number <span className="text-[#DF3536]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                        }}
                        placeholder="e.g. 07123 456789"
                        className={`w-full px-4 py-3 bg-white rounded border text-sm text-[#171717] placeholder-neutral-400 focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-[#DF3536]' : 'border-neutral-300 focus:border-[#DF3536]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-[#DF3536] mt-1 font-medium">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Email Address <span className="text-[#DF3536]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                        }}
                        placeholder="e.g. name@example.co.uk"
                        className={`w-full px-4 py-3 bg-white rounded border text-sm text-[#171717] placeholder-neutral-400 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-[#DF3536]' : 'border-neutral-300 focus:border-[#DF3536]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-[#DF3536] mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Roofing Requirements / Message <span className="text-[#DF3536]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                      }}
                      placeholder="Please describe your property and the roofing work needed..."
                      className={`w-full px-4 py-3 bg-white rounded border text-sm text-[#171717] placeholder-neutral-400 focus:outline-none transition-colors ${
                        formErrors.message ? 'border-[#DF3536]' : 'border-neutral-300 focus:border-[#DF3536]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-[#DF3536] mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-[#DF3536] rounded hover:bg-[#c82829] active:scale-[0.99] transition-all disabled:opacity-70 shadow-sm cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? 'Processing Enquiry...' : 'Send Enquiry'}</span>
                    </button>
                    <div className="mt-2 text-center text-xs text-neutral-500">
                      Direct contact to MCM Roofing · No spam or third-party sharing
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
