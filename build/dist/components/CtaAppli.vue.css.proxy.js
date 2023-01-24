// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".cta {\n  width: 100%;\n  height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  flex-wrap: wrap;\n}\n.cta h3 {\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 50px;\n  line-height: 63px;\n  background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.cta p {\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 30px;\n  width: 55%;\n  color: #000000;\n}\n.cta img {\n  width: auto;\n  height: 100px;\n}\n.cta .googleplay {\n  width: auto;\n  height: 76.5px;\n}\n.cta .store {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}