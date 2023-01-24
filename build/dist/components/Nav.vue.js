import './Nav.vue.css.proxy.js';
const defaultExport = {
  name: "Nav"
};
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "nav" }

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("nav", _hoisted_1, [
    _createVNode(_component_router_link, {
      to: "/ed",
      class: "Buuk"
    }, {
      default: _withCtx(() => [
        _createTextVNode("buuk")
      ]),
      _: 1
    }),
    _createVNode(_component_router_link, { to: "/" }, {
      default: _withCtx(() => [
        _createTextVNode("Accueil")
      ]),
      _: 1
    }),
    _createVNode(_component_router_link, { to: "/concerts" }, {
      default: _withCtx(() => [
        _createTextVNode("Tous les concerts")
      ]),
      _: 1
    }),
    _createVNode(_component_router_link, { to: "/mesreservations" }, {
      default: _withCtx(() => [
        _createTextVNode("Mes réservations")
      ]),
      _: 1
    }),
    _createVNode(_component_router_link, {
      to: "tel:0600000000",
      class: "tel"
    }, {
      default: _withCtx(() => [
        _createTextVNode("+33 4 50 67 33 22")
      ]),
      _: 1
    })
  ]))
};

defaultExport.render = render;

export default defaultExport;