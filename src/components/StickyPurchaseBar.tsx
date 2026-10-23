"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export const StickyPurchaseBar: React.FC = () => {
  const { product, addToCart, isAdded } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainShowcase = document.getElementById("product-showcase");
      if (!mainShowcase) return;
      const showcaseRect = mainShowcase.getBoundingClientRect();
      // Show sticky purchase bar as soon as the main product purchase area is scrolled above the viewport
      setIsVisible(showcaseRect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 right-0 left-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#D8D8D0] shadow-2xl p-3 sm:p-4 transition-all duration-300 transform translate-y-0 text-right"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

        {/* Product Compact Thumbnail & Info */}
        <div className="flex items-center space-x-3 space-x-reverse min-w-0">
          <img
            src={product.images[0].url}
            alt={product.images[0].alt}
            className="w-12 h-12 object-cover rounded-lg border border-[#D8D8D0] shrink-0 bg-[#F0EEE5]"
          />
          <div className="min-w-0">
            <span className="text-[11px] text-[#B69A74] font-bold block truncate">
              {product.brandName}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-[#252724] truncate">
              {product.modelName}
            </h4>
            <span className="text-xs font-extrabold text-[#35483B] sm:hidden block">
              {product.priceFormatted} {product.currency}
            </span>
          </div>
        </div>

        {/* Desktop Price & Primary Action */}
        <div className="flex items-center space-x-4 space-x-reverse shrink-0">
          <div className="hidden sm:block text-left">
            <span className="block text-[10px] text-[#686B63]">قیمت نهایی:</span>
            <span className="text-base font-extrabold text-[#35483B]">
              {product.priceFormatted} <span className="text-xs font-normal">{product.currency}</span>
            </span>
          </div>

          <button
            onClick={addToCart}
            className="px-5 sm:px-8 py-2.5 sm:py-3 bg-[#35483B] hover:bg-[#243329] text-[#FFFFFF] text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all active:scale-[0.98] flex items-center gap-1.5 min-h-[44px] shrink-0"
          >
            <span>{isAdded ? "مشاهده سبد" : "خرید سریع"}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};
