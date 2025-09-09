// Import HTML template helper สำหรับ syntax highlighting
import { html } from "../utils/template.js";

export default class HomePage {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
  }

  async render(breadcrumbData = []) {
    const { translations } = await import("../data/translations.js");
    const content = document.querySelector("#main-content");

    content.innerHTML = html`
      <div class="space-y-8">
        <section
          class="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12 text-center"
        >
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            ${translations[this.currentLang].hero?.title ||
            "Welcome to Our Company"}
          </h1>

          <p class="text-xl mb-8">
            ${translations[this.currentLang].hero?.subtitle ||
            "We provide excellent services"}
          </p>
          <button
            onclick="window.location.hash='#about'"
            class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            ${translations[this.currentLang].hero?.cta || "Learn More"}
          </button>
        </section>

        <section class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">
              ${translations[this.currentLang].sidebar?.webDev ||
              "Web Development"}
            </h3>
            <p class="text-gray-600 mb-4">
              สร้างและพัฒนาเว็บไซต์ที่ทันสมัยและมีประสิทธิภาพสูง
            </p>
            <a
              href="#services/web"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >เรียนรู้เพิ่มเติม →</a
            >
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">
              ${translations[this.currentLang].sidebar?.mobileDev ||
              "Mobile Development"}
            </h3>
            <p class="text-gray-600 mb-4">
              พัฒนาแอพพลิเคชันมือถือที่ใช้งานง่ายและตอบสนองผู้ใช้
            </p>
            <a
              href="#services/mobile"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >เรียนรู้เพิ่มเติม →</a
            >
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">
              ${translations[this.currentLang].sidebar?.consulting ||
              "Consulting"}
            </h3>
            <p class="text-gray-600 mb-4">
              ให้คำปรึกษาและวางแผนกลยุทธ์ทางเทคโนโลยี
            </p>
            <a
              href="#services/consulting"
              class="text-blue-600 hover:text-blue-800 font-medium"
              >เรียนรู้เพิ่มเติม →</a
            >
          </div>
        </section>

        <section class="bg-white rounded-lg p-8 shadow-md">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              ${this.currentLang === "th"
                ? "ทำไมต้องเลือกเรา?"
                : "Why Choose Us?"}
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              ${this.currentLang === "th"
                ? "เราคือทีมผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 10 ปี ในการพัฒนาโซลูชันทางเทคโนโลยี"
                : "We are a team of experts with over 10 years of experience in developing technology solutions"}
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p class="text-gray-600">
                ${this.currentLang === "th"
                  ? "โปรเจคที่สำเร็จ"
                  : "Completed Projects"}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">50+</div>
              <p class="text-gray-600">
                ${this.currentLang === "th" ? "ลูกค้าที่พอใจ" : "Happy Clients"}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p class="text-gray-600">
                ${this.currentLang === "th"
                  ? "บริการสนับสนุน"
                  : "Support Service"}
              </p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <p class="text-gray-600">
                ${this.currentLang === "th"
                  ? "ปีประสบการณ์"
                  : "Years Experience"}
              </p>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
