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
            <div class="hidden lg:flex items-center">
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
                id="lang-en-btn"
                class="btn-primary ${this.currentLang === "en"
                  ? "bg-cta"
                  : "bg-cta-grey"} flex justify-center items-center p-1 px-1.5 rounded-3xl w-12"
              >
                <h1
                  class="${this.currentLang === "en"
                    ? "text-white"
                    : "text-surface-primary"} font-bold text-2xl"
                >
                  EN
                </h1>
              </button>
              <div class="bg-white h-10 w-0.5"></div>
              <button
                id="lang-th-btn"
                class="btn-primary ${this.currentLang === "th"
                  ? "bg-cta"
                  : "bg-cta-grey"} flex justify-center items-center p-1 px-1.5 rounded-3xl w-12"
              >
                <h1
                  class="${this.currentLang === "th"
                    ? "text-white"
                    : "text-surface-primary"} font-bold text-2xl"
                >
                  TH
                </h1>
              </button>
              <!-- Search Box -->
              <div class="flex ml-1">
                <!-- Search Button (collapsed state) -->
                <button
                  id="search-btn"
                  class="btn-primary bg-white text-surface-primary p-1 px-1.5 rounded-3xl w-12 flex justify-center items-center transition-all duration-300 cursor-pointer hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="pointer-events-none"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                    />
                  </svg>
                </button>

                <!-- Search Input (expanded state) -->
                <div id="search-input-container" class="hidden">
                  <div
                    class="flex items-center bg-white rounded-3xl shadow-lg w-[250px] border border-gray-200"
                  >
                    <button
                      id="search-submit-btn"
                      class="p-2 px-3 text-surface-primary hover:bg-gray-50 rounded-l-3xl transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                        />
                      </svg>
                    </button>
                    <input
                      id="search-input"
                      type="text"
                      placeholder="${this.currentLang === "th"
                        ? "ค้นหา..."
                        : "Search..."}"
                      class="w-64 px-4 py-2 rounded-l-3xl border-none outline-none text-surface-primary placeholder-gray-400"
                    />

                    <button
                      id="search-close-btn"
                      class="p-2 px-3 text-gray-400 hover:text-surface-primary hover:bg-gray-50 rounded-r-3xl transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 6L6 18M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden flex-shrink-0 p-2">
              <svg
                class="w-6 h-6 text-white"
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

          <!-- Mobile Menu -->
          <div
            id="mobile-menu"
            class="hidden md:hidden py-4 bg-surface-primary border-t border-gray-200"
          >
            <!-- Mobile Search Box -->
            <div class="px-4 py-3 border-b border-gray-200">
              <div
                class="flex items-center bg-white rounded-3xl shadow-sm border border-gray-200"
              >
                <input
                  id="mobile-search-input"
                  type="text"
                  placeholder="${this.currentLang === "th"
                    ? "ค้นหา..."
                    : "Search..."}"
                  class="flex-1 px-4 py-2 rounded-l-3xl border-none outline-none text-surface-primary placeholder-gray-400"
                />
                <button
                  id="mobile-search-submit-btn"
                  class="p-2 px-3 text-surface-primary hover:bg-gray-50 rounded-r-3xl transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Mobile Language Toggle -->
            <div class="px-4 py-3 border-b border-gray-200">
              <div class="flex gap-2 justify-center">
                <button
                  id="mobile-lang-en-btn"
                  class="btn-primary ${this.currentLang === "en"
                    ? "bg-cta text-white"
                    : "bg-cta-grey text-surface-primary"} flex justify-center items-center p-2 px-4 rounded-3xl"
                >
                  <span class="font-bold text-lg">EN</span>
                </button>
                <button
                  id="mobile-lang-th-btn"
                  class="btn-primary ${this.currentLang === "th"
                    ? "bg-cta text-white"
                    : "bg-cta-grey text-surface-primary"} flex justify-center items-center p-2 px-4 rounded-3xl"
                >
                  <span class="font-bold text-lg">TH</span>
                </button>
              </div>
            </div>

            <!-- Mobile Navigation Links -->
            <a
              href="#home"
              class="block py-3 px-4 text-white hover:bg-gray-600 transition-colors"
              data-key="home"
            >
              ${this.translations[this.currentLang].nav.home}
            </a>
            <a
              href="#about"
              class="block py-3 px-4 text-white hover:bg-gray-600 transition-colors"
              data-key="about"
            >
              ${this.translations[this.currentLang].nav.about}
            </a>
            <a
              href="#services"
              class="block py-3 px-4 text-white hover:bg-gray-600 transition-colors"
              data-key="services"
            >
              ${this.translations[this.currentLang].nav.services}
            </a>
            <a
              href="#contact"
              class="block py-3 px-4 text-white hover:bg-gray-600 transition-colors"
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
    // Language toggle buttons
    const langEnBtn = document.getElementById("lang-en-btn");
    const langThBtn = document.getElementById("lang-th-btn");

    if (langEnBtn) {
      langEnBtn.addEventListener("click", () => {
        this.currentLang = "en";
        localStorage.setItem("language", this.currentLang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", { detail: this.currentLang })
        );
      });
    }

    if (langThBtn) {
      langThBtn.addEventListener("click", () => {
        this.currentLang = "th";
        localStorage.setItem("language", this.currentLang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", { detail: this.currentLang })
        );
      });
    }

    // Mobile menu functionality
    this.bindMobileMenuEvents();

    // Search functionality
    this.bindSearchEvents();

    // Navigation active state
    this.updateActiveNav();
  }

  bindMobileMenuEvents() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Mobile language buttons
    const mobileLangEnBtn = document.getElementById("mobile-lang-en-btn");
    const mobileLangThBtn = document.getElementById("mobile-lang-th-btn");

    // Mobile search
    const mobileSearchInput = document.getElementById("mobile-search-input");
    const mobileSearchSubmitBtn = document.getElementById(
      "mobile-search-submit-btn"
    );

    // Toggle mobile menu
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Mobile language buttons
    if (mobileLangEnBtn) {
      mobileLangEnBtn.addEventListener("click", () => {
        this.currentLang = "en";
        localStorage.setItem("language", this.currentLang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", { detail: this.currentLang })
        );
      });
    }

    if (mobileLangThBtn) {
      mobileLangThBtn.addEventListener("click", () => {
        this.currentLang = "th";
        localStorage.setItem("language", this.currentLang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", { detail: this.currentLang })
        );
      });
    }

    // Mobile search
    if (mobileSearchSubmitBtn && mobileSearchInput) {
      mobileSearchSubmitBtn.addEventListener("click", () => {
        this.handleSearch(mobileSearchInput.value);
      });

      mobileSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.handleSearch(mobileSearchInput.value);
        }
      });
    }
  }

  bindSearchEvents() {
    console.log("Binding search events..."); // Debug log
    const searchBtn = document.getElementById("search-btn");
    const searchInputContainer = document.getElementById(
      "search-input-container"
    );
    const searchInput = document.getElementById("search-input");
    const searchSubmitBtn = document.getElementById("search-submit-btn");
    const searchCloseBtn = document.getElementById("search-close-btn");

    console.log("Search elements:", {
      searchBtn,
      searchInputContainer,
      searchInput,
    }); // Debug log

    if (searchBtn && searchInputContainer && searchInput) {
      // Open search input
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Search button clicked!"); // Debug log
        searchBtn.classList.add("hidden");
        searchInputContainer.classList.remove("hidden");
        searchInput.focus();
      });

      // Close search input
      if (searchCloseBtn) {
        searchCloseBtn.addEventListener("click", () => {
          searchInputContainer.classList.add("hidden");
          searchBtn.classList.remove("hidden");
          searchInput.value = "";
        });
      }

      // Handle search submission
      if (searchSubmitBtn) {
        searchSubmitBtn.addEventListener("click", () => {
          this.handleSearch(searchInput.value);
        });
      }

      // Handle Enter key in search input
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.handleSearch(searchInput.value);
        }
      });

      // Close search when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !searchInputContainer.contains(e.target) &&
          e.target !== searchBtn
        ) {
          searchInputContainer.classList.add("hidden");
          searchBtn.classList.remove("hidden");
          searchInput.value = "";
        }
      });

      // Close search on Escape key
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          !searchInputContainer.classList.contains("hidden")
        ) {
          searchInputContainer.classList.add("hidden");
          searchBtn.classList.remove("hidden");
          searchInput.value = "";
        }
      });
    } else {
      console.error("Search elements not found!", {
        searchBtn,
        searchInputContainer,
        searchInput,
      }); // Debug log
    }
  }

  handleSearch(query) {
    if (query.trim()) {
      console.log("Searching for:", query);
      // TODO: Implement actual search functionality
      // คุณสามารถเพิ่มการค้นหาจริงได้ที่นี่
      alert(`ค้นหา: "${query}"`);
    }
  }

  updateLanguage(newLang) {
    this.currentLang = newLang;
    this.render();
    this.bindEvents();
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
