export class Sidebar {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
    this.translations = null;
    this.isOpen = false;
    this.expandedSections = new Set(); // เก็บ section ที่เปิดอยู่
    this.activeSection = null; // เก็บ section ที่กำลัง active อยู่
  }

  async init() {
    const { translations } = await import("../data/translations.js");
    this.translations = translations;
    this.render();
    this.bindEvents();
    this.updateActiveSidebar();
  }

  async updateLanguage() {
    this.currentLang = localStorage.getItem("language") || "th";
    const { translations } = await import("../data/translations.js");
    this.translations = translations;
    this.render();
    this.bindEvents();
    this.updateActiveSidebar();
  }

  render() {
    const sidebar = document.querySelector("#sidebar");
    if (!sidebar) return;

    sidebar.innerHTML = `
      <!-- Sidebar overlay for mobile -->
      <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${
        this.isOpen ? "" : "hidden"
      }"></div>
      
      <!-- Sidebar -->
      <div id="sidebar-content" class="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
        this.isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:w-64">
        <div class="p-4 pt-20 lg:pt-4">
          <h3 class="text-lg font-semibold mb-4">${
            this.translations[this.currentLang].sidebar.menu
          }</h3>
          
          <nav class="space-y-1">
            <!-- Home Section -->
            <div class="sidebar-section">
              <a href="#home" class="sidebar-link flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" data-section="home">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                ${this.translations[this.currentLang].nav.home}
              </a>
            </div>

            <!-- About Section with Nested Subsections -->
            <div class="sidebar-section">
              <div class="sidebar-parent-item">
                <button class="sidebar-toggle w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" data-section="about">
                  <span class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    ${this.translations[this.currentLang].nav.about}
                  </span>
                  <svg class="w-4 h-4 transform transition-transform sidebar-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <!-- Parent level link -->
                <a href="#about" class="sidebar-parent-link block px-4 py-1 text-sm text-green-600 hover:bg-green-50 transition-colors ml-12 -mt-1" data-parent="about">
                  ${this.translations[this.currentLang].sidebar.overview}
                </a>
              </div>
              
              <div class="sidebar-submenu ml-6 mt-1 space-y-1 hidden" data-submenu="about">
                <!-- Company Info -->
                <div class="sidebar-nested-section">
                  <button class="sidebar-nested-toggle w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors" data-nested="about-company">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      ${this.translations[this.currentLang].sidebar.company}
                    </span>
                    <svg class="w-3 h-3 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  
                  <div class="sidebar-nested-submenu ml-6 mt-1 space-y-1 hidden" data-nested-submenu="about-company">
                    <a href="#about/company" class="sidebar-sublink block px-4 py-1 text-xs text-gray-500 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                      ${this.translations[this.currentLang].sidebar.companyInfo}
                    </a>
                    <a href="#about/history" class="sidebar-sublink block px-4 py-1 text-xs text-gray-500 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                      ${this.translations[this.currentLang].sidebar.history}
                    </a>
                  </div>
                </div>

                <!-- People -->
                <div class="sidebar-nested-section">
                  <button class="sidebar-nested-toggle w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors" data-nested="about-people">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                      ${this.translations[this.currentLang].sidebar.people}
                    </span>
                    <svg class="w-3 h-3 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  
                  <div class="sidebar-nested-submenu ml-6 mt-1 space-y-1 hidden" data-nested-submenu="about-people">
                    <a href="#about/leader" class="sidebar-sublink block px-4 py-1 text-xs text-gray-500 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                      ${this.translations[this.currentLang].sidebar.leadership}
                    </a>
                    <a href="#about/people" class="sidebar-sublink block px-4 py-1 text-xs text-gray-500 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                      ${this.translations[this.currentLang].sidebar.allPeople}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Services Section with Nested Subsections -->
            <div class="sidebar-section">
              <div class="sidebar-parent-item">
                <button class="sidebar-toggle w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" data-section="services">
                  <span class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                    ${this.translations[this.currentLang].nav.services}
                  </span>
                  <svg class="w-4 h-4 transform transition-transform sidebar-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <a href="#services" class="sidebar-parent-link block px-4 py-1 text-sm text-green-600 hover:bg-green-50 transition-colors ml-12 -mt-1" data-parent="services">
                  ${this.translations[this.currentLang].sidebar.overview}
                </a>
              </div>
              
              <div class="sidebar-submenu ml-6 mt-1 space-y-1 hidden" data-submenu="services">
                <a href="#services/web" class="sidebar-sublink block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                    ${this.translations[this.currentLang].sidebar.webDev}
                  </span>
                </a>
                
                <a href="#services/mobile" class="sidebar-sublink block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"></path>
                    </svg>
                    ${this.translations[this.currentLang].sidebar.mobileDev}
                  </span>
                </a>
                
                <a href="#services/consulting" class="sidebar-sublink block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                    ${this.translations[this.currentLang].sidebar.consulting}
                  </span>
                </a>
                
                <a href="#services/design" class="sidebar-sublink block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                    </svg>
                    ${this.translations[this.currentLang].sidebar.uiuxDesign}
                  </span>
                </a>
              </div>
            </div>

            <!-- Contact Section -->
            <div class="sidebar-section">
              <a href="#contact" class="sidebar-link flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" data-section="contact">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                ${this.translations[this.currentLang].nav.contact}
              </a>
            </div>
          </nav>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Toggle main sections
    document.querySelectorAll(".sidebar-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const section = e.currentTarget.getAttribute("data-section");
        this.toggleSection(section);
      });
    });

    // Toggle nested sections
    document.querySelectorAll(".sidebar-nested-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const nested = e.currentTarget.getAttribute("data-nested");
        this.toggleNestedSection(nested);
      });
    });

    // Close sidebar on overlay click (mobile)
    document
      .getElementById("sidebar-overlay")
      ?.addEventListener("click", () => {
        this.closeSidebar();
      });

    // Handle navigation clicks
    document
      .querySelectorAll(".sidebar-link, .sidebar-sublink, .sidebar-parent-link")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = e.currentTarget.getAttribute("href");
          if (href && href !== "#") {
            window.location.hash = href;

            // Close sidebar on mobile after navigation
            if (window.innerWidth < 1024) {
              this.closeSidebar();
            }
          }
        });
      });
  }

  toggleSection(section) {
    const submenu = document.querySelector(`[data-submenu="${section}"]`);
    const arrow = document.querySelector(
      `[data-section="${section}"] .sidebar-arrow`
    );
    const toggleButton = document.querySelector(`[data-section="${section}"]`);

    if (submenu && arrow && toggleButton) {
      const isHidden = submenu.classList.contains("hidden");

      // ถ้ากดที่หัวข้อใหม่ ให้ปิดหัวข้อเก่าและรีเซ็ต active state
      if (this.activeSection && this.activeSection !== section) {
        this.collapseSection(this.activeSection);
        this.removeActiveSectionState();
      }

      if (isHidden) {
        // เปิดเมนู
        submenu.classList.remove("hidden");
        arrow.classList.add("rotate-90");
        toggleButton.classList.add("bg-green-100", "text-green-700");
        this.expandedSections.add(section);
        this.activeSection = section;
      } else {
        // ปิดเมนู
        submenu.classList.add("hidden");
        arrow.classList.remove("rotate-90");
        toggleButton.classList.remove("bg-green-100", "text-green-700");
        this.expandedSections.delete(section);
        this.activeSection = null;

        // ปิด nested sections ทั้งหมด
        submenu
          .querySelectorAll(".sidebar-nested-submenu")
          .forEach((nestedSubmenu) => {
            nestedSubmenu.classList.add("hidden");
          });
        submenu
          .querySelectorAll(".sidebar-nested-toggle svg:last-child")
          .forEach((nestedArrow) => {
            nestedArrow.classList.remove("rotate-90");
          });
        submenu
          .querySelectorAll(".sidebar-nested-toggle")
          .forEach((nestedToggle) => {
            nestedToggle.classList.remove("bg-green-100", "text-green-700");
          });
      }
    }
  }

  collapseSection(section) {
    const submenu = document.querySelector(`[data-submenu="${section}"]`);
    const arrow = document.querySelector(
      `[data-section="${section}"] .sidebar-arrow`
    );
    const toggleButton = document.querySelector(`[data-section="${section}"]`);

    if (submenu && arrow && toggleButton) {
      submenu.classList.add("hidden");
      arrow.classList.remove("rotate-90");
      toggleButton.classList.remove("bg-green-100", "text-green-700");
      this.expandedSections.delete(section);

      // ปิด nested sections ทั้งหมด
      submenu
        .querySelectorAll(".sidebar-nested-submenu")
        .forEach((nestedSubmenu) => {
          nestedSubmenu.classList.add("hidden");
        });
      submenu
        .querySelectorAll(".sidebar-nested-toggle svg:last-child")
        .forEach((nestedArrow) => {
          nestedArrow.classList.remove("rotate-90");
        });
      submenu
        .querySelectorAll(".sidebar-nested-toggle")
        .forEach((nestedToggle) => {
          nestedToggle.classList.remove("bg-green-100", "text-green-700");
        });
    }
  }

  removeActiveSectionState() {
    // ลบ active state จากทุก toggle button
    document
      .querySelectorAll(".sidebar-toggle, .sidebar-nested-toggle")
      .forEach((toggle) => {
        toggle.classList.remove("bg-green-100", "text-green-700");
      });
  }

  toggleNestedSection(nested) {
    const submenu = document.querySelector(`[data-nested-submenu="${nested}"]`);
    const arrow = document.querySelector(
      `[data-nested="${nested}"] svg:last-child`
    );
    const toggleButton = document.querySelector(`[data-nested="${nested}"]`);

    if (submenu && arrow && toggleButton) {
      const isHidden = submenu.classList.contains("hidden");

      if (isHidden) {
        submenu.classList.remove("hidden");
        arrow.classList.add("rotate-90");
        toggleButton.classList.add("bg-green-100", "text-green-700");
      } else {
        submenu.classList.add("hidden");
        arrow.classList.remove("rotate-90");
        toggleButton.classList.remove("bg-green-100", "text-green-700");
      }
    }
  }

  updateActiveSidebar() {
    const currentHash = window.location.hash || "#home";

    // Remove all active states
    document
      .querySelectorAll(".sidebar-link, .sidebar-sublink, .sidebar-parent-link")
      .forEach((link) => {
        link.classList.remove(
          "bg-green-100",
          "text-green-600",
          "border-r-4",
          "border-green-600",
          "font-medium"
        );
      });

    // Add active state to current page
    const activeLink = document.querySelector(`[href="${currentHash}"]`);
    if (activeLink) {
      activeLink.classList.add(
        "bg-green-100",
        "text-green-600",
        "border-r-4",
        "border-green-600",
        "font-medium"
      );

      // Expand parent sections automatically
      this.expandParentSections(currentHash);
    }
  }

  expandParentSections(hash) {
    const parts = hash.replace("#", "").split("/");

    if (parts.length > 1) {
      const mainSection = parts[0]; // 'about' or 'services'

      // Expand main section และเซ็ต active state
      const submenu = document.querySelector(`[data-submenu="${mainSection}"]`);
      const arrow = document.querySelector(
        `[data-section="${mainSection}"] .sidebar-arrow`
      );
      const toggleButton = document.querySelector(
        `[data-section="${mainSection}"]`
      );

      if (submenu && arrow && toggleButton) {
        submenu.classList.remove("hidden");
        arrow.classList.add("rotate-90");
        toggleButton.classList.add("bg-green-100", "text-green-700");
        this.expandedSections.add(mainSection);
        this.activeSection = mainSection;
      }

      // If it's a deeply nested route, expand nested sections too
      if (
        parts.length > 2 ||
        (parts.length === 2 && this.hasNestedSection(hash))
      ) {
        const nestedSection = `${mainSection}-${this.getNestedSectionName(
          parts[1]
        )}`;
        const nestedSubmenu = document.querySelector(
          `[data-nested-submenu="${nestedSection}"]`
        );
        const nestedArrow = document.querySelector(
          `[data-nested="${nestedSection}"] svg:last-child`
        );
        const nestedToggleButton = document.querySelector(
          `[data-nested="${nestedSection}"]`
        );

        if (nestedSubmenu && nestedArrow && nestedToggleButton) {
          nestedSubmenu.classList.remove("hidden");
          nestedArrow.classList.add("rotate-90");
          nestedToggleButton.classList.add("bg-green-100", "text-green-700");
        }
      }
    }
  }

  hasNestedSection(hash) {
    const nestedRoutes = [
      "#about/company",
      "#about/history",
      "#about/leader",
      "#about/people",
    ];
    return nestedRoutes.includes(hash);
  }

  getNestedSectionName(segment) {
    const mapping = {
      company: "company",
      history: "company",
      leader: "people",
      people: "people",
    };
    return mapping[segment] || segment;
  }

  openSidebar() {
    this.isOpen = true;
    document.getElementById("sidebar-overlay")?.classList.remove("hidden");
    document
      .getElementById("sidebar-content")
      ?.classList.remove("-translate-x-full");
  }

  closeSidebar() {
    this.isOpen = false;
    document.getElementById("sidebar-overlay")?.classList.add("hidden");
    document
      .getElementById("sidebar-content")
      ?.classList.add("-translate-x-full");
  }

  toggleSidebar() {
    if (this.isOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }
}
