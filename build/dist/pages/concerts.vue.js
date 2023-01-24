import './concerts.vue.css.proxy.js';

  import Nav from '../components/Nav.vue.js'
  import MainButton from '../components/MainButton.vue.js'
  import Bandeau from '../components/Bandeau.vue.js'
  import PurpleText from '../components/PurpleText.vue.js'
  import BgSpace from '../components/BgSpace.vue.js'
  import Footer from '../components/Footer.vue.js'
  import SearchInput from '../components/SearchInput.vue.js'
  import FilterButton from '../components/FilterButton.vue.js'
  import ConcertStyle from '../components/ConcertStyle.vue.js'
  import Bandeau2 from '../components/Bandeau2.vue.js'
  
  
  
  const defaultExport = {
    name: 'Concerts',
    components: {
      Nav,
      MainButton,
      Bandeau,
      PurpleText,
      BgSpace,
      Footer,
      SearchInput,
      FilterButton,
      ConcertStyle,
      Bandeau2
    },
  }
  
  
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "purple" }
const _hoisted_3 = { class: "inputfilter" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Bandeau2 = _resolveComponent("Bandeau2")
  const _component_BgSpace = _resolveComponent("BgSpace")
  const _component_SearchInput = _resolveComponent("SearchInput")
  const _component_FilterButton = _resolveComponent("FilterButton")
  const _component_ConcertStyle = _resolveComponent("ConcertStyle")
  const _component_Footer = _resolveComponent("Footer")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_Nav),
      _createVNode(_component_Bandeau2, { title: "Les meilleurs concerts," })
    ]),
    _createVNode(_component_BgSpace),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_SearchInput),
      _createVNode(_component_FilterButton)
    ]),
    _createVNode(_component_BgSpace),
    _createVNode(_component_ConcertStyle),
    _createVNode(_component_Footer)
  ]))
};

defaultExport.render = render;

export default defaultExport;