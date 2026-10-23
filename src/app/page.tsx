"use client";

import { CartProvider } from "@/context/CartContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProductDetailsSection } from "@/components/ProductDetailsSection";
import { HomeLifestyleSection } from "@/components/HomeLifestyleSection";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FooterSection } from "@/components/FooterSection";
import { CartDrawer } from "@/components/CartDrawer";
import { StickyPurchaseBar } from "@/components/StickyPurchaseBar";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#252724] font-sans antialiased selection:bg-[#B69A74]/30 selection:text-[#243329] overflow-x-hidden">
        {/* Section 1: Navigation Header */}
        <Navigation />

        <main className="flex-grow">
          {/* Section 2: Editorial Hero */}
          <HeroSection />

          {/* Section 3: Essential Benefits */}
          <BenefitsSection />

          {/* Section 4: Product Showcase & Purchase Panel */}
          <ProductShowcase />

          {/* Section 5: Product Details & Engineering Highlights */}
          <ProductDetailsSection />

          {/* Section 6: Product in a Real Home */}
          <HomeLifestyleSection />

          {/* Section 7: Technical Specifications */}
          <SpecificationsSection />

          {/* Section 8: FAQ Accordion */}
          <FAQSection />

          {/* Section 9: Final Purchase CTA */}
          <FinalCTASection />
        </main>

        {/* Section 10: Footer */}
        <FooterSection />

        {/* Floating Controls */}
        <CartDrawer />
        <StickyPurchaseBar />
      </div>
    </CartProvider>
  );
}
