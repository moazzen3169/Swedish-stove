"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const ProductDetailsSection: React.FC = () => {
  return (
    <section id="design-details" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#D8D8D0] text-right">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16 lg:space-y-24">

        {/* Section Title Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-[#B69A74] uppercase tracking-widest block mb-2">
            جزئیات مهندسی و ساختار
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252724] leading-snug">
            طراحی متفکرانه، بازدهی حداکثری و ظاهری ماندگار
          </h2>
        </div>

        {/* Detail Block 1 */}
        {CURRENT_PRODUCT.details.map((detail, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={detail.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-6 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-2xl overflow-hidden bg-[#F0EEE5] border border-[#D8D8D0] shadow-sm">
                  <img
                    src={detail.imageUrl}
                    alt={detail.title}
                    className="w-full h-[320px] sm:h-[420px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-xs font-bold text-[#B69A74] uppercase tracking-wider block">
                  {detail.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#252724] leading-tight">
                  {detail.title}
                </h3>
                <p className="text-base text-[#686B63] leading-[1.8]">
                  {detail.description}
                </p>

                {/* Highlights list */}
                <ul className="space-y-3 pt-2">
                  {detail.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-[#252724] font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#35483B]/10 text-[#35483B] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
