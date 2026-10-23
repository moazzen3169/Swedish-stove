"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#243329] text-[#F8F7F2] relative overflow-hidden text-right">

      {/* Subtle Background Architectural Line Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#B69A74] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#35483B] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center space-y-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#35483B] border border-[#B69A74]/40 text-[#E3D8C5] text-xs font-semibold">
          <span>انتخابی کاربردی برای گرمای ماندگار خانه</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto text-[#FFFFFF]">
          تجربه گرمای اصیل چوب با طراحی ماندگار سوئدی
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#D8D8D0] leading-[1.8] max-w-2xl mx-auto">
          جهت بررسی جزئیات محصول، مشاهده شرایط تحویل با باربری پالت‌شده و ثبت سفارش آنلاین هم‌اکنون اقدام نمایید.
        </p>

        {/* Price & Primary Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="text-right sm:text-left bg-[#35483B]/60 backdrop-blur-md px-6 py-3 rounded-xl border border-[#B69A74]/30">
            <span className="block text-xs text-[#E3D8C5]">قیمت نهایی محصول:</span>
            <span className="text-2xl font-extrabold text-[#FFFFFF]">
              {CURRENT_PRODUCT.priceFormatted} <span className="text-xs font-normal">{CURRENT_PRODUCT.currency}</span>
            </span>
          </div>

          <a
            href="#product-showcase"
            className="w-full sm:w-auto px-10 py-4 bg-[#B69A74] hover:bg-[#a38662] text-[#243329] text-base font-extrabold rounded-xl shadow-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#B69A74] min-h-[50px] flex items-center justify-center space-x-2 space-x-reverse"
          >
            <span>خرید محصول</span>
            <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Reassurance */}
        <p className="text-xs text-[#89927A] pt-4">
          ارسال به سراسر کشور | ۵ سال گارانتی بدنه | پشتیبانی فنی تخصصی
        </p>

      </div>
    </section>
  );
};
