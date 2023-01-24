<template>

<Nav />
  <div class="coucou">
    <div class="blocArtist" v-bind:style="{ backgroundImage: 'url(https://buuk-api.herokuapp.com' + url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }">
    <div class="infoArtist">
      <h3 v-bind:class="{ singlePlace }" class="singlePlace" data-aos="fade-left" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000">{{lieuconcerts }}, {{place}} </h3>

    <h2 data-aos="fade-right" data-aos-offset="75" data-aos-delay="50" data-aos-duration="1000">{{nameArtist }}</h2>

    <h3 data-aos="fade-right" data-aos-offset="75" data-aos-delay="50" data-aos-duration="1000">Le {{dateconcerts}}, de {{duration}}</h3>
    
    <div class="right">
      <h2 data-aos="fade-left" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000">{{price}}€</h2>
      <MainButton buttonText="Réserver" data-aos="fade-left" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000"></MainButton>
    </div>
    </div>



    </div>
  </div>

  <Footer/>
        <!-- <h1>{{$route.params.concert_id}}</h1> -->
        
</template>

<script>
  import axios from 'axios'
  import Nav from '../../components/Nav.vue'
  import Bandeau2 from '../../components/Bandeau2.vue'
  import MainButton from '../../components/MainButton.vue'
  import Footer from '../../components/Footer.vue'

  export default {
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
</script>

<style lang="scss">

.coucou{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
}

.purple{
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  border-radius: 0px 0px 150px 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
nav{
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
}
h1{
    font-size: 60px;
    color: white;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-family: "Sora";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
}

.blocArtist{
    width: 100% !important;
    height: 65vh;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    color: white;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 0px 0px 30px 30px;
    background-image: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
    position: relative;
    

    .right{
        position: absolute;
        right: 20px;
        bottom: 0;
    }
    .right button{
       margin: 0;
    }

    h3{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 250;
        font-size: 25px;
    }
    h2{
    color: white !important;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    text-transform: uppercase;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
}
}
.singlePlace{
  background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  text-align: center !important;
  font-family: 'Sora' !important;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 30px !important;
  line-height: 63px !important;
  font-weight: 900 !important;
  position: absolute !important;
  top: 20px;
  right: 20px;
}

.infoArtist{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-start;
    position: relative;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
}
</style>