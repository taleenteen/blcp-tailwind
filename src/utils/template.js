/**
 * HTML Template Literal Helper for VS Code Syntax Highlighting
 *
 * ใช้งาน: แทนที่จะเขียน content.innerHTML = `<div>...</div>`
 * ให้เขียน content.innerHTML = html`<div>...</div>`
 *
 * VS Code จะเห็น HTML syntax highlighting อัตโนมัติ
 */

// Tagged template literal function สำหรับ HTML
export const html = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
};

// CSS template literal (ถ้าต้องการ)
export const css = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
};

// JavaScript template literal (ถ้าต้องการ)
export const js = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
};
