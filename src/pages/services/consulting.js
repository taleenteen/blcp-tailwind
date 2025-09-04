export default class ConsultingPage {
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
            ${translations[this.currentLang].sidebar.consulting}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "บริการให้คำปรึกษาด้านเทคโนโลยี และแนวทางการดิจิทัลทรานส์ฟอร์เมชั่น เพื่อเพิ่มประสิทธิภาพและการแข่งขันของธุรกิจคุณ"
                : "Technology consulting services and digital transformation guidance to enhance your business efficiency and competitiveness."
            }
          </p>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            ${this.renderConsultingServices()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "ด้านที่เราให้คำปรึกษา"
                : "Our Consulting Areas"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${this.renderConsultingAreas()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "กระบวนการให้คำปรึกษา"
                : "Consulting Process"
            }
          </h2>
          
          <div class="space-y-6">
            ${this.renderConsultingProcess()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "ประเภทการให้คำปรึกษา"
                : "Consulting Types"
            }
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            ${this.renderConsultingTypes()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${
                this.currentLang === "th"
                  ? "ต้องการคำปรึกษาด้านเทคโนโลยี?"
                  : "Need Technology Consulting?"
              }
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "พูดคุยกับผู้เชี่ยวชาญของเราเพื่อหาทางออกที่เหมาะสม"
                  : "Talk to our experts to find the right solution"
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

  renderConsultingServices() {
    const services = [
      {
        title:
          this.currentLang === "th"
            ? "Digital Transformation"
            : "Digital Transformation",
        desc:
          this.currentLang === "th"
            ? "แนวทางการดิจิทัลทรานส์ฟอร์เมชั่น"
            : "Digital transformation strategies",
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        color: "from-blue-500 to-purple-600",
      },
      {
        title:
          this.currentLang === "th"
            ? "System Architecture"
            : "System Architecture",
        desc:
          this.currentLang === "th"
            ? "ออกแบบสถาปัตยกรรมระบบ"
            : "System architecture design",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        color: "from-green-500 to-teal-600",
      },
      {
        title:
          this.currentLang === "th"
            ? "Process Optimization"
            : "Process Optimization",
        desc:
          this.currentLang === "th"
            ? "ปรับปรุงกระบวนการทำงาน"
            : "Workflow process improvement",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "from-orange-500 to-red-600",
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

  renderConsultingAreas() {
    const areas = [
      {
        title:
          this.currentLang === "th"
            ? "Technology Strategy"
            : "Technology Strategy",
        items: [
          this.currentLang === "th" ? "วางแผนเทคโนโลยี" : "Technology planning",
          this.currentLang === "th"
            ? "การเลือกเทคโนโลยี"
            : "Technology selection",
          this.currentLang === "th" ? "การบริหารความเสี่ยง" : "Risk management",
          this.currentLang === "th"
            ? "การลงทุนด้านเทคโนโลยี"
            : "Technology investment",
        ],
      },
      {
        title:
          this.currentLang === "th" ? "Digital Solutions" : "Digital Solutions",
        items: [
          this.currentLang === "th" ? "ระบบ ERP" : "ERP Systems",
          this.currentLang === "th" ? "ระบบ CRM" : "CRM Systems",
          this.currentLang === "th"
            ? "E-commerce Platform"
            : "E-commerce Platform",
          this.currentLang === "th" ? "Cloud Migration" : "Cloud Migration",
        ],
      },
      {
        title:
          this.currentLang === "th" ? "Data & Analytics" : "Data & Analytics",
        items: [
          this.currentLang === "th" ? "Data Warehouse" : "Data Warehouse",
          this.currentLang === "th"
            ? "Business Intelligence"
            : "Business Intelligence",
          this.currentLang === "th" ? "Data Analytics" : "Data Analytics",
          this.currentLang === "th" ? "Machine Learning" : "Machine Learning",
        ],
      },
      {
        title:
          this.currentLang === "th"
            ? "Security & Compliance"
            : "Security & Compliance",
        items: [
          this.currentLang === "th" ? "Cybersecurity" : "Cybersecurity",
          this.currentLang === "th" ? "Data Protection" : "Data Protection",
          this.currentLang === "th"
            ? "Compliance Management"
            : "Compliance Management",
          this.currentLang === "th" ? "Security Audit" : "Security Audit",
        ],
      },
    ];

    return areas
      .map(
        (area) => `
      <div class="bg-gray-50 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-800 mb-4">${area.title}</h3>
        <ul class="space-y-2">
          ${area.items
            .map(
              (item) => `
            <li class="flex items-center text-gray-600">
              <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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

  renderConsultingProcess() {
    const steps = [
      {
        number: "01",
        title:
          this.currentLang === "th"
            ? "Discovery & Assessment"
            : "Discovery & Assessment",
        desc:
          this.currentLang === "th"
            ? "วิเคราะห์สถานการณ์ปัจจุบัน และความต้องการของธุรกิจ"
            : "Analyze current situation and business requirements",
        color: "blue",
      },
      {
        number: "02",
        title:
          this.currentLang === "th"
            ? "Strategy Development"
            : "Strategy Development",
        desc:
          this.currentLang === "th"
            ? "พัฒนาแผนยุทธศาสตร์ด้านเทคโนโลยี"
            : "Develop technology strategy and roadmap",
        color: "green",
      },
      {
        number: "03",
        title:
          this.currentLang === "th"
            ? "Implementation Planning"
            : "Implementation Planning",
        desc:
          this.currentLang === "th"
            ? "วางแผนการดำเนินการและการบริหารโครงการ"
            : "Create implementation plan and project management",
        color: "purple",
      },
      {
        number: "04",
        title:
          this.currentLang === "th"
            ? "Support & Monitoring"
            : "Support & Monitoring",
        desc:
          this.currentLang === "th"
            ? "ติดตามผลและให้การสนับสนุนอย่างต่อเนื่อง"
            : "Ongoing support and progress monitoring",
        color: "orange",
      },
    ];

    const colorClasses = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    };

    return steps
      .map(
        (step, index) => `
      <div class="flex items-start">
        <div class="w-20 h-20 ${
          colorClasses[step.color]
        } border-2 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
          ${step.number}
        </div>
        <div class="pt-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${step.title}</h3>
          <p class="text-gray-600">${step.desc}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderConsultingTypes() {
    const types = [
      {
        title:
          this.currentLang === "th"
            ? "Short-term Consulting"
            : "Short-term Consulting",
        duration: this.currentLang === "th" ? "1-3 เดือน" : "1-3 months",
        desc:
          this.currentLang === "th"
            ? "โปรเจคเฉพาะเรื่อง"
            : "Specific project consulting",
        features: [
          this.currentLang === "th"
            ? "แก้ปัญหาเฉพาะด้าน"
            : "Solve specific issues",
          this.currentLang === "th"
            ? "วิเคราะห์และแนะนำ"
            : "Analysis and recommendations",
          this.currentLang === "th" ? "รายงานผล" : "Final report",
        ],
      },
      {
        title:
          this.currentLang === "th"
            ? "Long-term Partnership"
            : "Long-term Partnership",
        duration: this.currentLang === "th" ? "6-12 เดือน" : "6-12 months",
        desc:
          this.currentLang === "th"
            ? "พันธมิตรระยะยาว"
            : "Long-term partnership",
        features: [
          this.currentLang === "th" ? "ที่ปรึกษาประจำ" : "Dedicated consultant",
          this.currentLang === "th"
            ? "ติดตามอย่างต่อเนื่อง"
            : "Continuous monitoring",
          this.currentLang === "th" ? "การสนับสนุน 24/7" : "24/7 support",
        ],
      },
      {
        title:
          this.currentLang === "th"
            ? "Training & Workshop"
            : "Training & Workshop",
        duration: this.currentLang === "th" ? "1-5 วัน" : "1-5 days",
        desc:
          this.currentLang === "th"
            ? "อบรมเชิงปฏิบัติการ"
            : "Hands-on training",
        features: [
          this.currentLang === "th" ? "อบรมเชิงปฏิบัติ" : "Practical training",
          this.currentLang === "th" ? "ถ่ายทอดความรู้" : "Knowledge transfer",
          this.currentLang === "th" ? "เอกสารประกอบ" : "Training materials",
        ],
      },
    ];

    return types
      .map(
        (type) => `
      <div class="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-blue-300 transition-colors">
        <div class="text-center mb-4">
          <h3 class="text-lg font-bold text-gray-800 mb-1">${type.title}</h3>
          <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">${
            type.duration
          }</span>
        </div>
        <p class="text-gray-600 text-center mb-4">${type.desc}</p>
        <ul class="space-y-2">
          ${type.features
            .map(
              (feature) => `
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              ${feature}
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

  destroy() {
    // Clean up any event listeners or resources
  }
}
