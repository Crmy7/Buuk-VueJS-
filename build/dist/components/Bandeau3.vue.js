import './Bandeau3.vue.css.proxy.js';
const defaultExport = {
  name: "Bandeau3",
  props: {
    title: String,
    PurpleText: String
  }
};
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "bandeau3" }
const _hoisted_2 = { class: "bloc" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", { class: "img" }, null, -1)
const _hoisted_4 = {
  "data-aos": "fade-in",
  "data-aos-offset": "200",
  "data-aos-delay": "150",
  "data-aos-duration": "1000"
}
const _hoisted_5 = {
  PurpleText: "pour les concerts",
  "data-aos": "fade-in",
  "data-aos-offset": "200",
  "data-aos-delay": "700",
  "data-aos-duration": "1000",
  "data-aos-easing": "linear"
}

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      _createElementVNode("h1", _hoisted_4, _toDisplayString(_ctx.title), 1),
      _createElementVNode("h2", _hoisted_5, _toDisplayString(_ctx.PurpleText), 1)
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;