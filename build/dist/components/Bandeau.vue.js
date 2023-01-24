import './Bandeau.vue.css.proxy.js';
import PurpleText from "./PurpleText.vue.js";
const defaultExport = {
  name: "Bandeau",
  props: {
    title: String
  },
  components: {
    PurpleText
  }
};
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "bandeau" }
const _hoisted_2 = { class: "bloc" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", { class: "img" }, null, -1)
const _hoisted_4 = {
  "data-aos": "fade-in",
  "data-aos-offset": "200",
  "data-aos-delay": "150",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  const _component_PurpleText = _resolveComponent("PurpleText")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      _createElementVNode("h1", _hoisted_4, _toDisplayString(_ctx.title), 1),
      _createVNode(_component_PurpleText, {
        PurpleText: "en avant première.",
        "data-aos": "fade-in",
        "data-aos-offset": "200",
        "data-aos-delay": "700",
        "data-aos-duration": "1000",
        "data-aos-easing": "linear"
      })
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;