export class Navbar {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
    this.translations = null;
  }

  async init() {
    const { translations } = await import("../data/translations.js");
    this.translations = translations;
    this.render();
    this.bindEvents();
  }

  render() {
    const navbar = document.querySelector("#navbar");
    if (!navbar) return;

    navbar.innerHTML = `
      <nav class="bg-white shadow-lg fixed top-0 right-0 left-0 lg:left-64 z-40">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
                <span class="text-white font-bold text-sm">ABC</span>
              </div>
              <span class="ml-2 text-xl font-bold">${
                this.translations[this.currentLang].company
              }</span>
            </div>
            
            <div class="hidden md:flex space-x-8">
              <a href="#home" class="nav-link text-gray-700 hover:text-blue-600 transition-colors" data-key="home">
                ${this.translations[this.currentLang].nav.home}
              </a>
              <a href="#about" class="nav-link text-gray-700 hover:text-blue-600 transition-colors" data-key="about">
                ${this.translations[this.currentLang].nav.about}
              </a>
              <a href="#services" class="nav-link text-gray-700 hover:text-blue-600 transition-colors" data-key="services">
                ${this.translations[this.currentLang].nav.services}
              </a>
              <a href="#contact" class="nav-link text-gray-700 hover:text-blue-600 transition-colors" data-key="contact">
                ${this.translations[this.currentLang].nav.contact}
              </a>
            </div>

            <div class="flex items-center space-x-4">
              <button id="lang-toggle" class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0">
                ${this.currentLang.toUpperCase()}
              </button>
              <button id="mobile-menu-btn" class="md:hidden flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu -->
          <div id="mobile-menu" class="hidden md:hidden py-4">
            <a href="#home" class="block py-2 text-gray-700 hover:text-blue-600" data-key="home">
              ${this.translations[this.currentLang].nav.home}
            </a>
            <a href="#about" class="block py-2 text-gray-700 hover:text-blue-600" data-key="about">
              ${this.translations[this.currentLang].nav.about}
            </a>
            <a href="#services" class="block py-2 text-gray-700 hover:text-blue-600" data-key="services">
              ${this.translations[this.currentLang].nav.services}
            </a>
            <a href="#contact" class="block py-2 text-gray-700 hover:text-blue-600" data-key="contact">
              ${this.translations[this.currentLang].nav.contact}
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  bindEvents() {
    // Language toggle
    document.getElementById("lang-toggle").addEventListener("click", () => {
      this.currentLang = this.currentLang === "th" ? "en" : "th";
      localStorage.setItem("language", this.currentLang);
      window.dispatchEvent(
        new CustomEvent("languageChanged", { detail: this.currentLang })
      );
    });

    // Mobile menu toggle
    document.getElementById("mobile-menu-btn").addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
    });

    // Navigation active state
    this.updateActiveNav();
  }

  updateActiveNav() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentHash = window.location.hash || "#home";

    // Get main section from hash (e.g., #about/company -> #about)
    const mainSection = "#" + currentHash.replace("#", "").split("/")[0];

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-600", "border-b-2", "border-blue-600");
      if (link.getAttribute("href") === mainSection) {
        link.classList.add("text-blue-600", "border-b-2", "border-blue-600");
      }
    });
  }
}
