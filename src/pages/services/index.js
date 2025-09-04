export default class ServicesPage {
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
            ${translations[this.currentLang].nav.services}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "เราให้บริการพัฒนาซอฟต์แวร์และโซลูชันเทคโนโลยีที่ครอบคลุมและมีคุณภาพสูง เพื่อตอบสนองความต้องการของธุรกิจสมัยใหม่"
                : "We provide comprehensive and high-quality software development and technology solutions to meet modern business needs."
            }
          </p>
          
          <div class="grid md:grid-cols-2 gap-8">
            ${this.renderServiceCards()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${this.currentLang === "th" ? "กระบวนการทำงาน" : "Our Process"}
          </h2>
          
          <div class="grid md:grid-cols-4 gap-6">
            ${this.renderWorkProcess()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "ต้องการคำปรึกษา?"
                  : "Need Consultation?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "ติดต่อเราเพื่อรับคำปรึกษาฟรีเกี่ยวกับโปรเจคของคุณ"
                  : "Contact us for free consultation about your project"
              }
            </p>
            <button onclick="window.location.hash='#contact'" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${this.currentLang === "th" ? "ปรึกษาฟรี" : "Free Consultation"}
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

  renderServiceCards() {
    const services = [
      {
        title: this.currentLang === "th" ? "พัฒนาเว็บไซต์" : "Web Development",
        desc:
          this.currentLang === "th"
            ? "สร้างเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย รวดเร็ว และใช้งานง่าย"
            : "Create modern, fast, and user-friendly websites and web applications",
        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9",
        link: "#services/web",
        color: "blue",
      },
      {
        title:
          this.currentLang === "th" ? "พัฒนาแอพมือถือ" : "Mobile Development",
        desc:
          this.currentLang === "th"
            ? "พัฒนาแอพพลิเคชันมือถือสำหรับ iOS และ Android ที่ตอบสนองความต้องการ"
            : "Develop mobile applications for iOS and Android that meet your needs",
        icon: "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
        link: "#services/mobile",
        color: "green",
      },
      {
        title: this.currentLang === "th" ? "ให้คำปรึกษา" : "Consulting",
        desc:
          this.currentLang === "th"
            ? "ให้คำปรึกษาด้านเทคโนโลยีและกลยุทธ์การดิจิทัลเพื่อพัฒนาธุรกิจ"
            : "Provide technology and digital strategy consulting for business development",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        link: "#services/consulting",
        color: "purple",
      },
      {
        title: this.currentLang === "th" ? "ออกแบบ UX/UI" : "UX/UI Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อที่สวยงามและใช้งานง่าย"
            : "Design beautiful and easy-to-use user experiences and interfaces",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
        link: "#services/design",
        color: "pink",
      },
    ];

    const colorClasses = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        icon: "bg-blue-100 text-blue-600",
      },
      green: {
        bg: "from-green-500 to-green-600",
        icon: "bg-green-100 text-green-600",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        icon: "bg-purple-100 text-purple-600",
      },
      pink: {
        bg: "from-pink-500 to-pink-600",
        icon: "bg-pink-100 text-pink-600",
      },
    };

    return services
      .map((service) => {
        const colors = colorClasses[service.color];
        return `
        <div class="bg-gradient-to-br ${
          colors.bg
        } text-white rounded-lg p-8 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 ${
            colors.icon
          } rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
                service.icon
              }"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">${service.title}</h3>
          <p class="text-white/90 mb-6">${service.desc}</p>
          <a href="${
            service.link
          }" class="inline-flex items-center text-white hover:text-white/80 font-medium">
            ${this.currentLang === "th" ? "เรียนรู้เพิ่มเติม" : "Learn More"}
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      `;
      })
      .join("");
  }

  renderWorkProcess() {
    const processes = [
      {
        step: "1",
        title: this.currentLang === "th" ? "วิเคราะห์" : "Analysis",
        desc:
          this.currentLang === "th"
            ? "ศึกษาความต้องการและกำหนดข้อกำหนด"
            : "Study requirements and define specifications",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      },
      {
        step: "2",
        title: this.currentLang === "th" ? "ออกแบบ" : "Design",
        desc:
          this.currentLang === "th"
            ? "สร้างแบบร่างและออกแบบส่วนติดต่อผู้ใช้"
            : "Create wireframes and design user interfaces",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
      },
      {
        step: "3",
        title: this.currentLang === "th" ? "พัฒนา" : "Development",
        desc:
          this.currentLang === "th"
            ? "เขียนโค้ดและพัฒนาระบบตามแบบที่ออกแบบ"
            : "Write code and develop system according to design",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
      {
        step: "4",
        title: this.currentLang === "th" ? "ทดสอบ" : "Testing",
        desc:
          this.currentLang === "th"
            ? "ทดสอบระบบและแก้ไขข้อบกพร่อง"
            : "Test system and fix bugs",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      },
    ];

    return processes
      .map(
        (process, index) => `
      <div class="text-center relative">
        ${
          index < processes.length - 1
            ? `
          <div class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2 z-0"></div>
        `
            : ""
        }
        <div class="relative z-10 bg-white">
          <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span class="text-xl font-bold">${process.step}</span>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
                process.icon
              }"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">${process.title}</h3>
          <p class="text-gray-600 text-sm">${process.desc}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
