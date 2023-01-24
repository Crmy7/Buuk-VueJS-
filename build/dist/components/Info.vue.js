import './Info.vue.css.proxy.js';
const defaultExport = {
  name: "Info",
  props: {
    title: String,
    nb: Number,
    text: String
  }
};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = {
  class: "info",
  "data-aos": "fade-up",
  "data-aos-offset": "200",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("span", null, _toDisplayString(_ctx.nb), 1),
    _createElementVNode("h4", null, _toDisplayString(_ctx.title), 1),
    _createElementVNode("p", null, _toDisplayString(_ctx.text), 1)
  ]))
};

defaultExport.render = render;

export default defaultExport;