<template>
<div class="sliderContainer">
    <section class="arrow"><div  class="goLeft change" v-on:click="changeBackground1()">&#706;</div></section>
    <section>
        <div class="sliderMain" :style="image">
            <header>-20%</header>
            <main>
                <span>Special Offers</span>
                <v-btn outlined v-on:click="changeBackground()">See more</v-btn>
            </main>
            <footer>New Designs</footer>
        </div>
  </section>
  <section class="arrow"><span  class="goRight change" v-on:click="changeBackground2()">&#707;</span></section>
</div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
       image: { backgroundImage: "" 
       },
       backgroundMain:true
    }
  },
  methods:{
changeBackground1() {

    //this.image.backgroundImage="url(https://i.ibb.co/tDVJt5t/main-bg1.jpg)";
if (this.backgroundMain==true)
    this.image.backgroundImage="url(https://i.ibb.co/P42d1CJ/main-bg2.jpg)";
else{
  this.image.backgroundImage="url(https://i.ibb.co/tDVJt5t/main-bg1.jpg)";
}


   this.backgroundMain=!this.backgroundMain;

},
changeBackground2() {

    //this.image.backgroundImage="url(https://i.ibb.co/tDVJt5t/main-bg1.jpg)";
if (this.backgroundMain==false)
this.image.backgroundImage="url(https://i.ibb.co/tDVJt5t/main-bg1.jpg)";
else{
  this.image.backgroundImage="url(https://i.ibb.co/P42d1CJ/main-bg2.jpg)";
}



   this.backgroundMain=!this.backgroundMain;

}
  },
    created(){

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.sliderMain{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  background-image:url(https://i.ibb.co/tDVJt5t/main-bg1.jpg);
  padding-top:5%;
  padding-bottom:5%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.sliderContainer{
    background-color: #222222;
    display: grid;
    grid-template-columns: 15% 70% 15%;
}
header{
    font-size:80px;
}
main{
    font-size:40px;
    display: flex;
    flex-direction: column;
    padding-bottom:10%;
    padding-top:10%;
}
footer{
    font-size:24px;
}
.change{
    width:50px;
    font-size: 80px;
    color:#919191;
}
.arrow{


    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    
}
.change:hover{
color:white;
cursor: pointer;
}
.arrowImage{
  width: 40px;
  height:40px
}

</style>
