import './BlocArtistes.vue.css.proxy.js';

  import axios from '../../_snowpack/pkg/axios.js'
  import MainButton from './MainButton.vue.js'

  const defaultExport = {
    name: 'BlocArtistes',
    components:{
        MainButton
    },
    mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA2ODAyLCJleHAiOjE2NzEwOTg4MDJ9.W4Nlz9o5yr7CQGf6rnO8zSeOUE7b9u3YUMQ5xjPRCHk'
    axios
      .get('https://buuk-api.herokuapp.com/concerts', 
        { 
          headers: {"Authorization" : `Bearer ${bearerToken}`}
        }
        )
      .then(response => {
      //  this.restaurants = response
        console.log(response.data) 
        this.concerts = response.data
        this.updateConcert(response.data[0])
      })
  },
    data() {
        return {
            concerts:[
                
            ],
            selectedConcerts:1, 
            nameArtist: "",
            dateconcerts: "",
            lieuconcerts: '', 
            url: ''    
        }
    },
    methods:{
        updateConcert(concert){
            this.dateConcert(new Date(concert.date).toLocaleDateString('fr', options)),
            this.lieuConcert(concert.city),
            this.urlbackground(concert.artist.photo.url),
            this.selectArtist(concert.id)
        },
        selectArtist(artistId){
            this.selectedConcerts = artistId,
            console.log(this.selectedConcerts)
        },

        selectArtistName(artistname){
            this.nameArtist = artistname,
            console.log(this.nameArtist)
        },

        dateConcert(date){
            this.dateconcerts = date,
            console.log(this.dateconcerts)
            
        },

        lieuConcert(lieu){
            this.lieuconcerts = lieu,
            console.log(this.lieuconcerts)
            
        },

        urlbackground(url){
            this.url = url,
            console.log(this.url)
        }
        
    },
  }
  const options = {year: 'numeric', month: 'long', day: 'numeric' };

  
  
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, withCtx as _withCtx, normalizeStyle as _normalizeStyle } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "Artistes" }
const _hoisted_2 = ["onClick"]
const _hoisted_3 = {
  "data-aos": "fade-right",
  "data-aos-offset": "75",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}
const _hoisted_4 = {
  "data-aos": "fade-right",
  "data-aos-offset": "75",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  const _component_MainButton = _resolveComponent("MainButton")
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.concerts.slice(0, 5), (concert) => {
        return (_openBlock(), _createElementBlock("li", {
          onClick: $event => (_ctx.updateConcert(concert)),
          class: _normalizeClass({active: _ctx.selectedConcerts == concert.id})
        }, _toDisplayString(concert.artist.name), 11, _hoisted_2))
      }), 256))
    ]),
    _createElementVNode("div", {
      class: "imageArtist",
      style: _normalizeStyle({ backgroundImage: 'url(https://buuk-api.herokuapp.com' + _ctx.url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' })
    }, [
      _createElementVNode("h2", _hoisted_3, _toDisplayString(_ctx.dateconcerts), 1),
      _createElementVNode("h3", _hoisted_4, _toDisplayString(_ctx.lieuconcerts), 1),
      _createVNode(_component_router_link, {
        to: `/concerts/${_ctx.selectedConcerts}`,
        class: "button"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_MainButton, { buttonText: "Réserver" })
        ]),
        _: 1
      }, 8, ["to"])
    ], 4)
  ], 64))
};

defaultExport.render = render;

export default defaultExport;