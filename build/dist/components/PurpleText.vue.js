import './PurpleText.vue.css.proxy.js';
const defaultExport = {
  name: "PurpleText",
  props: {
    PurpleText: String
  }
};
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "PurpleText" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("h2", _hoisted_1, _toDisplayString(_ctx.PurpleText), 1))
};

defaultExport.render = render;

export default defaultExport;