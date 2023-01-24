// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "footer {\n  width: 100%;\n  height: 118px;\n  background: #FAFAFA;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  align-content: center;\n}\nfooter a {\n  font-family: \"Sora\" !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-size: 12.5px !important;\n  line-height: 25px !important;\n  color: #000000 !important;\n}\nfooter .phone {\n  font-weight: 500 !important;\n}\n.leftFooter {\n  width: 45% !important;\n}\n.leftFooter a {\n  font-family: \"Sora\" !important;\n  font-style: normal !important;\n  font-weight: 800 !important;\n  font-size: 40px !important;\n  line-height: 75px !important;\n  background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n  cursor: pointer;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}