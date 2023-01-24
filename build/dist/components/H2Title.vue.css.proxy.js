// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".subtitle {\n  background-position: left;\n  background-size: contain;\n  background-image: url(\"./img/Vector2.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: 20%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.subtitle h2 {\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 50px;\n  line-height: 63px;\n  color: white;\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  padding-left: 20px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}