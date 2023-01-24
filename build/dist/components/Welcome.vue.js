const defaultExport = {
  name: "Welcome",
  props: {
    message: String
  }
};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "welcome" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h1", null, _toDisplayString(_ctx.message), 1)
  ]))
};

defaultExport.render = render;

export default defaultExport;