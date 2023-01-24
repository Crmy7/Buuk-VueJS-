import './contact.vue.css.proxy.js';


import Bandeau3 from '../components/Bandeau3.vue.js'
import Nav from '../components/Nav.vue.js'
import PurpleText from '../components/PurpleText.vue.js'
import BgSpace from '../components/BgSpace.vue.js'
import Footer from '../components/Footer.vue.js'



  const defaultExport = {
    name: 'contact',
    components:{
        Nav,
        Bandeau3,
        PurpleText,
        BgSpace,
        Footer
    }
  }

  
  
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, createStaticVNode as _createStaticVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "purple" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("h3", null, " Bienvenue sur la page de réclamation. L’équipe répondre à toutes vos demandes une fois que vous aurez rempli ce formulaire ", -1)
const _hoisted_4 = /*#__PURE__*/_createStaticVNode("<div class=\"form\"><input type=\"name\" placeholder=\"Nom\"><input type=\"name\" placeholder=\"Prénom\"><input type=\"mail\" placeholder=\"Adresse Mail\"><input type=\"phone\" placeholder=\"Télphone\"><textarea name=\"recla\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Votre réclamation\"></textarea><div class=\"send\"><input type=\"submit\" value=\"Envoyer\" class=\"button\"></div></div>", 1)

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Bandeau3 = _resolveComponent("Bandeau3")
  const _component_BgSpace = _resolveComponent("BgSpace")
  const _component_Footer = _resolveComponent("Footer")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _createVNode(_component_Nav),
        _createVNode(_component_Bandeau3, {
          title: "Faire une réclamation",
          PurpleText: "à l’équipe buuk"
        })
      ]),
      _createVNode(_component_BgSpace),
      _hoisted_3,
      _createVNode(_component_BgSpace),
      _hoisted_4,
      _createVNode(_component_BgSpace)
    ]),
    _createVNode(_component_Footer)
  ], 64))
};

defaultExport.render = render;

export default defaultExport;