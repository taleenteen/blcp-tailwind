// Import HTML template helper สำหรับ syntax highlighting
import { html } from "../utils/template.js";
import { CardComponent } from "../components/card.js";

// Import image assets
import indexBgImage from "../assets/pages/home/section/index_bg.png";

import indexLogo from "../assets/logo/BLCP-02.png";

// Card Images
import featureFirstCard from "../assets/pages/home/cards/feature-first.png";
import featureSecondCard from "../assets/pages/home/cards/feature-second.png";
import featureThirdCard from "../assets/pages/home/cards/feature-third.png";

export default class HomePage {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "th";
    this.currentSlide = 0;
    this.slideInterval = null;

    // Touch handling for mobile
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.minSwipeDistance = 50;

    // Images data
    this.images = [
      {
        indexBg: indexBgImage,
      },
    ];

    // Mock carousel data
    this.carouselData = [
      {
        id: 1,
        title: {
          th: "บริการพัฒนาเว็บไซต์มืออาชีพ",
          en: "Professional Website Development Services",
        },
        subtitle: {
          th: "สร้างเว็บไซต์ที่ทันสมัยและมีประสิทธิภาพสูงสำหรับธุรกิจของคุณ",
          en: "Create modern and high-performance websites for your business",
        },
        cta: {
          th: "เริ่มต้นโปรเจค",
          en: "Start Project",
        },
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        bgColor: "from-blue-600 to-purple-600",
      },
      {
        id: 2,
        title: {
          th: "แอพพลิเคชันมือถือที่ใช้งานง่าย",
          en: "User-Friendly Mobile Applications",
        },
        subtitle: {
          th: "พัฒนาแอพมือถือที่ตอบสนองความต้องการของผู้ใช้อย่างสมบูรณ์",
          en: "Develop mobile apps that perfectly meet user needs",
        },
        cta: {
          th: "ดูผลงาน",
          en: "View Portfolio",
        },
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
        bgColor: "from-green-600 to-blue-600",
      },
      {
        id: 3,
        title: {
          th: "คำปรึกษาเทคโนโลยีระดับมืออาชีพ",
          en: "Professional Technology Consulting",
        },
        subtitle: {
          th: "วางแผนกลยุทธ์ทางเทคโนโลยีเพื่อเติบโตอย่างยั่งยืน",
          en: "Strategic technology planning for sustainable growth",
        },
        cta: {
          th: "ปรึกษาฟรี",
          en: "Free Consultation",
        },
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
        bgColor: "from-purple-600 to-pink-600",
      },
    ];

