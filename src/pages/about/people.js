export default class AboutPeoplePage {
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
            ${translations[this.currentLang].sidebar.allPeople}
          </h1>
          
          <p class="text-gray-600 mb-8 text-lg">
            ${
              this.currentLang === "th"
                ? "ทีมงานของเราประกอบด้วยผู้เชี่ยวชาญที่มีความหลากหลายทางทักษะและประสบการณ์ พร้อมที่จะทำงานร่วมกันเพื่อสร้างสรรค์โซลูชันที่ดีที่สุด"
                : "Our team consists of experts with diverse skills and experiences, ready to work together to create the best solutions."
            }
          </p>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${this.renderTeamMembers()}
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">
            ${this.currentLang === "th" ? "แผนกต่างๆ" : "Departments"}
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${this.renderDepartments()}
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              ${this.currentLang === "th" ? "ร่วมงานกับเรา" : "Join Our Team"}
            </h2>
            <p class="text-xl mb-6">
              ${
                this.currentLang === "th"
                  ? "เรามองหาคนเก่งที่มีความหลงใหลในเทคโนโลยีมาร่วมทีม"
                  : "We are looking for talented people passionate about technology to join our team"
              }
            </p>
            <button onclick="window.location.hash='#contact'" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ${this.currentLang === "th" ? "สมัครงาน" : "Apply Now"}
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

  renderTeamMembers() {
    const teamMembers = [
      {
        name: this.currentLang === "th" ? "นายอนุชา วิชาการ" : "Alex Wilson",
        position: "Senior Full-Stack Developer",
        department: this.currentLang === "th" ? "แผนกพัฒนา" : "Development",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRUZGNkZGIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjOEI1Q0Y2Ii8+CjxwYXRoIGQ9Ik00MCAxxENNc0MCIDExMSA2MS42MTEgOTUgNzUgOTVIODVDMTA5Ljg1MyA5NSAxMzAgMTE1IDE1MSAxNDBWMTUwSDQwVjE0MFoiIGZpbGw9IiM4QjVDRjYiLz4KPC9zdmc+",
        skills: ["React", "Node.js", "TypeScript", "Python"],
      },
      {
        name: this.currentLang === "th" ? "นางสาวสุดา ออกแบบ" : "Emma Davis",
        position: "UX/UI Designer",
        department: this.currentLang === "th" ? "แผนกออกแบบ" : "Design",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRkVGM0Y0Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjRjQ3MkI2Ii8+CjxwYXRoIGQ9Ik00MCAxxxxxxxxx1NDExMSA2MS42MTEgOTUgNzUgOTVIODVDMTA5Ljg1MyA5NSAxMzAgMTE1IDE1MSAxNDBWMTUwSDQwVjE0MFoiIGZpbGw9IiNGNDcyQjYiLz4KPC9zdmc+",
        skills: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
      },
      {
        name: this.currentLang === "th" ? "นายปิยะ มือถือ" : "James Miller",
        position: "Mobile Developer",
        department: this.currentLang === "th" ? "แผนกมือถือ" : "Mobile",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjBGREY0Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjMjJDNTVFIi8+CjxwYXRoIGQ9Ik00MCA1NzQwQzQwIDExNSA2MC4xNDcgOTUgODUgOTVIODVDMTA5Ljg1MyA5NSAxMzAgMTE1IDE1MSAxNDBWMTUwSDQwVjE0MFoiIGZpbGw9IiMyMkM1NUUiLz4KPC9zdmc+",
        skills: ["React Native", "Flutter", "iOS", "Android"],
      },
      {
        name: this.currentLang === "th" ? "นางสาววิมล ทดสอบ" : "Lisa Anderson",
        position: "QA Engineer",
        department: this.currentLang === "th" ? "แผนกควบคุมคุณภาพ" : "QA",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRkVGMkY5Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjQTg1NUY3Ii8+CjxwYXRoIGQ9Ik00MCA3TxkNQzQwIDExNSA2MC4xNDcgOTUgODUgOTVIODVDMTA5Ljg1MyA5NSAxMzAgMTE1IDE1MSAxNDBWMTUwSDQwVjE0MFoiIGZpbGw9IiNBODU1RjciLz4KPC9zdmc+",
        skills: ["Selenium", "Jest", "Cypress", "Postman"],
      },
      {
        name: this.currentLang === "th" ? "นายรัชต์ เครือข่าย" : "Tom Johnson",
        position: "DevOps Engineer",
        department:
          this.currentLang === "th" ? "แผนกโครงสร้าง" : "Infrastructure",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRkZGN0VEIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjRjU5RTBCIi8+CjxwYXRoIGQ9Ik00MCA1OTMMNQJL0wgTESAtNyQwIDExNSA2MC4xNDcgOTUgODUgOTVIODVDMTA5Ljg1MyA5NSAxMzAgMTE1IDE1MSAxNDBWMTUwSDQwVjE0MFoiIGZpbGw9IiNGNTlFMEIiLz4KPC9zdmc+",
        skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      },
      {
        name: this.currentLang === "th" ? "นางสาวนิดา ข้อมูล" : "Rachel Chen",
        position: "Data Analyst",
        department: this.currentLang === "th" ? "แผนกข้อมูล" : "Data",
        image:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRUZGOEZGIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjMDZCNkQ0Ii8+CjxwYXRoIGQ9Ik00MCA1OTUwTSxw0MDE1MTE1IDYwLjE0NyA5NSA4NSA5NUg4NUM14Pxy4G5EAAuc= OTUgOTUgMTMwIDExNSAxNTEgMTQwVjE1MEg0MFYxNDBaIiBmaWxsPSIjMDZCNkQ0Ii8+CjwvX3ZnPgo=",
        skills: ["Python", "SQL", "Tableau", "Power BI"],
      },
    ];

    return teamMembers
      .map(
        (member) => `
      <div class="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
        <img src="${member.image}" alt="${
          member.name
        }" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
        <h3 class="text-lg font-bold text-gray-800 mb-1">${member.name}</h3>
        <p class="text-blue-600 font-medium mb-2">${member.position}</p>
        <p class="text-gray-500 text-sm mb-3">${member.department}</p>
        <div class="flex flex-wrap justify-center gap-1">
          ${member.skills
            .map(
              (skill) => `
            <span class="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">${skill}</span>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  renderDepartments() {
    const departments = [
      {
        name: this.currentLang === "th" ? "แผนกพัฒนา" : "Development",
        count: "12",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "blue",
      },
      {
        name: this.currentLang === "th" ? "แผนกออกแบบ" : "Design",
        count: "8",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
        color: "pink",
      },
      {
        name: this.currentLang === "th" ? "แผนกควบคุมคุณภาพ" : "QA",
        count: "6",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
        color: "green",
      },
      {
        name: this.currentLang === "th" ? "แผนกบริหาร" : "Management",
        count: "4",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
        color: "purple",
      },
    ];

    const colorClasses = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        number: "text-blue-500",
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        number: "text-pink-500",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        number: "text-green-500",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        number: "text-purple-500",
      },
    };

    return departments
      .map((dept) => {
        const colors = colorClasses[dept.color];
        return `
        <div class="text-center p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
          <div class="w-12 h-12 ${
            colors.bg
          } rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 ${
              colors.text
            }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
                dept.icon
              }"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">${dept.name}</h3>
          <p class="text-2xl font-bold ${colors.number} mb-1">${dept.count}</p>
          <p class="text-gray-500 text-sm">
            ${this.currentLang === "th" ? "คน" : "people"}
          </p>
        </div>
      `;
      })
      .join("");
  }

  destroy() {
    // Clean up any event listeners or resources
  }
}
