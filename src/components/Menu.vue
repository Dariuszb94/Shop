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
       currentView: this.$store.getters.getView,
    }
  },
    methods:{
goToWomen() {
this.$store.commit("changeView", "product");
this.$store.commit("changeSubView", "women");
},
goToMen() {
this.$store.commit("changeView", "product");
this.$store.commit("changeSubView", "men");
},
goToExtras() {
this.$store.commit("changeView", "product");
this.$store.commit("changeSubView", "extras");
},
goToNew() {
this.$store.commit("changeView", "product");
this.$store.commit("changeSubView", "new");
},
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  font-size: 16px;

}
.menuButton{
  background-color:#373a3e !important;
  color:white !important;
  font-size:20px;
}

</style>
