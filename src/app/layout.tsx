import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nordic Hearth | اجاق چوب‌سوزی سوئدی با طراحی اسکاندیناوی",
  description:
    "اجاق چوب‌سوزی با طراحی اصیل اسکاندیناوی، گرمادهی بهینه، ساختار بادوام و ظاهر مدرن برای خانه‌های ایرانی.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F2] text-[#252724] font-sans selection:bg-[#B69A74]/30 selection:text-[#243329]">
        {children}
      </body>
    </html>
  );
}
