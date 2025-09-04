export default class DesignPage {
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
            ${translations[this.currentLang].sidebar.uiuxDesign}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "บริการออกแบบ UI/UX ที่ใส่ใจประสบการณ์ผู้ใช้ สร้างสรรค์ผลงานที่สวยงาม ใช้งานง่าย และตอบโจทย์ธุรกิจ"
                : "UI/UX design services focused on user experience, creating beautiful, user-friendly designs that meet business needs."
            }
          </p>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            ${this.renderDesignServices()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th" ? "เครื่องมือที่เราใช้" : "Tools We Use"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${this.renderDesignTools()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${this.currentLang === "th" ? "กระบวนการออกแบบ" : "Design Process"}
          </h2>
          
          <div class="space-y-8">
            ${this.renderDesignProcess()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "ความเชี่ยวชาญของเรา"
                : "Our Expertise"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            ${this.renderDesignExpertise()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th" ? "แพ็คเกจการออกแบบ" : "Design Packages"
            }
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            ${this.renderDesignPackages()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "พร้อมสร้างผลงานที่น่าประทับใจ?"
                  : "Ready to Create Impressive Design?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "มาร่วมกันสร้างสรรค์ผลงานดีไซน์ที่โดดเด่น"
                  : "Let's create outstanding design work together"
              }
            </p>
            <button onclick="window.location.hash='#contact'" class="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${this.currentLang === "th" ? "เริ่มโปรเจค" : "Start Project"}
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

  renderDesignServices() {
    const services = [
      {
        title: this.currentLang === "th" ? "UI Design" : "UI Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบส่วนติดต่อผู้ใช้"
            : "User interface design",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        color: "from-blue-500 to-cyan-600",
      },
      {
        title: this.currentLang === "th" ? "UX Design" : "UX Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบประสบการณ์ผู้ใช้"
            : "User experience design",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        color: "from-purple-500 to-pink-600",
      },
      {
        title: this.currentLang === "th" ? "Branding" : "Branding",
        desc:
          this.currentLang === "th"
            ? "สร้างแบรนด์และอัตลักษณ์"
            : "Brand identity creation",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v14a2 2 0 002 0V3zM15.5 7.5L17 9l-1.5 1.5L17 12l-1.5 1.5L17 15l-1.5 1.5L17 18",
        color: "from-green-500 to-emerald-600",
      },
    ];

    return services
      .map(
        (service) => `
      <div class="bg-gradient-to-br ${service.color} text-white rounded-lg p-6 text-center">
        <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.icon}"></path>
        </svg>
        <h3 class="text-xl font-bold mb-2">${service.title}</h3>
        <p class="text-white/90">${service.desc}</p>
      </div>
    `
      )
      .join("");
  }

  renderDesignTools() {
    const tools = [
      {
        name: "Figma",
        desc: this.currentLang === "th" ? "UI/UX Design" : "UI/UX Design",
        color: "purple",
      },
      {
        name: "Adobe XD",
        desc: this.currentLang === "th" ? "Prototype" : "Prototype",
        color: "pink",
      },
      {
        name: "Sketch",
        desc:
          this.currentLang === "th" ? "Interface Design" : "Interface Design",
        color: "orange",
      },
      {
        name: "Photoshop",
        desc: this.currentLang === "th" ? "Image Editing" : "Image Editing",
        color: "blue",
      },
      {
        name: "Illustrator",
        desc: this.currentLang === "th" ? "Vector Graphics" : "Vector Graphics",
        color: "yellow",
      },
      {
        name: "InVision",
        desc: this.currentLang === "th" ? "Prototyping" : "Prototyping",
        color: "red",
      },
      {
        name: "Principle",
        desc: this.currentLang === "th" ? "Animation" : "Animation",
        color: "indigo",
      },
      {
        name: "Zeplin",
        desc: this.currentLang === "th" ? "Handoff" : "Handoff",
        color: "green",
      },
    ];

    const colorClasses = {
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        border: "border-pink-200",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
      },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        border: "border-indigo-200",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
      },
    };

    return tools
      .map((tool) => {
        const colors = colorClasses[tool.color];
        return `
        <div class="text-center p-4 ${colors.bg} ${colors.border} border rounded-lg">
          <h3 class="text-lg font-bold ${colors.text} mb-1">${tool.name}</h3>
          <p class="text-gray-600 text-sm">${tool.desc}</p>
        </div>
      `;
      })
      .join("");
  }

  renderDesignProcess() {
    const steps = [
      {
        number: "01",
        title:
          this.currentLang === "th"
            ? "Research & Discovery"
            : "Research & Discovery",
        desc:
          this.currentLang === "th"
            ? "ศึกษาและทำความเข้าใจเป้าหมายธุรกิจ กลุ่มผู้ใช้ และคู่แข่ง"
            : "Study business goals, target users, and competitors",
        tasks: [
          this.currentLang === "th" ? "User Interview" : "User Interview",
          this.currentLang === "th" ? "Market Research" : "Market Research",
          this.currentLang === "th"
            ? "Competitor Analysis"
            : "Competitor Analysis",
        ],
      },
      {
        number: "02",
        title:
          this.currentLang === "th"
            ? "Information Architecture"
            : "Information Architecture",
        desc:
          this.currentLang === "th"
            ? "จัดระบบข้อมูลและโครงสร้างหน้าเว็บ สร้าง User Flow และ Sitemap"
            : "Organize information structure, create user flow and sitemap",
        tasks: [
          this.currentLang === "th" ? "User Flow" : "User Flow",
          this.currentLang === "th" ? "Sitemap" : "Sitemap",
          this.currentLang === "th" ? "Content Strategy" : "Content Strategy",
        ],
      },
      {
        number: "03",
        title: this.currentLang === "th" ? "Wireframing" : "Wireframing",
        desc:
          this.currentLang === "th"
            ? "สร้างโครงร่างหน้าเว็บ กำหนดตำแหน่งและลำดับความสำคัญของเนื้อหา"
            : "Create page wireframes, define content positioning and hierarchy",
        tasks: [
          this.currentLang === "th" ? "Low-fi Wireframe" : "Low-fi Wireframe",
          this.currentLang === "th" ? "High-fi Wireframe" : "High-fi Wireframe",
          this.currentLang === "th" ? "Layout Planning" : "Layout Planning",
        ],
      },
      {
        number: "04",
        title: this.currentLang === "th" ? "Visual Design" : "Visual Design",
        desc:
          this.currentLang === "th"
            ? "ออกแบบหน้าตาที่สวยงาม เลือกสี ฟอนต์ และสร้าง Design System"
            : "Create beautiful visual design, choose colors, fonts, and build design system",
        tasks: [
          this.currentLang === "th" ? "UI Design" : "UI Design",
          this.currentLang === "th" ? "Design System" : "Design System",
          this.currentLang === "th" ? "Style Guide" : "Style Guide",
        ],
      },
      {
        number: "05",
        title: this.currentLang === "th" ? "Prototyping" : "Prototyping",
        desc:
          this.currentLang === "th"
            ? "สร้างต้นแบบที่ใช้งานได้จริง เพื่อทดสอบการทำงานและประสบการณ์ผู้ใช้"
            : "Create interactive prototype for testing functionality and user experience",
        tasks: [
          this.currentLang === "th"
            ? "Interactive Prototype"
            : "Interactive Prototype",
          this.currentLang === "th"
            ? "Micro-interactions"
            : "Micro-interactions",
          this.currentLang === "th" ? "Animation" : "Animation",
        ],
      },
    ];

    return steps
      .map(
        (step, index) => `
      <div class="flex items-start ${
        index < steps.length - 1 ? "border-l-4 border-gray-100 pb-8 ml-8" : ""
      }">
        <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0 shadow-lg ${
          index < steps.length - 1 ? "-ml-10" : ""
        }">
          ${step.number}
        </div>
        <div class="pt-2">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${step.title}</h3>
          <p class="text-gray-600 mb-4">${step.desc}</p>
          <div class="flex flex-wrap gap-2">
            ${step.tasks
              .map(
                (task) => `
              <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">${task}</span>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderDesignExpertise() {
    const expertise = [
      {
        title: this.currentLang === "th" ? "Web Design" : "Web Design",
        items: [
          this.currentLang === "th" ? "Responsive Design" : "Responsive Design",
          this.currentLang === "th" ? "Landing Page" : "Landing Page",
          this.currentLang === "th" ? "E-commerce Design" : "E-commerce Design",
          this.currentLang === "th" ? "Corporate Website" : "Corporate Website",
          this.currentLang === "th" ? "Portfolio Design" : "Portfolio Design",
        ],
      },
      {
        title:
          this.currentLang === "th" ? "Mobile App Design" : "Mobile App Design",
        items: [
          this.currentLang === "th" ? "iOS App Design" : "iOS App Design",
          this.currentLang === "th"
            ? "Android App Design"
            : "Android App Design",
          this.currentLang === "th"
            ? "Cross-platform Design"
            : "Cross-platform Design",
          this.currentLang === "th" ? "App Icon Design" : "App Icon Design",
          this.currentLang === "th" ? "App Store Assets" : "App Store Assets",
        ],
      },
    ];

    return expertise
      .map(
        (area) => `
      <div class="bg-gray-50 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clip-rule="evenodd"></path>
          </svg>
          ${area.title}
        </h3>
        <ul class="space-y-2">
          ${area.items
            .map(
              (item) => `
            <li class="flex items-center text-gray-600">
              <svg class="w-4 h-4 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              ${item}
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  renderDesignPackages() {
    const packages = [
      {
        name: this.currentLang === "th" ? "Basic Design" : "Basic Design",
        price: this.currentLang === "th" ? "฿15,000" : "$500",
        duration: this.currentLang === "th" ? "5-7 วัน" : "5-7 days",
        features: [
          this.currentLang === "th" ? "UI Design 5 หน้า" : "5 Page UI Design",
          this.currentLang === "th" ? "Responsive Design" : "Responsive Design",
          this.currentLang === "th" ? "Style Guide" : "Style Guide",
          this.currentLang === "th" ? "แก้ไข 3 รอบ" : "3 Revision rounds",
        ],
        recommended: false,
      },
      {
        name:
          this.currentLang === "th"
            ? "Professional Design"
            : "Professional Design",
        price: this.currentLang === "th" ? "฿35,000" : "$1,200",
        duration: this.currentLang === "th" ? "10-14 วัน" : "10-14 days",
        features: [
          this.currentLang === "th" ? "UI Design 10 หน้า" : "10 Page UI Design",
          this.currentLang === "th"
            ? "Interactive Prototype"
            : "Interactive Prototype",
          this.currentLang === "th" ? "Design System" : "Design System",
          this.currentLang === "th" ? "User Research" : "User Research",
          this.currentLang === "th" ? "แก้ไข 5 รอบ" : "5 Revision rounds",
        ],
        recommended: true,
      },
      {
        name: this.currentLang === "th" ? "Complete Design" : "Complete Design",
        price: this.currentLang === "th" ? "฿65,000" : "$2,200",
        duration: this.currentLang === "th" ? "20-30 วัน" : "20-30 days",
        features: [
          this.currentLang === "th"
            ? "UI Design ไม่จำกัด"
            : "Unlimited UI Design",
          this.currentLang === "th"
            ? "UX Research & Testing"
            : "UX Research & Testing",
          this.currentLang === "th" ? "Brand Identity" : "Brand Identity",
          this.currentLang === "th" ? "Animation Design" : "Animation Design",
          this.currentLang === "th" ? "Developer Handoff" : "Developer Handoff",
          this.currentLang === "th" ? "แก้ไขไม่จำกัด" : "Unlimited revisions",
        ],
        recommended: false,
      },
    ];

    return packages
      .map(
        (pkg) => `
      <div class="relative bg-white border-2 ${
        pkg.recommended ? "border-purple-500 shadow-xl" : "border-gray-200"
      } rounded-lg p-6">
        ${
          pkg.recommended
            ? `
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              ${this.currentLang === "th" ? "แนะนำ" : "Recommended"}
            </span>
          </div>
        `
            : ""
        }
        
        <div class="text-center mb-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${pkg.name}</h3>
          <div class="text-3xl font-bold ${
            pkg.recommended ? "text-purple-600" : "text-gray-800"
          } mb-1">${pkg.price}</div>
          <div class="text-gray-500 text-sm">${pkg.duration}</div>
        </div>
        
        <ul class="space-y-3 mb-6">
          ${pkg.features
            .map(
              (feature) => `
            <li class="flex items-center text-gray-600 text-sm">
              <svg class="w-4 h-4 ${
                pkg.recommended ? "text-purple-500" : "text-green-500"
              } mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              ${feature}
            </li>
          `
            )
            .join("")}
        </ul>
        
        <button onclick="window.location.hash='#contact'" class="w-full ${
          pkg.recommended
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-800 hover:bg-gray-900"
        } text-white py-3 rounded-lg font-medium transition-colors">
          ${this.currentLang === "th" ? "เลือกแพ็คเกจ" : "Choose Package"}
        </button>
      </div>
    `
      )
      .join("");
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
