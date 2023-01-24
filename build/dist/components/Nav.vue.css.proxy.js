// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\na, a:visited, a:hover{\n  color: white;\n  text-decoration: none;\n  padding: 20px 50px;\n}\n\n\n\n/* a {\n  margin: 0 15px;\n} */\n.nav {\n  font-size: 20px;\n}\n.nav{\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none !important;\n  height: 75px;\n  font-weight: 300 !important;\n}\n.Buuk, .Buuk:hover{\n  font-family: 'Sora';\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  color: #FFFFFF;\n  border-right: 1px solid #595959;\n  border-bottom: 1px solid #595959;\n  padding: 15px 50px;\n}\na.router-link-active.router-link-exact-active{\n  color: #D48AE6;\n  border-bottom: 1px solid #D48AE6;\n  padding: 20px 50px;\n}\na{\n  transition: all .3s ease-in-out;\n}\n#root{\n  margin: 0px;\n}\n.tel{\n  position: absolute;\n  right: 0;\n  opacity: 0.5;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}