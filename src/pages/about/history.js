export default class AboutHistoryPage {
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
            ${translations[this.currentLang].sidebar.history}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "ตั้งแต่การก่อตั้งในปี 2013 บริษัทของเราได้เติบโตและพัฒนาอย่างต่อเนื่อง จากทีมเล็กๆ สู่องค์กรที่มีความเชี่ยวชาญด้านเทคโนโลยี"
                : "Since our founding in 2013, our company has grown and developed continuously from a small team to a technology expert organization."
            }
          </p>
          
          <div class="relative">
            <!-- Timeline -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div class="space-y-12">
              ${this.renderTimeline()}
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "ความสำเร็จที่สำคัญ"
                : "Key Achievements"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${this.renderAchievements()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "รางวัลที่ได้รับ"
                : "Awards & Recognition"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            ${this.renderAwards()}
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

  renderTimeline() {
    const timelineEvents = [
      {
        year: "2013",
        title:
          this.currentLang === "th" ? "การก่อตั้งบริษัท" : "Company Founded",
        desc:
          this.currentLang === "th"
            ? "ก่อตั้งบริษัท ABC จำกัด โดยทีมผู้ก่อตั้ง 3 คน ด้วยจุดมุ่งหมายให้บริการพัฒนาซอฟต์แวร์"
            : "ABC Company Limited was founded by 3 founders with the goal of providing software development services",
      },
      {
        year: "2015",
        title: this.currentLang === "th" ? "ขยายทีมงาน" : "Team Expansion",
        desc:
          this.currentLang === "th"
            ? "ขยายทีมงานเป็น 10 คน และเริ่มรับงานโปรเจคขนาดใหญ่จากลูกค้าองค์กร"
            : "Expanded the team to 10 people and started taking on large projects from corporate clients",
      },
      {
        year: "2017",
        title:
          this.currentLang === "th" ? "เปิดสาขาใหม่" : "New Branch Opening",
        desc:
          this.currentLang === "th"
            ? "เปิดสำนักงานสาขาที่สอง และเริ่มให้บริการพัฒนาแอพพลิเคชันมือถือ"
            : "Opened our second office and began offering mobile application development services",
      },
      {
        year: "2019",
        title:
          this.currentLang === "th" ? "การรับรอง ISO" : "ISO Certification",
        desc:
          this.currentLang === "th"
            ? "ได้รับการรับรอง ISO 9001:2015 สำหรับมาตรฐานการจัดการคุณภาพ"
            : "Received ISO 9001:2015 certification for quality management standards",
      },
      {
        year: "2021",
        title: this.currentLang === "th" ? "บริการ Cloud" : "Cloud Services",
        desc:
          this.currentLang === "th"
            ? "เริ่มให้บริการด้าน Cloud Computing และ DevOps เพื่อตอบสนองความต้องการที่เปลี่ยนแปลง"
            : "Started offering Cloud Computing and DevOps services to meet changing demands",
      },
      {
        year: "2023",
        title:
          this.currentLang === "th"
            ? "AI และ Machine Learning"
            : "AI & Machine Learning",
        desc:
          this.currentLang === "th"
            ? "เริ่มพัฒนาและให้บริการโซลูชัน AI และ Machine Learning สำหรับลูกค้า"
            : "Started developing and offering AI and Machine Learning solutions for clients",
      },
      {
        year: "2025",
        title: this.currentLang === "th" ? "ปัจจุบัน" : "Present",
        desc:
          this.currentLang === "th"
            ? "ทีมงานกว่า 50 คน พร้อมให้บริการครบวงจรด้านเทคโนโลยีสารสนเทศ"
            : "Over 50 team members providing comprehensive information technology services",
      },
    ];

    return timelineEvents
      .map(
        (event, index) => `
      <div class="relative flex items-start">
        <div class="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
        <div class="ml-16">
          <div class="flex items-center mb-2">
            <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
              ${event.year}
            </span>
            <h3 class="text-xl font-bold text-gray-800">${event.title}</h3>
          </div>
          <p class="text-gray-600">${event.desc}</p>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderAchievements() {
    const achievements = [
      {
        number: "100+",
        label:
          this.currentLang === "th" ? "โปรเจคสำเร็จ" : "Completed Projects",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      },
      {
        number: "50+",
        label:
          this.currentLang === "th" ? "ลูกค้าที่พึงพอใจ" : "Satisfied Clients",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      },
      {
        number: "12",
        label:
          this.currentLang === "th" ? "ปีประสบการณ์" : "Years of Experience",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        number: "24/7",
        label: this.currentLang === "th" ? "การสนับสนุน" : "Support Available",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.458V6m0 12v3.542M2.458 12H6m12 0h3.542",
      },
    ];

    return achievements
      .map(
        (item) => `
      <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
        <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}"></path>
          </svg>
        </div>
        <div class="text-3xl font-bold text-blue-600 mb-2">${item.number}</div>
        <p class="text-gray-600">${item.label}</p>
      </div>
    `
      )
      .join("");
  }

  renderAwards() {
    const awards = [
      {
        year: "2020",
        title:
          this.currentLang === "th"
            ? "รางวัลบริษัทเทคโนโลยียอดเยี่ยม"
            : "Excellence in Technology Award",
        org:
          this.currentLang === "th"
            ? "สมาคมเทคโนโลยีไทย"
            : "Thailand Technology Association",
        desc:
          this.currentLang === "th"
            ? "ได้รับการยอมรับในด้านนวัตกรรมและคุณภาพการให้บริการ"
            : "Recognized for innovation and service quality",
      },
      {
        year: "2022",
        title:
          this.currentLang === "th"
            ? "รางวัลลูกค้าพึงพอใจสูงสุด"
            : "Highest Customer Satisfaction Award",
        org:
          this.currentLang === "th"
            ? "หอการค้าไทย"
            : "Thai Chamber of Commerce",
        desc:
          this.currentLang === "th"
            ? "จากการสำรวจความพึงพอใจของลูกค้าที่สูงกว่า 95%"
            : "Based on customer satisfaction survey exceeding 95%",
      },
    ];

    return awards
      .map(
        (award) => `
      <div class="flex items-start p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
        <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
          <svg class="w-8 h-8 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
        </div>
        <div>
          <div class="flex items-center mb-2">
            <span class="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
              ${award.year}
            </span>
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">${award.title}</h3>
          <p class="text-blue-600 font-medium mb-2">${award.org}</p>
          <p class="text-gray-600 text-sm">${award.desc}</p>
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
