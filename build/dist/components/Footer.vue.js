import './Footer.vue.css.proxy.js';
const defaultExport = {
  name: "Footer"
};
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", { class: "leftFooter" }, [
  /*#__PURE__*/_createElementVNode("a", { href: "" }, "buuk")
], -1)
const _hoisted_2 = { class: "rightFooter" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("a", { href: "" }, "Conditions de ventes", -1)
const _hoisted_4 = /*#__PURE__*/_createElementVNode("a", { href: "" }, "Mentions légales", -1)

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("footer", null, [
    _hoisted_1,
    _createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      _hoisted_4,
      _createVNode(_component_router_link, {
        to: `/contact`,
        class: "phone"
      }, {
        default: _withCtx(() => [
          _createTextVNode("Un problème ? +33 4 50 44 56 03")
        ]),
        _: 1
      })
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;