export class BrowserUtils {
  // Decodes HTML encoded characters (like &amp;) into their displayed value.
  // Example: "&lt;b&gt;test&lt;/b&gt" becomes "<b>test</b>"
  static decodeHtmlEntities(text) {
    if (typeof DOMParser === "undefined") {
      return text;
    }
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || "";
  }
}
export default BrowserUtils;
//# sourceMappingURL=BrowserUtils.js.map
