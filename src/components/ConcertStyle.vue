<template>
    <div class="stylesContainer">
        <div v-for="style in styles" @click="updateStyles(style)" class="style" data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
        <h2 data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">{{ style.name}}</h2>
        <div class="artists" v-for="concert in concerts.filter(item => item.music_style.id === style.id).slice(0, 5)" @click="updateConcert(concert)" v-bind:style="{ backgroundImage: 'url(https://buuk-api.herokuapp.com' + concert.artist.photo.url + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }" data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
            <router-link :to="`/concerts/${concert.id}`"><p class="date">{{concert.date.substring(0, 10)}}</p>
                <p class="name">{{concert.artist.name}}</p>
                <p class="place">{{concert.place}}, {{concert.city}}</p></router-link>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios'
  import MainButton from '../components/MainButton.vue'

  export default {
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

  
  </script>

<style lang="scss">

.stylesContainer{
    width: 95%;
}
.style{
    height: 450px;
    background: #F3EEFF;
    border-radius: 47px;
    margin-bottom: 50px;
    padding: 64px;
    display: flex;
    flex-wrap: wrap;

    h2{
        background: linear-gradient(89.6deg, #211C39 -2.19%, #927BF9 102.14%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-align: left;
        width: 100%;
    }
}

.artists{
    width: 200px;
    height: 250px;
    background-color: #927BF9;
    margin-right: 20px;
    border-radius: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-items: center;
    align-items: flex-start;
    padding-bottom: 20px;
    padding-left: 20px;
    color: white;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    transition: all .3s ease-in-out;
    a{
        padding: 0;

    }
    p{
        transition: all .3s ease-in-out;
    }
    p:hover{
            color: #D48AE6;
        }
}

.date{
    position: absolute;
    top: 15px;
    right: 17.5px;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #FFFFFF;
}

.name{
    font-family: 'Sora';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 38px;
    color: #FFFFFF;
}

.place{
    font-family: 'Sora';
    font-style: normal;
    font-weight: 300;
    font-size: 12.5px;
    line-height: normal !important;
    color: #FFFFFF;
    line-height: 50px;
}

</style>