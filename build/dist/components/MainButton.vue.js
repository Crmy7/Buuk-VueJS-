import './MainButton.vue.css.proxy.js';
const defaultExport = {
  name: "MainButton",
  props: {
    buttonText: String
  }
};
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = {
  "data-aos": "fade-left",
  "data-aos-offset": "125",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("button", _hoisted_1, _toDisplayString(_ctx.buttonText), 1))
};

defaultExport.render = render;

export default defaultExport;