// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".info {\n  width: 350px;\n  height: 250px;\n  margin: 0px 20px 0px 20px;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 37px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  flex-wrap: wrap;\n  align-content: center;\n  cursor: default;\n}\n.info span {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -25px;\n  left: 20px;\n  background: linear-gradient(135deg, #D79CF1 0%, #967DF9 100%);\n  border-radius: 14px;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 35px;\n  line-height: 44px;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n.info h4 {\n  width: 80%;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 25px;\n  line-height: 38px;\n  background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.info p {\n  width: 80%;\n  font-family: \"Sora\";\n  font-style: normal;\n  font-weight: 250;\n  font-size: 15px;\n  line-height: 23px;\n  color: #FFFFFF;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}