export default class MobileDevelopmentPage {
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
            ${translations[this.currentLang].sidebar.mobileDev}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "พัฒนาแอปพลิเคชันมือถือที่ทันสมัย รวดเร็ว และใช้งานง่าย สำหรับทั้ง iOS และ Android พร้อมประสบการณ์ผู้ใช้ที่ยอดเยี่ยม"
                : "Develop modern, fast, and user-friendly mobile applications for both iOS and Android with excellent user experience."
            }
          </p>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            ${this.renderPlatforms()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "เทคโนโลยีที่เราใช้"
                : "Technologies We Use"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${this.renderMobileTechs()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "คุณสมบัติที่เรามอบให้"
                : "Features We Provide"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${this.renderMobileFeatures()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "กระบวนการพัฒนาแอพ"
                : "App Development Process"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${this.renderDevelopmentProcess()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "พร้อมสร้างแอพในฝันของคุณ?"
                  : "Ready to Build Your Dream App?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "มาคุยกันเกี่ยวกับไอเดียแอพของคุณ"
                  : "Let's discuss your app idea"
              }
            </p>
            <button onclick="window.location.hash='#contact'" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${this.currentLang === "th" ? "เริ่มสนทนา" : "Start Discussion"}
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

  renderPlatforms() {
    const platforms = [
      {
        name: "iOS",
        desc:
          this.currentLang === "th"
            ? "แอพสำหรับ iPhone และ iPad"
            : "Apps for iPhone and iPad",
        icon: "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "Android",
        desc:
          this.currentLang === "th"
            ? "แอพสำหรับ Android ทุกรุ่น"
            : "Apps for all Android devices",
        icon: "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
        color: "from-green-400 to-green-600",
      },
      {
        name: "Cross-Platform",
        desc:
          this.currentLang === "th"
            ? "แอพที่ใช้ได้ทั้งสองระบบ"
            : "Apps that work on both platforms",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
        color: "from-blue-400 to-purple-600",
      },
    ];

    return platforms
      .map(
        (platform) => `
      <div class="bg-gradient-to-br ${platform.color} text-white rounded-lg p-6 text-center">
        <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${platform.icon}"></path>
        </svg>
        <h3 class="text-xl font-bold mb-2">${platform.name}</h3>
        <p class="text-white/90">${platform.desc}</p>
      </div>
    `
      )
      .join("");
  }

  renderMobileTechs() {
    const technologies = [
      {
        name: "React Native",
        desc: this.currentLang === "th" ? "Cross-platform" : "Cross-platform",
        color: "blue",
      },
      {
        name: "Flutter",
        desc:
          this.currentLang === "th" ? "Google Framework" : "Google Framework",
        color: "cyan",
      },
      {
        name: "Swift",
        desc: this.currentLang === "th" ? "Native iOS" : "Native iOS",
        color: "orange",
      },
      {
        name: "Kotlin",
        desc: this.currentLang === "th" ? "Native Android" : "Native Android",
        color: "purple",
      },
    ];

    const colorClasses = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      cyan: {
        bg: "bg-cyan-100",
        text: "text-cyan-600",
        border: "border-cyan-200",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
      },
    };

    return technologies
      .map((tech) => {
        const colors = colorClasses[tech.color];
        return `
        <div class="text-center p-6 ${colors.bg} ${colors.border} border rounded-lg">
          <h3 class="text-lg font-bold ${colors.text} mb-2">${tech.name}</h3>
          <p class="text-gray-600 text-sm">${tech.desc}</p>
        </div>
      `;
      })
      .join("");
  }

  renderMobileFeatures() {
    const features = [
      {
        title:
          this.currentLang === "th"
            ? "Push Notifications"
            : "Push Notifications",
        desc:
          this.currentLang === "th"
            ? "แจ้งเตือนแบบ Real-time"
            : "Real-time notifications",
        icon: "M15 17h5l-5 5v-5zM4.257 7.462a1 1 0 01-.073-1.414L6.72 3.512a1 1 0 011.414.073l2.5 2.5a1 1 0 01-.073 1.414L8.024 9.035a1 1 0 01-1.414-.073l-2.5-2.5z",
      },
      {
        title:
          this.currentLang === "th" ? "Offline Support" : "Offline Support",
        desc:
          this.currentLang === "th"
            ? "ใช้งานได้แม้ไม่มีอินเทอร์เน็ต"
            : "Works without internet connection",
        icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a8.996 8.996 0 008.354-5.646z",
      },
      {
        title:
          this.currentLang === "th" ? "Location Services" : "Location Services",
        desc:
          this.currentLang === "th"
            ? "บริการตำแหน่งที่แม่นยำ"
            : "Accurate location services",
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      },
      {
        title:
          this.currentLang === "th"
            ? "Payment Integration"
            : "Payment Integration",
        desc:
          this.currentLang === "th"
            ? "รองรับการชำระเงินหลากหลาย"
            : "Multiple payment options support",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      },
      {
        title: this.currentLang === "th" ? "Social Login" : "Social Login",
        desc:
          this.currentLang === "th"
            ? "เข้าสู่ระบบผ่าน Social Media"
            : "Login via social media",
        icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
      },
      {
        title: this.currentLang === "th" ? "Analytics" : "Analytics",
        desc:
          this.currentLang === "th"
            ? "วิเคราะห์การใช้งานแบบ Real-time"
            : "Real-time usage analytics",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ];

    return features
      .map(
        (feature) => `
      <div class="flex items-start p-4 bg-gray-50 rounded-lg">
        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${feature.icon}"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">${feature.title}</h3>
          <p class="text-gray-600 text-sm">${feature.desc}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderDevelopmentProcess() {
    const processes = [
      {
        step: "1",
        title:
          this.currentLang === "th"
            ? "Wireframe & Design"
            : "Wireframe & Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบหน้าตาและ Flow"
            : "Design UI and user flow",
      },
      {
        step: "2",
        title: this.currentLang === "th" ? "Prototype" : "Prototype",
        desc:
          this.currentLang === "th" ? "สร้างต้นแบบแอพ" : "Create app prototype",
      },
      {
        step: "3",
        title: this.currentLang === "th" ? "Development" : "Development",
        desc: this.currentLang === "th" ? "พัฒนาแอพตามแบบ" : "Develop the app",
      },
      {
        step: "4",
        title:
          this.currentLang === "th" ? "Testing & Deploy" : "Testing & Deploy",
        desc:
          this.currentLang === "th" ? "ทดสอบและเผยแพร่" : "Test and publish",
      },
    ];

    return processes
      .map(
        (process, index) => `
      <div class="text-center relative">
        <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span class="text-xl font-bold">${process.step}</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-2">${process.title}</h3>
        <p class="text-gray-600 text-sm">${process.desc}</p>
      </div>
    `
      )
      .join("");
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
