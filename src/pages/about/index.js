export default class AboutPage {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
  }

  async render(breadcrumbData = []) {
    const { translations } = await import("../../data/translations.js");
    const content = document.querySelector("#main-content");

    content.innerHTML = `
      <!-- Breadcrumb -->
      ${this.renderBreadcrumb(breadcrumbData)}
      
      <!-- Page Content -->
      <div class="space-y-8">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-6">
            ${translations[this.currentLang].nav.about}
          </h1>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 mb-6">
              ${
                this.currentLang === "th"
                  ? "บริษัท ABC จำกัด เป็นบริษัทที่มีความเชี่ยวชาญในการพัฒนาซอฟต์แวร์และการให้บริการทางเทคโนโลยีสารสนเทศ ก่อตั้งขึ้นในปี 2013 โดยทีมผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 10 ปี"
                  : "ABC Company Limited is a company specialized in software development and information technology services. Founded in 2013 by a team of experts with over 10 years of experience."
              }
            </p>
            
            <p class="text-gray-600 mb-8">
              ${
                this.currentLang === "th"
                  ? "เรามุ่งมั่นที่จะส่งมอบโซลูชันที่มีคุณภาพและตอบสนองความต้องการของลูกค้าอย่างแท้จริง ด้วยการใช้เทคโนโลยีที่ทันสมัยและแนวปฏิบัติที่เป็นมาตรฐานสากล"
                  : "We are committed to delivering quality solutions that truly meet our customers' needs, using modern technology and international best practices."
              }
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <svg class="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <h2 class="text-xl font-bold">${
                translations[this.currentLang].sidebar.companyInfo
              }</h2>
            </div>
            <p class="text-gray-600 mb-4">
              ${
                this.currentLang === "th"
                  ? "เรียนรู้เพิ่มเติมเกี่ยวกับบริษัทของเรา วิสัยทัศน์ พันธกิจ และค่านิยมที่เรายึดถือ"
                  : "Learn more about our company, vision, mission, and values that we uphold."
              }
            </p>
            <a href="#about/company" class="text-blue-600 hover:text-blue-800 font-medium">
              ${this.currentLang === "th" ? "อ่านเพิ่มเติม" : "Read More"} →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <svg class="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h2 class="text-xl font-bold">${
                translations[this.currentLang].sidebar.leadership
              }</h2>
            </div>
            <p class="text-gray-600 mb-4">
              ${
                this.currentLang === "th"
                  ? "รู้จักทีมผู้บริหารและผู้นำองค์กรที่มีประสบการณ์และความเชี่ยวชาญ"
                  : "Meet our executive team and organizational leaders with experience and expertise."
              }
            </p>
            <a href="#about/leader" class="text-blue-600 hover:text-blue-800 font-medium">
              ${this.currentLang === "th" ? "ดูทีมผู้นำ" : "View Leadership"} →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <svg class="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
              <h2 class="text-xl font-bold">${
                translations[this.currentLang].sidebar.allPeople
              }</h2>
            </div>
            <p class="text-gray-600 mb-4">
              ${
                this.currentLang === "th"
                  ? "พบกับทีมงานที่เต็มไปด้วยความสามารถและความมุ่งมั่นของเรา"
                  : "Meet our talented and dedicated team members."
              }
            </p>
            <a href="#about/people" class="text-blue-600 hover:text-blue-800 font-medium">
              ${this.currentLang === "th" ? "ดูทีมงาน" : "View Team"} →
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <svg class="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h2 class="text-xl font-bold">${
                translations[this.currentLang].sidebar.history
              }</h2>
            </div>
            <p class="text-gray-600 mb-4">
              ${
                this.currentLang === "th"
                  ? "เส้นทางการเติบโตและพัฒนาของบริษัทตั้งแต่ก่อตั้งจนถึงปัจจุบัน"
                  : "The growth and development journey of our company from founding to present."
              }
            </p>
            <a href="#about/history" class="text-blue-600 hover:text-blue-800 font-medium">
              ${this.currentLang === "th" ? "อ่านประวัติ" : "Read History"} →
            </a>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "พร้อมที่จะเริ่มต้นโปรเจคใหม่?"
                  : "Ready to Start a New Project?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับความต้องการของคุณ"
                  : "Contact us today to discuss your requirements"
              }
            </p>
            <button onclick="window.location.hash='#contact'" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${this.currentLang === "th" ? "ติดต่อเรา" : "Contact Us"}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderBreadcrumb(breadcrumbData) {
    if (!breadcrumbData.length) return "";

    return `
      <nav class="mb-6">
        <ol class="flex items-center space-x-2 text-sm text-gray-600">
          ${breadcrumbData
            .map(
              (item, index) => `
            <li class="flex items-center">
              ${
                index > 0
                  ? `<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>`
                  : ""
              }
              ${
                item.isLast
                  ? `<span class="text-blue-600 font-medium">${item.label}</span>`
                  : `<a href="${item.path}" class="hover:text-blue-600 transition-colors">${item.label}</a>`
              }
            </li>
          `
            )
            .join("")}
        </ol>
      </nav>
    `;
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
