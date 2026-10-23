"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "flame":
        return (
          <svg className="w-6 h-6 text-[#35483B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "shield":
        return (
          <svg className="w-6 h-6 text-[#35483B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "eye":
        return (
          <svg className="w-6 h-6 text-[#35483B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-[#35483B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#D8D8D0]/60 text-right">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#B69A74] uppercase tracking-widest block mb-2">
            مزایای کلیدی طراحان سوئدی
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252724] leading-snug">
            سه رکن اساسی در مهندسی کامین‌های نوردیک
          </h2>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURRENT_PRODUCT.benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="p-8 rounded-2xl bg-[#F8F7F2] border border-[#D8D8D0] hover:border-[#35483B]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0EEE5] border border-[#D8D8D0] flex items-center justify-center group-hover:bg-[#35483B]/10 transition-colors">
                  {getIcon(benefit.iconName)}
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#B69A74] block mb-1">
                    ۰{index + 1} — {benefit.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#252724] leading-tight">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-sm text-[#686B63] leading-relaxed pt-2 border-t border-[#D8D8D0]/60">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8D8D0]/40 flex items-center justify-between text-xs font-medium text-[#35483B]">
                <span>تضمین عملکرد فنی</span>
                <svg className="w-4 h-4 transform rotate-180 group-hover:translate-x-[-4px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