    // Image assets can be stored locally or fetched from a CDN
  }

  async render(breadcrumbData = []) {
    const { translations } = await import("../data/translations.js");
    const content = document.querySelector("#main-content");

    content.innerHTML = html`
      <div class="space-y-8">
        <!-- Hero Carousel Section -->
        <section
          class="relative overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px]"
        >
          <!-- Carousel Container -->
          <div id="carousel-container" class="relative h-full touch-pan-y">
            ${this.carouselData
              .map(
                (slide, index) => html`
                  <div
                    class="carousel-slide ${index === this.currentSlide
                      ? ""
                      : "hidden"} absolute inset-0 w-full h-full"
                  >
                    <div
                      class="relative h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-center"
                    >
                      <!-- Background Image -->
                      <div class="absolute inset-0 bg-black bg-opacity-40">
                        <img
                          src="${slide.image}"
                          alt="${slide.title[this.currentLang]}"
                          class="w-full h-full object-cover opacity-70"
                        />
                      </div>

                      <!-- Content -->
                      <div
                        class="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-4xl mx-auto"
                      >
                        <h1
                          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
                        >
                          ${slide.title[this.currentLang]}
                        </h1>
                        <p
                          class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
                        >
                          ${slide.subtitle[this.currentLang]}
                        </p>
                        <button
                          onclick="window.location.hash='#services'"
                          class="bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base active:scale-95"
                        >
                          ${slide.cta[this.currentLang]}
                        </button>
                      </div>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>

          <!-- Navigation Arrows - Hidden on small mobile, visible on larger screens -->
          <button
            id="prev-slide"
            class="hidden sm:block absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 text-black p-1.5 md:p-2 rounded-full transition-all duration-300 z-20"
          >
            <svg
              class="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            id="next-slide"
            class="hidden sm:block absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-40 text-black p-1.5 md:p-2 rounded-full transition-all duration-300 z-20"
          >
            <svg
              class="w-4 h-4 md:w-6 md:h-6"
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
          </button>

          <!-- Slide Indicators - Larger and more touch-friendly -->
          <div
            class="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20"
          >
            ${this.carouselData
              .map(
                (_, index) => html`
                  <button
                    class="carousel-indicator w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index ===
                    this.currentSlide
                      ? "bg-white scale-110"
                      : "bg-white bg-opacity-50 hover:bg-opacity-70"} touch-manipulation"
                    data-slide="${index}"
                  ></button>
                `
              )
              .join("")}
          </div>

          <!-- Mobile Swipe Instruction (shows briefly on first load) -->
          <div
            id="swipe-hint"
            class="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-xs opacity-75 z-20 sm:hidden animate-pulse"
          >
            <span>← Swipe to navigate →</span>
          </div>
        </section>

        <!-- Services Section -->

        <!-- CTA Section with Background Image -->
        <section class="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
          <!-- Background Image using Tailwind -->
          <img
            src="${this.images[0].indexBg}"
            alt="Background"
            class="absolute inset-0 w-full h-full object-cover"
          />

          <!-- Content -->
          <div
            class="relative z-10 h-full flex items-center justify-center text-center px-4"
          >
            <div class="max-w-5xl mx-auto text-black">
              <img
                src="${indexLogo}"
                alt="Logo"
                class="w-[277px] h-39 mb-4 mx-auto"
              />
              <p
                class="text-lg font-bold leading-[35px] tracking-normal md:text-3xl mb-8 text-black max-w-3xl mx-auto"
              >
                ${this.currentLang === "th"
                  ? `โรงไฟฟ้าบีแอลซีพีดำเนินธุรกิจผลิตกระแสไฟฟ้า<br>
โดยใช้อุปกรณ์และเทคโนโลยีการผลิตที่ทันสมัยควบคู่กับการบริหารจัดการ<br>
ด้านสิ่งแวดล้อมที่เข้มงวด เพื่อให้สอดคล้องกับมาตรฐานของภาครัฐและเพื่อคำนึงถึงความรู้สึก<br>
และความต้องการของชุมชนเป็นสำคัญ<br>
โรงไฟฟ้าบีแอลซีพีใช้ถ่านหินคุณภาพดีประเภทบิทูบินัสเป็นเชื้อเพลิงซึ่งส่วนใหญ่นำเข้า<br>
มาจากประเทศออสเตรเลียมีกำลังการผลิตรวม 1,434 เมกะวัตต์`
                  : `BLCP Power Plant operates electricity generation business<br>
using modern production equipment and technology coupled with strict<br>
environmental management to comply with government standards and to consider<br>
the feelings and needs of the community as important.<br>
BLCP Power Plant uses high-quality bituminous coal as fuel, most of which is imported<br>
from Australia with a total generating capacity of 1,434 megawatts`}
              </p>
            </div>
          </div>
        </section>

        <!-- First Card Section -->
        <section
          class="bg-surface-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-3 gap-lg-8 justify-items-center px-3 px-lg-6"
        >
          ${this.getFeatureCards()
            .map((card) => CardComponent.featureCard(card))
            .join("")}
        </section>

        <!-- Second Card Section -->
        <section class="bg-surface-secondary flex flex-col px-6 lg:px-12">
          <div
            class="bg-section-green flex flex-col rounded-3xl p-5 px-12 section-shadow"
          >
            <h1
              class="text-5xl font-bold text-surface-primary mb-6 text-center"
            >
              กิจกรรมความรับผิดชอบต่อสังคม
            </h1>
            <div
              class="flex flex-wrap gap-3 gap-lg-8 justify-items-center
         justify-center sm:justify-between"
            >
              ${this.getSocialCards()
                .map((card) => CardComponent.basicCard(card))
                .join("")}
            </div>
            <div class="mt-6 ml-auto">
              <a
                href="#"
                class="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
                >เพิ่มเติม</a
              >
            </div>
          </div>
        </section>

        <!-- 2nd Carousel -->
        <section class="bg-surface-secondary grid md:grid-cols-3 gap-8">
          ${this.getServiceCards(translations)
            .map((card) => CardComponent.featureCard(card))
            .join("")}
        </section>

        <!-- Third Card Section -->
        <section class="bg-surface-secondary grid md:grid-cols-3 gap-8">
          ${this.getServiceCards(translations)
            .map((card) => CardComponent.featureCard(card))
            .join("")}
        </section>

        <section class="bg-surface-secondary grid md:grid-cols-3 gap-8">
          ${this.getServiceCards(translations)
            .map((card) => CardComponent.featureCard(card))
            .join("")}
        </section>
      </div>
    `;

    // Initialize carousel after DOM is ready
    setTimeout(() => {
      this.initCarousel();
    }, 100);
  }

  getServiceCards(translations) {
    return [
      {
        title:
          translations[this.currentLang].sidebar?.webDev || "Web Development",

        bgColor: "from-blue-500 to-blue-600",
        icon: html`
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
            ></path>
          </svg>
        `,
        buttonText:
          this.currentLang === "th" ? "เรียนรู้เพิ่มเติม" : "Learn More",
        onClick: "window.location.hash='#services/web'",
      },
      {
        title:
          translations[this.currentLang].sidebar?.mobileDev ||
          "Mobile Development",
        description:
          this.currentLang === "th"
            ? "พัฒนาแอพพลิเคชันมือถือที่ใช้งานง่ายและตอบสนองผู้ใช้"
            : "Develop user-friendly and responsive mobile applications",
        bgColor: "from-green-500 to-green-600",
        icon: html`
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
            ></path>
          </svg>
        `,
        buttonText:
          this.currentLang === "th" ? "เรียนรู้เพิ่มเติม" : "Learn More",
        onClick: "window.location.hash='#services/mobile'",
      },
      {
        title:
          translations[this.currentLang].sidebar?.consulting || "Consulting",
        description:
          this.currentLang === "th"
            ? "ให้คำปรึกษาและวางแผนกลยุทธ์ทางเทคโนโลยี"
            : "Provide technology consulting and strategic planning",
        bgColor: "from-purple-500 to-purple-600",
        icon: html`
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        `,
        buttonText:
          this.currentLang === "th" ? "เรียนรู้เพิ่มเติม" : "Learn More",
        onClick: "window.location.hash='#services/consulting'",
      },
    ];
  }

  getFeatureCards() {
    return [
      {
        title:
          this.currentLang === "th"
            ? "เทคโนโลยีถ่านหินสะอาด"
            : "Clean Coal Technology",
        backgroundImage: featureFirstCard,
        onClick: "window.location.hash='#services/web'",
      },
      {
        title: this.currentLang === "th" ? "วิสัยทัศน์" : "Vision",
        backgroundImage: featureSecondCard,
        onClick: "window.location.hash='#services/web'",
      },
      {
        title: this.currentLang === "th" ? "รางวัลที่ได้รับ" : "Rewards",
        backgroundImage: featureThirdCard,
        onClick: "window.location.hash='#services/web'",
      },
    ];
  }

  getSocialCards() {
    return [
      {
        title:
          this.currentLang === "th"
            ? "โรงไฟฟ้าบีแอลซีพี จับมือเทศบาล<br>นครเมืองมาบตาพุด แปรรูป<br>ขยะใบไม้เป็นปุ๋ย ลดปัญหา PM 2.5"
            : "Clean Coal Technology",
        backgroundImage: featureFirstCard,
        onClick: "window.location.hash='#services/web'",
      },
      {
        title:
          this.currentLang === "th"
            ? "เทคโนโลยีถ่านบีแอลซีพี สนับสนุนการศึกษา<br> สายอาชีพ ร่วมลงนาม MOU<br> ยกระดับอาชีวศึกษา<br> สู่การพัฒนาคนคุณภาพ"
            : "Clean Coal Technology",
        backgroundImage: featureFirstCard,
        onClick: "window.location.hash='#services/web'",
      },
      {
        title:
          this.currentLang === "th"
            ? "โรงไฟฟ้าบีแอลซีพี ร่วมปล่อยพันธุ์<br>สัตว์น้ำกว่า 1.6 ล้านตัว ต่อเนื่อง<br>เป็นปีที่ 22 สานต่อ ESG"
            : "Vision",
        backgroundImage: featureSecondCard,
        onClick: "window.location.hash='#services/web'",
      },
      {
        title:
          this.currentLang === "th"
            ? "โรงไฟฟ้าบีแอลซีพี สานฝันปั้นช่าง<br>เทคนิค สู่สังคมคุณภาพตอกย้ำ<br>เป้าหมาย SDG 4"
            : "Rewards",
        backgroundImage: featureThirdCard,
        onClick: "window.location.hash='#services/web'",
      },
    ];
  }

  initCarousel() {
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    const indicators = document.querySelectorAll(".carousel-indicator");

    // Previous button
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        this.prevSlide();
      });
    }

    // Next button
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.nextSlide();
      });
    }

    // Indicator buttons
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.goToSlide(index);
      });
    });

    // Auto-play carousel
    this.startAutoPlay();

    // Pause auto-play on hover
    const carouselContainer = document.getElementById("carousel-container");
    if (carouselContainer) {
      // Touch events for mobile swipe
      carouselContainer.addEventListener(
        "touchstart",
        (e) => {
          this.touchStartX = e.changedTouches[0].screenX;
          this.stopAutoPlay(); // Stop auto-play while touching
        },
        { passive: true }
      );

      carouselContainer.addEventListener(
        "touchend",
        (e) => {
          this.touchEndX = e.changedTouches[0].screenX;
          this.handleSwipe();
          this.startAutoPlay(); // Resume auto-play after touch
        },
        { passive: true }
      );

      // Desktop hover events
      carouselContainer.addEventListener("mouseenter", () => {
        this.stopAutoPlay();
      });

      carouselContainer.addEventListener("mouseleave", () => {
        this.startAutoPlay();
      });
    }

    // Hide swipe hint after 3 seconds
    setTimeout(() => {
      const swipeHint = document.getElementById("swipe-hint");
      if (swipeHint) {
        swipeHint.style.opacity = "0";
        setTimeout(() => {
          swipeHint.style.display = "none";
        }, 300);
      }
    }, 3000);
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;

    // Check if swipe distance is significant enough
    if (Math.abs(swipeDistance) < this.minSwipeDistance) {
      return;
    }

    // Determine swipe direction
    if (swipeDistance > 0) {
      // Swipe right - go to previous slide
      this.prevSlide();
    } else {
      // Swipe left - go to next slide
      this.nextSlide();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? this.carouselData.length - 1
        : this.currentSlide - 1;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  updateCarousel() {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".carousel-indicator");

    // Update slides visibility
    slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
      }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.remove("bg-opacity-50");
        indicator.classList.add("bg-white");
      } else {
        indicator.classList.add("bg-opacity-50");
        indicator.classList.remove("bg-white");
      }
    });
  }

  startAutoPlay() {
    this.stopAutoPlay(); // Clear any existing interval
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  destroy() {
    // Clean up any event listeners or resources
    this.stopAutoPlay();
  }
}
