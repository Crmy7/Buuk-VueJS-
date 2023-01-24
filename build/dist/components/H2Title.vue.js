import './H2Title.vue.css.proxy.js';
const defaultExport = {
  name: "H2Title",
  props: {
    title: String
  }
};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = {
  class: "subtitle",
  "data-aos": "fade-in",
  "data-aos-offset": "200",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h2", null, _toDisplayString(_ctx.title), 1)
  ]))
};

defaultExport.render = render;

export default defaultExport;