// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".search {\n  line-height: 1.5;\n  border: none;\n  background: #FFFFFF;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>\");\n  background-repeat: no-repeat;\n  background-position-x: 20px;\n  background-position-y: center;\n  background-size: 20px 20px;\n  box-shadow: rgba(0, 0, 0, 0.178) 0px 0px 20px;\n  border-radius: 20px;\n  width: 250px;\n  height: 50px;\n  padding: 0.5em 1em 0.5em 2.5em;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 38px;\n  color: #1D1C24;\n  margin-right: 17.5px;\n  transition: all 0.3s ease-in-out;\n}\n.search::placeholder {\n  color: #1D1C24;\n  opacity: 0.7;\n}\n.search:focus {\n  outline: none;\n  box-shadow: #D48AE6 0px 0px 20px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}