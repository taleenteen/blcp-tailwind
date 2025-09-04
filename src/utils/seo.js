export class SEOManager {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
  }

  /**
   * อัปเดต Meta Tags สำหรับแต่ละหน้า
   */
  updateMetaTags(pageData) {
    // อัปเดต Title
    this.updateTitle(pageData.title);

    // อัปเดต Description
    this.updateMetaDescription(pageData.description);

    // อัปเดต Keywords
    this.updateMetaKeywords(pageData.keywords);

    // อัปเดต Open Graph
    this.updateOpenGraph(pageData);

    // อัปเดต Canonical URL
    this.updateCanonicalUrl(pageData.canonicalUrl);

    // อัปเดต Schema.org ถ้ามี
    if (pageData.schema) {
      this.updateSchema(pageData.schema);
    }
  }

  updateTitle(title) {
    const suffix =
      this.currentLang === "th"
        ? " | บริษัท ABC จำกัด"
        : " | ABC Company Limited";
    document.title = title + suffix;

    // อัปเดต og:title
    this.updateMetaProperty("og:title", title + suffix);
    this.updateMetaProperty("twitter:title", title + suffix);
  }

  updateMetaDescription(description) {
    this.updateMetaName("description", description);
    this.updateMetaProperty("og:description", description);
    this.updateMetaProperty("twitter:description", description);
  }

  updateMetaKeywords(keywords) {
    if (keywords) {
      this.updateMetaName("keywords", keywords);
    }
  }

  updateOpenGraph(pageData) {
    this.updateMetaProperty("og:url", window.location.href);
    this.updateMetaProperty("og:type", pageData.ogType || "website");

    if (pageData.ogImage) {
      this.updateMetaProperty("og:image", pageData.ogImage);
      this.updateMetaProperty("twitter:image", pageData.ogImage);
    }
  }

  updateCanonicalUrl(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url || window.location.href.split("#")[0];
  }

  updateSchema(schemaData) {
    // ลบ schema เก่า
    const oldSchema = document.querySelector(
      'script[type="application/ld+json"][data-page]'
    );
    if (oldSchema) {
      oldSchema.remove();
    }

    // เพิ่ม schema ใหม่
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "dynamic");
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }

  updateMetaName(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  updateMetaProperty(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /**
   * สร้าง Breadcrumb Schema
   */
  generateBreadcrumbSchema(breadcrumbs) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  /**
   * ข้อมูล SEO สำหรับแต่ละหน้า
   */
  getPageSEOData(route, lang = "th") {
    const baseUrl = window.location.origin;

    const seoData = {
      home: {
        th: {
          title: "หน้าหลัก",
          description:
            "บริษัท ABC จำกัด ผู้เชี่ยวชาญด้านเทคโนโลยี บริการพัฒนาเว็บไซต์ แอพมือถือ ออกแบบ UI/UX และให้คำปรึกษา",
          keywords: "บริษัทเทคโนโลยี, พัฒนาเว็บไซต์, แอพมือถือ, ABC Company",
          canonicalUrl: `${baseUrl}/`,
        },
        en: {
          title: "Home",
          description:
            "ABC Company Limited - Technology experts providing web development, mobile apps, UI/UX design and consulting services",
          keywords:
            "technology company, web development, mobile apps, ABC Company",
          canonicalUrl: `${baseUrl}/en`,
        },
      },
      about: {
        th: {
          title: "เกี่ยวกับเรา",
          description:
            "ทำความรู้จักกับบริษัท ABC จำกัด ประวัติ วิสัยทัศน์ และทีมงานผู้เชี่ยวชาญด้านเทคโนโลยี",
          keywords: "เกี่ยวกับ ABC, ประวัติบริษัท, ทีมงาน, วิสัยทัศน์",
          canonicalUrl: `${baseUrl}/#about`,
        },
        en: {
          title: "About Us",
          description:
            "Learn about ABC Company Limited - our history, vision, and expert technology team",
          keywords: "about ABC, company history, team, vision",
          canonicalUrl: `${baseUrl}/en#about`,
        },
      },
      services: {
        th: {
          title: "บริการของเรา",
          description:
            "บริการครบวงจรด้านเทคโนโลยี พัฒนาเว็บไซต์ แอพมือถือ ออกแบบ UI/UX และให้คำปรึกษา",
          keywords: "บริการเทคโนโลยี, พัฒนาเว็บ, แอพมือถือ, UI/UX, ที่ปรึกษา",
          canonicalUrl: `${baseUrl}/#services`,
        },
        en: {
          title: "Our Services",
          description:
            "Comprehensive technology services: web development, mobile apps, UI/UX design and consulting",
          keywords:
            "technology services, web development, mobile apps, UI/UX, consulting",
          canonicalUrl: `${baseUrl}/en#services`,
        },
      },
      "services/web": {
        th: {
          title: "พัฒนาเว็บไซต์",
          description:
            "บริการพัฒนาเว็บไซต์มืออาชีพ Responsive Design ด้วยเทคโนโลยีล่าสุด React, Vue, Angular",
          keywords:
            "พัฒนาเว็บไซต์, Responsive Design, React, Vue, Angular, Frontend, Backend",
          canonicalUrl: `${baseUrl}/#services/web`,
        },
        en: {
          title: "Web Development",
          description:
            "Professional web development services with responsive design using latest technologies React, Vue, Angular",
          keywords:
            "web development, responsive design, React, Vue, Angular, frontend, backend",
          canonicalUrl: `${baseUrl}/en#services/web`,
        },
      },
      "services/mobile": {
        th: {
          title: "พัฒนาแอพมือถือ",
          description:
            "บริการพัฒนาแอพมือถือ iOS Android และ Cross-platform ด้วย React Native, Flutter",
          keywords:
            "แอพมือถือ, iOS, Android, React Native, Flutter, Mobile App",
          canonicalUrl: `${baseUrl}/#services/mobile`,
        },
        en: {
          title: "Mobile App Development",
          description:
            "Mobile app development for iOS, Android and cross-platform using React Native, Flutter",
          keywords:
            "mobile app, iOS, Android, React Native, Flutter, cross-platform",
          canonicalUrl: `${baseUrl}/en#services/mobile`,
        },
      },
      contact: {
        th: {
          title: "ติดต่อเรา",
          description:
            "ติดต่อบริษัท ABC จำกัด สำหรับข้อมูลเพิ่มเติมและปรึกษาโครงการด้านเทคโนโลยี",
          keywords: "ติดต่อ ABC, ปรึกษาโครงการ, ขอใบเสนอราคา",
          canonicalUrl: `${baseUrl}/#contact`,
        },
        en: {
          title: "Contact Us",
          description:
            "Contact ABC Company Limited for more information and technology project consultation",
          keywords: "contact ABC, project consultation, get quote",
          canonicalUrl: `${baseUrl}/en#contact`,
        },
      },
    };

    return seoData[route]?.[lang] || seoData["home"][lang];
  }

  /**
   * อัปเดต SEO เมื่อเปลี่ยนหน้า
   */
  updatePageSEO(route) {
    const pageData = this.getPageSEOData(route, this.currentLang);
    this.updateMetaTags(pageData);
  }

  /**
   * อัปเดต SEO เมื่อเปลี่ยนภาษา
   */
  updateLanguage(newLang) {
    this.currentLang = newLang;
    // อัปเดต html lang attribute
    document.documentElement.lang = newLang === "th" ? "th" : "en";
  }
}
