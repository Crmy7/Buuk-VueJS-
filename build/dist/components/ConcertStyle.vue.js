import './ConcertStyle.vue.css.proxy.js';

  import axios from '../../_snowpack/pkg/axios.js'
  import MainButton from './MainButton.vue.js'

  const defaultExport = {
    name: 'ConcertStyle',
    components:{
        MainButton
    },
    mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA2ODAyLCJleHAiOjE2NzEwOTg4MDJ9.W4Nlz9o5yr7CQGf6rnO8zSeOUE7b9u3YUMQ5xjPRCHk'
    axios
      .get('https://buuk-api.herokuapp.com/music-styles', 
        { 
          headers: {"Authorization" : `Bearer ${bearerToken}`}
        }
        )
      .then(response => {
      //  this.restaurants = response
        console.log(response.data) 
        this.styles = response.data
        this.updateStyles(response.data[0])
      })

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
            styles:[
                
            ],
            musicstyle:1,    

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
        updateStyles(style){
            this.Musicstyles(style.name)
        },
        Musicstyles(styleName){
            this.musicstyle = styleName,
            console.log(this.musicstyle)
        },

        

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

  
  
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, normalizeStyle as _normalizeStyle } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "stylesContainer" }
const _hoisted_2 = ["onClick"]
const _hoisted_3 = {
  "data-aos": "fade",
  "data-aos-offset": "200",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}
const _hoisted_4 = ["onClick"]
const _hoisted_5 = { class: "date" }
const _hoisted_6 = { class: "name" }
const _hoisted_7 = { class: "place" }

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.styles, (style) => {
      return (_openBlock(), _createElementBlock("div", {
        onClick: $event => (_ctx.updateStyles(style)),
        class: "style",
        "data-aos": "fade",
        "data-aos-offset": "200",
        "data-aos-delay": "50",
        "data-aos-duration": "1000"
      }, [
        _createElementVNode("h2", _hoisted_3, _toDisplayString(style.name), 1),
        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.concerts.filter(item => item.music_style.id === style.id).slice(0, 5), (concert) => {
          return (_openBlock(), _createElementBlock("div", {
            class: "artists",
            onClick: $event => (_ctx.updateConcert(concert)),
            style: _normalizeStyle({ backgroundImage: 'url(https://buuk-api.herokuapp.com' + concert.artist.photo.url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }),
            "data-aos": "fade",
            "data-aos-offset": "200",
            "data-aos-delay": "50",
            "data-aos-duration": "1000"
          }, [
            _createVNode(_component_router_link, {
              to: `/concerts/${concert.id}`
            }, {
              default: _withCtx(() => [
                _createElementVNode("p", _hoisted_5, _toDisplayString(concert.date.substring(0, 10)), 1),
                _createElementVNode("p", _hoisted_6, _toDisplayString(concert.artist.name), 1),
                _createElementVNode("p", _hoisted_7, _toDisplayString(concert.place) + ", " + _toDisplayString(concert.city), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ], 12, _hoisted_4))
        }), 256))
      ], 8, _hoisted_2))
    }), 256))
  ]))
};

defaultExport.render = render;

export default defaultExport;