// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h2 {\n  background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-align: center;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 50px;\n  line-height: 63px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}