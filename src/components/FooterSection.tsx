"use client";

import React from "react";
import { CURRENT_PRODUCT } from "@/data/productData";

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#252724] text-[#D8D8D0] pt-16 pb-12 text-right border-t border-[#35483B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-9 h-9 rounded-lg bg-[#35483B] flex items-center justify-center text-[#F8F7F2] font-serif font-bold text-lg">
                NH
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#FFFFFF] tracking-tight">
                  {CURRENT_PRODUCT.brandName}
                </span>
                <span className="text-[10px] text-[#B69A74] tracking-wider">
                  SWEDISH WOOD-BURNING STOVES
                </span>
              </div>
            </div>

            <p className="text-xs text-[#89927A] leading-[1.8] max-w-sm">
              ارائه‌دهنده سیستم‌های گرمایشی چوب‌سوزی با الگوی معماری و مهندسی اسکاندیناوی. تمرکز ما بر کیفیت ساخت، بازدهی بالا و زیبایی ماندگار در فضای خانه شماست.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#FFFFFF]">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs text-[#686B63]">
              <li>
                <a href="#hero" className="hover:text-[#B69A74] transition-colors">معرفی محصول</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#B69A74] transition-colors">مزایا و ویژگی‌ها</a>
              </li>
              <li>
                <a href="#product-showcase" className="hover:text-[#B69A74] transition-colors">مشاهده قیمت و ثبت سفارش</a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-[#B69A74] transition-colors">جدول مشخصات فنی</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B69A74] transition-colors">سوالات متداول</a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="md:col-span-4 space-y-3 bg-[#243329]/50 p-5 rounded-xl border border-[#35483B]/40">
            <h4 className="text-sm font-bold text-[#FFFFFF]">پشتیبانی و مشاوره خرید</h4>
            <p className="text-xs text-[#89927A] leading-relaxed">
              جهت دریافت مشاوره اختصاصی نصب دودکش، برآورد ظرفیت حرارتی یا پیگیری سفارش با ما در ارتباط باشید.
            </p>
            <div className="pt-2 text-xs text-[#E3D8C5] space-y-1">
              <div>تلفن پشتیبانی: <span className="font-bold dir-ltr inline-block">۰۲۱-۸۸۰۰۰۰۰۰</span></div>
              <div>ساعات کاری: شنبه تا چهارشنبه ۹ الی ۱۷</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#35483B]/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#686B63] gap-4">
          <p>© ۲۰۲۵ Nordic Hearth. کلیه حقوق محفوظ است.</p>
          <div className="flex space-x-6 space-x-reverse text-[11px]">
            <a href="#faq" className="hover:text-[#D8D8D0]">حریم خصوصی</a>
            <a href="#faq" className="hover:text-[#D8D8D0]">قوانین و شرایط تحویل</a>
            <a href="#faq" className="hover:text-[#D8D8D0]">ضمانت‌نامه</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
