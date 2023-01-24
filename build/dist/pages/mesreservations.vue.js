import './mesreservations.vue.css.proxy.js';


import Bandeau3 from '../components/Bandeau3.vue.js'
import Nav from '../components/Nav.vue.js'
import PurpleText from '../components/PurpleText.vue.js'
import BgSpace from '../components/BgSpace.vue.js'



  const defaultExport = {
    name: 'contact',
    components:{
        Nav,
        Bandeau3,
        PurpleText,
        BgSpace
    }
  }

  
  
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "purple" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", {
  class: "bandeaupres",
  "data-aos": "fade-in",
  "data-aos-offset": "100",
  "data-aos-delay": "700",
  "data-aos-duration": "1000"
}, [
  /*#__PURE__*/_createElementVNode("div", { class: "bande" }, [
    /*#__PURE__*/_createElementVNode("h4", { class: "h4" }, " Tu as 5 réservations de concerts ")
  ]),
  /*#__PURE__*/_createElementVNode("div", { class: "reserv" }, [
    /*#__PURE__*/_createElementVNode("h4", null, [
      /*#__PURE__*/_createElementVNode("span", null, " Angèle, "),
      /*#__PURE__*/_createTextVNode(" le 15 décembre 2021 à Paris ")
    ]),
    /*#__PURE__*/_createElementVNode("button", null, "Supprimer")
  ])
], -1)

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Bandeau3 = _resolveComponent("Bandeau3")
  const _component_BgSpace = _resolveComponent("BgSpace")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_Nav),
      _createVNode(_component_Bandeau3, {
        title: "Mes réservations,",
        PurpleText: "pour les concerts"
      })
    ]),
    _createVNode(_component_BgSpace),
    _hoisted_3,
    _createVNode(_component_BgSpace)
  ]))
};

defaultExport.render = render;

export default defaultExport;