import './index.vue.css.proxy.js';

import Welcome from '../components/Welcome.vue.js'
import Nav from '../components/Nav.vue.js'
import MainButton from '../components/MainButton.vue.js'
import Bandeau from '../components/Bandeau.vue.js'
import PurpleText from '../components/PurpleText.vue.js'
import BlocArtistes from '../components/BlocArtistes.vue.js'
import BgSpace from '../components/BgSpace.vue.js'
import H2Title from '../components/H2Title.vue.js'
import Info from '../components/Info.vue.js'
import CtaAppli from '../components/CtaAppli.vue.js'
import Footer from '../components/Footer.vue.js'



const defaultExport = {
  name: 'Home',
  data() {
    return {
      infos:[
      { title:"Choisis ton artiste", text:"Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés"},
      {title:"Réserve ton billet", text:"buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !"} ,
      {title:"Kiffe ton concert", text:"Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés"}
    ]
    }
    
  },
  components: {
    Welcome,
    Nav,
    MainButton,
    Bandeau,
    PurpleText,
    BlocArtistes,
    BgSpace,
    H2Title,
    Info,
    CtaAppli,
    Footer
  },
}


import { resolveComponent as _resolveComponent, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "purple" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Bandeau = _resolveComponent("Bandeau")
  const _component_BlocArtistes = _resolveComponent("BlocArtistes")
  const _component_BgSpace = _resolveComponent("BgSpace")
  const _component_H2Title = _resolveComponent("H2Title")
  const _component_Info = _resolveComponent("Info")
  const _component_CtaAppli = _resolveComponent("CtaAppli")
  const _component_Footer = _resolveComponent("Footer")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_Nav),
      _createVNode(_component_Bandeau, { title: "Les meilleurs concerts," }),
      _createVNode(_component_BlocArtistes),
      _createVNode(_component_BgSpace),
      _createVNode(_component_H2Title, { title: "buuk, le rêves des fans de concerts" }),
      _createVNode(_component_BgSpace),
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.infos, (toto, index) => {
        return (_openBlock(), _createElementBlock("li", {
          key: toto,
          class: "liInfo"
        }, [
          _createVNode(_component_Info, {
            title: toto.title,
            text: toto.text,
            nb: index+1
          }, null, 8, ["title", "text", "nb"])
        ]))
      }), 128)),
      _createVNode(_component_BgSpace),
      _createVNode(_component_BgSpace)
    ]),
    _createVNode(_component_CtaAppli, {
      title: "buuk, aussi sur ton téléphone !",
      text: "Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme"
    }),
    _createVNode(_component_Footer)
  ]))
};

defaultExport.render = render;

export default defaultExport;