"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#F8F7F2] border-b border-[#D8D8D0]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text Content Area */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10 text-right">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EEE5] border border-[#D8D8D0] text-[#35483B] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#B69A74] animate-ping" />
              <span>طراحی و مهندسی اصیل سوئد</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#252724] leading-[1.3] tracking-tight">
              {CURRENT_PRODUCT.heroHeadline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#686B63] leading-[1.8] font-normal max-w-xl">
              {CURRENT_PRODUCT.heroSubheadline}
            </p>

            {/* Key Factual Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2 border-y border-[#D8D8D0]/70 text-right">
              <div>
                <span className="block text-xs text-[#686B63]">بازده حرارتی</span>
                <span className="text-base sm:text-lg font-bold text-[#35483B]">
                  {CURRENT_PRODUCT.efficiencyRate}
                </span>
              </div>
              <div className="border-r border-[#D8D8D0] pr-3">
                <span className="block text-xs text-[#686B63]">مساحت پوشش</span>
                <span className="text-base sm:text-lg font-bold text-[#252724]">
                  {CURRENT_PRODUCT.heatingArea}
                </span>
              </div>
              <div className="border-r border-[#D8D8D0] pr-3">
                <span className="block text-xs text-[#686B63]">گارانتی بدنه</span>
                <span className="text-base sm:text-lg font-bold text-[#252724]">
                  {CURRENT_PRODUCT.warrantyYears} سال
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#product-showcase"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#35483B] text-[#FFFFFF] text-base font-bold rounded-lg hover:bg-[#243329] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[48px]"
              >
                مشاهده قیمت و خرید
              </a>
              <a
                href="#specifications"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFFFFF] border border-[#D8D8D0] text-[#252724] text-base font-medium rounded-lg hover:bg-[#F0EEE5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[48px]"
              >
                مشخصات کامل فنی
              </a>
            </div>

            {/* Reassurance Label */}
            <div className="flex items-center gap-2 text-xs text-[#686B63] pt-1">
              <svg className="w-4 h-4 text-[#35483B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>تحویل در پالت چوبی ایمن با باربری سراسری + مشاوره فنی رایگان</span>
            </div>
          </div>

          {/* Architectural Editorial Image Area */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#F0EEE5] border border-[#D8D8D0] shadow-xl group">
              <img
                src={CURRENT_PRODUCT.images[0].url}
                alt={CURRENT_PRODUCT.images[0].alt}
                className="w-full h-[360px] sm:h-[480px] lg:h-[560px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle Ambient Light Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Tag */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl bg-[#FFFFFF]/90 backdrop-blur-md border border-white/40 shadow-lg text-right">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-[#B69A74] uppercase tracking-wider">
                      {CURRENT_PRODUCT.modelCode}
                    </p>
                    <p className="text-sm font-semibold text-[#252724]">
                      {CURRENT_PRODUCT.modelName}
                    </p>
                  </div>
                  <span className="text-xs text-[#686B63] bg-[#F8F7F2] px-2.5 py-1 rounded-md border border-[#D8D8D0]">
                    {CURRENT_PRODUCT.origin}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
