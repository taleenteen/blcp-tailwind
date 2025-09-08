import { html } from "../utils/template.js";
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

    navbar.innerHTML = html`
      <nav
        class="bg-surface-primary shadow-lg fixed top-0 right-0 left-0 lg:left-64 z-40"
      >
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <!-- <div
                class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2"
              >
                <span class="text-white font-bold text-sm">ABC</span>
              </div>
              <span class="ml-2 text-xl font-bold"
                >${this.translations[this.currentLang].company}</span
              > -->
              <!-- ใช้หลายคลาสร่วมกัน -->
              <button
                class="btn-cta-secondary flex items-center ml-4 space-x-2 p-1 px-1.5"
              >
                <div
                  class="bg-white size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10 flex items-center justify-center min-w-[38px] min-h-[36px]"
                >
                  <i class="fas fa-file-lines text-xl"></i>
                </div>
                <div class="text-left">
                  <p class="font-bold text-base leading-none tracking-normal">
                    ${this.currentLang === "th" ? "แบบฟอร์มร้องเรียน" : "Form"}
                  </p>
                  <p class="font-bold text-base leading-none tracking-normal">
                    081-000-7362
                  </p>
                </div>
              </button>

              <button
                class="btn-cta-secondary flex items-center ml-4 space-x-2 p-1 px-1.5"
              >
                <div
                  class="bg-white size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10 flex items-center justify-center min-w-[38px] min-h-[36px]"
                >
                  <i class="fas fa-file-lines text-xl"></i>
                </div>
                <div class="text-left">
                  <p class="font-bold text-base leading-none tracking-normal">
                    ${this.currentLang === "th" ? "ร่วมงานกับเรา" : "Career"}
                  </p>
                  <p class="font-bold text-base leading-none tracking-normal">
                    081-000-7362
                  </p>
                </div>
              </button>

              <button
                class="btn-cta flex items-center ml-4 space-x-2 p-1 px-1.5"
              >
                <div
                  class="bg-white size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10 flex items-center justify-center min-w-[38px] min-h-[36px]"
                >
                  <i class="fas fa-file-lines text-xl"></i>
                </div>
                <div class="text-left">
                  <p class="font-bold text-base leading-none tracking-normal">
                    ${this.currentLang === "th"
                      ? "ติดต่อโรงไฟฟ้าบีแอลซีพี"
                      : "Contact BCP Power Plant"}
                  </p>
                  <p class="font-bold text-base leading-none tracking-normal">
                    038-925100
                  </p>
                </div>
              </button>
            </div>

            <div class="hidden md:flex gap-3">
              <img src="../src/assets/nav/nav_logo.png" class="h-10" />

              <button
                class="btn-primary flex justify-center items-center p-1 px-1.5 rounded-3xl w-12"
              >
                <h1 class="text-surface-primary font-bold text-2xl">EN</h1>
              </button>
              <div class="bg-white h-10 w-0.5"></div>
              <button
                class="btn-primary flex justify-center items-center p-1 px-1.5 rounded-3xl w-12"
              >
                <h1 class="text-surface-primary font-bold text-2xl">TH</h1>
              </button>
            </div>

            <!-- <div class="hidden md:flex space-x-8">
              <a
                href="#home"
                class="nav-link text-gray-700 hover:text-blue-600 transition-colors"
                data-key="home"
              >
                ${this.translations[this.currentLang].nav.home}
              </a>
              <a
                href="#about"
                class="nav-link text-gray-700 hover:text-blue-600 transition-colors"
                data-key="about"
              >
                ${this.translations[this.currentLang].nav.about}
              </a>
              <a
                href="#services"
                class="nav-link text-gray-700 hover:text-blue-600 transition-colors"
                data-key="services"
              >
                ${this.translations[this.currentLang].nav.services}
              </a>
              <a
                href="#contact"
                class="nav-link text-gray-700 hover:text-blue-600 transition-colors"
                data-key="contact"
              >
                ${this.translations[this.currentLang].nav.contact}
              </a>
            </div> -->

            <div class="flex items-center space-x-4">
              <button
                id="lang-toggle"
                class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                ${this.currentLang.toUpperCase()}
              </button>
              <button id="mobile-menu-btn" class="md:hidden flex-shrink-0">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="hidden md:hidden py-4">
            <a
              href="#home"
              class="block py-2 text-gray-700 hover:text-blue-600"
              data-key="home"
            >
              ${this.translations[this.currentLang].nav.home}
            </a>
            <a
              href="#about"
              class="block py-2 text-gray-700 hover:text-blue-600"
              data-key="about"
            >
              ${this.translations[this.currentLang].nav.about}
            </a>
            <a
              href="#services"
              class="block py-2 text-gray-700 hover:text-blue-600"
              data-key="services"
            >
              ${this.translations[this.currentLang].nav.services}
            </a>
            <a
              href="#contact"
              class="block py-2 text-gray-700 hover:text-blue-600"
              data-key="contact"
            >
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
