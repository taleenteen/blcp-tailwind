export default class WebDevelopmentPage {
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
            ${translations[this.currentLang].sidebar.webDev}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "เราให้บริการพัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย รวดเร็ว และใช้งานง่าย ด้วยเทคโนโลยีล่าสุดและมาตรฐานสากล"
                : "We provide modern, fast, and user-friendly website and web application development services using the latest technologies and international standards."
            }
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNSIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjcwIiByPSI1IiBmaWxsPSIjRjU5RTBCIi8+CjxjaXJjbGUgY3g9IjExMCIgY3k9IjcwIiByPSI1IiBmaWxsPSIjMTBCOTgxIi8+CjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNGOUZBRkIiLz4KPHJlY3QgeD0iOTAiIHk9IjExMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzM5ODBGRiIvPgo8cmVjdCB4PSI5MCIgeT0iMTQwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjOUNBM0FGIi8+CjxyZWN0IHg9IjkwIiB5PSIxNjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+" 
                   alt="Web Development" 
                   class="w-full h-64 object-cover rounded-lg">
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">
                ${
                  this.currentLang === "th"
                    ? "ทำไมต้องเลือกเรา?"
                    : "Why Choose Us?"
                }
              </h2>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">
                    ${
                      this.currentLang === "th"
                        ? "Responsive Design ที่ทำงานได้ดีทุกอุปกรณ์"
                        : "Responsive Design that works well on all devices"
                    }
                  </span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">
                    ${
                      this.currentLang === "th"
                        ? "SEO Optimized เพื่อการค้นหาที่ดี"
                        : "SEO Optimized for better search visibility"
                    }
                  </span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">
                    ${
                      this.currentLang === "th"
                        ? "Performance สูง โหลดเร็ว"
                        : "High Performance and Fast Loading"
                    }
                  </span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">
                    ${
                      this.currentLang === "th"
                        ? "Security มาตรฐานสูง"
                        : "High Security Standards"
                    }
                  </span>
                </li>
              </ul>
            </div>
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
          
          <div class="grid md:grid-cols-3 gap-8">
            ${this.renderTechnologies()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "บริการที่รวมอยู่"
                : "Included Services"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${this.renderIncludedServices()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "พร้อมเริ่มโปรเจคเว็บของคุณแล้วหรือยัง?"
                  : "Ready to Start Your Web Project?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "ปรึกษาเราฟรีเกี่ยวกับความต้องการของคุณวันนี้"
                  : "Consult us for free about your requirements today"
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

  renderTechnologies() {
    const technologies = [
      {
        category: "Frontend",
        techs: [
          "React",
          "Vue.js",
          "Angular",
          "HTML5/CSS3",
          "TypeScript",
          "Tailwind CSS",
        ],
        color: "blue",
      },
      {
        category: "Backend",
        techs: ["Node.js", "Python", "PHP", "Java", ".NET", "Ruby"],
        color: "green",
      },
      {
        category: "Database",
        techs: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Firebase",
          "Supabase",
        ],
        color: "purple",
      },
    ];

    const colorClasses = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-800",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-800",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-800",
      },
    };

    return technologies
      .map((category) => {
        const colors = colorClasses[category.color];
        return `
        <div class="text-center">
          <h3 class="text-lg font-bold text-gray-800 mb-4">${
            category.category
          }</h3>
          <div class="flex flex-wrap justify-center gap-2">
            ${category.techs
              .map(
                (tech) => `
              <span class="px-3 py-1 ${colors.bg} ${colors.text} ${colors.border} border text-sm rounded-full">
                ${tech}
              </span>
            `
              )
              .join("")}
          </div>
        </div>
      `;
      })
      .join("");
  }

  renderIncludedServices() {
    const services = [
      {
        title: this.currentLang === "th" ? "การออกแบบ UI/UX" : "UI/UX Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย"
            : "Beautiful and user-friendly user experience design",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
      },
      {
        title:
          this.currentLang === "th" ? "Responsive Design" : "Responsive Design",
        desc:
          this.currentLang === "th"
            ? "เว็บไซต์ที่ทำงานได้ดีบนทุกอุปกรณ์และขนาดหน้าจอ"
            : "Websites that work well on all devices and screen sizes",
        icon: "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
      },
      {
        title:
          this.currentLang === "th" ? "SEO Optimization" : "SEO Optimization",
        desc:
          this.currentLang === "th"
            ? "ปรับแต่งเพื่อให้ค้นหาได้ง่ายบน Google และ Search Engine อื่นๆ"
            : "Optimized for easy discovery on Google and other search engines",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
      {
        title:
          this.currentLang === "th"
            ? "Performance Optimization"
            : "Performance Optimization",
        desc:
          this.currentLang === "th"
            ? "ปรับแต่งความเร็วและประสิทธิภาพให้สูงสุด"
            : "Maximum speed and performance optimization",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title:
          this.currentLang === "th" ? "Security Features" : "Security Features",
        desc:
          this.currentLang === "th"
            ? "ระบบรักษาความปลอดภัยตามมาตรฐานสากล"
            : "International standard security systems",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title:
          this.currentLang === "th"
            ? "Maintenance & Support"
            : "Maintenance & Support",
        desc:
          this.currentLang === "th"
            ? "บริการบำรุงรักษาและสนับสนุนหลังการส่งมอบ"
            : "Post-delivery maintenance and support services",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      },
    ];

    return services
      .map(
        (service) => `
      <div class="flex items-start p-4 bg-gray-50 rounded-lg">
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.icon}"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">${service.title}</h3>
          <p class="text-gray-600 text-sm">${service.desc}</p>
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
