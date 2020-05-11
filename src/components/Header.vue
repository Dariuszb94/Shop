<template>
  <div class="headerContainer">
    <section >
      <div class="searchBar">
      <input  placeholder="Search" class="search"><v-icon class="icon">mdi-magnify</v-icon>
      </div>
    </section>
    <section><a href="#"><h1>SuperShop</h1></a></section>
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
  justify-content: space-around;
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
}
h1{
  font-family: 'Dancing Script', cursive;
  font-size:40px;
}
.searchBar{
  border-bottom:1px solid white;
}
.icon{
   color:white !important;
}
a{
  text-decoration: none;
  color:white;
}
</style>
