export class Router {
  constructor() {
    this.routes = {
      // Simple routes
      "#home": () => import("../pages/home.js"),
      "#contact": () => import("../pages/contact.js"),
      "#portfolio": () => import("../pages/portfolio.js"),

      // Nested routes for about
      "#about": () => import("../pages/about/index.js"),
      "#about/company": () => import("../pages/about/company.js"),
      "#about/leader": () => import("../pages/about/leader.js"),
      "#about/people": () => import("../pages/about/people.js"),
      "#about/history": () => import("../pages/about/history.js"),

      // Nested routes for services
      "#services": () => import("../pages/services/index.js"),
      "#services/web": () => import("../pages/services/web.js"),
      "#services/mobile": () => import("../pages/services/mobile.js"),
      "#services/consulting": () => import("../pages/services/consulting.js"),
      "#services/design": () => import("../pages/services/design.js"),
    };

    this.currentPage = null;
    this.breadcrumbData = [];
    this.seoManager = null;
    // ไม่เรียก init() ที่นี่แล้ว
  }

  async init() {
    // Import SEO Manager
    const { SEOManager } = await import("./seo.js");
    this.seoManager = new SEOManager();

    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());

    // Handle initial route immediately if no hash exists
    if (!window.location.hash) {
      window.location.hash = "#home";
    } else {
      // Handle route immediately for refresh cases
      await this.handleRoute();
    }
  }

  async handleRoute() {
    // Ensure we have a hash, default to home if empty
    let hash = window.location.hash;
    if (!hash || hash === "#") {
      hash = "#home";
      // Update URL without triggering hashchange event
      history.replaceState(null, null, "#home");
    }

    const route = this.routes[hash];

    // Generate breadcrumb data
    this.generateBreadcrumb(hash);

    if (route) {
      try {
        const pageModule = await route();
        const PageClass = pageModule.default;

        if (
          this.currentPage &&
          typeof this.currentPage.destroy === "function"
        ) {
          this.currentPage.destroy();
        }

        this.currentPage = new PageClass();
        await this.currentPage.render(this.breadcrumbData);

        // Update SEO for current page
        if (this.seoManager) {
          const routeForSEO = hash.replace("#", "") || "home";
          this.seoManager.updatePageSEO(routeForSEO);
        }

        // Update navbar and sidebar active states
        window.dispatchEvent(
          new CustomEvent("routeChanged", {
            detail: {
              hash,
              breadcrumb: this.breadcrumbData,
            },
          })
        );
      } catch (error) {
        console.error("Error loading page:", error);
        this.showErrorPage();
      }
    } else {
      // Try to find parent route if exact match not found
      const parentRoute = this.findParentRoute(hash);
      if (parentRoute) {
        window.location.hash = parentRoute;
      } else {
        this.showNotFoundPage();
      }
    }
  }

  generateBreadcrumb(hash) {
    const parts = hash.replace("#", "").split("/");
    this.breadcrumbData = [];

    let currentPath = "#";
    for (let i = 0; i < parts.length; i++) {
      currentPath += (i === 0 ? "" : "/") + parts[i];

      const breadcrumbItem = {
        path: currentPath,
        label: this.getBreadcrumbLabel(parts[i], i),
        isLast: i === parts.length - 1,
      };

      this.breadcrumbData.push(breadcrumbItem);
    }
  }

  getBreadcrumbLabel(segment, level) {
    const labels = {
      home: { th: "หน้าหลัก", en: "Home" },
      about: { th: "เกี่ยวกับเรา", en: "About" },
      company: { th: "บริษัท", en: "Company" },
      leader: { th: "ผู้นำ", en: "Leadership" },
      people: { th: "บุคลากร", en: "People" },
      history: { th: "ประวัติ", en: "History" },
      services: { th: "บริการ", en: "Services" },
      web: { th: "เว็บไซต์", en: "Web Development" },
      mobile: { th: "แอพมือถือ", en: "Mobile App" },
      consulting: { th: "ที่ปรึกษา", en: "Consulting" },
      design: { th: "ออกแบบ", en: "Design" },
      contact: { th: "ติดต่อ", en: "Contact" },
    };

    const currentLang = localStorage.getItem("language") || "th";
    return labels[segment]?.[currentLang] || segment;
  }

  findParentRoute(hash) {
    const parts = hash.replace("#", "").split("/");
    while (parts.length > 1) {
      parts.pop();
      const parentHash = "#" + parts.join("/");
      if (this.routes[parentHash]) {
        return parentHash;
      }
    }
    return null;
  }

  showErrorPage() {
    document.querySelector("#main-content").innerHTML = `
      <div class="flex items-center justify-center min-h-64">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-red-600 mb-4">เกิดข้อผิดพลาด</h2>
          <p class="text-gray-600">ไม่สามารถโหลดหน้าได้ กรุณาลองใหม่อีกครั้ง</p>
        </div>
      </div>
    `;
  }

  showNotFoundPage() {
    document.querySelector("#main-content").innerHTML = `
      <div class="flex items-center justify-center min-h-64">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">ไม่พบหน้าที่ต้องการ</h2>
          <p class="text-gray-600 mb-4">หน้าที่คุณกำลังมองหาไม่มีอยู่</p>
          <a href="#home" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            กลับหน้าหลัก
          </a>
        </div>
      </div>
    `;
  }
}
