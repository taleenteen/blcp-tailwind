export default class AboutLeaderPage {
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
            ${translations[this.currentLang].sidebar.leadership}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "ทีมผู้บริหารของเราประกอบด้วยผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 15 ปี ในอุตสาหกรรมเทคโนโลยี"
                : "Our leadership team consists of experts with over 15 years of experience in the technology industry."
            }
          </p>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${this.renderLeadershipTeam()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${
              this.currentLang === "th"
                ? "ค่านิยมของผู้นำ"
                : "Leadership Values"
            }
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  ${this.currentLang === "th" ? "นวัตกรรม" : "Innovation"}
                </h3>
                <p class="text-gray-600">
                  ${
                    this.currentLang === "th"
                      ? "เราส่งเสริมการคิดสร้างสรรค์และการใช้เทคโนโลยีใหม่ๆ เพื่อแก้ไขปัญหา"
                      : "We promote creativity and the use of new technologies to solve problems."
                  }
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  ${this.currentLang === "th" ? "ความร่วมมือ" : "Collaboration"}
                </h3>
                <p class="text-gray-600">
                  ${
                    this.currentLang === "th"
                      ? "การทำงานเป็นทีมและการสื่อสารที่เปิดเผยเป็นกุญแจสำคัญของความสำเร็จ"
                      : "Teamwork and open communication are key to our success."
                  }
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  ${this.currentLang === "th" ? "คุณภาพ" : "Quality"}
                </h3>
                <p class="text-gray-600">
                  ${
                    this.currentLang === "th"
                      ? "เรามุ่งมั่นในการส่งมอบผลงานที่มีคุณภาพสูงสุดให้กับลูกค้าทุกราย"
                      : "We are committed to delivering the highest quality work to all our clients."
                  }
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-2">
                  ${this.currentLang === "th" ? "ความโปร่งใส" : "Transparency"}
                </h3>
                <p class="text-gray-600">
                  ${
                    this.currentLang === "th"
                      ? "เราให้ความสำคัญกับความซื่อสัตย์และความโปร่งใสในการดำเนินธุรกิจ"
                      : "We value honesty and transparency in all our business operations."
                  }
                </p>
              </div>
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

  renderLeadershipTeam() {
    const leaders = [
      {
        name: this.currentLang === "th" ? "นายสมชาย ใจดี" : "John Smith",
        position: "Chief Executive Officer (CEO)",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzNSIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNTAgMTYwQzUwIDEzNS4xNDcgNzAuMTQ3IDExNSA5NSAxMTVIMTA1QzEyOS44NTMgMTE1IDE1MCAxMzUuMTQ3IDE1MCAxNjBWMjAwSDUwVjE2MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+",
        bio:
          this.currentLang === "th"
            ? "ผู้นำองค์กรที่มีประสบการณ์มากกว่า 20 ปี ในอุตสาหกรรมเทคโนโลยี มีความเชี่ยวชาญด้านการบริหารจัดการและกลยุทธ์องค์กร"
            : "Organizational leader with over 20 years of experience in the technology industry. Expert in management and corporate strategy.",
      },
      {
        name: this.currentLang === "th" ? "นางสาวมาลี เก่งดี" : "Sarah Johnson",
        position: "Chief Technology Officer (CTO)",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkVGM0Y0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzNSIgZmlsbD0iI0Y0NzJCNiIvPgo8cGF0aCBkPSJNNTAgMTYwQzUwIDEzNS4xNDcgNzAuMTQ3IDExNSA5NSAxMTVIMTA1QzEyOS44NTMgMTE1IDE1MCAxMzUuMTQ3IDE1MCAxNjBWMjAwSDUwVjE2MFoiIGZpbGw9IiNGNDcyQjYiLz4KPC9zdmc+",
        bio:
          this.currentLang === "th"
            ? "ผู้เชี่ยวชาญด้านเทคโนโลยีที่มีประสบการณ์ 15 ปี ในการพัฒนาซอฟต์แวร์และสถาปัตยกรรมระบบ"
            : "Technology expert with 15 years of experience in software development and system architecture.",
      },
      {
        name: this.currentLang === "th" ? "นายวิชัย รักงาน" : "Michael Brown",
        position: "Chief Financial Officer (CFO)",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGREY0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzNSIgZmlsbD0iIzIyQzU1RSIvPgo8cGF0aCBkPSJNNTAgMTYwQzUwIDEzNS4xNDcgNzAuMTQ3IDExNSA5NSAxMTVIMTA1QzEyOS44NTMgMTE1IDE1MCAxMzUuMTQ3IDE1MCAxNjBWMjAwSDUwVjE2MFoiIGZpbGw9IiMyMkM1NUUiLz4KPC9zdmc+",
        bio:
          this.currentLang === "th"
            ? "ผู้เชี่ยวชาญด้านการเงินที่มีประสบการณ์ 18 ปี ในบริษัทเทคโนโลยีและการลงทุน"
            : "Financial expert with 18 years of experience in technology companies and investments.",
      },
    ];

    return leaders
      .map(
        (leader) => `
      <div class="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
        <img src="${leader.image}" alt="${leader.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
        <h3 class="text-xl font-bold text-gray-800 mb-2">${leader.name}</h3>
        <p class="text-blue-600 font-medium mb-3">${leader.position}</p>
        <p class="text-gray-600 text-sm">${leader.bio}</p>
      </div>
    `
      )
      .join("");
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
