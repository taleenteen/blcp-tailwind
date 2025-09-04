export default class ContactPage {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
  }

  async render(breadcrumbData = []) {
    const { translations } = await import("../data/translations.js");
    const content = document.querySelector("#main-content");

    content.innerHTML = `
      <!-- Breadcrumb -->
      ${this.renderBreadcrumb(breadcrumbData)}
      
      <!-- Page Content -->
      <div class="space-y-8">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-6">
            ${translations[this.currentLang].nav.contact}
          </h1>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-xl font-bold text-gray-800 mb-6">
                ${
                  this.currentLang === "th"
                    ? "ส่งข้อความถึงเรา"
                    : "Send us a Message"
                }
              </h2>
              
              <form id="contact-form" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    ${this.currentLang === "th" ? "ชื่อ-นามสกุล" : "Full Name"}
                  </label>
                  <input type="text" id="name" name="name" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="${
                      this.currentLang === "th"
                        ? "กรอกชื่อ-นามสกุล"
                        : "Enter your full name"
                    }">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    ${this.currentLang === "th" ? "อีเมล" : "Email"}
                  </label>
                  <input type="email" id="email" name="email" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="${
                      this.currentLang === "th"
                        ? "กรอกอีเมล"
                        : "Enter your email"
                    }">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    ${
                      this.currentLang === "th"
                        ? "เบอร์โทรศัพท์"
                        : "Phone Number"
                    }
                  </label>
                  <input type="tel" id="phone" name="phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="${
                      this.currentLang === "th"
                        ? "กรอกเบอร์โทรศัพท์"
                        : "Enter your phone number"
                    }">
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    ${this.currentLang === "th" ? "หัวข้อ" : "Subject"}
                  </label>
                  <select id="subject" name="subject" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
                    <option value="">${
                      this.currentLang === "th"
                        ? "เลือกหัวข้อ"
                        : "Select subject"
                    }</option>
                    <option value="web">${
                      this.currentLang === "th"
                        ? "พัฒนาเว็บไซต์"
                        : "Web Development"
                    }</option>
                    <option value="mobile">${
                      this.currentLang === "th"
                        ? "พัฒนาแอพมือถือ"
                        : "Mobile Development"
                    }</option>
                    <option value="consulting">${
                      this.currentLang === "th" ? "ให้คำปรึกษา" : "Consulting"
                    }</option>
                    <option value="other">${
                      this.currentLang === "th" ? "อื่นๆ" : "Others"
                    }</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    ${this.currentLang === "th" ? "ข้อความ" : "Message"}
                  </label>
                  <textarea id="message" name="message" rows="5" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                    placeholder="${
                      this.currentLang === "th"
                        ? "กรอกข้อความที่ต้องการสอบถาม"
                        : "Enter your message"
                    }"></textarea>
                </div>
                
                <button type="submit" 
                  class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                  ${this.currentLang === "th" ? "ส่งข้อความ" : "Send Message"}
                </button>
              </form>
            </div>
            
            <!-- Contact Information -->
            <div>
              <h2 class="text-xl font-bold text-gray-800 mb-6">
                ${
                  this.currentLang === "th"
                    ? "ข้อมูลการติดต่อ"
                    : "Contact Information"
                }
              </h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">
                      ${this.currentLang === "th" ? "ที่อยู่" : "Address"}
                    </h3>
                    <p class="text-gray-600">${
                      translations[this.currentLang].footer.address
                    }</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">
                      ${this.currentLang === "th" ? "โทรศัพท์" : "Phone"}
                    </h3>
                    <p class="text-gray-600">02-123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">
                      ${this.currentLang === "th" ? "อีเมล" : "Email"}
                    </h3>
                    <p class="text-gray-600">info@abc.co.th</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">
                      ${
                        this.currentLang === "th"
                          ? "เวลาทำการ"
                          : "Business Hours"
                      }
                    </h3>
                    <p class="text-gray-600">
                      ${
                        this.currentLang === "th"
                          ? "จันทร์ - ศุกร์: 9:00 - 18:00"
                          : "Monday - Friday: 9:00 AM - 6:00 PM"
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                  ${this.currentLang === "th" ? "ติดตามเรา" : "Follow Us"}
                </h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 class="text-xl font-bold text-gray-800 p-6 pb-4">
            ${this.currentLang === "th" ? "แผนที่" : "Map"}
          </h2>
          <div class="w-full h-80 bg-gray-200 flex items-center justify-center">
            <p class="text-gray-500">
              ${
                this.currentLang === "th"
                  ? "แผนที่จะแสดงที่นี่"
                  : "Map will be displayed here"
              }
            </p>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
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

  bindEvents() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmit(e);
      });
    }
  }

  handleFormSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent =
      this.currentLang === "th" ? "กำลังส่ง..." : "Sending...";

    setTimeout(() => {
      alert(
        this.currentLang === "th"
          ? "ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับในไม่ช้า"
          : "Your message has been sent successfully. We will contact you soon."
      );

      e.target.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 2000);
  }

  destroy() {
    // Clean up any event listeners or resources
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.removeEventListener("submit", this.handleFormSubmit);
    }
  }
}
