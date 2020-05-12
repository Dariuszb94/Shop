<template>
  <div>
    <div class="sliderContainer">
      <section class="arrow"><div class="goLeft change" v-on:click="changeBackground1()">&#706;</div></section>
      <section>
        <div class="sliderMain" :style="image">
          <header>-20%</header>
          <main>
            <span>Special Offers</span>
            <v-btn outlined v-on:click="changeBackground()" class="moreButton">See more</v-btn>
          </main>
          <footer>New Designs</footer>
        </div>
      </section>
      <section class="arrow">
        <span class="goRight change" v-on:click="changeBackground2()">&#707;</span>
      </section>
    </div>
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
    this.image.backgroundImage="url(https://i.ibb.co/g7fFJ3q/assorted-cloth-lot-1336873.jpg)";
else{
  this.image.backgroundImage="url(https://i.ibb.co/L1BpCt2/shallow-focus-photography-of-clothes-994517.jpg)";
}
   this.backgroundMain=!this.backgroundMain;
},
changeBackground2() {

    //this.image.backgroundImage="url(https://i.ibb.co/tDVJt5t/main-bg1.jpg)";
if (this.backgroundMain==false)
this.image.backgroundImage="url(https://i.ibb.co/L1BpCt2/shallow-focus-photography-of-clothes-994517.jpg)";
else{
  this.image.backgroundImage="url(https://i.ibb.co/g7fFJ3q/assorted-cloth-lot-1336873.jpg)";
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  background-image:url(https://i.ibb.co/BKNFPSJ/group-of-photographers-inside-the-building-3777916.jpg);
  padding-top:5%;
  padding-bottom:5%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
  -moz-transition: background-image 1s ease-in-out;
  -o-transition: background-image 1s ease-in-out; 
  transition: background-image 1s ease-in-out;
}
.sliderMain:before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
}
.sliderContainer{
    background-color: #222222;
    display: grid;
    grid-template-columns: 15% 70% 15%;
}

header{
    font-size:112px;
    font-weight: 900;
     color: #FFF;
    position: relative;
}
main{
    font-size:40px;
    display: flex;
    flex-direction: column;
    padding-bottom:8%;
    padding-top:8%;
    font-weight: 900;
         color: #FFF;
    position: relative;
}
.moreButton{
       color: #FFF;
    position: relative;
    margin-top: 8% ;
}
footer{
    font-size:24px;
    font-weight: 900;
           color: #FFF;
    position: relative;
}
.change{
    width:50px;
    font-size: 80px;
    color:#77212e;
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
