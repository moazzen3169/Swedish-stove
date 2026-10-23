"use client";

import React, { useState } from "react";
import { CURRENT_PRODUCT } from "@/data/productData";
import { useCart } from "@/context/CartContext";

export const ProductShowcase: React.FC = () => {
  const { product, quantity, setQuantity, addToCart, isAdded, setIsCartOpen, totalPriceFormatted } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = product.images[selectedImageIndex] || product.images[0];

  return (
    <section id="product-showcase" className="py-16 lg:py-24 bg-[#F8F7F2] border-b border-[#D8D8D0] text-right">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Title */}
        <div className="mb-10 lg:mb-14">
          <span className="text-xs font-bold text-[#B69A74] uppercase tracking-widest block mb-2">
            محصول برتر و اصلی
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252724]">
            {product.brandTitleFa} — {product.modelName}
          </h2>
        </div>

        {/* Desktop Split / Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Gallery Column (Desktop 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D8D8D0] shadow-sm group">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="w-full h-[320px] sm:h-[460px] lg:h-[520px] object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-102"
                onClick={() => setIsLightboxOpen(true)}
              />

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 left-4 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#252724] p-2.5 rounded-lg border border-[#D8D8D0] shadow-sm text-xs font-medium flex items-center gap-1.5 transition-colors focus:outline-none"
                aria-label="بزرگنمایی تصویر"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="hidden sm:inline">بزرگنمایی</span>
              </button>

              <div className="absolute bottom-0 right-0 left-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-4">
                {activeImage.caption}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 aspect-4/3 bg-[#FFFFFF] transition-all focus:outline-none ${
                    selectedImageIndex === idx
                      ? "border-[#35483B] ring-2 ring-[#35483B]/20 shadow-sm"
                      : "border-[#D8D8D0] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Panel Column (Desktop 5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D8D8D0] shadow-lg space-y-6">

            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs text-[#686B63] mb-2">
                <span className="bg-[#F0EEE5] px-2.5 py-1 rounded-md font-semibold text-[#35483B]">
                  کد مدل: {product.modelCode}
                </span>
                <span className="text-[#35483B] font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#35483B]"></span>
                  {product.availability}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#252724] leading-tight">
                {product.modelName}
              </h3>
              <p className="text-xs text-[#686B63] mt-1 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#D8D8D0] flex items-center justify-between">
              <div>
                <span className="block text-xs text-[#686B63]">قیمت مصوب شرکتی:</span>
                <div className="flex items-baseline space-x-1 space-x-reverse mt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#35483B]">
                    {product.priceFormatted}
                  </span>
                  <span className="text-sm font-bold text-[#252724]">{product.currency}</span>
                </div>
              </div>
              <div className="text-left text-xs text-[#89927A] font-semibold bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#D8D8D0]">
                تضمین بهترین قیمت
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Action */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-[#252724]">تعداد سفارش:</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#D8D8D0] rounded-lg bg-[#F8F7F2] overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-11 text-lg font-bold text-[#252724] hover:bg-[#E3D8C5] transition-colors flex items-center justify-center"
                    aria-label="کاهش تعداد"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-base font-bold text-[#252724]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-11 text-lg font-bold text-[#252724] hover:bg-[#E3D8C5] transition-colors flex items-center justify-center"
                    aria-label="افزایش تعداد"
                  >
                    +
                  </button>
                </div>

                <div className="text-xs text-[#686B63]">
                  <span>جمع کل: </span>
                  <span className="font-bold text-[#35483B] text-sm">{totalPriceFormatted} {product.currency}</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={addToCart}
                className="w-full py-4 bg-[#35483B] hover:bg-[#243329] text-[#FFFFFF] text-base font-bold rounded-xl shadow-md transition-all duration-200 active:scale-[0.98] flex items-center justify-center space-x-2 space-x-reverse focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[50px]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>{isAdded ? "مشاهده سبد و تکمیل سفارش" : "افزودن به سبد خرید"}</span>
              </button>
            </div>

            {/* Quick Guarantees list */}
            <div className="space-y-2.5 pt-4 border-t border-[#D8D8D0] text-xs text-[#686B63]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#35483B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{product.deliveryEstimate}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#35483B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{product.warrantyYears} سال گارانتی رسمی تعویض قطعات و بدنه</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#35483B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>پشتیبانی فنی و راهنمایی نصب دودکش تلفنی</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors"
            aria-label="بستن تصویر"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};
