"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const SpecificationsSection: React.FC = () => {
  return (
    <section id="specifications" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#D8D8D0] text-right">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">

        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#B69A74] uppercase tracking-widest block mb-2">
            جدول دقیق فنی
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252724]">
            مشخصات کامل مهندسی {CURRENT_PRODUCT.modelName}
          </h2>
          <p className="text-sm text-[#686B63] mt-2">
            تمام اندازه‌ها و پارامترها طبق استانداردهای اروپا سنجیده و تأیید شده‌اند.
          </p>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURRENT_PRODUCT.specifications.map((specGroup) => (
            <div
              key={specGroup.category}
              className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#D8D8D0] space-y-4"
            >
              <h3 className="text-base font-bold text-[#35483B] pb-3 border-b border-[#D8D8D0] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B69A74]" />
                {specGroup.category}
              </h3>

              <div className="space-y-3 divide-y divide-[#D8D8D0]/50">
                {specGroup.items.map((item) => (
                  <div key={item.label} className="pt-2 flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="text-[#686B63] font-medium">{item.label}</span>
                    <span className="font-bold text-[#252724] dir-ltr text-right">
                      {item.value} {item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note & Catalogue Link */}
        <div className="p-4 rounded-xl bg-[#F0EEE5] border border-[#D8D8D0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#686B63]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#35483B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>جهت دریافت دستورالعمل کامل نصب و نقشه‌های سه‌بعدی با پشتیبانی فنی تماس بگیرید.</span>
          </div>
          <a
            href="#product-showcase"
            className="px-4 py-2 bg-[#35483B] text-white rounded-lg font-semibold hover:bg-[#243329] transition-colors text-center shrink-0"
          >
            استعلام فنی و سفارش
          </a>
        </div>

      </div>
    </section>
  );
};
