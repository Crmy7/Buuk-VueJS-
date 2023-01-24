import './concert.vue.css.proxy.js';

  import axios from '../../../_snowpack/pkg/axios.js'
  import Nav from '../../components/Nav.vue.js'
  import Bandeau2 from '../../components/Bandeau2.vue.js'
  import MainButton from '../../components/MainButton.vue.js'
  import Footer from '../../components/Footer.vue.js'

  const defaultExport = {
    name: 'Concert',
    components:{
        Nav,
        Bandeau2,
        MainButton,
        Footer
    },
    mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA2ODAyLCJleHAiOjE2NzEwOTg4MDJ9.W4Nlz9o5yr7CQGf6rnO8zSeOUE7b9u3YUMQ5xjPRCHk'
    axios
      .get(`https://buuk-api.herokuapp.com/concerts/${this.$route.params.concert_id}`, 
        { 
          headers: {"Authorization" : `Bearer ${bearerToken}`}
        }
        )
      .then(response => {
      //  this.restaurants = response
        console.log(response.data) 
        this.concerts = response.data
        this.updateConcert(response.data)
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
            url: '',
            duration: '',
            place:'',
            price:'',
        }
    },
    methods:{
        updateConcert(concert){
            this.dateConcert(new Date(concert.date).toLocaleDateString('fr', options)),
            this.lieuConcert(concert.city),
            this.urlbackground(concert.artist.photo.url),
            this.selectArtist(concert.id),
            this.selectArtistName(concert.artist.name),
            this.durationF(concert.duration),
            this.placeF(concert.place),
            this.priceF(concert.price)
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
        },

        durationF(duration){
            this.duration = duration,
            console.log(this.duration)
        },

        placeF(place){
            this.place = place,
            console.log(this.place)
        },
        priceF(price){
            this.price = price,
            console.log(this.price)
        }
        
        
    },
  }
  const options = {year: 'numeric', month: 'long', day: 'numeric' };

import { resolveComponent as _resolveComponent, createVNode as _createVNode, toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "coucou" }
const _hoisted_2 = { class: "infoArtist" }
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
const _hoisted_5 = { class: "right" }
const _hoisted_6 = {
  "data-aos": "fade-left",
  "data-aos-offset": "100",
  "data-aos-delay": "50",
  "data-aos-duration": "1000"
}

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_MainButton = _resolveComponent("MainButton")
  const _component_Footer = _resolveComponent("Footer")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_Nav),
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", {
        class: "blocArtist",
        style: _normalizeStyle({ backgroundImage: 'url(https://buuk-api.herokuapp.com' + _ctx.url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' })
      }, [
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("h3", {
            class: _normalizeClass([{ singlePlace: _ctx.singlePlace }, "singlePlace"]),
            "data-aos": "fade-left",
            "data-aos-offset": "100",
            "data-aos-delay": "50",
            "data-aos-duration": "1000"
          }, _toDisplayString(_ctx.lieuconcerts) + ", " + _toDisplayString(_ctx.place), 3),
          _createElementVNode("h2", _hoisted_3, _toDisplayString(_ctx.nameArtist), 1),
          _createElementVNode("h3", _hoisted_4, "Le " + _toDisplayString(_ctx.dateconcerts) + ", de " + _toDisplayString(_ctx.duration), 1),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("h2", _hoisted_6, _toDisplayString(_ctx.price) + "€", 1),
            _createVNode(_component_MainButton, {
              buttonText: "Réserver",
              "data-aos": "fade-left",
              "data-aos-offset": "100",
              "data-aos-delay": "50",
              "data-aos-duration": "1000"
            })
          ])
        ])
      ], 4)
    ]),
    _createVNode(_component_Footer)
  ], 64))
};

defaultExport.render = render;

export default defaultExport;