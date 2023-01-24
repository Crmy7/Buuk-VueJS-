// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".buttonFilter {\n  line-height: 1.5;\n  border: none;\n  background: #FFFFFF;\n  box-shadow: rgba(0, 0, 0, 0.178) 0px 0px 20px;\n  border-radius: 20px;\n  width: auto;\n  height: 70px;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 38px;\n  color: #1D1C24;\n  opacity: 0.7;\n  margin: 0;\n  margin-left: 17.5px;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 400;\n  color: #1D1C24;\n  text-transform: none;\n}\n.buttonFilter span {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.buttonFilter:hover {\n  cursor: pointer;\n  box-shadow: #D48AE6 0px 0px 20px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}