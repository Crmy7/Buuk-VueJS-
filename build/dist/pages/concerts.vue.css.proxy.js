// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".home {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: white !important;\n}\nli {\n  list-style-type: none;\n}\n.purple {\n  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);\n  border-radius: 0px 0px 0px 150px !important;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.inputfilter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  width: 85%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}