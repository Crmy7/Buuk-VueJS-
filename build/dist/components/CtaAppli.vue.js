import './CtaAppli.vue.css.proxy.js';
const defaultExport = {
  name: "CtaAppli",
  props: {
    title: String,
    text: String
  }
};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"
import _imports_0 from '../../img/appstore.png.proxy.js'
import _imports_1 from '../../img/googleplaystore.png.proxy.js'


const _hoisted_1 = { class: "cta" }
const _hoisted_2 = {
  "data-aos": "fade-up",
  "data-aos-offset": "200",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}
const _hoisted_3 = {
  "data-aos": "fade-up",
  "data-aos-offset": "200",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}
const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", { class: "bg-space" }, null, -1)
const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", { class: "store" }, [
  /*#__PURE__*/_createElementVNode("img", {
    src: _imports_0,
    alt: "",
    "data-aos": "fade-right",
    "data-aos-offset": "200",
    "data-aos-delay": "50",
    "data-aos-duration": "1000"
  }),
  /*#__PURE__*/_createElementVNode("img", {
    src: _imports_1,
    alt: "",
    class: "googleplay",
    "data-aos": "fade-left",
    "data-aos-offset": "200",
    "data-aos-delay": "50",
    "data-aos-duration": "1000"
  })
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h3", _hoisted_2, _toDisplayString(_ctx.title), 1),
    _createElementVNode("p", _hoisted_3, _toDisplayString(_ctx.text), 1),
    _hoisted_4,
    _hoisted_5
  ]))
};

defaultExport.render = render;

export default defaultExport;