"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, product, quantity, setQuantity, removeFromCart, totalPriceFormatted, isAdded } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setOrderSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-right" dir="rtl">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#F8F7F2] border-r border-[#D8D8D0] shadow-2xl flex flex-col justify-between">

          {/* Header */}
          <div className="p-6 border-b border-[#D8D8D0] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center space-x-3 space-x-reverse">
              <span className="w-3 h-3 rounded-full bg-[#35483B]"></span>
              <h2 className="text-xl font-bold text-[#252724]">سبد خرید شما</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-[#686B63] hover:text-[#252724] hover:bg-[#F0EEE5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B]"
              aria-label="بستن سبد خرید"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#35483B]/10 text-[#35483B] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#252724]">سفارش آزمایشی ثبت شد</h3>
                <p className="text-[#686B63] text-sm leading-relaxed max-w-xs mx-auto">
                  این یک نمونه عملکردی دمو است. پس از اتصال سامانه پرداخت واقعی، سفارش شما به‌صورت نهایی پردازش خواهد شد.
                </p>
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    setIsCartOpen(false);
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#35483B] text-[#FFFFFF] rounded-lg text-sm font-medium hover:bg-[#243329] transition-colors"
                >
                  بازگشت به صفحه اصلی
                </button>
              </div>
            ) : !isAdded ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F0EEE5] text-[#686B63] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-[#686B63] text-base">سبد خرید شما در حال حاضر خالی است.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#35483B] text-[#FFFFFF] rounded-lg text-sm font-medium hover:bg-[#243329] transition-colors"
                >
                  مشاهده و خرید محصول
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#D8D8D0] flex gap-4 items-center">
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    className="w-20 h-20 object-cover rounded-lg bg-[#F0EEE5]"
                  />
                  <div className="flex-1 space-y-1">
                    <span className="text-xs text-[#B69A74] font-medium">{product.brandName}</span>
                    <h4 className="text-base font-bold text-[#252724]">{product.modelName}</h4>
                    <p className="text-sm font-semibold text-[#35483B]">{product.priceFormatted} {product.currency}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#D8D8D0] rounded-md bg-[#F8F7F2]">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-2 py-1 text-[#252724] hover:bg-[#E3D8C5] transition-colors text-sm rounded-r-md"
                          aria-label="کاهش تعداد"
                        >
                          -
                        </button>
                        <span className="px-3 text-sm font-semibold">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-2 py-1 text-[#252724] hover:bg-[#E3D8C5] transition-colors text-sm rounded-l-md"
                          aria-label="افزایش تعداد"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={removeFromCart}
                        className="text-xs text-[#B33B32] hover:underline"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className="bg-[#FFFFFF] p-5 rounded-xl border border-[#D8D8D0] space-y-4">
                  <h3 className="text-sm font-bold text-[#252724] border-b border-[#D8D8D0] pb-2">اطلاعات خریدار (دمو)</h3>
                  <div>
                    <label className="block text-xs text-[#686B63] mb-1">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: علی رضایی"
                      className="w-full px-3 py-2 text-sm border border-[#D8D8D0] rounded-lg focus:outline-none focus:border-[#35483B] bg-[#F8F7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686B63] mb-1">شماره تماس</label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲..."
                      className="w-full px-3 py-2 text-sm border border-[#D8D8D0] rounded-lg focus:outline-none focus:border-[#35483B] bg-[#F8F7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#686B63] mb-1">شهر و آدرس تحویل</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="آدرس دقیق برای هماهنگی ارسال..."
                      className="w-full px-3 py-2 text-sm border border-[#D8D8D0] rounded-lg focus:outline-none focus:border-[#35483B] bg-[#F8F7F2]"
                    />
                  </div>

                  <div className="pt-2 border-t border-[#D8D8D0] space-y-2">
                    <div className="flex justify-between text-sm text-[#686B63]">
                      <span>قیمت واحد:</span>
                      <span>{product.priceFormatted} {product.currency}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#686B63]">
                      <span>ارسال باربری:</span>
                      <span className="text-[#35483B] font-medium">رایگان</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#252724] pt-2 border-t border-[#D8D8D0]">
                      <span>جمع کل:</span>
                      <span className="text-[#35483B]">{totalPriceFormatted} {product.currency}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isOrdering}
                    className="w-full py-3.5 bg-[#35483B] text-[#FFFFFF] font-bold rounded-lg hover:bg-[#243329] active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50 min-h-[48px]"
                  >
                    {isOrdering ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>ثبت و تکمیل سفارش دمو</span>
                        <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#F0EEE5] border-t border-[#D8D8D0] text-center text-xs text-[#686B63]">
            دارای ضمانت اصالت فیزیکی، تحویل ایمن با پالت چوبی و پشتیبانی فنی.
          </div>
        </div>
      </div>
    </div>
  );
};
