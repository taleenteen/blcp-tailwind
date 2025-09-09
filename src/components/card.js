import { html } from "../utils/template.js";

export class CardComponent {
  // Card แบบที่ 1: Basic Card - สำหรับการแสดงข้อมูลทั่วไป
  static basicCard(data) {
    return html`
      <div
        class="relative bg-white rounded-lg overflow-hidden w-[225px] hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group shadow-md hover:shadow-lg flex flex-col"
        onclick="${data.onClick || `window.location.href='${data.link}'`}"
      >
        <!-- Image Section (Top) -->
        <div class="h-40 overflow-hidden flex-shrink-0">
          <img
            src="${data.backgroundImage || data.image}"
            alt="${data.title}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <!-- Content Section (Bottom) -->
        <div class="flex flex-col flex-1 p-4">
          <!-- Title/Description Area - Takes available space -->
          <div class="flex-1">
            <h3
              class="text-sm font-semibold text-gray-800 leading-relaxed line-clamp-4"
            >
              ${data.title || data.description}
            </h3>
          </div>

          <!-- Arrow Button (Bottom Right) - Always at bottom -->
          <div class="flex justify-end mt-3">
            <div
              class="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Card แบบที่ 2: Feature Card - สำหรับแสดงฟีเจอร์หรือบริการ
  static featureCard(data) {
    return html`
      <div
        class="relative rounded-2xl overflow-hidden w-[300px] h-[300px] hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
        onclick="${data.onClick}"
      >
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <!-- Overlay -->
          <div
            class="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300"
          >
            <img
              src="${data.backgroundImage || data.image}"
              alt="${data.title}"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Content positioned at bottom -->
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <div class="flex items-end justify-between">
            <!-- Left space (empty) -->
            <div class="flex-1"></div>

            <!-- Center - Title -->
            <div class="flex-2 text-center">
              <h3 class="text-3xl font-bold text-white text-shadow mb-0">
                ${data.title}
              </h3>
            </div>

            <!-- Right - Arrow Button -->
            <div class="flex-1 flex justify-end">
              <div
                class="w-8 h-8 bg-card bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Card แบบที่ 3: Product/Content Card - ใช้ซ้ำบ่อย + รองรับ pagination
  static productCard(data) {
    return html`
      <div
        class="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden group"
      >
        <div class="relative overflow-hidden">
          <img
            src="${data.image}"
            alt="${data.title}"
            class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          ${data.badge
            ? html`
                <span
                  class="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                >
                  ${data.badge}
                </span>
              `
            : ""}
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-blue-600 font-medium"
              >${data.category}</span
            >
            <span class="text-sm text-gray-400">${data.date}</span>
          </div>
          <h3
            class="text-lg font-semibold mb-2 line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors"
          >
            ${data.title}
          </h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">${data.excerpt}</p>
          <div class="flex items-center justify-between">
            <a
              href="${data.link}"
              class="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors inline-flex items-center"
            >
              อ่านเพิ่มเติม
              <svg
                class="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
            ${data.price
              ? html`
                  <span class="font-bold text-green-600">${data.price}</span>
                `
              : ""}
          </div>
        </div>
      </div>
    `;
  }

  // Card แบบที่ 4: Team Member Card - สำหรับแสดงทีมงาน
  static teamCard(data) {
    return html`
      <div
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
      >
        <div class="relative mb-4">
          <img
            src="${data.image}"
            alt="${data.name}"
            class="w-24 h-24 rounded-full mx-auto object-cover"
            loading="lazy"
          />
          ${data.isOnline
            ? html`
                <span
                  class="absolute bottom-0 right-1/2 transform translate-x-6 w-6 h-6 bg-green-500 border-2 border-white rounded-full"
                ></span>
              `
            : ""}
        </div>
        <h3 class="text-xl font-bold mb-1 text-gray-800">${data.name}</h3>
        <p class="text-blue-600 font-medium mb-2">${data.position}</p>
        <p class="text-gray-600 text-sm mb-4">${data.description}</p>
        ${data.social
          ? html`
              <div class="flex justify-center space-x-3">
                ${data.social
                  .map(
                    (social) => html`
                      <a
                        href="${social.url}"
                        class="text-gray-400 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ${social.icon}
                      </a>
                    `
                  )
                  .join("")}
              </div>
            `
          : ""}
      </div>
    `;
  }

  // Card แบบที่ 5: Testimonial Card - สำหรับแสดงรีวิว
  static testimonialCard(data) {
    return html`
      <div class="bg-white rounded-lg shadow-md p-6 relative">
        <div class="text-yellow-400 mb-4">
          ${Array.from({ length: data.rating || 5 }, () => "★").join("")}
        </div>
        <blockquote class="text-gray-600 italic mb-4">
          "${data.testimonial}"
        </blockquote>
        <div class="flex items-center">
          <img
            src="${data.avatar}"
            alt="${data.name}"
            class="w-12 h-12 rounded-full object-cover mr-3"
            loading="lazy"
          />
          <div>
            <h4 class="font-semibold text-gray-800">${data.name}</h4>
            <p class="text-sm text-gray-500">${data.company}</p>
          </div>
        </div>
        <svg
          class="absolute top-4 right-4 w-8 h-8 text-gray-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
          />
        </svg>
      </div>
    `;
  }
}
