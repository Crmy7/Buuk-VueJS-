import './about.vue.css.proxy.js';

import Welcome from '../components/Welcome.vue.js'
import Nav from '../components/Nav.vue.js'
import MainButton from '../components/MainButton.vue.js'
import Bandeau from '../components/Bandeau.vue.js'
import PurpleText from '../components/PurpleText.vue.js'

const defaultExport = {
  name: 'About',
  components: {
    Welcome,
    Nav,
    MainButton,
    Bandeau,
    PurpleText
  },
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "purple" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Bandeau = _resolveComponent("Bandeau")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_Nav),
      _createVNode(_component_Bandeau, { title: "Page A propos TEST" })
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;