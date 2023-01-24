<template>
    <div class="Artistes">
        <!-- <li v-for="toto in artists" @click="selectArtist(toto.id)" :class="{active: selectedArtist == toto.id}">
        {{ toto.id}}
        </li> -->
        <li v-for="concert in concerts.slice(0, 5)" @click="updateConcert(concert)" :class="{active: selectedConcerts == concert.id}">
        {{ concert.artist.name}}

        </li>
    </div>
    <div class="imageArtist" v-bind:style="{ backgroundImage: 'url(https://buuk-api.herokuapp.com' + url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }">
        <h2 data-aos="fade-right" data-aos-offset="75" data-aos-delay="50" data-aos-duration="1000">{{dateconcerts }}</h2>
        <h3 data-aos="fade-right" data-aos-offset="75" data-aos-delay="50" data-aos-duration="1000">{{lieuconcerts }}</h3>
        <router-link :to="`/concerts/${selectedConcerts}`" class="button"><MainButton buttonText="Réserver"></MainButton></router-link>
    </div>
<!-- v-for="toto in artists" @click="lieuConcert(toto.lieu)" :class="{active: lieuconcerts == toto.lieu}" -->
<!-- v-for="toto in artists" @click="dateConcert(toto.date)" :class="{active: dateconcerts == toto.date}" -->
<!-- v-for="toto in artists" @click="selectArtistName(toto.artist)" :class="{active: nameArtist == toto.artist}" -->
<!-- v-for="toto in artists" @click="selectArtist(toto.id)" :class="{active: selectedArtist == toto.id}" -->
</template>
  
  <script>
  import axios from 'axios'
  import MainButton from '../components/MainButton.vue'

  export default {
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

  
  </script>

<style lang="scss">
.Artistes{
    width: 82.75%;
    // height: 400px;
    display: flex;
    justify-content: center;
    border-radius: 0px 0px 150px 150px;

    li{
        list-style: none;
        width: 20%;
        border-radius: 30px 30px 0px 0px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
    }
}

li:hover{
    cursor: pointer;
    color: #D99CF0;
}

li.active{
    background: linear-gradient(75.5deg, #DA8BE3 0%, #9681FD 95.43%);
}

li.active{
   color: white;
}

.imageArtist{
    width: 80%;
    height: 500px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;
    color: white;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    border-radius: 0px 0px 30px 30px;
    background-image: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
    position: relative;
    

    .button{
        position: absolute;
        right: 20px;
        bottom: 30px !important;
        padding: 0;
    }
    button{
       margin: 0;
    }

    h3{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 250;
        font-size: 25px;
        text-transform: uppercase;
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






</style>