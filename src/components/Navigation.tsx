"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export const Navigation: React.FC = () => {
  const { setIsCartOpen, isAdded } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "معرفی محصول", href: "#hero" },
    { name: "ویژگی‌های اصلی", href: "#benefits" },
    { name: "خرید و مشخصات", href: "#product-showcase" },
    { name: "جزئیات طراحی", href: "#design-details" },
    { name: "مشخصات فنی", href: "#specifications" },
    { name: "سوالات متداول", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F7F2]/90 backdrop-blur-md border-b border-[#D8D8D0]/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a
          href="#hero"
          className="flex items-center space-x-3 space-x-reverse group focus:outline-none focus:ring-2 focus:ring-[#35483B] rounded-md"
        >
          <div className="w-9 h-9 rounded-lg bg-[#35483B] flex items-center justify-center text-[#F8F7F2] font-serif font-bold text-lg group-hover:bg-[#243329] transition-colors">
            NH
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#252724] tracking-tight leading-none">
              NORDIC HEARTH
            </span>
            <span className="text-[10px] text-[#686B63] tracking-wider mt-0.5 font-medium">
              SWEDISH WOOD STOVES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 space-x-reverse text-sm font-medium text-[#252724]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#B69A74] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#B69A74] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center space-x-3 space-x-reverse">
          {/* Cart Icon Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-lg border border-[#D8D8D0] bg-[#FFFFFF] hover:bg-[#F0EEE5] text-[#252724] transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="سبد خرید"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {isAdded && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#35483B] rounded-full border-2 border-white animate-pulse" />
            )}
          </button>

          {/* Direct Buy CTA on desktop */}
          <a
            href="#product-showcase"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 bg-[#35483B] text-[#FFFFFF] text-xs font-semibold rounded-lg hover:bg-[#243329] transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[44px]"
          >
            مشاهده قیمت و خرید
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg border border-[#D8D8D0] bg-[#FFFFFF] text-[#252724] hover:bg-[#F0EEE5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#35483B] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="منو"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D8D8D0] bg-[#F8F7F2] px-5 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#252724] border-b border-[#D8D8D0]/40 last:border-0 hover:text-[#B69A74]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#product-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-[#35483B] text-white font-bold rounded-lg mt-2 text-sm"
          >
            مشاهده مشخصات و ثبت سفارش
          </a>
        </div>
      )}
    </header>
  );
};
