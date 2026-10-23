"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const HomeLifestyleSection: React.FC = () => {
  const lifestyleImage = CURRENT_PRODUCT.images[2] || CURRENT_PRODUCT.images[0];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F7F2] border-b border-[#D8D8D0] text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Cinematic Card Layout */}
        <div className="relative rounded-3xl overflow-hidden bg-[#243329] text-[#F8F7F2] shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

          {/* Text Overlay Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10 bg-gradient-to-r from-[#243329] via-[#243329]/95 to-transparent">
            <span className="text-xs font-bold text-[#B69A74] tracking-widest uppercase">
              حس و حال زندگی اسکاندیناوی
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              نقطه ثقل آرامش و گرمای محیط زندگی شما
            </h2>
            <p className="text-sm sm:text-base text-[#D8D8D0] leading-[1.8] font-normal">
              حضور کامین چوب‌سوزی سوئدی تنها یک ابزار گرمایشی نیست، بلکه جلوه‌ای از فلسفه «لاگوم» (تعادل و سادگی در زندگی) است. نوری ملایم، صدای دلنشین سوختن چوب و متریال طبیعی که فضای خانه شما را دگرگون می‌سازد.
            </p>

            <div className="pt-4 flex items-center space-x-6 space-x-reverse text-xs text-[#E3D8C5]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B69A74]" />
                <span>طراحی ارگونومیک</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B69A74]" />
                <span>سازگار با انواع دکوراسیون</span>
              </div>
            </div>
          </div>

          {/* Full Height Visual Background Column */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
            <img
              src={lifestyleImage.url}
              alt={lifestyleImage.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#243329]/30 to-[#243329]" />
          </div>

        </div>

      </div>
    </section>
  );
};
