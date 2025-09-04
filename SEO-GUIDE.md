# 🚀 คู่มือ SEO และ Analytics Setup

## 📊 Google Analytics Setup

### 1. สร้าง Google Analytics Account

1. ไปที่ [Google Analytics](https://analytics.google.com/)
2. สร้าง Account และ Property ใหม่
3. ได้ Measurement ID (รูปแบบ G-XXXXXXXXXX)

### 2. เพิ่ม Google Analytics ในเว็บ

เพิ่มโค้ดนี้ใน `index.html` ในส่วน `<head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### 3. Track Page Views ใน SPA

เพิ่มใน Router class:

```javascript
// ใน handleRoute method
if (typeof gtag !== "undefined") {
  gtag("config", "G-XXXXXXXXXX", {
    page_path: hash,
  });
}
```

## 🔍 Google Search Console Setup

### 1. เพิ่มเว็บไซต์

1. ไปที่ [Google Search Console](https://search.google.com/search-console/)
2. Add Property → URL prefix → ใส่ URL เว็บ
3. Verify ownership ด้วยวิธีใดวิธีหนึ่ง:
   - HTML file upload
   - HTML tag
   - Google Analytics
   - Google Tag Manager

### 2. Submit Sitemap

1. ใน Search Console → Sitemaps
2. Submit sitemap URL: `https://yourwebsite.com/sitemap.xml`

### 3. Request Indexing

- Submit individual URLs for faster indexing
- Use URL Inspection tool

## 🏷️ Meta Tags Best Practices

### Title Tags

- ความยาว: 50-60 ตัวอักษร
- มี keyword หลัก
- unique สำหรับทุกหน้า
- รูปแบบ: "หัวข้อหลัก | ชื่อบริษัท"

### Meta Description

- ความยาว: 150-160 ตัวอักษร
- สรุปเนื้อหาหน้า
- มี call-to-action
- มี keyword ธรรมชาติ

### Keywords

- ใช้ long-tail keywords
- อย่าใส่มากเกินไป
- ควรเป็นภาษาไทย + อังกฤษ

## 🎯 Content SEO Tips

### 1. Heading Structure

```html
<h1>หัวข้อหลักของหน้า (1 ต่อหน้า)</h1>
<h2>หัวข้อรอง</h2>
<h3>หัวข้อย่อย</h3>
```

### 2. Internal Linking

- ใช้ anchor text ที่มีความหมาย
- Link ไปหน้าที่เกี่ยวข้อง
- สร้าง site structure ที่ชัดเจน

### 3. Image SEO

```html
<img
  src="image.jpg"
  alt="คำอธิบายภาพที่ชัดเจน"
  title="หัวข้อภาพ"
  loading="lazy"
/>
```

## 📱 Mobile SEO

### 1. Responsive Design

- ใช้ Tailwind responsive classes
- Test บน mobile devices
- Page speed optimization

### 2. Core Web Vitals

- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

## 🔄 Schema.org Markup

### Organization Schema (เพิ่มแล้ว)

- ข้อมูลบริษัท
- ที่อยู่และการติดต่อ
- Services ที่ให้บริการ

### Breadcrumb Schema

- ใช้ในทุกหน้าที่มี breadcrumb
- ช่วย Google เข้าใจ site structure

### FAQ Schema (ถ้ามี)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "คำถาม",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "คำตอบ"
      }
    }
  ]
}
```

## 🌐 Multi-language SEO

### 1. Hreflang Tags (เพิ่มแล้ว)

```html
<link rel="alternate" hreflang="th" href="https://yourwebsite.com/" />
<link rel="alternate" hreflang="en" href="https://yourwebsite.com/en" />
```

### 2. Language-specific Content

- แยก content สำหรับแต่ละภาษา
- ใช้ keywords ในภาษานั้นๆ
- Cultural localization

## 📊 Monitoring และ Maintenance

### 1. ตรวจสอบประจำ

- Google Search Console errors
- Page loading speed
- Broken links
- Mobile usability

### 2. Content Updates

- อัปเดต sitemap เมื่อมีหน้าใหม่
- Review และปรับปรุง meta tags
- เพิ่ม fresh content

### 3. Performance Tools

- Google PageSpeed Insights
- GTmetrix
- Lighthouse

## 🎯 Local SEO (สำหรับธุรกิจในไทย)

### Google My Business

- สร้าง Google My Business profile
- เพิ่มรูปภาพและข้อมูลครบถ้วน
- รีวิวและการตอบกลับ

### Local Schema

```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "กรุงเทพฯ",
    "addressCountry": "TH"
  }
}
```

## 🔗 Link Building

### 1. Internal Links

- สร้าง site hierarchy ที่ชัดเจน
- Link ไปหน้าที่เกี่ยวข้อง

### 2. External Links

- Partner websites
- Industry directories
- Guest posting

## 📈 Analytics Tracking

### Custom Events

```javascript
gtag("event", "contact_form_submit", {
  event_category: "engagement",
  event_label: "contact_page",
});
```

### Goals Setup

- Contact form submissions
- Service page visits
- Phone clicks

---

**สิ่งสำคัญ:**

1. **Content Quality**: เนื้อหาดีที่มีประโยชน์
2. **User Experience**: เว็บใช้งานง่าย รวดเร็ว
3. **Mobile First**: ออกแบบสำหรับมือถือก่อน
4. **Regular Updates**: อัปเดตเนื้อหาสม่ำเสมอ
