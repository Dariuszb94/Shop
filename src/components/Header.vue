<template>
  <div class="headerContainer">
    <section class="title">
      <a href="#" v-on:click="goToMain()">
        <h1>Fashion Shop</h1>
      </a>
    </section>
    <section class="basketPart"> 
      <v-btn class="basket">
        <div class="basketSection">
          <v-btn v-on:click="goToBasket()">
            <v-icon>mdi-basket</v-icon>
          </v-btn>
        </div>
      </v-btn>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods:{
    goToMain() {
      this.$store.commit("changeView", "home");
    },
    goToBasket() {
      this.$store.commit("changeView", "basket");
    },
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.headerContainer{
  background-color: #22252a;
  color:white !important;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-areas: "a b c";
  justify-items: center;
  padding: 16px;
  align-items: center;
}
.basket{
  color:white !important;
  background-color: #22252a !important;
}
.basketSection{
  display: flex;
  flex-direction: column;
}
.search{
  outline-width: 0;
  color:white;
}
h1{
  font-family: 'Playfair Display', serif;
  font-size:48px;
  position: relative;
  left: 24px;
}
.searchBar{
  border-bottom:1px solid white;
  width:100%;
}
.icon{
   color:white !important;
}
a{
  text-decoration: none;
  color:white;
}
.title{
  grid-area: b;
}
.basketPart{
  grid-area: c;
}
button{
  background-color: #22252a !important;
}
.v-icon{
  color:white !important;
}

@media all and (max-width: 1000px){
  .headerContainer{
    background-color: #22252a;
    color:white !important;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-areas: "a b c";
    justify-items: center;
    padding: 16px;
    align-items: center;
  }
}

@media all and (max-width: 850px){
  h1{
    font-size:40px;
    left:0px;
  }
  button{
    padding-right:4px !important;
    padding-left:4px !important;
  }
}

@media all and (max-width: 680px){
  h1{
    font-size:34px;
  }
  .headerContainer{
    padding-left: 4px;
    padding-right: 4px;
  }
  .title{
    padding-right:8%;
    padding-left:8%;
  }
}

@media all and (max-width: 580px){
  h1{
    font-size:30px;
  }
  .headerContainer{
    padding-left: 2px;
    padding-right: 2px;
  }
  .title{
    padding-right:4%;
  }
}

@media all and (max-width: 480px){
  h1{
    font-size:26px;
  }
  .headerContainer{
    padding-left: 2px;
    padding-right: 2px;
  } 
  .title{
    padding-right:5%;
    padding-left:5%;
  }
}
</style>
