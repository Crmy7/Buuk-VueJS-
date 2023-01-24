// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".home {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\nli {\n  list-style-type: none;\n}\n.purple {\n  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);\n  border-radius: 0px 0px 150px 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.liInfo {\n  cursor: default;\n  transition: all 0.5s ease-in-out;\n}\n.liInfo:hover {\n  cursor: default;\n  transform: scale(1.075);\n}\n.liInfo:hover span {\n  color: #D48AE6;\n  background: linear-gradient(72.83deg, white 0%, white 100%);\n  box-shadow: #D48AE6 0px 0px 15px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}