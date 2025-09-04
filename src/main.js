import "./style.css";
import { Navbar } from "./components/navbar.js";
import { Sidebar } from "./components/sidebar.js";
import { Footer } from "./components/footer.js";
import { Router } from "./utils/router.js";

class App {
  constructor() {
    this.navbar = new Navbar();
    this.sidebar = new Sidebar();
    this.footer = new Footer();
    this.router = new Router();
    this.currentLang = localStorage.getItem("language") || "th";
  }

  async init() {
    this.setupHTML();
    await this.initComponents();

    // Initialize router after components are ready
    await this.router.init();

    this.bindGlobalEvents();
  }

  setupHTML() {
    document.querySelector("#app").innerHTML = `
      <div class="min-h-screen bg-gray-50">
        <!-- Main Layout -->
        <div class="flex">
          <!-- Sidebar -->
          <div id="sidebar" class="hidden lg:block"></div>
          
          <!-- Content Area -->
          <div class="flex-1 ">
            <!-- Navbar -->
            <div id="navbar"></div>
            
            <!-- Main Content -->
            <main id="main-content" class="pt-16 p-6">
              <div class="max-w-6xl mx-auto">
                <!-- Content will be loaded here by router -->
              </div>
            </main>
          </div>
        </div>
        
        <!-- Footer -->
        <div id="footer" class=""></div>
        
        <!-- Mobile Sidebar Toggle Button -->
        <button id="mobile-sidebar-toggle" class="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    `;
  }

  async initComponents() {
    await Promise.all([
      this.navbar.init(),
      this.sidebar.init(),
      this.footer.init(),
    ]);

    // Remove loading placeholder
    const loadingPlaceholder = document.getElementById("loading-placeholder");
    if (loadingPlaceholder) {
      loadingPlaceholder.remove();
    }
  }

  bindGlobalEvents() {
    // Language change event
    window.addEventListener("languageChanged", async (e) => {
      this.currentLang = e.detail;

      // Update SEO Manager language
      if (this.router.seoManager) {
        this.router.seoManager.updateLanguage(this.currentLang);
      }

      await this.reinitializeComponents();
    });

    // Route change event
    window.addEventListener("routeChanged", (e) => {
      this.navbar.updateActiveNav();
      this.sidebar.updateActiveSidebar();
    });

    // Mobile sidebar toggle
    document
      .getElementById("mobile-sidebar-toggle")
      .addEventListener("click", () => {
        this.sidebar.toggleSidebar();
      });

    // Close mobile sidebar on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        this.sidebar.closeSidebar();
      }
    });
  }

  async reinitializeComponents() {
    await Promise.all([
      this.navbar.init(),
      this.sidebar.updateLanguage(), // ใช้ updateLanguage แทน init
      this.footer.init(),
    ]);

    // Re-render current page with new language
    this.router.handleRoute();
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  const app = new App();
  await app.init();
});
