// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "button {\n  padding: 10px 30px 10px 30px;\n  border: 0px;\n  color: white;\n  transition: all 0.3s ease-in-out;\n  background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);\n  border-radius: 14px;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 15px;\n  line-height: 32px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n}\nbutton:hover {\n  transform: scale(1.05);\n  color: #D48AE6;\n  background: linear-gradient(72.83deg, white 0%, white 100%);\n  cursor: pointer;\n  box-shadow: #D48AE6 0px 0px 15px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}