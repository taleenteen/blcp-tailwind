import { html } from "../utils/template.js";

export class PaginationComponent {
  constructor(totalItems, itemsPerPage = 6, currentPage = 1) {
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = currentPage;
    this.totalPages = Math.ceil(totalItems / itemsPerPage);
    this.maxVisiblePages = 5; // จำนวนปุ่มหน้าที่แสดงได้สูงสุด
  }

  // อัพเดตข้อมูล pagination
  updateData(totalItems, currentPage = null) {
    this.totalItems = totalItems;
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
    if (currentPage !== null) {
      this.currentPage = Math.max(1, Math.min(currentPage, this.totalPages));
    }
  }

  // สร้าง HTML สำหรับ pagination
  render(onPageChange, options = {}) {
    if (this.totalPages <= 1) return "";

    const {
      showInfo = true,
      showFirstLast = true,
      className = "",
      size = "default", // 'small', 'default', 'large'
    } = options;

    const sizeClasses = {
      small: "px-2 py-1 text-sm",
      default: "px-3 py-2",
      large: "px-4 py-3 text-lg",
    };

    const buttonClass = sizeClasses[size];

    return html`
      <div class="flex flex-col items-center space-y-4 ${className}">
        ${showInfo ? this.renderInfo() : ""}

        <div class="flex flex-wrap justify-center items-center gap-1 md:gap-2">
          ${showFirstLast && this.currentPage > 1
            ? html`
                <button
                  onclick="window.paginationHandler(1)"
                  class="${buttonClass} rounded-lg border bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                  title="หน้าแรก"
                >
                  ««
                </button>
              `
            : ""}

          <!-- Previous Button -->
          <button
            onclick="window.paginationHandler(${this.currentPage - 1})"
            ${this.currentPage === 1 ? "disabled" : ""}
            class="${buttonClass} rounded-lg border transition-colors ${this
              .currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"}"
            title="หน้าก่อนหน้า"
          >
            ‹
          </button>

          <!-- Page Numbers -->
          ${this.renderPageNumbers(buttonClass)}

          <!-- Next Button -->
          <button
            onclick="window.paginationHandler(${this.currentPage + 1})"
            ${this.currentPage === this.totalPages ? "disabled" : ""}
            class="${buttonClass} rounded-lg border transition-colors ${this
              .currentPage === this.totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"}"
            title="หน้าถัดไป"
          >
            ›
          </button>

          ${showFirstLast && this.currentPage < this.totalPages
            ? html`
                <button
                  onclick="window.paginationHandler(${this.totalPages})"
                  class="${buttonClass} rounded-lg border bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                  title="หน้าสุดท้าย"
                >
                  »»
                </button>
              `
            : ""}
        </div>

        <!-- Items per page selector -->
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <span>แสดง</span>
          <select
            onchange="window.paginationItemsPerPageHandler(this.value)"
            class="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="6" ${this.itemsPerPage === 6 ? "selected" : ""}>
              6
            </option>
            <option value="12" ${this.itemsPerPage === 12 ? "selected" : ""}>
              12
            </option>
            <option value="24" ${this.itemsPerPage === 24 ? "selected" : ""}>
              24
            </option>
            <option value="48" ${this.itemsPerPage === 48 ? "selected" : ""}>
              48
            </option>
          </select>
          <span>รายการต่อหน้า</span>
        </div>
      </div>
    `;
  }

  // สร้างปุ่มหมายเลขหน้า
  renderPageNumbers(buttonClass) {
    const pages = this.getVisiblePages();
    let html = "";

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (page === "...") {
        html += `<span class="${buttonClass} text-gray-400">…</span>`;
      } else {
        const isActive = page === this.currentPage;
        html += `
          <button 
            onclick="window.paginationHandler(${page})"
            class="${buttonClass} rounded-lg border transition-colors ${
          isActive
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }"
          >
            ${page}
          </button>
        `;
      }
    }

    return html;
  }

  // คำนวณหน้าที่จะแสดง
  getVisiblePages() {
    const pages = [];
    const half = Math.floor(this.maxVisiblePages / 2);

    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

    // ปรับ start ถ้า end ติดกับหน้าสุดท้าย
    if (end === this.totalPages) {
      start = Math.max(1, end - this.maxVisiblePages + 1);
    }

    // เพิ่มหน้าแรกและ ... ถ้าจำเป็น
    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    // เพิ่มหน้าในช่วงที่แสดง
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // เพิ่ม ... และหน้าสุดท้าย ถ้าจำเป็น
    if (end < this.totalPages) {
      if (end < this.totalPages - 1) {
        pages.push("...");
      }
      pages.push(this.totalPages);
    }

    return pages;
  }

  // แสดงข้อมูลสถิติ
  renderInfo() {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);

    return html`
      <div class="text-sm text-gray-600">
        แสดง ${start.toLocaleString()}-${end.toLocaleString()} จาก
        ${this.totalItems.toLocaleString()} รายการ
      </div>
    `;
  }

  // ดึงข้อมูลสำหรับหน้าปัจจุบัน
  getPageData(allData) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return allData.slice(startIndex, endIndex);
  }

  // ไปหน้าถัดไป
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      return true;
    }
    return false;
  }

  // ไปหน้าก่อนหน้า
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      return true;
    }
    return false;
  }

  // ไปหน้าที่กำหนด
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      return true;
    }
    return false;
  }

  // เปลี่ยนจำนวนรายการต่อหน้า
  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.totalPages = Math.ceil(this.totalItems / itemsPerPage);
    this.currentPage = 1; // รีเซ็ตไปหน้าแรก
  }

  // ดึงข้อมูลสถานะปัจจุบัน
  getState() {
    return {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      itemsPerPage: this.itemsPerPage,
      totalItems: this.totalItems,
      hasNext: this.currentPage < this.totalPages,
      hasPrev: this.currentPage > 1,
    };
  }
}
