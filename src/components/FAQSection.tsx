"use client";

import React, { useState } from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(CURRENT_PRODUCT.faq[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F8F7F2] border-b border-[#D8D8D0] text-right">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#B69A74] uppercase tracking-widest block mb-2">
            راهنمای کامل خریداران
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252724]">
            سوالات متداول و پاسخ‌های کاربردی
          </h2>
          <p className="text-sm text-[#686B63] mt-2">
            پاسخ به سوالات کلیدی شما درباره نصب، تحویل، گارانتی و نحوه استفاده
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {CURRENT_PRODUCT.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#D8D8D0] rounded-xl overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 text-right flex justify-between items-center gap-4 hover:bg-[#F0EEE5]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#252724] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#F8F7F2] border border-[#D8D8D0] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#35483B] text-white" : "text-[#252724]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#686B63] leading-[1.8] border-t border-[#D8D8D0]/40 bg-[#F8F7F2]/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support Box */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8D8D0] flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div>
            <h4 className="text-base font-bold text-[#252724]">سوال دیگری دارید؟</h4>
            <p className="text-xs text-[#686B63] mt-0.5">کارشناسان فنی ما آماده پاسخگویی و ارائه مشاوره رایگان نصب هستند.</p>
          </div>
          <a
            href="#product-showcase"
            className="px-6 py-3 bg-[#35483B] text-white font-bold text-xs rounded-xl hover:bg-[#243329] transition-colors shrink-0"
          >
            مشاوره و خرید مستقیم
          </a>
        </div>

      </div>
    </section>
  );
};
