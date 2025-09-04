export default class AboutCompanyPage {
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
            ${translations[this.currentLang].sidebar.companyInfo}
          </h1>
          
          <div class="prose prose-lg max-w-none">
            <h2 class="text-2xl font-bold mb-4">
              ${this.currentLang === "th" ? "วิสัยทัศน์" : "Vision"}
            </h2>
            <p class="text-gray-600 mb-6">
              ${
                this.currentLang === "th"
                  ? "เป็นบริษัทเทคโนโลยีชั้นนำที่สร้างโซลูชันนวัตกรรมเพื่อยกระดับคุณภาพชีวิตของผู้คน และการดำเนินธุรกิจขององค์กรต่างๆ ทั่วโลก"
                  : "To be a leading technology company creating innovative solutions to improve people's quality of life and business operations of organizations worldwide."
              }
            </p>

            <h2 class="text-2xl font-bold mb-4">
              ${this.currentLang === "th" ? "พันธกิจ" : "Mission"}
            </h2>
            <ul class="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>
                ${
                  this.currentLang === "th"
                    ? "พัฒนาซอฟต์แวร์และระบบเทคโนโลยีที่มีคุณภาพสูงและตอบสนองความต้องการของลูกค้า"
                    : "Develop high-quality software and technology systems that meet customer needs"
                }
              </li>
              <li>
                ${
                  this.currentLang === "th"
                    ? "ให้บริการที่ปรึกษาและสนับสนุนที่ครบถ้วนเพื่อให้ลูกค้าประสบความสำเร็จ"
                    : "Provide comprehensive consulting and support services for customer success"
                }
              </li>
              <li>
                ${
                  this.currentLang === "th"
                    ? "สร้างนวัตกรรมและใช้เทคโนโลยีที่ทันสมัยเพื่อแก้ไขปัญหาที่ซับซ้อน"
                    : "Create innovations and use modern technology to solve complex problems"
                }
              </li>
              <li>
                ${
                  this.currentLang === "th"
                    ? "พัฒนาทีมงานและสร้างสภาพแวดล้อมการทำงานที่ดี"
                    : "Develop our team and create a positive work environment"
                }
              </li>
            </ul>

            <h2 class="text-2xl font-bold mb-4">
              ${this.currentLang === "th" ? "ค่านิยมองค์กร" : "Core Values"}
            </h2>
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              ${this.renderCoreValues()}
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th" ? "ข้อมูลบริษัท" : "Company Information"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-3">
                ${
                  this.currentLang === "th"
                    ? "ข้อมูลทั่วไป"
                    : "General Information"
                }
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li><strong>${
                  this.currentLang === "th" ? "ชื่อบริษัท:" : "Company Name:"
                }</strong> ${translations[this.currentLang].company}</li>
                <li><strong>${
                  this.currentLang === "th" ? "ปีที่ก่อตั้ง:" : "Founded:"
                }</strong> 2013</li>
                <li><strong>${
                  this.currentLang === "th" ? "จำนวนพนักงาน:" : "Employees:"
                }</strong> 50+</li>
                <li><strong>${
                  this.currentLang === "th" ? "ประเทศ:" : "Country:"
                }</strong> ${
      this.currentLang === "th" ? "ประเทศไทย" : "Thailand"
    }</li>
                <li><strong>${
                  this.currentLang === "th" ? "อุตสาหกรรม:" : "Industry:"
                }</strong> ${
      this.currentLang === "th" ? "เทคโนโลยีสารสนเทศ" : "Information Technology"
    }</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-3">
                ${
                  this.currentLang === "th"
                    ? "การติดต่อ"
                    : "Contact Information"
                }
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li><strong>${
                  this.currentLang === "th" ? "ที่อยู่:" : "Address:"
                }</strong> ${translations[this.currentLang].footer.address}</li>
                <li><strong>${
                  this.currentLang === "th" ? "โทรศัพท์:" : "Phone:"
                }</strong> 02-123-4567</li>
                <li><strong>${
                  this.currentLang === "th" ? "อีเมล:" : "Email:"
                }</strong> info@abc.co.th</li>
                <li><strong>${
                  this.currentLang === "th" ? "เว็บไซต์:" : "Website:"
                }</strong> www.abc.co.th</li>
              </ul>
            </div>
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

  renderCoreValues() {
    const values = [
      {
        title: this.currentLang === "th" ? "ความซื่อสัตย์" : "Integrity",
        desc:
          this.currentLang === "th"
            ? "ดำเนินธุรกิจด้วยความโปร่งใสและจริงใจ"
            : "Conduct business with transparency and sincerity",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      },
      {
        title: this.currentLang === "th" ? "ความเป็นเลิศ" : "Excellence",
        desc:
          this.currentLang === "th"
            ? "มุ่งมั่นส่งมอบผลงานที่มีคุณภาพสูงสุด"
            : "Committed to delivering the highest quality work",
        icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      },
      {
        title: this.currentLang === "th" ? "การเรียนรู้" : "Learning",
        desc:
          this.currentLang === "th"
            ? "พัฒนาตนเองและเรียนรู้เทคโนโลยีใหม่อย่างต่อเนื่อง"
            : "Continuously develop ourselves and learn new technologies",
        icon: "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      },
      {
        title: this.currentLang === "th" ? "ความรับผิดชอบ" : "Responsibility",
        desc:
          this.currentLang === "th"
            ? "รับผิดชอบต่อผลงาน ลูกค้า และสังคม"
            : "Responsible for our work, customers, and society",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
    ];

    return values
      .map(
        (value) => `
      <div class="flex items-start">
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${value.icon}"></path>
          </svg>
        </div>
        <div>
          <h4 class="font-semibold text-gray-800 mb-1">${value.title}</h4>
          <p class="text-gray-600 text-sm">${value.desc}</p>
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
