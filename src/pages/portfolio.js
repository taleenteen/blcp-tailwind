import { html } from "../utils/template.js";
import { CardComponent } from "../components/card.js";
import { PaginationComponent } from "../components/pagination.js";

export default class PortfolioPage {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
    this.currentPage = 1;
    this.itemsPerPage = 6;
    this.currentFilter = "all";

    // Mock portfolio data
    this.portfolioData = [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        title: "E-commerce Platform",
        excerpt:
          "ระบบขายสินค้าออนไลน์ที่ทันสมัยพร้อมระบบจัดการสินค้าและการชำระเงิน",
        category: "Web Development",
        date: "2024-01-15",
        link: "#portfolio/1",
        badge: "Featured",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        title: "Mobile Banking App",
        excerpt: "แอพพลิเคชันธนาคารมือถือที่ปลอดภัยและใช้งานง่าย",
        category: "Mobile Development",
        date: "2024-02-20",
        link: "#portfolio/2",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        title: "Corporate Website",
        excerpt: "เว็บไซต์องค์กรที่มีดีไซน์สวยงามและตอบสนองได้ดี",
        category: "Web Development",
        date: "2024-03-10",
        link: "#portfolio/3",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        title: "Food Delivery App",
        excerpt: "แอพสั่งอาหารออนไลน์พร้อมระบบติดตามการจัดส่ง",
        category: "Mobile Development",
        date: "2024-04-05",
        link: "#portfolio/4",
        badge: "Popular",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
        title: "Learning Management System",
        excerpt: "ระบบจัดการการเรียนรู้ออนไลน์สำหรับสถาบันการศึกษา",
        category: "Web Development",
        date: "2024-05-12",
        link: "#portfolio/5",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        title: "Fitness Tracking App",
        excerpt: "แอพติดตามการออกกำลังกายและสุขภาพส่วนบุคคล",
        category: "Mobile Development",
        date: "2024-06-18",
        link: "#portfolio/6",
      },
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        title: "Analytics Dashboard",
        excerpt: "แดชบอร์ดวิเคราะห์ข้อมูลแบบเรียลไทม์สำหรับธุรกิจ",
        category: "Data Analytics",
        date: "2024-07-22",
        link: "#portfolio/7",
        badge: "New",
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        title: "Real Estate Platform",
        excerpt: "แพลตฟอร์มซื้อขายอสังหาริมทรัพย์ออนไลน์",
        category: "Web Development",
        date: "2024-08-30",
        link: "#portfolio/8",
      },
      {
        id: 9,
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        title: "IoT Monitoring App",
        excerpt: "แอพติดตามและควบคุมอุปกรณ์ IoT ระยะไกล",
        category: "Mobile Development",
        date: "2024-09-05",
        link: "#portfolio/9",
      },
    ];

    this.pagination = new PaginationComponent(
      this.portfolioData.length,
      this.itemsPerPage
    );
    this.filteredData = [...this.portfolioData];
  }

  async render(breadcrumbData = []) {
    const { translations } = await import("../data/translations.js");
    const content = document.querySelector("#main-content");

    content.innerHTML = html`
      <div class="space-y-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            ${this.currentLang === "th" ? "ผลงานของเรา" : "Our Portfolio"}
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            ${this.currentLang === "th"
              ? "ชมผลงานและโปรเจคที่เราได้พัฒนาให้กับลูกค้าในอุตสาหกรรมต่างๆ"
              : "Explore our projects and developments for clients across various industries"}
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-2 md:gap-4">
          <button
            onclick="window.portfolioFilter('all')"
            class="filter-btn px-4 py-2 rounded-full transition-colors ${this
              .currentFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}"
          >
            ${this.currentLang === "th" ? "ทั้งหมด" : "All"}
          </button>
          <button
            onclick="window.portfolioFilter('Web Development')"
            class="filter-btn px-4 py-2 rounded-full transition-colors ${this
              .currentFilter === "Web Development"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}"
          >
            ${this.currentLang === "th" ? "เว็บไซต์" : "Web Development"}
          </button>
          <button
            onclick="window.portfolioFilter('Mobile Development')"
            class="filter-btn px-4 py-2 rounded-full transition-colors ${this
              .currentFilter === "Mobile Development"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}"
          >
            ${this.currentLang === "th" ? "แอพมือถือ" : "Mobile Apps"}
          </button>
          <button
            onclick="window.portfolioFilter('Data Analytics')"
            class="filter-btn px-4 py-2 rounded-full transition-colors ${this
              .currentFilter === "Data Analytics"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}"
          >
            ${this.currentLang === "th" ? "วิเคราะห์ข้อมูล" : "Data Analytics"}
          </button>
        </div>

        <!-- Portfolio Grid -->
        <div
          id="portfolio-grid"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          ${this.renderCards()}
        </div>

        <!-- Pagination -->
        <div id="pagination-container">${this.pagination.render()}</div>
      </div>
    `;

    // Initialize event handlers
    this.initEventHandlers();
  }

  renderCards() {
    const pageData = this.pagination.getPageData(this.filteredData);
    return pageData.map((item) => CardComponent.productCard(item)).join("");
  }

  initEventHandlers() {
    // Global pagination handler
    window.paginationHandler = (page) => {
      this.changePage(page);
    };

    // Items per page handler
    window.paginationItemsPerPageHandler = (itemsPerPage) => {
      this.changeItemsPerPage(parseInt(itemsPerPage));
    };

    // Filter handler
    window.portfolioFilter = (filter) => {
      this.filterPortfolio(filter);
    };
  }

  changePage(newPage) {
    if (newPage < 1 || newPage > this.pagination.totalPages) return;

    this.pagination.currentPage = newPage;
    this.updateDisplay();

    // Scroll to top smoothly
    document.querySelector("#main-content").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  changeItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.pagination.setItemsPerPage(itemsPerPage);
    this.pagination.updateData(this.filteredData.length, 1);
    this.updateDisplay();
  }

  filterPortfolio(filter) {
    this.currentFilter = filter;

    if (filter === "all") {
      this.filteredData = [...this.portfolioData];
    } else {
      this.filteredData = this.portfolioData.filter(
        (item) => item.category === filter
      );
    }

    // Update pagination with new data
    this.pagination.updateData(this.filteredData.length, 1);
    this.updateDisplay();
    this.updateFilterButtons();
  }

  updateDisplay() {
    // Update grid
    const grid = document.getElementById("portfolio-grid");
    if (grid) {
      grid.innerHTML = this.renderCards();
    }

    // Update pagination
    const paginationContainer = document.getElementById("pagination-container");
    if (paginationContainer) {
      paginationContainer.innerHTML = this.pagination.render();
    }
  }

  updateFilterButtons() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn, index) => {
      const filters = [
        "all",
        "Web Development",
        "Mobile Development",
        "Data Analytics",
      ];
      const filter = filters[index];

      if (filter === this.currentFilter) {
        btn.className =
          "filter-btn px-4 py-2 rounded-full transition-colors bg-blue-600 text-white";
      } else {
        btn.className =
          "filter-btn px-4 py-2 rounded-full transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300";
      }
    });
  }

  destroy() {
    // Clean up global handlers
    if (window.paginationHandler) delete window.paginationHandler;
    if (window.paginationItemsPerPageHandler)
      delete window.paginationItemsPerPageHandler;
    if (window.portfolioFilter) delete window.portfolioFilter;
  }
}
