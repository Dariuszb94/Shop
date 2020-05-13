<template>
  <div>
    <ul class="menuContainer">
      <li class="list-element"><v-btn class="menuButton" v-on:click="goToWomen()">WOMEN</v-btn></li>
      <li class="list-element"><v-btn class="menuButton" v-on:click="goToMen()">MEN</v-btn></li>
      <li class="list-element"><v-btn class="menuButton" v-on:click="goToExtras()">EXTRAS</v-btn></li>
      <li class="list-element"><v-btn class="menuButton" v-on:click="goToNew()">NEW</v-btn></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
/**
 * CurrentView is responsible for changing view between "home", "products", "cart".
 */
       currentView: this.$store.getters.getView,
    }
  },
  methods:{
/**
 * Redirect to women section
 */
    goToWomen() {
      this.$store.commit("changeView", "product");
      this.$store.commit("changeSubView", "women");
    },

/**
 * Redirect to men section
 */
    goToMen() {
      this.$store.commit("changeView", "product");
      this.$store.commit("changeSubView", "men");
    },

/**
 * Redirect to extras section
 */
    goToExtras() {
      this.$store.commit("changeView", "product");
      this.$store.commit("changeSubView", "extras");
    },

/**
 * Redirect to news section
 */
    goToNew() {
      this.$store.commit("changeView", "product");
      this.$store.commit("changeSubView", "new");
    },
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.menuContainer{
  display: flex;
  flex-direction: row;
  list-style-type:none;
  background-color: #373a3e;
  color:white;
  justify-content: center;
  padding-bottom:16px;
  padding-top:16px;
}
.list-element{
  padding:8px;
}
.menuButton{
  background-color:#373a3e !important;
  color:white !important;
  font-size:32px;
}

@media all and (max-width: 850px){
  .menuContainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    grid-gap:16px;
  }
  .list-element{
    padding:0px;
  }
}

@media all and (max-width: 680px){
  .menuButton{
    font-size:26px;
  }
}

@media all and (max-width: 580px){
  .menuButton{
    font-size:20px;
  }
}
</style>
