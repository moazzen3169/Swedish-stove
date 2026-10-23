export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export interface TechnicalSpec {
  category: string;
  items: {
    label: string;
    value: string;
    unit?: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProductData {
  id: string;
  brandName: string;
  brandTitleFa: string;
  modelName: string;
  modelCode: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  priceFormatted: string;
  priceNumber: number;
  currency: string;
  availability: string;
  deliveryEstimate: string;
  warrantyYears: number;
  origin: string;
  heatingArea: string;
  efficiencyRate: string;
  images: ProductImage[];
  benefits: Benefit[];
  details: {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    highlights: string[];
  }[];
  specifications: TechnicalSpec[];
  faq: FAQItem[];
}

export const CURRENT_PRODUCT: ProductData = {
  id: "nordic-hearth-k700",
  brandName: "Nordic Hearth",
  brandTitleFa: "نوردیک هارت",
  modelName: "کامین مدل K-700",
  modelCode: "NH-K700-OAK",
  tagline: "طراحی اسکاندیناوی، بازدهی انرژی فوق‌العاده و گرمای دلنشین چوب طبیعی",
  heroHeadline: "گرمای خانه، با الهام از طبیعت",
  heroSubheadline: "اجاق چوب‌سوزی با طراحی اصیل سوئدی، ساخته شده برای ایجاد فضایی گرم، آرامش‌بخش و متمایز در قلب خانه شما.",
  priceFormatted: "۶۸,۵۰۰,۰۰۰",
  priceNumber: 68500000,
  currency: "تومان",
  availability: "موجود در انبار (تحویل ۳ تا ۵ روز کاری)",
  deliveryEstimate: "ارسال رایگان و ایمن به تمام نقاط کشور",
  warrantyYears: 5,
  origin: "طراحی و مهندسی سوئد",
  heatingArea: "تا ۱۲۰ متر مربع",
  efficiencyRate: "۸۲٪ بازده حرارتی",
  images: [
    {
      id: "img-hero",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=1200",
      alt: "اجاق چوب‌سوزی سوئدی در سالن پذیرایی مدرن و روشن با کفپوش چوب بلوط",
      caption: "نمای اصلی اجاق در دکوراسیون اسکاندیناوی",
    },
    {
      id: "img-flame-detail",
      url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=85&w=1200",
      alt: "شعله‌های پرحرارت درون شیشه سرامیکی مقاوم اجاق چوب‌سوزی",
      caption: "دید پانوراما از شعله‌های آتش با سیستم پاکسازی خودکار شیشه",
    },
    {
      id: "img-living-room",
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1200",
      alt: "چیدمان مدرن اتاق نشیمن با حس و حال مینیمال و طبیعی",
      caption: "سازگاری کامل با معماری داخلی مدرن و روستیک",
    },
    {
      id: "img-wood-stack",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=85&w=1200",
      alt: "محل ذخیره هیزم در محفظه زیرین اجاق با چوب‌های کنده شده",
      caption: "محفظه اختصاصی نگهدارنده هیزم با دسترسی آسان",
    },
  ],
  benefits: [
    {
      id: "b1",
      title: "بازدهی انرژی ۸۲٪",
      subtitle: "کاهش مصرف هیزم",
      description: "سیستم احتراق دوگانه (Clean-Burn) سوخت کامل چوب را تضمین کرده و دود و خاکستر را به حداقل ممکن می‌رساند.",
      iconName: "flame",
    },
    {
      id: "b2",
      title: "بدنه چدن سنگین و فولاد ۴ میلی‌متری",
      subtitle: "دوام نسل به نسل",
      description: "ساختار مقاوم در برابر شوک حرارتی شدید که گرمای ماندگار را حتی ساعت‌ها پس از خاموش شدن آتش حفظ می‌کند.",
      iconName: "shield",
    },
    {
      id: "b3",
      title: "شیشه سرامیکی آلمانی Schott Robax",
      subtitle: "دید شفاف بدون دودزدگی",
      description: "سیستم جریان هوای پرده‌ای (Airwash) مانع از نشستن دوده روی شیشه شده و همواره شعله‌ای روشن را نمایش می‌دهد.",
      iconName: "eye",
    },
  ],
  details: [
    {
      title: "مهندسی احتراق پاک پاکیزه",
      subtitle: "طراحی دوستدار محیط زیست و کم‌مصرف",
      description: "در سیستم پیشرفته احتراق سوئدی، هوای ثانویه پیش‌گرم شده از بالای محفظه وارد می‌شود تا گازهای باقی‌مانده از سوختن چوب را مجدداً بسوزاند. این فرآیند باعث افزایش توان گرمایشی و انتشار ناچیز آلاینده‌ها می‌شود.",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=1000",
      highlights: [
        "کاهش ۵۰ درصدی مصرف هیزم نسبت به شومینه‌های سنتی",
        "تأییدیه استانداردهای زیست‌محیطی اروپا (EcoDesign 2022)",
        "خاکستر بسیار کم و تخلیه آسان با سینی مخصوص",
      ],
    },
    {
      title: "هارمونی کامل با معماری داخلی",
      subtitle: "مینیمالیسم شمال اروپا در خانه شما",
      description: "خطوط مستقیم، زوایای دقیق و پوشش رنگ کوره‌ای مات نسوز با ظاهری فاقد پیچیدگی‌های زاید، اجاق K-700 را به نقطه عطفی در طراحی دکوراسیون منزل شما تبدیل می‌کند.",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1000",
      highlights: [
        "پوشش دستگیره خنک و ایمن لمسی (Cool-Touch)",
        "قابلیت نصب به عنوان اجاق ایستاده یا در مجاورت دیوار",
        "محفظه پایین جهت خشک نگاه داشتن هیزم‌ها",
      ],
    },
  ],
  specifications: [
    {
      category: "ابعاد و وزن",
      items: [
        { label: "ارتفاع", value: "۸۵۰", unit: "میلی‌متر" },
        { label: "عرض", value: "۵۲۰", unit: "میلی‌متر" },
        { label: "عمق", value: "۴۲۰", unit: "میلی‌متر" },
        { label: "وزن کل", value: "۱۱۵", unit: "کیلوگرم" },
        { label: "حداکثر طول کنده‌چوب", value: "۳۵", unit: "سانتی‌متر" },
      ],
    },
    {
      category: "عملکرد حرارتی",
      items: [
        { label: "توان حرارتی نامی", value: "۷.۵", unit: "کیلووات" },
        { label: "محدوده گرمادهی", value: "۴ تا ۱۰", unit: "کیلووات" },
        { label: "فضای پوشش‌دهی", value: "۶۰ تا ۱۲۰", unit: "متر مربع" },
        { label: "بازده انرژی", value: "۸۲", unit: "درصد" },
        { label: "رده انرژی", value: "A+", unit: "" },
      ],
    },
    {
      category: "مشخصات فنی و نصب",
      items: [
        { label: "قطر خروجی دودکش", value: "۱۵۰", unit: "میلی‌متر" },
        { label: "محل اتصال دودکش", value: "از بالا یا پشت دستگاه", unit: "" },
        { label: "جنس بدنه", value: "فولاد آلیاژی ۴mm و چدن نسوز", unit: "" },
        { label: "نوع سوخت", value: "چوب خشک (رطوبت کمتر از ۲۰٪)", unit: "" },
        { label: "ضمانت‌نامه رسمی", value: "۵ سال گارانتی بدنه و قطعات اصلی", unit: "" },
      ],
    },
  ],
  faq: [
    {
      id: "faq-1",
      question: "آیا این اجاق برای آپارتمان‌ها مناسب است یا فقط خانه ویلایی؟",
      answer: "اجاق K-700 به شرط وجود یا امکان تعبیه دودکش استاندارد با قطر ۱۵ سانتی‌متر و هدایت آن به پشت‌بام، در کلیه منازل ویلایی، آپارتمان‌های طبقه آخر، دوبلکس‌ها و باغ‌ویلاها قابل نصب و استفاده ایمن است.",
    },
    {
      id: "faq-2",
      question: "شرایط نصب و نحوه اتصال دودکش به چه صورت است؟",
      answer: "دستگاه دارای دو خروجی مجزا در قسمت بالا و پشت است تا متناسب با طراحی دیوار منزل شما متصل شود. تیم کارشناسی پس از ثبت سفارش، خریدار را جهت استانداردسازی خروجی دودکش راهنمایی خواهد کرد.",
    },
    {
      id: "faq-3",
      question: "ارسال به شهرستان‌ها چگونه انجام می‌شود و چقدر زمان می‌برد؟",
      answer: "محصول در بسته‌بندی چوبی ایمن پالت‌شده با باربری اختصاصی ارسال می‌گردد. زمان تحویل در تهران و مراکز استان‌ها ۳ روز کاری و سایر نقاط بین ۴ تا ۵ روز کاری خواهد بود.",
    },
    {
      id: "faq-4",
      question: "گارانتی و خدمات پس از فروش شامل چه مواردی می‌شود؟",
      answer: "این محصول دارای ۵ سال گارانتی رسمی بدنه چدنی و فولادی، و ۱۰ سال تأمین قطعات یدکی مانند شیشه سرامیکی، واشرهای نسوز نسوز و سینی خاکستر است.",
    },
    {
      id: "faq-5",
      question: "چگونه هیزم مناسب برای اجاق تهیه کنیم؟",
      answer: "استفاده از چوب‌های سخت و خشک (مانند چوب گردو، بلوط یا چوب مرکبات با رطوبت کمتر از ۲۰٪) بهترین بازدهی حرارتی و کمترین دود را ایجاد می‌کند. هیزم‌های استاندارد نیز از طریق تامین‌کنندگان همراه دستگاه قابل سفارش است.",
    },
  ],
};
