// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bandeau3 {\n  width: 100%;\n  height: 50vh;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  flex-wrap: wrap !important;\n}\n.bandeau3 h1 {\n  font-size: 60px;\n  color: white;\n  width: 100%;\n  text-align: center;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 60px;\n}\nh1, h2, h3, p {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n}\n.bandeau3 {\n  background-position: center;\n  background-size: contain;\n  background-image: url(\"./img/Vector.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: 15%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}