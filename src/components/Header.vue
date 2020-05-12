<template>
  <div class="headerContainer">
    <section class="searchSection">
      <div class="searchBar">
      <input  placeholder="Search" class="search">
      <v-icon class="icon">mdi-magnify</v-icon>
      </div>
    </section>
    <section class="title">
      <a href="#" v-on:click="goToMain()">
        <h1>Fashion Shop</h1>
      </a>
    </section>
    <section > 
      <v-btn class="basket">
        <div class="basketSection"> 
          <v-icon>mdi-basket</v-icon>
          <span>Basket</span>
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
  },
    mounted(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.headerContainer{
 background-color: #22252a;
  color:white !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
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
  font-size:40px;
  position: relative;
  left:-40px;
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
  padding-right:20%;
  padding-left:20%;
}
</style>
